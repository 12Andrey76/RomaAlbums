// loadComponent.js – для альбома "Рома" (с поддержкой reader.html)

// Получаем текущий путь страницы
const currentPage = window.location.pathname;

// Базовые значения по умолчанию
let baseLink = "../../index.html";
let albumlink = "album.html";
let albumTitle = "Фотоальбом";
let prevAlbumLink = "photo/photo12.html";
let nextAlbumLink = "photo/photo1.html";

// ========== Главная страница альбома ==========
if (currentPage.includes("album.html") && !currentPage.includes("photoalbum") && !currentPage.includes("videoalbum")) {
	albumlink = "album.html";
	baseLink = "../../index.html";

// ========== Страница reader (универсальный просмотр) ==========
} else if (currentPage.includes("reader.html")) {
	// Определяем тип из URL (photo или video)
	const params = new URLSearchParams(window.location.search);
	const type = params.get('type');
	if (type === 'photo') {
		albumlink = "../album.html#photomenu";
		albumTitle = "Фотоальбом";
	} else if (type === 'video') {
		albumlink = "../album.html#videomenu";
		albumTitle = "Видеоальбом";
	} else {
		albumlink = "../album.html";
		albumTitle = "Альбом";
	}
	baseLink = "../../../index.html";
	// Для reader.html стрелки навигации не используются, можно задать заглушки

}

// ========== ШАБЛОНЫ ==========

const headerHTML = `
<div class="container-fluid header text-center">
  <div class="container">
    <div class="row">
      <div class="foto col-md-3 d-none d-md-block d-lg-block">
        <img src="https://radika1.link/2025/11/30/foto17853372871b0e39.png" class="img-thumbnail col-10" alt="картинка">
      </div>
      <div class="video col-md-3 d-none d-md-block d-lg-block">
        <img src="https://s3.radikal.cloud/2025/11/30/videoc4aca0d3b2cf4a19.png" class="img-thumbnail col-10" alt="картинка">
      </div>
      <div class="logo col-md-12">
        <h1><a href="${albumlink}">Альбом Ромы</a></h1>
        <p>Наш Сын!</p>
      </div>
    </div>
  </div>
</div>
`;

const menuHTML = `
<div class="row">
	<div class="col-12 text-center d-md-none d-sm-block">
    <div class="menu_album"><a id="back-to-blocks-link" href="#">в месяцы</a></div>
  </div>
  <div class="col-4 text-center d-md-none d-sm-block">
    <div class="menu_album"><a href="${albumlink}">главная</a></div>
  </div>
  <div class="col-4 text-center d-md-none d-sm-block">
    <div class="menu_album"><a href="${albumlink}">меню</a></div>
  </div>
  <div class="col-4 text-center d-md-none d-sm-block">
    <div class="menu_album"><a href="${baseLink}">выход</a></div>
  </div>
</div>
`;

const navHTML = `
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="slide_album"><h4>${albumTitle}</h4></div>
    </div>
  </div>
</div>
`;

const buttonHTML = `
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
`;

const leftHTML = `
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text"><a href="${albumlink}">Главная</a></p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="active-album-menu"><a href="${albumlink}">Меню</a></p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="active-photo-album">Фотоальбом</p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="active-photo">Фото</p>
  </div>
</div>
`;

const rightHTML = `
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text"><a href="${baseLink}">Выход</a></p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="back-to-blocks-link"><a href="#">В Месяцы</a></p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="active-video-album">Видеоальбом</p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="active-video">Видео</p>
  </div>
</div>
`;

const footerHTML = `
<footer class="text-center">
  <h1>Альбом Ромы 2021 ©</h1>
</footer>
`;

// Вставка компонентов
document.getElementById('header').innerHTML = headerHTML;
document.getElementById('menu').innerHTML = menuHTML;

const navContainer = document.getElementById('nav');
if (navContainer) {
	navContainer.innerHTML = navHTML;
}

document.getElementById('button').innerHTML = buttonHTML;
document.getElementById('left').innerHTML = leftHTML;
document.getElementById('right').innerHTML = rightHTML;
document.getElementById('footer').innerHTML = footerHTML;

// ========== ПОДСВЕТКА АКТИВНЫХ ПУНКТОВ ==========

// Для страницы reader.html активные пункты определяются по типу
if (currentPage.includes("reader.html")) {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  if (type === 'photo') {
    document.getElementById('active-photo-album')?.classList.add('active');
  } else if (type === 'video') {
    document.getElementById('active-video-album')?.classList.add('active');
  } else {
    document.getElementById('active-album-menu')?.classList.add('active');
  }
} else {
  // Для остальных страниц используем старую логику
  let activeIds = [];

  if (currentPage.includes("album.html") && !currentPage.includes("photoalbum") && !currentPage.includes("videoalbum")) {
    activeIds.push("active-album-menu");
  } else if (currentPage.includes("photoalbum/photoalbum.html") || currentPage.includes("photo/photo")) {
    activeIds.push("active-photo-album");
  } else if (currentPage.includes("videoalbum/videoalbum.html") || currentPage.includes("video/video")) {
    activeIds.push("active-video-album");
  }

  if (currentPage.includes("photo/photo")) {
    activeIds.push("active-photo");
  } else if (currentPage.includes("video/video")) {
    activeIds.push("active-video");
  }

  activeIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("active");
    }
  });
}