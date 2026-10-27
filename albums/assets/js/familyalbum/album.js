// albums/album.js

const carouselSlides = [
  {
    id: 'photomenu',
    title: 'Фотоменю',
    items: [
      { id: 'photo1', src: '../../albumsFiles/IMGpreview/album2/imgmenu/photo/1.webp', alt: 'Фотоальбом 1', link: 'photoalbum/reader.html?type=photo&album=photo1' },
      { id: 'photo2', src: '../../albumsFiles/IMGpreview/album2/imgmenu/photo/2.webp', alt: 'Фотоальбом 2', link: 'photoalbum/reader.html?type=photo&album=photo2' },
      { id: 'photo3', src: '../../albumsFiles/IMGpreview/album2/imgmenu/photo/3.webp', alt: 'Фотоальбом 3', link: 'photoalbum/reader.html?type=photo&album=photo3' },
      { id: 'photo4', src: '../../albumsFiles/IMGpreview/album2/imgmenu/photo/4.webp', alt: 'Фотоальбом 4', link: 'photoalbum/reader.html?type=photo&album=photo4' },
      { id: 'photo5', src: '../../albumsFiles/IMGpreview/album2/imgmenu/photo/5.webp', alt: 'Фотоальбом 5', link: 'photoalbum/reader.html?type=photo&album=photo5' },
      { id: 'photo6', src: '../../albumsFiles/IMGpreview/album2/imgmenu/photo/6.webp', alt: 'Фотоальбом 6', link: 'photoalbum/reader.html?type=photo&album=photo6' },
      { id: 'photo7', src: '../../albumsFiles/IMGpreview/album2/imgmenu/photo/7.webp', alt: 'Фотоальбом 7', link: '#' },
      { id: 'photo8', src: '../../albumsFiles/IMGpreview/album2/imgmenu/photo/8.webp', alt: 'Фотоальбом 8', link: '#' },
      { id: 'photo9', src: '../../albumsFiles/IMGpreview/album2/imgmenu/photo/9.webp', alt: 'Фотоальбом 9', link: '#' }
    ]
  },
  {
    id: 'videomenu',
    title: 'Видеоменю',
    items: [
      { id: 'video1', src: '../../albumsFiles/IMGpreview/album2/imgmenu/video/1.jpg', alt: 'Видеоальбом 1', link: 'videoalbum/reader.html?type=video&album=video1' },
      { id: 'video2', src: '../../albumsFiles/IMGpreview/album2/imgmenu/video/2.jpg', alt: 'Видеоальбом 2', link: 'videoalbum/reader.html?type=video&album=video2' },
      { id: 'video3', src: '../../albumsFiles/IMGpreview/album2/imgmenu/video/3.jpg', alt: 'Видеоальбом 3', link: 'videoalbum/reader.html?type=video&album=video3' },
      { id: 'video4', src: '../../albumsFiles/IMGpreview/album2/imgmenu/video/4.jpg', alt: 'Видеоальбом 4', link: 'videoalbum/reader.html?type=video&album=video4' },
      { id: 'video5', src: '../../albumsFiles/IMGpreview/album2/imgmenu/video/5.jpg', alt: 'Видеоальбом 5', link: 'videoalbum/reader.html?type=video&album=video5' },
      { id: 'video6', src: '../../albumsFiles/IMGpreview/album2/imgmenu/video/6.jpg', alt: 'Видеоальбом 6', link: 'videoalbum/reader.html?type=video&album=video6' },
      { id: 'video7', src: '../../albumsFiles/IMGpreview/album2/imgmenu/video/7.jpg', alt: 'Видеоальбом 7', link: '#' },
      { id: 'video8', src: '../../albumsFiles/IMGpreview/album2/imgmenu/video/8.jpg', alt: 'Видеоальбом 8', link: '#' },
      { id: 'video9', src: '../../albumsFiles/IMGpreview/album2/imgmenu/video/9.jpg', alt: 'Видеоальбом 9', link: '#' }
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