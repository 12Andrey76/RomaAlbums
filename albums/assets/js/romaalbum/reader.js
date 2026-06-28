// albums/romaalbum/reader.js – с поддержкой #block-N (открытие блока)

let currentAlbum = null;
let currentBlockIndex = 0;
let currentSlideIndex = 0;
let blocksCarousel = null;
let slidesCarousel = null;

const blocksCarouselDiv = document.getElementById('blocks-carousel');
const slidesCarouselDiv = document.getElementById('slides-carousel');

// ----- УПРАВЛЕНИЕ ВИДИМОСТЬЮ БЛОКА НАВИГАЦИИ (#nav .slide_album) -----
function toggleNavVisibility(show) {
  const navContainer = document.getElementById('nav');
  if (!navContainer) return;
  const slideAlbum = navContainer.querySelector('.slide_album');
  if (slideAlbum) {
    if (show) {
      slideAlbum.classList.remove('d-none');
    } else {
      slideAlbum.classList.add('d-none');
    }
  }
}

// ----- ОБНОВЛЕНИЕ ЗАГОЛОВКА В #nav -----
function updateNavTitle(title) {
  const titleEl = document.querySelector('.slide_album h4');
  if (titleEl) {
    titleEl.textContent = title || '';
  }
}

// ----- УПРАВЛЕНИЕ ПОДСВЕТКОЙ В САЙДБАРЕ -----
function setActiveMenuItem(type, mode) {
  const albumId = (type === 'photo') ? 'active-photo-album' : 'active-video-album';
  const slideId = (type === 'photo') ? 'active-photo' : 'active-video';

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

// ----- ПОЛУЧЕНИЕ СЛАЙДОВ ТЕКУЩЕГО БЛОКА -----
function getCurrentBlockSlides() {
  if (!currentAlbum || !currentAlbum.blocks || currentAlbum.blocks.length === 0) return [];
  return currentAlbum.blocks[currentBlockIndex]?.slides || [];
}

// ----- ОСТАНОВКА ВИДЕО В КАРУСЕЛИ СЛАЙДОВ -----
function stopVideosInSlidesCarousel() {
  const iframes = slidesCarouselDiv.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    // Сохраняем текущий src в data-src, если он есть и если ещё не сохранён
    if (iframe.src && !iframe.hasAttribute('data-src')) {
      iframe.setAttribute('data-src', iframe.src);
    }
    iframe.src = ''; // принудительная остановка
  });
}

// ----- РЕЖИМ БЛОКОВ (месяцы) -----
function showBlocksMode() {
  // Останавливаем видео перед скрытием карусели слайдов
  stopVideosInSlidesCarousel();

  blocksCarouselDiv.style.display = 'block';
  slidesCarouselDiv.style.display = 'none';
  toggleNavVisibility(false);
  updateNavTitle('');
  if (currentAlbum) {
    document.title = currentAlbum.title || 'Альбом';
    const type = new URLSearchParams(window.location.search).get('type');
    if (type) setActiveMenuItem(type, 'blocks');
  }
  // Синхронизируем карусель с currentBlockIndex (если она уже создана)
  if (blocksCarousel) {
    blocksCarousel.to(currentBlockIndex);
  }
  if (window.location.hash) {
    // Если хэш только #block-N, сохраняем его
    const hash = window.location.hash.substring(1);
    if (!hash.startsWith('block-')) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  }
}

// ----- РЕЖИМ СЛАЙДОВ (оригиналы) -----
function showSlidesMode() {
  blocksCarouselDiv.style.display = 'none';
  slidesCarouselDiv.style.display = 'block';
  toggleNavVisibility(true);
  if (currentAlbum && currentAlbum.blocks[currentBlockIndex]) {
    updateNavTitle(currentAlbum.blocks[currentBlockIndex].title);
  }
  const type = new URLSearchParams(window.location.search).get('type');
  if (type) setActiveMenuItem(type, 'slides');
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
  if (slidesCarouselDiv.style.display === 'block') {
    if (currentAlbum && currentAlbum.blocks[currentBlockIndex]) {
      updateNavTitle(currentAlbum.blocks[currentBlockIndex].title);
    }
    currentSlideIndex = 0;
    renderSlidesCarousel();
    showSlidesMode();
    window.location.hash = `block-${currentBlockIndex+1}-slide-1`;
  } else {
    // Если в блоках – просто обновляем хэш блока
    window.location.hash = `block-${currentBlockIndex+1}`;
  }
}

