document.addEventListener('DOMContentLoaded', function() {
  const carouselInner = document.querySelector('#carouselExample .carousel-inner');
  const carousel = new bootstrap.Carousel(document.getElementById('carouselExample'));

  // Генерируем слайды из массива
  carouselSlides.forEach((slide, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;

    const titleDiv = document.createElement('div');
    titleDiv.className = 'watch_album col-md-12 text-center';
    const titleH2 = document.createElement('h2');
    titleH2.textContent = slide.title;
    titleDiv.appendChild(titleH2);

    const img = document.createElement('img');
    img.src = slide.imgSrc;
    img.className = 'img-thumbnail';
    img.alt = slide.alt;

    carouselItem.appendChild(titleDiv);
    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });

  // Обрабатываем хеш в URL
  function goToSlideByHash() {
    const hash = window.location.hash; // Например, "#slide3"
    if (!hash) return;

    const targetId = hash.replace('#', ''); // "slide3"
    const slideIndex = carouselSlides.findIndex(slide => slide.id === targetId);

    if (slideIndex !== -1) {
      carousel.to(slideIndex); // Переходим к нужному слайду
    }
  }

  // Вызываем при загрузке страницы
  goToSlideByHash();

  // Обновляем при изменении хеша (если пользователь кликает по ссылкам)
  window.addEventListener('hashchange', goToSlideByHash);
});