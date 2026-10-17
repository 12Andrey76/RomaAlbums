// albums/reader.js – для Семейного альбома
// Поддерживает: window.albumsData.photo.photoN.blocks и window.albumsData.video.videoN.blocks
// URL: reader.html?type=photo&album=photo1#block-1-slide-1

let currentAlbum = null;
let currentBlockIndex = 0;
let currentSlideIndex = 0;
let blocksCarousel = null;
let slidesCarousel = null;

const blocksCarouselDiv = document.getElementById('blocks-carousel');
const slidesCarouselDiv = document.getElementById('slides-carousel');

// ----- ПОДСВЕТКА САЙДБАРА -----
function setActiveMenuItem(type, mode) {
  const albumId = (type === 'photo') ? 'active-photo-album' : 'active-video-album';
  const slideId = (type === 'photo') ? 'active-photo'       : 'active-video';

  const albumEl = document.getElementById(albumId);
  const slideEl = document.getElementById(slideId);

  if (mode === 'blocks') {
    if (albumEl) albumEl.classList.add('active');
    if (slideEl) slideEl.classList.remove('active');
  } else {
    if (albumEl) albumEl.classList.remove('active');
    if (slideEl) slideEl.classList.add('active');
  }
}

// ----- ЗАГОЛОВОК В #nav -----
function updateNavTitle(title) {
  const titleEl = document.querySelector('.album .album-title');
  if (titleEl) titleEl.textContent = title || '';
}

// ----- СЛАЙДЫ ТЕКУЩЕГО БЛОКА -----
function getCurrentBlockSlides() {
  if (!currentAlbum || !currentAlbum.blocks || currentAlbum.blocks.length === 0) return [];
  return currentAlbum.blocks[currentBlockIndex]?.slides || [];
}

// ----- ОСТАНОВКА ВИДЕО -----
function stopVideosInSlidesCarousel() {
  const iframes = slidesCarouselDiv.querySelectorAll('iframe');
  iframes.forEach(iframe => { iframe.src = ''; });
}

