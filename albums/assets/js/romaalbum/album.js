const carouselData = [
  {
    title: "Фотоменю",
    items: [
  { link: "photoalbum/photoalbum.html#1", img: "https://s3.radikal.cloud/2025/11/30/19eb5b3ffe266e964.th.jpg" },
  { link: "photoalbum/photoalbum.html#2", img: "https://s3.radikal.cloud/2025/11/30/2f68fb817e5ed7cb9.th.jpg" },
  { link: "photoalbum/photoalbum.html#3", img: "https://s2.radikal.cloud/2025/11/30/3930895ee3ac10863.th.jpg" },
  { link: "photoalbum/photoalbum.html#4", img: "https://s1.radikal.cloud/2025/11/30/48e6dfa958f423ed9.th.jpg" },
  {link: "photoalbum/photoalbum.html#5", img: "https://radika1.link/2025/11/30/57334af798cfd24ca.th.jpg" },
  { link: "photoalbum/photoalbum.html#6", img: "https://s1.radikal.cloud/2025/11/30/6c98d33a194c8624b.th.jpg" },
  { link: "photoalbum/photoalbum.html#7", img: "https://radika1.link/2025/11/30/7c9f480ba07ec5ead.th.jpg" },
  { link: "photoalbum/photoalbum.html#8", img: "https://s1.radikal.cloud/2025/11/30/88466056522aa93dc.th.jpg" },
  { link: "photoalbum/photoalbum.html#9", img: "https://radika1.link/2025/11/30/9be28056cfd1d346b.th.jpg" },
  { link: "photoalbum/photoalbum.html#10", img: "https://s2.radikal.cloud/2025/11/30/1077aa33f2a5ebe764.th.jpg" },
  { link: "photoalbum/photoalbum.html#11", img: "https://radika1.link/2025/11/30/11a596020c03f9798b.th.jpg" },
  { link: "photoalbum/photoalbum.html#12", img: "https://s1.radikal.cloud/2025/11/30/12c6e5b900d6df67e5.th.jpg" },
]

  },
  {
    title: "Видеоменю",
    class: "videomenu",
    items: [
  { link: "videoalbum/videoalbum.html#1", img: "https://radika1.link/2025/11/30/3ca5776af797f0d77.th.jpg" },
  { link: "videoalbum/videoalbum.html#2", img: "https://s2.radikal.cloud/2025/11/30/4c2bcfa5349ada6cd.th.jpg" },
  { link: "videoalbum/videoalbum.html#3", img: "https://radika1.link/2025/11/30/686eef653fe56edc2.th.jpg" },
  { link: "videoalbum/videoalbum.html#4", img: "https://radika1.link/2025/11/30/75aefdccfdd18f35e.th.jpg" },
  { link: "videoalbum/videoalbum.html#5", img: "https://s1.radikal.cloud/2025/11/30/8291e6b25a92d2876.th.jpg" },
  { link: "videoalbum/videoalbum.html#6", img: "https://radika1.link/2025/11/30/9d0d4397f75bb53e4.th.jpg" },
  { link: "videoalbum/videoalbum.html#7", img: "https://radika1.link/2025/11/30/1061660d8adec0b1e2.th.jpg" },
  { link: "videoalbum/videoalbum.html#8", img: "https://s1.radikal.cloud/2025/11/30/112ec390ef40c01b3b.th.jpg" },
  { link: "videoalbum/videoalbum.html#9", img: "https://s3.radikal.cloud/2025/11/30/123c92af4c79574351.th.jpg" }
]

  }
];

function initManualCarousel(data) {
  const container = document.querySelector('#carouselExampleIndicators .carousel-inner');
  
  container.innerHTML = data.map((slide, idx) => `
    <div class="carousel-item ${idx === 0 ? 'active' : ''}" id="month-${slide.id}">
      <div class="watch_album text-center"><h2>${slide.title}</h2></div>
      <div class="row"> 
        ${slide.items.map(item => `
          <div class="col-md-4 col-4">
            <a href="${item.link}">
               <!-- Добавлен класс slide.class для Видеоменю, если он есть -->
               <img src="${item.img}" class="${slide.class || ''} img-thumbnail" alt="IMG">
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Инициализируем объект карусели
  const carouselElem = document.querySelector('#carouselExampleIndicators');
  const carouselInstance = new bootstrap.Carousel(carouselElem, { interval: false });

  // ЛОГИКА ПЕРЕХОДА ПО ID (Hash)
  // Проверяем URL при загрузке (напр. photoalbum.html#2)
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    // Ищем индекс массива, где id совпадает с числом из хеша
    const targetIndex = data.findIndex(slide => slide.id == hash);
    if (targetIndex !== -1) {
      carouselInstance.to(targetIndex);
    }
  }
}

// Запуск
document.addEventListener('DOMContentLoaded', () => initManualCarousel(carouselData));
