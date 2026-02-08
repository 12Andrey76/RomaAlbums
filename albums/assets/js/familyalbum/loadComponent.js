// Получаем текущий путь страницы
const currentPage = window.location.pathname;

// Пример динамической генерации ссылок в зависимости от текущей страницы
let baseLink = "../../index.html";
let albumlink = "album.html"
let albumTitle = "Фотоальбом";
let prevAlbumLink = "photoalbum4.html";
let nextAlbumLink = "photoalbum2.html";

if (currentPage.includes("album.html")) {
	albumlink = "album.html";
} else if  (currentPage.includes("photoalbum1.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Фото 1 год";
	prevAlbumLink = "photoalbum5.html";
	nextAlbumLink = "photoalbum2.html";
} else if (currentPage.includes("photoalbum2.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Фото 2 года";
	prevAlbumLink = "photoalbum1.html";
	nextAlbumLink = "photoalbum3.html";
} else if (currentPage.includes("photoalbum3.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Фото 3 года";
	prevAlbumLink = "photoalbum2.html";
	nextAlbumLink = "photoalbum4.html";
} else if (currentPage.includes("photoalbum4.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Фото 4 года";
	prevAlbumLink = "photoalbum3.html";
	nextAlbumLink = "photoalbum5.html";
} else if (currentPage.includes("photoalbum5.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Фото 5 лет";
	prevAlbumLink = "photoalbum4.html";
	nextAlbumLink = "photoalbum1.html";
// Год1==============
} else if (currentPage.includes("photo1/photo1.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum1.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "photo6.html";
	nextAlbumLink = "photo2.html";
} else if (currentPage.includes("photo1/photo2.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum1.html";
	albumTitle = "Блок #2";
	prevAlbumLink = "photo1.html";
	nextAlbumLink = "photo3.html";
} else if (currentPage.includes("photo1/photo3.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum1.html";
	albumTitle = "Блок #3";
	prevAlbumLink = "photo2.html";
	nextAlbumLink = "photo4.html";
} else if (currentPage.includes("photo1/photo4.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum1.html";
	albumTitle = "Блок #4";
	prevAlbumLink = "photo3.html";
	nextAlbumLink = "photo5.html";
} else if (currentPage.includes("photo1/photo5.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum1.html";
	albumTitle = "Блок #5";
	prevAlbumLink = "photo4.html";
	nextAlbumLink = "photo6.html";
} else if (currentPage.includes("photo1/photo6.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum1.html";
	albumTitle = "Блок #6";
	prevAlbumLink = "photo5.html";
	nextAlbumLink = "photo1.html";
	// Год2==============
	} else if (currentPage.includes("photo2/photo1.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum2.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "photo6.html";
	nextAlbumLink = "photo2.html";
} else if (currentPage.includes("photo2/photo2.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum2.html";
	albumTitle = "Блок #2";
	prevAlbumLink = "photo1.html";
	nextAlbumLink = "photo3.html";
} else if (currentPage.includes("photo2/photo3.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum2.html";
	albumTitle = "Блок #3";
	prevAlbumLink = "photo2.html";
	nextAlbumLink = "photo4.html";
} else if (currentPage.includes("photo2/photo4.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum2.html";
	albumTitle = "Блок #4";
	prevAlbumLink = "photo3.html";
	nextAlbumLink = "photo5.html";
} else if (currentPage.includes("photo2/photo5.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum2.html";
	albumTitle = "Блок #5";
	prevAlbumLink = "photo4.html";
	nextAlbumLink = "photo6.html";
} else if (currentPage.includes("photo2/photo6.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum2.html";
	albumTitle = "Блок #6";
	prevAlbumLink = "photo5.html";
	nextAlbumLink = "photo1.html";
 // Год3==============
} else if (currentPage.includes("photo3/photo1.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum3.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "photo6.html";
	nextAlbumLink = "photo2.html";
} else if (currentPage.includes("photo3/photo2.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum3.html";
	albumTitle = "Блок #2";
	prevAlbumLink = "photo1.html";
	nextAlbumLink = "photo3.html";
} else if (currentPage.includes("photo3/photo3.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum3.html";
	albumTitle = "Блок #3";
	prevAlbumLink = "photo2.html";
	nextAlbumLink = "photo4.html";
} else if (currentPage.includes("photo3/photo4.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum3.html";
	albumTitle = "Блок #4";
	prevAlbumLink = "photo3.html";
	nextAlbumLink = "photo5.html";
} else if (currentPage.includes("photo3/photo5.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum3.html";
	albumTitle = "Блок #5";
	prevAlbumLink = "photo4.html";
	nextAlbumLink = "photo6.html";
} else if (currentPage.includes("photo3/photo6.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum3.html";
	albumTitle = "Блок #6";
	prevAlbumLink = "photo5.html";
	nextAlbumLink = "photo1.html";
// Год4==============
} else if (currentPage.includes("photo4/photo1.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum4.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "photo3.html";
	nextAlbumLink = "photo2.html";
} else if (currentPage.includes("photo4/photo2.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum4.html";
	albumTitle = "Блок #2";
	prevAlbumLink = "photo1.html";
	nextAlbumLink = "photo3.html";
} else if (currentPage.includes("photo4/photo3.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum4.html";
	albumTitle = "Блок #3";
	prevAlbumLink = "photo2.html";
	nextAlbumLink = "photo1.html";
// Год5==============
} else if (currentPage.includes("photo5/photo1.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum5.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "photo5.html";
	nextAlbumLink = "photo2.html";
} else if (currentPage.includes("photo5/photo2.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum5.html";
	albumTitle = "Блок #2";
	prevAlbumLink = "photo1.html";
	nextAlbumLink = "photo3.html";
} else if (currentPage.includes("photo5/photo3.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum5.html";
	albumTitle = "Блок #3";
	prevAlbumLink = "photo2.html";
	nextAlbumLink = "photo4.html";
} else if (currentPage.includes("photo5/photo4.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum5.html";
	albumTitle = "Блок #4";
	prevAlbumLink = "photo3.html";
	nextAlbumLink = "photo5.html";
} else if (currentPage.includes("photo5/photo5.html")) {
	albumlink = "../../album.html";
	baseLink = "../photoalbum5.html";
	albumTitle = "Блок #5";
	prevAlbumLink = "photo4.html";
	nextAlbumLink = "photo1.html";
	//video =================================
} else if (currentPage.includes("videoalbum1.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Видео 1 год";
	prevAlbumLink = "videoalbum5.html";
	nextAlbumLink = "videoalbum2.html";
} else if (currentPage.includes("videoalbum2.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Видео 2 года";
	prevAlbumLink = "videoalbum1.html";
	nextAlbumLink = "videoalbum3.html";
} else if (currentPage.includes("videoalbum3.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Видео 3 года";
	prevAlbumLink = "videoalbum2.html";
	nextAlbumLink = "videoalbum4.html";
} else if (currentPage.includes("videoalbum4.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Видео 4 года";
	prevAlbumLink = "videoalbum3.html";
	nextAlbumLink = "videoalbum5.html";
} else if (currentPage.includes("videoalbum5.html")) {
	albumlink = "../album.html";
	baseLink = "../../../index.html";
	albumTitle = "Видео 5 лет";
	prevAlbumLink = "videoalbum4.html";
	nextAlbumLink = "videoalbum1.html";
	
} else if (currentPage.includes("video1/video1.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum1.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "video2.html";
	nextAlbumLink = "video2.html";
} else if (currentPage.includes("video1/video2.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum1.html";
	albumTitle = "Блок #2";
	prevAlbumLink = "video1.html";
	nextAlbumLink = "video1.html";
} else if (currentPage.includes("video2/video1.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum2.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "video3.html";
	nextAlbumLink = "video2.html";
} else if (currentPage.includes("video2/video2.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum2.html";
	albumTitle = "Блок #2";
	prevAlbumLink = "video1.html";
	nextAlbumLink = "video3.html";
} else if (currentPage.includes("video2/video3.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum2.html";
	albumTitle = "Блок #3";
	prevAlbumLink = "video2.html";
	nextAlbumLink = "video1.html";
} else if (currentPage.includes("video3/video1.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum3.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "video2.html";
	nextAlbumLink = "video2.html";
} else if (currentPage.includes("video3/video2.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum3.html";
	albumTitle = "Блок #2";
	prevAlbumLink = "video1.html";
	nextAlbumLink = "video1.html";
} else if (currentPage.includes("video4/video1.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum4.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "#";
	nextAlbumLink = "#";
} else if (currentPage.includes("video5/video1.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum5.html";
	albumTitle = "Блок #1";
	prevAlbumLink = "#";
	nextAlbumLink = "#";
}

const headerHTML =`
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
<div class="row">              
  <div class="col-3 text-center">
    <div class="album-left"><p><a href="${prevAlbumLink}">&lt;</a></p></div>
  </div>
  <div class="col-6 text-center">
    <div class="album"><p>${albumTitle}</p></div>
  </div>
  <div class="col-3 text-center">
    <div class="album-right"><p><a href="${nextAlbumLink}">&gt;</a></p></div>
  </div>
</div>
`;

const buttonHTML = `
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
`

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
		<p class="card-text""><a href="${albumlink}" id="active-album-menu">МЕНЮ АЛЬБОМА</a></p>
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
 <h1>&copy; 2021 -  <span id="year"></span> СЕМЕЙНЫЙ АЛЬБОМ</h1> 
</footer>
`;

document.getElementById('header').innerHTML = headerHTML;

document.getElementById('menu').innerHTML = menuHTML;

const navContainer = document.getElementById('nav');
if (navContainer) {
	navContainer.innerHTML = navHTML; // Устанавливаем navHTML только если элемент существует
}

document.getElementById('button').innerHTML = buttonHTML;

document.getElementById('sidebar').innerHTML = sidebarHTML;

document.getElementById('footer').innerHTML = footerHTML;

const currentYear = new Date().getFullYear(); const yearSpan = document.getElementById('year'); if (yearSpan) { yearSpan.textContent = currentYear; }

let activeIds = [];

// Определяем активные элементы на основе текущей страницы
if (currentPage.includes("album.html")) {
	activeIds.push("active-album-menu");
} else if (currentPage.includes("photoalbum1.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("photo1.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("videoalbum1.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("video1.html")) {
	activeIds.push("active-video");
} else if (currentPage.includes("photoalbum2.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("photo2.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("videoalbum2.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("video2.html")) {
	activeIds.push("active-video");
} else if (currentPage.includes("photoalbum3.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("photo3.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("videoalbum3.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("video3.html")) {
	activeIds.push("active-video");
} else if (currentPage.includes("photoalbum4.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("photo4.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("videoalbum4.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("video4.html")) {
	activeIds.push("active-video");
} else if (currentPage.includes("photoalbum5.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("photo5.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("videoalbum5.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("video5.html")) {
	activeIds.push("active-video");
}  

// Применяем класс "active" к соответствующим элементам меню
activeIds.forEach(id => {
	const element = document.getElementById(id);
	if (element) {
		element.classList.add("active");
	}
});