// ----- РЕНДЕР КАРУСЕЛИ СЛАЙДОВ -----
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
    wrap: true
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

  if (!type || !window.albumsData || !window.albumsData[type]) {
    console.error('Неверный тип или данные не загружены');
    return;
  }

  const albumData = window.albumsData[type];
  if (!albumData || !albumData.blocks) {
    console.error('Данные альбома не найдены');
    return;
  }

  currentAlbum = albumData;
  if (!currentAlbum.title) {
    currentAlbum.title = type === 'photo' ? 'Фотоальбом' : 'Видеоальбом';
  }

  toggleNavVisibility(false);
  updateNavTitle('');

  const hash = window.location.hash.substring(1);
  let blockIdx = 0;
  let slideIdx = 0;
  let isSlidesMode = false;

  if (hash) {
    // Проверяем два формата: block-N-slide-M и block-N
    const slideMatch = hash.match(/block-(\d+)-slide-(\d+)/);
    const blockMatch = hash.match(/block-(\d+)/);

    if (slideMatch) {
      blockIdx = parseInt(slideMatch[1]) - 1;
      slideIdx = parseInt(slideMatch[2]) - 1;
      if (blockIdx >= 0 && blockIdx < currentAlbum.blocks.length) {
        const slides = currentAlbum.blocks[blockIdx].slides;
        if (slideIdx >= 0 && slideIdx < slides.length) {
          currentBlockIndex = blockIdx;
          currentSlideIndex = slideIdx;
          isSlidesMode = true;
        } else {
          currentBlockIndex = blockIdx;
          currentSlideIndex = 0;
          isSlidesMode = false;
        }
      } else {
        currentBlockIndex = 0;
        currentSlideIndex = 0;
        isSlidesMode = false;
      }
    } else if (blockMatch) {
      blockIdx = parseInt(blockMatch[1]) - 1;
      if (blockIdx >= 0 && blockIdx < currentAlbum.blocks.length) {
        currentBlockIndex = blockIdx;
        currentSlideIndex = 0;
        isSlidesMode = false;
      } else {
        currentBlockIndex = 0;
        currentSlideIndex = 0;
        isSlidesMode = false;
      }
    }
  }

  renderBlocksCarousel();

  if (isSlidesMode) {
    renderSlidesCarousel();
    showSlidesMode();
  } else {
    showBlocksMode();
  }

  document.title = currentAlbum.title;
}

// ----- КНОПКА "К МЕСЯЦАМ" -----
function handleBackToBlocks(e) {
  e.preventDefault();
  showBlocksMode(); // внутри уже вызывается stopVideosInSlidesCarousel()
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
  if (!hash) {
    // Если хэш пустой, возвращаемся в блоки с первым блоком
    if (blocksCarouselDiv.style.display === 'none') {
      showBlocksMode();
    }
    return;
  }

  const slideMatch = hash.match(/block-(\d+)-slide-(\d+)/);
  const blockMatch = hash.match(/block-(\d+)/);

  if (slideMatch) {
    const blockIdx = parseInt(slideMatch[1]) - 1;
    const slideIdx = parseInt(slideMatch[2]) - 1;
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
  } else if (blockMatch) {
    const blockIdx = parseInt(blockMatch[1]) - 1;
    if (blockIdx >= 0 && blockIdx < currentAlbum.blocks.length) {
      if (blockIdx !== currentBlockIndex) {
        currentBlockIndex = blockIdx;
        currentSlideIndex = 0;
        renderBlocksCarousel();
        showBlocksMode(); // останавливает видео
        // обновим хэш, чтобы он остался без slide
        history.replaceState(null, '', `#block-${blockIdx+1}`);
      } else {
        // уже на этом блоке
        showBlocksMode(); // останавливает видео
      }
      return;
    }
  }

  // Если хэш невалидный, возвращаемся в блоки
  if (blocksCarouselDiv.style.display === 'none') {
    showBlocksMode();
  }
});