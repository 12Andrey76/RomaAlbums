// Получаем текущий путь страницы
const currentPage = window.location.pathname;

// Пример динамической генерации ссылок в зависимости от текущей страницы
let baseLink = "../../index.html";
let albumlink = "album.html"
let albumTitle = "Фотоальбом";
let prevAlbumLink = "fotoalbum4.html";
let nextAlbumLink = "fotoalbum2.html";

if (currentPage.includes("album.html")) {
	albumlink = "album.html";
	// 	============Фотоальбом=========
} else if (currentPage.includes("fotoalbum1.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "1 месяц";
	prevAlbumLink = "fotoalbum12.html";
	nextAlbumLink = "fotoalbum2.html";
} else if (currentPage.includes("fotoalbum2.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "2 месяца";
	prevAlbumLink = "fotoalbum1.html";
	nextAlbumLink = "fotoalbum3.html";
} else if (currentPage.includes("fotoalbum3.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "3 месяца";
	prevAlbumLink = "fotoalbum2.html";
	nextAlbumLink = "fotoalbum4.html";
} else if (currentPage.includes("fotoalbum4.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "4 месяца";
	prevAlbumLink = "fotoalbum3.html";
	nextAlbumLink = "fotoalbum5.html";
} else if (currentPage.includes("fotoalbum5.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "5 месяцев";
	prevAlbumLink = "fotoalbum4.html";
	nextAlbumLink = "fotoalbum6.html";
} else if (currentPage.includes("fotoalbum6.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "6 месяцев";
	prevAlbumLink = "fotoalbum5.html";
	nextAlbumLink = "fotoalbum7.html";
} else if (currentPage.includes("fotoalbum7.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "7 месяцев";
	prevAlbumLink = "fotoalbum6.html";
	nextAlbumLink = "fotoalbum8.html";
} else if (currentPage.includes("fotoalbum8.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "8 месяцев";
	prevAlbumLink = "fotoalbum7.html";
	nextAlbumLink = "fotoalbum9.html";
} else if (currentPage.includes("fotoalbum9.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "9 месяцев";
	prevAlbumLink = "fotoalbum8.html";
	nextAlbumLink = "fotoalbum10.html";
} else if (currentPage.includes("fotoalbum10.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "10 месяцев";
	prevAlbumLink = "fotoalbum9.html";
	nextAlbumLink = "fotoalbum11.html";
} else if (currentPage.includes("fotoalbum11.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "11 месяцев";
	prevAlbumLink = "fotoalbum10.html";
	nextAlbumLink = "fotoalbum12.html";
} else if (currentPage.includes("fotoalbum12.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "1 годик";
	prevAlbumLink = "fotoalbum11.html";
	nextAlbumLink = "fotoalbum1.html";
// 	============Фото=========
} else if (currentPage.includes("foto.html")) {
	albumlink = "../../album.html";
	baseLink = "../fotoalbum/fotoalbum1.html";
// 	============Видеоальбом=========
} else if (currentPage.includes("videoalbum1.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "3 месяца";
	prevAlbumLink = "videoalbum9.html";
	nextAlbumLink = "videoalbum2.html";
} else if (currentPage.includes("videoalbum2.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "4 месяца";
	prevAlbumLink = "videoalbum1.html";
	nextAlbumLink = "videoalbum3.html";
} else if (currentPage.includes("videoalbum3.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "6 месяцев";
	prevAlbumLink = "videoalbum2.html";
	nextAlbumLink = "videoalbum4.html";
} else if (currentPage.includes("videoalbum4.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "7 месяцев";
	prevAlbumLink = "videoalbum3.html";
	nextAlbumLink = "videoalbum5.html";
} else if (currentPage.includes("videoalbum5.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "8 месяцев";
	prevAlbumLink = "videoalbum4.html";
	nextAlbumLink = "videoalbum6.html";
} else if
(currentPage.includes("videoalbum6.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "9 месяцев";
	prevAlbumLink = "videoalbum5.html";
	nextAlbumLink = "videoalbum7.html";
} else if (currentPage.includes("videoalbum7.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "10 месяцев";
	prevAlbumLink = "videoalbum6.html";
	nextAlbumLink = "videoalbum8.html";
} else if (currentPage.includes("videoalbum8.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "11 месяцев";
	prevAlbumLink = "videoalbum7.html";
	nextAlbumLink = "videoalbum9.html";
} else if (currentPage.includes("videoalbum9.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "1 годик";
	prevAlbumLink = "videoalbum8.html";
	nextAlbumLink = "videoalbum1.html";
	// 	============Видео=========
} else if (currentPage.includes("video.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum/videoalbum1.html";
} 

const headerHTML = `
<div class="container-fluid header text-center">
  <div class="container">
    <div class="row">
      <div class="foto col-md-3 d-none d-md-block d-lg-block">
        <img src="https://s3.radikal.cloud/2025/01/26/fotoeffadfbceb7b40f6.png" class="img-thumbnail col-10" alt="картинка">
      </div>
      <div class="video col-md-3 d-none d-md-block d-lg-block">
        <img src="https://s3.radikal.cloud/2025/01/26/video92fdaa8d31dcd56b.png" class="img-thumbnail col-10" alt="картинка">
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
<div class="container d-md-none d-sm-block">
  <div class="row">
    <div class="col">
      <div class="menu_album">
        <a href="${albumlink}">главная</a>
      </div>
    </div>
    <div class="col">
      <div class="menu_album">
        <a href="${albumlink}">меню</a>
      </div>
    </div>
    <div class="col">
      <div class="menu_album">
        <a href="${baseLink}">выход</a>
      </div>
    </div>    
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
      <div
      class="slide_album"><h4>${albumTitle}</h4></div>
    </div>
    <div class="col-3">
      <div class="slide_album"><a href="${nextAlbumLink}">&gt;</a></div>
    </div>
  </div>
</div>
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
document.getElementById('left').innerHTML = leftHTML;
document.getElementById('right').innerHTML = rightHTML;
document.getElementById('footer').innerHTML = footerHTML;

let activeIds = [];

// Определяем активные элементы на основе текущей страницы
if (currentPage.includes("album.html")) {
    document.getElementById('active-album-menu').classList.add('active');
    document.querySelector('#right #active-album-menu')?.classList.add('active');
} else if (currentPage.includes("fotoalbum1.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum2.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum3.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum4.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum5.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum6.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum7.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum8.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum9.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum10.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum11.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("fotoalbum12.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("videoalbum1.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("videoalbum2.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("videoalbum3.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("videoalbum4.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("videoalbum5.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("videoalbum6.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("videoalbum7.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("videoalbum8.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("videoalbum9.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("foto.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("video.html")) {
	activeIds.push("active-video");
}
// Применяем класс "active" к соответствующим элементам меню
activeIds.forEach(id => {
	const element = document.getElementById(id);
	if (element) {
		element.classList.add("active");
	}
});