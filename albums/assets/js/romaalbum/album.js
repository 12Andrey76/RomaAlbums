// albums/romaalbum/album.js

const carouselData = [
  {
    id: 'photomenu',
    title: "Фотоменю",
    items: [
      { link: "photoalbum/reader.html?type=photo#block-1", src: "https://s3.radikal.cloud/2025/11/30/19eb5b3ffe266e964.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-2", src: "https://s3.radikal.cloud/2025/11/30/2f68fb817e5ed7cb9.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-3", src: "https://s1.radikal.cloud/2026/05/24/1000043165d5b8c2301426f683.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-4", src: "https://s1.radikal.cloud/2025/11/30/48e6dfa958f423ed9.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-5", src: "https://radika1.link/2025/11/30/57334af798cfd24ca.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-6", src: "https://s1.radikal.cloud/2025/11/30/6c98d33a194c8624b.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-7", src: "https://radika1.link/2025/11/30/7c9f480ba07ec5ead.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-8", src: "https://s1.radikal.cloud/2025/11/30/88466056522aa93dc.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-9", src: "https://radika1.link/2025/11/30/9be28056cfd1d346b.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-10", src: "https://s1.radikal.cloud/2026/05/24/1000043166b9f7c331d2044e72.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-11", src: "https://radika1.link/2025/11/30/11a596020c03f9798b.th.jpg" },
      { link: "photoalbum/reader.html?type=photo#block-12", src: "https://s1.radikal.cloud/2025/11/30/12c6e5b900d6df67e5.th.jpg" }
    ]
  },
  {
    id: 'videomenu',
    title: "Видеоменю",
    items: [
      { link: "videoalbum/reader.html?type=video#block-1", src: "https://radika1.link/2025/11/30/3ca5776af797f0d77.th.jpg" },
      { link: "videoalbum/reader.html?type=video#block-2", src: "https://radika1.link/2026/05/24/1000043167b23a903fe5d994b9.th.jpg" },
      { link: "videoalbum/reader.html?type=video#block-3", src: "https://radika1.link/2025/11/30/686eef653fe56edc2.th.jpg" },
      { link: "videoalbum/reader.html?type=video#block-4", src: "https://radika1.link/2025/11/30/75aefdccfdd18f35e.th.jpg" },
      { link: "videoalbum/reader.html?type=video#block-5", src: "https://s1.radikal.cloud/2025/11/30/8291e6b25a92d2876.th.jpg" },
      { link: "videoalbum/reader.html?type=video#block-6", src: "https://radika1.link/2025/11/30/9d0d4397f75bb53e4.th.jpg" },
      { link: "videoalbum/reader.html?type=video#block-7", src: "https://radika1.link/2025/11/30/1061660d8adec0b1e2.th.jpg" },
      { link: "videoalbum/reader.html?type=video#block-8", src: "https://s1.radikal.cloud/2025/11/30/112ec390ef40c01b3b.th.jpg" },
      { link: "videoalbum/reader.html?type=video#block-9", src: "https://s3.radikal.cloud/2025/11/30/123c92af4c79574351.th.jpg" }
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
    rowDiv.className = 'row';

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