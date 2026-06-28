// albums/album.js

const carouselSlides = [
  {
    id: 'photomenu',
    title: 'Фотоменю',
    items: [
      { id: 'photo1', src: 'https://s3.radikal.cloud/2025/01/26/186e5b584dd1210d6.th.jpeg', alt: 'Фотоальбом 1', link: 'photoalbum/reader.html?type=photo&album=photo1' },
      { id: 'photo2', src: 'https://s3.radikal.cloud/2025/01/26/2e523afaab24f9d46.th.jpeg', alt: 'Фотоальбом 2', link: 'photoalbum/reader.html?type=photo&album=photo2' },
      { id: 'photo3', src: 'https://s3.radikal.cloud/2025/01/26/3e46f9c59099fb1d8.th.jpeg', alt: 'Фотоальбом 3', link: 'photoalbum/reader.html?type=photo&album=photo3' },
      { id: 'photo4', src: 'https://s3.radikal.cloud/2025/01/26/4f9f136802481d7f3.th.jpeg', alt: 'Фотоальбом 4', link: 'photoalbum/reader.html?type=photo&album=photo4' },
      { id: 'photo5', src: 'https://s3.radikal.cloud/2025/01/26/5398131f8af1a6512.th.jpeg', alt: 'Фотоальбом 5', link: 'photoalbum/reader.html?type=photo&album=photo5' },
      { id: 'photo6', src: 'https://s3.radikal.cloud/2025/01/26/6f6ae154362b8bc55.th.jpeg', alt: 'Фотоальбом 6', link: 'photoalbum/reader.html?type=photo&album=photo6' },
      { id: 'photo7', src: 'https://s3.radikal.cloud/2025/01/26/75b4f4e2e6f9542f6.th.jpeg', alt: 'Фотоальбом 7', link: '#' },
      { id: 'photo8', src: 'https://s3.radikal.cloud/2025/01/26/8f58d5a4157b11b65.th.jpeg', alt: 'Фотоальбом 8', link: '#' },
      { id: 'photo9', src: 'https://s3.radikal.cloud/2025/01/26/98f91d718c0f96286.th.jpeg', alt: 'Фотоальбом 9', link: '#' }
    ]
  },
  {
    id: 'videomenu',
    title: 'Видеоменю',
    items: [
      { id: 'video1', src: 'https://s3.radikal.cloud/2025/06/28/1a5724c86d60071d8.th.jpg', alt: 'Видеоальбом 1', link: 'videoalbum/reader.html?type=video&album=video1' },
      { id: 'video2', src: 'https://s3.radikal.cloud/2025/06/28/27fc1f6828fd871d9.th.jpg', alt: 'Видеоальбом 2', link: 'videoalbum/reader.html?type=video&album=video2' },
      { id: 'video3', src: 'https://s3.radikal.cloud/2025/06/28/38069761fac629103.th.jpg', alt: 'Видеоальбом 3', link: 'videoalbum/reader.html?type=video&album=video3' },
      { id: 'video4', src: 'https://s3.radikal.cloud/2025/06/28/4e3bec1483d47c3b1.th.jpg', alt: 'Видеоальбом 4', link: 'videoalbum/reader.html?type=video&album=video4' },
      { id: 'video5', src: 'https://s3.radikal.cloud/2025/06/28/502ba7657183062d8.th.jpg', alt: 'Видеоальбом 5', link: 'videoalbum/reader.html?type=video&album=video5' },
      { id: 'video6', src: 'https://s3.radikal.cloud/2025/06/28/6a0e1889c79b6efd9.th.jpg', alt: 'Видеоальбом 6', link: 'videoalbum/reader.html?type=video&album=video6' },
      { id: 'video7', src: 'https://s3.radikal.cloud/2025/06/28/7188ae714b8a8cb41.th.jpeg', alt: 'Видеоальбом 7', link: '#' },
      { id: 'video8', src: 'https://s3.radikal.cloud/2025/06/28/8477afb5abf905fa7.th.jpg', alt: 'Видеоальбом 8', link: '#' },
      { id: 'video9', src: 'https://s3.radikal.cloud/2025/06/28/9b37d8e2354e9fc22.th.jpg', alt: 'Видеоальбом 9', link: '#' }
    ]
  }
];

function renderCarousel(slidesData) {
  const carousel = document.getElementById('carouselExample');
  const carouselInner = carousel.querySelector('.carousel-inner');
  if (!carouselInner) return;

  carouselInner.innerHTML = '';

  slidesData.forEach((slide, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;

    const titleDiv = document.createElement('div');
    titleDiv.className = 'watch_album text-center';
    const titleH2 = document.createElement('h2');
    titleH2.textContent = slide.title;
    titleDiv.appendChild(titleH2);

    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    slide.items.forEach(item => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-md-4 col-4';

      const link = document.createElement('a');
      link.href = item.link;
      link.className = 'd-block';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.className = 'img-thumbnail';

      link.appendChild(img);
      colDiv.appendChild(link);
      rowDiv.appendChild(colDiv);
    });

    carouselItem.appendChild(titleDiv);
    carouselItem.appendChild(rowDiv);
    carouselInner.appendChild(carouselItem);
  });

  // Создаём карусель и сохраняем её в глобальную переменную для доступа из других функций
  const bsCarousel = new bootstrap.Carousel(carousel, { interval: false, wrap: true });
  window.albumCarousel = bsCarousel;

  // Функция перехода по хэшу
  function goToSlideByHash() {
    const hash = window.location.hash.substring(1); // убираем '#'
    if (!hash) return;
    const targetIndex = slidesData.findIndex(slide => slide.id === hash);
    if (targetIndex !== -1) {
      bsCarousel.to(targetIndex);
    }
  }

  // Вызов при загрузке страницы
  goToSlideByHash();

  // Обработка изменения хэша (например, при клике на ссылки с якорями)
  window.addEventListener('hashchange', goToSlideByHash);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCarousel(carouselSlides);
});