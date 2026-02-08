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

// ========== Фотоальбом (обзор) ==========
} else if (currentPage.includes("photoalbum/photoalbum.html")) {
	albumlink = "../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Фотоальбом";
	prevAlbumLink = "photo/photo12.html";
	nextAlbumLink = "photo/photo1.html";

// ========== Фото (отдельные страницы 1–12 месяцев) ==========
} else if (currentPage.includes("photo/photo1.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "1 месяц";
	prevAlbumLink = "photo12.html";
	nextAlbumLink = "photo2.html";
} else if (currentPage.includes("photo/photo2.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "2 месяца";
	prevAlbumLink = "photo1.html";
	nextAlbumLink = "photo3.html";
} else if (currentPage.includes("photo/photo3.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "3 месяца";
	prevAlbumLink = "photo2.html";
	nextAlbumLink = "photo4.html";
} else if (currentPage.includes("photo/photo4.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "4 месяца";
	prevAlbumLink = "photo3.html";
	nextAlbumLink = "photo5.html";
} else if (currentPage.includes("photo/photo5.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "5 месяцев";
	prevAlbumLink = "photo4.html";
	nextAlbumLink = "photo6.html";
} else if (currentPage.includes("photo/photo6.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "6 месяцев";
	prevAlbumLink = "photo5.html";
	nextAlbumLink = "photo7.html";
} else if (currentPage.includes("photo/photo7.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "7 месяцев";
	prevAlbumLink = "photo6.html";
	nextAlbumLink = "photo8.html";
} else if (currentPage.includes("photo/photo8.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "8 месяцев";
	prevAlbumLink = "photo7.html";
	nextAlbumLink = "photo9.html";
} else if (currentPage.includes("photo/photo9.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "9 месяцев";
	prevAlbumLink = "photo8.html";
	nextAlbumLink = "photo10.html";
} else if (currentPage.includes("photo/photo10.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "10 месяцев";
	prevAlbumLink = "photo9.html";
	nextAlbumLink = "photo11.html";
} else if (currentPage.includes("photo/photo11.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "11 месяцев";
	prevAlbumLink = "photo10.html";
	nextAlbumLink = "photo12.html";
} else if (currentPage.includes("photo/photo12.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum.html";
	albumTitle = "1 годик";
	prevAlbumLink = "photo11.html";
	nextAlbumLink = "photo1.html";

// ========== Видеоальбом (обзор) ==========
} else if (currentPage.includes("videoalbum/videoalbum.html")) {
	albumlink = "../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Видеоальбом";
	prevAlbumLink = "video/video9.html";
	nextAlbumLink = "video/video1.html";

// ========== Видео (отдельные страницы 1–9) ==========
} else if (currentPage.includes("video/video1.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum.html";
	albumTitle = "3 месяца";
	prevAlbumLink = "video9.html";
	nextAlbumLink = "video2.html";
} else if (currentPage.includes("video/video2.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum.html";
	albumTitle = "4 месяца";
	prevAlbumLink = "video1.html";
	nextAlbumLink = "video3.html";
} else if (currentPage.includes("video/video3.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum.html";
	albumTitle = "6 месяцев";
	prevAlbumLink = "video2.html";
	nextAlbumLink = "video4.html";
} else if (currentPage.includes("video/video4.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum.html";
	albumTitle = "7 месяцев";
	prevAlbumLink = "video3.html";
	nextAlbumLink = "video5.html";
} else if (currentPage.includes("video/video5.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum.html";
	albumTitle = "8 месяцев";
	prevAlbumLink = "video4.html";
	nextAlbumLink = "video6.html";
} else if (currentPage.includes("video/video6.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum.html";
	albumTitle = "9 месяцев";
	prevAlbumLink = "video5.html";
	nextAlbumLink = "video7.html";
} else if (currentPage.includes("video/video7.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum.html";
	albumTitle = "10 месяцев";
	prevAlbumLink = "video6.html";
	nextAlbumLink = "video8.html";
} else if (currentPage.includes("video/video8.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum.html";
	albumTitle = "11 месяцев";
	prevAlbumLink = "video7.html";
	nextAlbumLink = "video9.html";
} else if (currentPage.includes("video/video9.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum.html";
	albumTitle = "1 годик";
	prevAlbumLink = "video8.html";
	nextAlbumLink = "video1.html";
}

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
    <div class="col-3">
      <div class="slide_album"><a href="${prevAlbumLink}">&lt;</a></div>
    </div>
    <div class="col-6">
      <div class="slide_album"><h4>${albumTitle}</h4></div>
    </div>
    <div class="col-3">
      <div class="slide_album"><a href="${nextAlbumLink}">&gt;</a></div>
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
    <p class="card-text"><a href="${albumlink}" id="active-album-menu">Меню</a></p>
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
    <p class="card-text"><a href="${albumlink}" id="active-album-menu">Меню</a></p>
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

// Определяем активные элементы меню
let activeIds = [];

if (currentPage.includes("album.html") && !currentPage.includes("photoalbum") && !currentPage.includes("videoalbum")) {
	document.getElementById('active-album-menu').classList.add('active');
	document.querySelector('#right #active-album-menu')?.classList.add('active');
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
