// albums/reader.js – полная версия с зацикливанием слайдов внутри блока

let currentAlbum = null;
let currentBlockIndex = 0;
let currentSlideIndex = 0;
let blocksCarousel = null;
let slidesCarousel = null;

const blocksCarouselDiv = document.getElementById('blocks-carousel');
const slidesCarouselDiv = document.getElementById('slides-carousel');

// ----- УПРАВЛЕНИЕ ПОДСВЕТКОЙ В САЙДБАРЕ -----
function setActiveMenuItem(albumType, mode) {
  const albumId = (albumType === 'photo') ? 'active-photo-album' : 'active-video-album';
  const slideId = (albumType === 'photo') ? 'active-photo' : 'active-video';

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

// ----- ОБНОВЛЕНИЕ ЗАГОЛОВКА В #nav -----
function updateNavTitle(title) {
  const titleEl = document.querySelector('.album .album-title');
  if (titleEl) titleEl.textContent = title;
}

// ----- ПОЛУЧЕНИЕ СЛАЙДОВ ТЕКУЩЕГО БЛОКА -----
function getCurrentBlockSlides() {
  if (!currentAlbum || !currentAlbum.blocks || currentAlbum.blocks.length === 0) return [];
  return currentAlbum.blocks[currentBlockIndex]?.slides || [];
}

// ----- ОСТАНОВКА ВИДЕО В КАРУСЕЛИ СЛАЙДОВ -----
function stopVideosInSlidesCarousel() {
  const iframes = slidesCarouselDiv.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.src = ''; // принудительная остановка
  });
}

// ----- РЕЖИМ БЛОКОВ (превью) -----
function showBlocksMode() {
  // Останавливаем видео перед скрытием карусели
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
}

// ----- РЕЖИМ СЛАЙДОВ (оригиналы) -----
function showSlidesMode() {
  blocksCarouselDiv.style.display = 'none';
  slidesCarouselDiv.style.display = 'block';
  const type = new URLSearchParams(window.location.search).get('type');
  if (type) setActiveMenuItem(type, 'slides');
  // #nav остаётся с названием альбома
  const slides = getCurrentBlockSlides();
  if (slides[currentSlideIndex] && slides[currentSlideIndex].title) {
    document.title = slides[currentSlideIndex].title;
  }
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

      const img = document.createElement('img');
      img.src = slide.thumb || (slide.iframeSrc ? 'https://via.placeholder.com/300x200/444/fff?text=Видео' : '');
      img.alt = slide.alt || slide.title || 'Фото';
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
    });

    item.appendChild(rowDiv);
    container.appendChild(item);
  });

  if (blocksCarousel) blocksCarousel.dispose();
  blocksCarousel = new bootstrap.Carousel(blocksCarouselDiv, {
    interval: false,
    wrap: true
  });

  blocksCarouselDiv.removeEventListener('slid.bs.carousel', onBlockSlide);
  blocksCarouselDiv.addEventListener('slid.bs.carousel', onBlockSlide);
}

// ----- ОБРАБОТЧИК СМЕНЫ БЛОКА -----
function onBlockSlide(e) {
  currentBlockIndex = e.to;
  // Если мы в режиме слайдов, переключаемся на первый слайд нового блока
  if (slidesCarouselDiv.style.display === 'block') {
    currentSlideIndex = 0;
    renderSlidesCarousel();
    showSlidesMode();
    window.location.hash = `block-${currentBlockIndex+1}-slide-1`;
  }
}

// ----- РЕНДЕР КАРУСЕЛИ СЛАЙДОВ (только слайды текущего блока) -----
function renderSlidesCarousel() {
  const container = slidesCarouselDiv.querySelector('.carousel-inner');
  container.innerHTML = '';

  const slides = getCurrentBlockSlides();
  if (slides.length === 0) return;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

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
      const ratioDiv = document.createElement('div');
      ratioDiv.className = 'ratio ratio-16x9';
      const iframe = document.createElement('iframe');
      iframe.allowFullscreen = true;
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.className = 'video-iframe';
      if (idx === currentSlideIndex) {
        iframe.src = slide.iframeSrc;
      } else {
        iframe.setAttribute('data-src', slide.iframeSrc);
      }
      ratioDiv.appendChild(iframe);
      item.appendChild(ratioDiv);
    } else {
      const img = document.createElement('img');
      img.src = slide.full;
      img.alt = slide.alt || 'Фото';
      img.className = 'img-fluid';
      item.appendChild(img);
    }

    container.appendChild(item);
  });

  if (slidesCarousel) slidesCarousel.dispose();
  slidesCarousel = new bootstrap.Carousel(slidesCarouselDiv, {
    interval: false,
    wrap: true   // ЗАЦИКЛИВАНИЕ ВНУТРИ БЛОКА
  });
  slidesCarousel.to(currentSlideIndex);

  slidesCarouselDiv.removeEventListener('slid.bs.carousel', onSlideChange);
  slidesCarouselDiv.removeEventListener('slide.bs.carousel', onVideoSlide);
  slidesCarouselDiv.addEventListener('slid.bs.carousel', onSlideChange);
  slidesCarouselDiv.addEventListener('slide.bs.carousel', onVideoSlide);
}

// ----- ОБРАБОТЧИК СМЕНЫ СЛАЙДА -----
function onSlideChange(e) {
  currentSlideIndex = e.to;
  window.location.hash = `block-${currentBlockIndex+1}-slide-${currentSlideIndex+1}`;
  const slides = getCurrentBlockSlides();
  if (slides[currentSlideIndex] && slides[currentSlideIndex].title) {
    document.title = slides[currentSlideIndex].title;
  }
}

// ----- ОБРАБОТЧИК ДЛЯ ВИДЕО -----
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
      if (dataSrc) {
        nextIframe.src = dataSrc;
      }
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
  if (!albumData) {
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
      } else {
        currentBlockIndex = 0;
        currentSlideIndex = 0;
      }
    } else {
      currentBlockIndex = 0;
      currentSlideIndex = 0;
    }
  }

  renderBlocksCarousel();

  if (hash && hash.includes('block-')) {
    renderSlidesCarousel();
    showSlidesMode();
    return;
  }

  showBlocksMode();
}

// ----- КНОПКА "К БЛОКАМ" -----
function handleBackToBlocks(e) {
  e.preventDefault();
  showBlocksMode();
  history.pushState(null, '', window.location.pathname + window.location.search);
}

// ----- ЗАПУСК -----
document.addEventListener('DOMContentLoaded', function() {
  init();
  document.querySelectorAll('#back-to-blocks-link').forEach(el => {
    el.addEventListener('click', handleBackToBlocks);
  });
});

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
            if (slidesCarouselDiv.style.display === 'block') {
              renderSlidesCarousel();
              showSlidesMode();
            } else {
              renderSlidesCarousel();
              showSlidesMode();
            }
          }
          return;
        }
      }
    }
    if (blocksCarouselDiv.style.display === 'none') {
      showBlocksMode();
    }
  } else {
    if (blocksCarouselDiv.style.display === 'none') {
      showBlocksMode();
    }
  }
});