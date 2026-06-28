const currentPage = window.location.pathname;

// Базовые переменные
let baseLink = "../../index.html";
let albumlink = "album.html";
let albumTitle = "Альбомы";

// ========== ОПРЕДЕЛЕНИЕ СТРАНИЦЫ ==========

if (currentPage.includes("album.html")) {
  // Если это страница album.html (любая папка)
  albumlink = "album.html";
  baseLink = "../../index.html";
  albumTitle = "Альбомы";
}
else if (currentPage.includes("reader.html")) {
  // Для страницы просмотра альбома добавляем якорь в зависимости от типа
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  if (type === 'photo') {
    albumlink = "../album.html#photomenu";
  } else if (type === 'video') {
    albumlink = "../album.html#videomenu";
  } else {
    albumlink = "../album.html"; // fallback
  }
  baseLink = "../../../index.html";
  albumTitle = "";   // заполняется reader.js
}

// ========== ШАБЛОНЫ ==========

const headerHTML = `
<div class="container-fluid header">
  <div class="container">
    <div class="logo col-12 row text-center">
      <h1><a href="${albumlink}">СЕМЕЙНЫЙ АЛЬБОМ</a></h1>
    </div>
  </div>
</div>
`;

const menuHTML = `
<div class="row">
  <div class="col-12 text-center d-md-none d-sm-block">
    <div class="menu_album"><a id="back-to-blocks-link" href="#">К БЛОКАМ</a></div>
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

// В navHTML теперь используется <p class="album-title">
const navHTML = `
<div class="row">              
  <div class="col-12 text-center">
    <div class="album"><h4 class="album-title">${albumTitle}</h4></div>
  </div>
</div>
`;

// Кнопки для карусели (используются только на album.html)
const buttonHTML = `
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
`;

const sidebarHTML = `
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text"><a href="${albumlink}">ГЛАВНАЯ</a></p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text"><a href="${baseLink}">ВЫХОД</a></p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="back-to-blocks-link"><a href="#">К БЛОКАМ</a></p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text"><a href="${albumlink}" id="content-menu">МЕНЮ АЛЬБОМА</a></p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="active-photo-album">ФОТОАЛЬБОМ</p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="active-photo">ФОТО</p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="active-video-album">ВИДЕОАЛЬБОМ</p>
  </div>
</div>
<div class="card text-bg-white mb-3">
  <div class="card-body">
    <p class="card-text" id="active-video">ВИДЕО</p>
  </div>
</div>
`;

const footerHTML = `
<footer class="text-center">
  <h1>&copy; 2021 - <span id="year"></span> СЕМЕЙНЫЙ АЛЬБОМ</h1> 
</footer>
`;

// Вставка компонентов
document.getElementById('header').innerHTML = headerHTML;
document.getElementById('menu').innerHTML = menuHTML;

const navContainer = document.getElementById('nav');
if (navContainer) navContainer.innerHTML = navHTML;

// --- ВСТАВЛЯЕМ КНОПКИ ТОЛЬКО НА album.html (любая папка) ---
if (currentPage.includes("album.html")) {
  document.getElementById('button').innerHTML = buttonHTML;
} else {
  document.getElementById('button').innerHTML = '';
}

document.getElementById('sidebar').innerHTML = sidebarHTML;
document.getElementById('footer').innerHTML = footerHTML;

const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = currentYear;

// Подсветка активных пунктов
let activeIds = [];

if (currentPage.includes("album.html")) {
    activeIds.push("content-menu");
} else if (currentPage.includes("reader.html")) {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  if (type === 'photo') {
    activeIds.push("active-photo-album");
  } else if (type === 'video') {
    activeIds.push("active-video-album");
  } else {
    activeIds.push("content-menu");
  }
}

activeIds.forEach(id => {
  const el = document.getElementById(id);
   if (el) el.classList.add("active");
});