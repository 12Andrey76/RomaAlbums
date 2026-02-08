// Функция инициализации большой карусели
function initPhotoCarousel(data) {
  const container = document.querySelector('#carouselExampleIndicators .carousel-inner');
  if (!container) return;

  // 1. Извлекаем номер слайда из ссылки (напр. #slide3 -> индекс 2)
  const hash = window.location.hash; // Получаем "#slide3"
  const slideNum = parseInt(hash.replace('#slide', ''), 10);
  const startIndex = isNaN(slideNum) ? 0 : slideNum - 1;

  // 2. Генерируем слайды
  container.innerHTML = data.map((item, idx) => `
    <div class="carousel-item ${idx === startIndex ? 'active' : ''}">
      <div class="watch_album text-center">
        <p>${item.title || "Фото " + (idx + 1)}</p>
      </div>
      <img src="${item.img}" class="d-block w-100 img-thumbnail" alt="IMG">
    </div>
  `).join('');

  // 3. Запускаем карусель
  new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
    interval: false
  });
}

// Запуск (передайте сюда массив картинок для этой страницы)
document.addEventListener('DOMContentLoaded', () => initPhotoCarousel(singleCarouselData));