// ----- ХЕЛПЕР: фото-слайд с иконкой "открыть в новой вкладке" -----
function createPhotoSlideElement(slide) {
  const link = document.createElement('a');
  link.href = slide.full;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'd-block photo-link';
  link.title = 'Открыть оригинал в новой вкладке';
  link.addEventListener('click', (e) => e.stopPropagation());

  const img = document.createElement('img');
  img.src = slide.full;
  img.alt = slide.alt || 'Фото';
  img.className = 'img-fluid';

  link.appendChild(img);

  const badge = document.createElement('span');
  badge.className = 'photo-link-badge';
  badge.setAttribute('aria-hidden', 'true');
  badge.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>`;
  link.appendChild(badge);

  return link;
}

// ----- КНОПКА "ВЫХОД" -----
function updateExitLink() {
  const exitLinks = document.querySelectorAll('#exit-link-mobile, #exit-link-sidebar');
  const isSlides = slidesCarouselDiv.style.display === 'block';

  exitLinks.forEach(link => {
    if (isSlides) {
      link.href = '#';
      link.onclick = function(e) {
        e.preventDefault();
        showBlocksMode();
        history.pushState(null, '', window.location.pathname + window.location.search);
      };
    } else {
      link.href = window.baseLink || "../../../index.html";
      link.onclick = null;
    }
  });
}

// ----- РЕЖИМ БЛОКОВ -----
function showBlocksMode() {
  stopVideosInSlidesCarousel();

  blocksCarouselDiv.style.display = 'block';
  slidesCarouselDiv.style.display = 'none';
  if (currentAlbum) {
    updateNavTitle(currentAlbum.title);
    document.title = currentAlbum.title;
    const type = new URLSearchParams(window.location.search).get('type');
    if (type) setActiveMenuItem(type, 'blocks');
  }
  if (window.location.hash) {
    history.pushState(null, '', window.location.pathname + window.location.search);
  }
  updateExitLink();
}

// ----- РЕЖИМ СЛАЙДОВ -----
function showSlidesMode() {
  blocksCarouselDiv.style.display = 'none';
  slidesCarouselDiv.style.display = 'block';
  const type = new URLSearchParams(window.location.search).get('type');
  if (type) setActiveMenuItem(type, 'slides');
  const slides = getCurrentBlockSlides();
  if (slides[currentSlideIndex] && slides[currentSlideIndex].title) {
    document.title = slides[currentSlideIndex].title;
  }
  updateExitLink();
}

// ----- РЕНДЕР КАРУСЕЛИ БЛОКОВ -----
function renderBlocksCarousel() {
  const container = blocksCarouselDiv.querySelector('.carousel-inner');
  container.innerHTML = '';

  currentAlbum.blocks.forEach((block, idx) => {
    const item = document.createElement('div');
    item.className = `carousel-item ${idx === currentBlockIndex ? 'active' : ''}`;

    const titleDiv = document.createElement('div');
    titleDiv.className = 'text-center mb-3';
    titleDiv.innerHTML = `<h3 class="text-white">${block.title}</h3>`;
    item.appendChild(titleDiv);

    const rowDiv = document.createElement('div');
    rowDiv.className = 'row justify-content-center';

    block.slides.forEach((slide, sIdx) => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-4 col-md-4 mb-2';

      const link = document.createElement('a');
      link.href = '#';
      link.className = 'd-block';
      link.dataset.blockIndex = idx;
      link.dataset.slideIndex = sIdx;
      if (slide.full) link.dataset.full = slide.full;

      const img = document.createElement('img');
      img.src = slide.thumb || (slide.iframeSrc ? 'https://via.placeholder.com/300x200/444/fff?text=Видео' : '');
      img.alt = slide.alt || slide.title || 'Медиа';
      img.className = 'img-fluid rounded';

      link.appendChild(img);
      colDiv.appendChild(link);
      rowDiv.appendChild(colDiv);

      link.addEventListener('click', (e) => {
        e.preventDefault();
        currentBlockIndex = idx;
        currentSlideIndex = sIdx;
        renderSlidesCarousel();
        showSlidesMode();
        window.location.hash = `block-${currentBlockIndex+1}-slide-${currentSlideIndex+1}`;
      });

      link.addEventListener('auxclick', (e) => {
        if (e.button === 1 && slide.full) {
          e.preventDefault();
          window.open(slide.full, '_blank', 'noopener,noreferrer');
        }
      });
    });

    item.appendChild(rowDiv);
    container.appendChild(item);
  });

  if (blocksCarousel) blocksCarousel.dispose();
  blocksCarousel = new bootstrap.Carousel(blocksCarouselDiv, { interval: false, wrap: true });

  blocksCarouselDiv.removeEventListener('slid.bs.carousel', onBlockSlide);
  blocksCarouselDiv.addEventListener('slid.bs.carousel', onBlockSlide);
}

// ----- СМЕНА БЛОКА -----
function onBlockSlide(e) {
  currentBlockIndex = e.to;
  if (slidesCarouselDiv.style.display === 'block') {
    currentSlideIndex = 0;
    renderSlidesCarousel();
    showSlidesMode();
    window.location.hash = `block-${currentBlockIndex+1}-slide-1`;
  }
}

// ----- РЕНДЕР КАРУСЕЛИ СЛАЙДОВ -----
function renderSlidesCarousel() {
  const container = slidesCarouselDiv.querySelector('.carousel-inner');
  container.innerHTML = '';

  const slides = getCurrentBlockSlides();
  if (slides.length === 0) return;
  if (currentSlideIndex >= slides.length) currentSlideIndex = 0;

  slides.forEach((slide, idx) => {
    const item = document.createElement('div');
    item.className = `carousel-item ${idx === currentSlideIndex ? 'active' : ''}`;

    if (slide.title) {
      const titleDiv = document.createElement('div');
      titleDiv.className = 'text-center mb-2';
      titleDiv.innerHTML = `<h4 class="text-white">${slide.title}</h4>`;
      item.appendChild(titleDiv);
    }

    if (slide.iframeSrc) {
      // ---- ВИДЕО ----
      const ratioDiv = document.createElement('div');
      ratioDiv.className = 'ratio ratio-16x9';
      const iframe = document.createElement('iframe');
      iframe.allowFullscreen = true;
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.className = 'video-iframe';
      if (idx === currentSlideIndex) iframe.src = slide.iframeSrc;
      else iframe.setAttribute('data-src', slide.iframeSrc);
      ratioDiv.appendChild(iframe);
      item.appendChild(ratioDiv);
    } else {
      // ---- ФОТО: ссылка + <img> + иконка-бейдж ----
      item.appendChild(createPhotoSlideElement(slide));
    }

    container.appendChild(item);
  });

  if (slidesCarousel) slidesCarousel.dispose();
  slidesCarousel = new bootstrap.Carousel(slidesCarouselDiv, { interval: false, wrap: true });
  slidesCarousel.to(currentSlideIndex);

  slidesCarouselDiv.removeEventListener('slid.bs.carousel', onSlideChange);
  slidesCarouselDiv.removeEventListener('slide.bs.carousel', onVideoSlide);
  slidesCarouselDiv.addEventListener('slid.bs.carousel', onSlideChange);
  slidesCarouselDiv.addEventListener('slide.bs.carousel', onVideoSlide);
}

// ----- СМЕНА СЛАЙДА -----
function onSlideChange(e) {
  currentSlideIndex = e.to;
  window.location.hash = `block-${currentBlockIndex+1}-slide-${currentSlideIndex+1}`;
  const slides = getCurrentBlockSlides();
  if (slides[currentSlideIndex] && slides[currentSlideIndex].title) {
    document.title = slides[currentSlideIndex].title;
  }
}

// ----- ВИДЕО -----
function onVideoSlide(e) {
  const currentItem = slidesCarouselDiv.querySelector('.carousel-item.active');
  const nextItem = e.relatedTarget;

  if (currentItem) {
    const currentIframe = currentItem.querySelector('iframe');
    if (currentIframe && currentIframe.src) {
      currentIframe.setAttribute('data-src', currentIframe.src);
      currentIframe.src = '';
    }
  }
  if (nextItem) {
    const nextIframe = nextItem.querySelector('iframe');
    if (nextIframe) {
      const dataSrc = nextIframe.getAttribute('data-src');
      if (dataSrc) nextIframe.src = dataSrc;
    }
  }
}

// ----- ИНИЦИАЛИЗАЦИЯ -----
function init() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const albumId = params.get('album');

  if (!type || !albumId || !window.albumsData || !window.albumsData[type]) {
    console.error('Неверные параметры или данные не загружены');
    return;
  }

  const albumData = window.albumsData[type][albumId];
  if (!albumData || !albumData.blocks) {
    console.error('Альбом не найден');
    return;
  }

  currentAlbum = albumData;
  updateNavTitle(currentAlbum.title);
  document.title = currentAlbum.title;

  const hash = window.location.hash.substring(1);
  let blockIdx = 0;
  let slideIdx = 0;

  if (hash) {
    const match = hash.match(/block-(\d+)-slide-(\d+)/);
    if (match) {
      blockIdx = parseInt(match[1]) - 1;
      slideIdx = parseInt(match[2]) - 1;
      if (blockIdx >= 0 && blockIdx < currentAlbum.blocks.length) {
        const slides = currentAlbum.blocks[blockIdx].slides;
        if (slideIdx >= 0 && slideIdx < slides.length) {
          currentBlockIndex = blockIdx;
          currentSlideIndex = slideIdx;
        } else {
          currentBlockIndex = blockIdx;
          currentSlideIndex = 0;
        }
      }
    }
  }

  renderBlocksCarousel();

  if (hash && hash.includes('block-')) {
    renderSlidesCarousel();
    showSlidesMode();
    updateExitLink();
    return;
  }

  showBlocksMode();
  updateExitLink();
}

// ----- ЗАПУСК -----
document.addEventListener('DOMContentLoaded', init);

// ----- ХЭШ-НАВИГАЦИЯ -----
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.substring(1);
  if (hash && hash.startsWith('block-')) {
    const match = hash.match(/block-(\d+)-slide-(\d+)/);
    if (match) {
      const blockIdx = parseInt(match[1]) - 1;
      const slideIdx = parseInt(match[2]) - 1;
      if (blockIdx >= 0 && blockIdx < currentAlbum.blocks.length) {
        const slides = currentAlbum.blocks[blockIdx].slides;
        if (slideIdx >= 0 && slideIdx < slides.length) {
          if (blockIdx !== currentBlockIndex || slideIdx !== currentSlideIndex) {
            currentBlockIndex = blockIdx;
            currentSlideIndex = slideIdx;
            renderSlidesCarousel();
            showSlidesMode();
          }
          return;
        }
      }
    }
    if (blocksCarouselDiv.style.display === 'none') showBlocksMode();
  } else {
    if (blocksCarouselDiv.style.display === 'none') showBlocksMode();
  }
});