document.addEventListener('DOMContentLoaded', function() {
  const thumbnailsContainer = document.querySelector('.thumbnails');
  const carouselInner = document.querySelector('#carouselExample .carousel-inner');
  const carouselElement = document.getElementById('carouselExample');

  // 1. Инициализация карусели Bootstrap
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: false,
    wrap: true,
    keyboard: true,
    pause: 'hover'
  });

  // 2. Генерация миниатюр (если контейнер существует)
  if (thumbnailsContainer) {
    carouselVideos.forEach(video => {
      const col = document.createElement('div');
      col.className = 'col-4 mb-2';

      const link = document.createElement('a');
      link.href = '#';
      link.className = 'd-block';

      const img = document.createElement('img');
      img.src = `https://s3.radikal.cloud{video.id}.jpeg`;
      img.alt = video.title;
      img.className = 'img-thumbnail w-100 rounded';

      link.appendChild(img);
      col.appendChild(link);

      link.addEventListener('click', function(e) {
        e.preventDefault();
        const videoIndex = carouselVideos.findIndex(v => v.id === video.id);
        if (videoIndex !== -1) carousel.to(videoIndex);
      });

      thumbnailsContainer.appendChild(col);
    });
  }

  // 3. Генерация слайдов (Lazy Loading подготовка)
  carouselVideos.forEach((video, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;

    const titleDiv = document.createElement('div');
    titleDiv.className = 'watch_album col-md-12 text-center';
    const titleH2 = document.createElement('h2');
    titleH2.textContent = video.title;
    titleDiv.appendChild(titleH2);

    const ratioDiv = document.createElement('div');
    ratioDiv.className = 'ratio ratio-16x9';

    const iframe = document.createElement('iframe');
    
    // ВАЖНО: Только первый слайд получает src сразу, остальные — через data-src
    if (index === 0) {
      iframe.src = video.iframeSrc;
    } else {
      iframe.setAttribute('data-src', video.iframeSrc);
    }

    iframe.allowFullscreen = true;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';

    ratioDiv.appendChild(iframe);
    carouselItem.appendChild(titleDiv);
    carouselItem.appendChild(ratioDiv);
    carouselInner.appendChild(carouselItem);
  });

  // 4. Главная логика: Переключение, Загрузка и Остановка
  carouselElement.addEventListener('slide.bs.carousel', function (e) {
    
    // А) ОСТАНОВКА текущего (уходящего) видео
    const currentItem = carouselElement.querySelector('.carousel-item.active');
    if (currentItem) {
      const currentIframe = currentItem.querySelector('iframe');
      if (currentIframe && currentIframe.src !== '') {
        // Сохраняем адрес перед тем как стереть, чтобы потом вернуться
        const currentSrc = currentIframe.src;
        currentIframe.setAttribute('data-src', currentSrc);
        currentIframe.src = ''; // Обнуляем src = видео выключается
      }
    }

    // Б) ЗАГРУЗКА следующего (приходящего) видео
    const nextIframe = e.relatedTarget.querySelector('iframe');
    const nextDataSrc = nextIframe.getAttribute('data-src');

    if (nextDataSrc) {
      nextIframe.src = nextDataSrc;
      // Мы не удаляем data-src, чтобы логика работала по кругу
    }
  });

  // 5. Инициализация по хешу в URL
  const hash = window.location.hash;
  if (hash) {
    const targetId = hash.substring(1);
    const videoIndex = carouselVideos.findIndex(v => v.id === targetId);

    if (videoIndex !== -1) {
      // Если переходим по хешу на не-первый слайд, подставляем ему src
      if (videoIndex !== 0) {
        const targetVideo = carouselVideos[videoIndex];
        // Находим будущий активный iframe и готовим его
        const allItems = carouselInner.querySelectorAll('.carousel-item');
        const targetIframe = allItems[videoIndex].querySelector('iframe');
        targetIframe.src = targetVideo.iframeSrc;
      }
      carousel.to(videoIndex);
    }
  }
});
