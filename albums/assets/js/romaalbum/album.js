// albums/romaalbum/album.js

const carouselData = [
  {
    id: 'photomenu',
    title: "Фотоменю",
    items: [
      { link: "photoalbum/reader.html?type=photo#block-1", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/1.webp" },
      { link: "photoalbum/reader.html?type=photo#block-2", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/2.webp" },
      { link: "photoalbum/reader.html?type=photo#block-3", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/3.webp" },
      { link: "photoalbum/reader.html?type=photo#block-4", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/4.webp" },
      { link: "photoalbum/reader.html?type=photo#block-5", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/5.webp" },
      { link: "photoalbum/reader.html?type=photo#block-6", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/6.webp" },
      { link: "photoalbum/reader.html?type=photo#block-7", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/7.webp" },
      { link: "photoalbum/reader.html?type=photo#block-8", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/8.webp" },
      { link: "photoalbum/reader.html?type=photo#block-9", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/9.webp" },
      { link: "photoalbum/reader.html?type=photo#block-10", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/10.webp" },
      { link: "photoalbum/reader.html?type=photo#block-11", src: "../../albumsFiles/IMGpreview/album1/imgmenu/photo/11.webp" }
    ]
  },
  {
    id: 'videomenu',
    title: "Видеоменю",
    items: [
      { link: "videoalbum/reader.html?type=video#block-1", src: "../../albumsFiles/IMGpreview/album1/imgmenu/video/3.webp" },
      { link: "videoalbum/reader.html?type=video#block-2", src: "../../albumsFiles/IMGpreview/album1/imgmenu/video/4.webp" },
      { link: "videoalbum/reader.html?type=video#block-3", src: "../../albumsFiles/IMGpreview/album1/imgmenu/video/6.webp" },
      { link: "videoalbum/reader.html?type=video#block-4", src: "../../albumsFiles/IMGpreview/album1/imgmenu/video/7.webp" },
      { link: "videoalbum/reader.html?type=video#block-5", src: "../../albumsFiles/IMGpreview/album1/imgmenu/video/8.webp" },
      { link: "videoalbum/reader.html?type=video#block-6", src: "../../albumsFiles/IMGpreview/album1/imgmenu/video/9.webp" },
      { link: "videoalbum/reader.html?type=video#block-7", src: "../../albumsFiles/IMGpreview/album1/imgmenu/video/10.webp" },
      { link: "videoalbum/reader.html?type=video#block-8", src: "../../albumsFiles/IMGpreview/album1/imgmenu/video/11.webp" }
    ]
  }
];

function renderCarousel(slidesData) {
  const carousel = document.getElementById('carouselExampleIndicators');
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
    // ДОБАВЛЕН КЛАСС justify-content-center ДЛЯ ЦЕНТРИРОВАНИЯ НЕПОЛНЫХ РЯДОВ
    rowDiv.className = 'row justify-content-center';

    slide.items.forEach(item => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-md-4 col-4';

      const link = document.createElement('a');
      link.href = item.link;
      link.className = 'd-block';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || 'Изображение';

      // ТОЛЬКО ДЛЯ ВИДЕОМЕНЮ – круглые картинки
      if (slide.id === 'videomenu') {
        img.className = 'img-thumbnail rounded-circle';
      } else {
        img.className = 'img-thumbnail';
      }

      link.appendChild(img);
      colDiv.appendChild(link);
      rowDiv.appendChild(colDiv);
    });

    carouselItem.appendChild(titleDiv);
    carouselItem.appendChild(rowDiv);
    carouselInner.appendChild(carouselItem);
  });

  const bsCarousel = new bootstrap.Carousel(carousel, { interval: false, wrap: true });
  window.albumCarousel = bsCarousel;

  function goToSlideByHash() {
    const hash = window.location.hash.substring(1);
    if (!hash) return;
    const targetIndex = slidesData.findIndex(slide => slide.id === hash);
    if (targetIndex !== -1) {
      bsCarousel.to(targetIndex);
    }
  }

  goToSlideByHash();
  window.addEventListener('hashchange', goToSlideByHash);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCarousel(carouselData);
});