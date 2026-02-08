document.addEventListener('DOMContentLoaded', function() {
  const carouselInner = document.querySelector('#carouselExample .carousel-inner');
  const carousel = new bootstrap.Carousel(document.getElementById('carouselExample'));

  carouselItems.forEach((item, index) => {
    // Создаём контейнер carousel-item
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;

    // Заголовок блока
    const titleDiv = document.createElement('div');
    titleDiv.className = 'watch_album text-center';
    const titleP = document.createElement('p');
    titleP.textContent = item.title;
    titleDiv.appendChild(titleP);

    // Контейнер для слайдов (ряд с колонками)
    const row = document.createElement('div');
    row.className = 'row';

    item.slides.forEach(slide => {
      const col = document.createElement('div');
      col.className = 'col-4';

      const link = document.createElement('a');
      link.href = slide.link;
      
      const img = document.createElement('img');
      img.src = slide.imgSrc;
      img.className = 'img-thumbnail';
      img.alt = slide.alt;

      link.appendChild(img);
      col.appendChild(link);
      row.appendChild(col);
    });

    // Собираем всё вместе
    carouselItem.appendChild(titleDiv);
    carouselItem.appendChild(row);

    // Добавляем в карусель
    carouselInner.appendChild(carouselItem);
  });
});