function initManualCarousel(data) {
  const container = document.querySelector('#carouselExampleIndicators .carousel-inner');
  
  // 1. Получаем ID из URL (например, из "#2" получаем число 2)
  const hashId = parseInt(window.location.hash.replace('#', ''), 10);

  // 2. Генерируем верстку
  container.innerHTML = data.map((slide, idx) => {
    // Проверяем: если ID совпадает с хешем ИЛИ если хеша нет и это первый слайд
    const isActive = (slide.id === hashId) || (!hashId && idx === 0);
    
    return `
      <div class="carousel-item ${isActive ? 'active' : ''}">
        <div class="watch_album text-center"><h2>${slide.title}</h2></div>
        <div class="row"> 
          ${slide.items.map(item => `
            <div class="col-md-4 col-4">
              <a href="${item.link}">
                <img src="${item.img}" class="img-thumbnail" alt="IMG">
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // 3. Инициализируем карусель, когда нужный слайд уже имеет класс active
  new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
    interval: false
  });
}

document.addEventListener('DOMContentLoaded', () => initManualCarousel(carouselData));