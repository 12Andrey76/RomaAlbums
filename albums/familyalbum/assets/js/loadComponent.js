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
} else if (currentPage.includes("fotoalbum1.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Фото 1 год";
	prevAlbumLink = "fotoalbum5.html";
	nextAlbumLink = "fotoalbum2.html";
} else if (currentPage.includes("fotoalbum2.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Фото 2 года";
	prevAlbumLink = "fotoalbum1.html";
	nextAlbumLink = "fotoalbum3.html";
} else if (currentPage.includes("fotoalbum3.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Фото 3 года";
	prevAlbumLink = "fotoalbum2.html";
	nextAlbumLink = "fotoalbum4.html";
} else if (currentPage.includes("fotoalbum4.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Фото 4 года";
	prevAlbumLink = "fotoalbum3.html";
	nextAlbumLink = "fotoalbum5.html";
} else if (currentPage.includes("fotoalbum5.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Фото 5 лет";
	prevAlbumLink = "fotoalbum4.html";
	nextAlbumLink = "fotoalbum1.html";

} else if (currentPage.includes("foto1.html")) {
	albumlink = "../../album.html";
	baseLink = "../fotoalbum/fotoalbum1.html";
} else if (currentPage.includes("foto2.html")) {
	albumlink = "../../album.html";
	baseLink = "../fotoalbum/fotoalbum2.html";
} else if (currentPage.includes("foto3.html")) {
	albumlink = "../../album.html";
	baseLink = "../fotoalbum/fotoalbum3.html";
} else if (currentPage.includes("foto4.html")) {
	albumlink = "../../album.html";
	baseLink = "../fotoalbum/fotoalbum4.html";
} else if (currentPage.includes("foto5.html")) {
	albumlink = "../../album.html";
	baseLink = "../fotoalbum/fotoalbum5.html";
	//video =================================
} else if (currentPage.includes("videoalbum1.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Видео 1 год";
	prevAlbumLink = "videoalbum5.html";
	nextAlbumLink = "videoalbum2.html";
} else if (currentPage.includes("videoalbum2.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Видео 2 года";
	prevAlbumLink = "videoalbum1.html";
	nextAlbumLink = "videoalbum3.html";
} else if (currentPage.includes("videoalbum3.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Видео 3 года";
	prevAlbumLink = "videoalbum2.html";
	nextAlbumLink = "videoalbum4.html";
} else if (currentPage.includes("videoalbum4.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Видео 4 года";
	prevAlbumLink = "videoalbum3.html";
	nextAlbumLink = "videoalbum5.html";
} else if (currentPage.includes("videoalbum5.html")) {
	albumlink = "../../album.html";
	baseLink = "../../../../index.html";
	albumTitle = "Видео 5 лет";
	prevAlbumLink = "videoalbum4.html";
	nextAlbumLink = "videoalbum1.html";
	
} else if (currentPage.includes("video1.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum/videoalbum1.html";
} else if (currentPage.includes("video2.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum/videoalbum2.html";
} else if (currentPage.includes("video3.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum/videoalbum3.html";
} else if (currentPage.includes("video4.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum/videoalbum4.html";
} else if (currentPage.includes("video5.html")) {
	albumlink = "../../album.html";
	baseLink = "../videoalbum/videoalbum5.html";
}

// Определяем HTML-код для каждой секции
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
<div class="container d-md-none d-sm-block">
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
</div>
`;

const navHTML = `
<div class="container">
	<div class="row">			
		<div class="col-3 text-center">
			<div class="album"><a href="${prevAlbumLink}">&lt;</a></div>
		</div>
		<div class="col-6 text-center">
			<div class="album"><p>${albumTitle}</p></div>
		</div>
		<div class="col-3 text-center">
			<div class="album"><a href="${nextAlbumLink}">&gt;</a></div>
		</div>
	</div>
</div>
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
  <h1>&copy; 2021 - 2024 СЕМЕЙНЫЙ АЛЬБОМ</h1>
</footer>
`;

// Вставляем HTML-код в соответствующие контейнеры
document.getElementById('header').innerHTML = headerHTML;
document.getElementById('menu').innerHTML = menuHTML;
const navContainer = document.getElementById('nav');
if (navContainer) {
    navContainer.innerHTML = navHTML; // Устанавливаем navHTML только если элемент существует
}

document.getElementById('sidebar').innerHTML = sidebarHTML;
document.getElementById('footer').innerHTML = footerHTML;

let activeIds = [];

// Определяем активные элементы на основе текущей страницы
if (currentPage.includes("album.html")) {
	activeIds.push("active-album-menu");
} else if (currentPage.includes("fotoalbum1.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("foto1.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("videoalbum1.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("video1.html")) {
	activeIds.push("active-video");
} else if (currentPage.includes("fotoalbum2.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("foto2.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("videoalbum2.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("video2.html")) {
	activeIds.push("active-video");
} else if (currentPage.includes("fotoalbum3.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("foto3.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("videoalbum3.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("video3.html")) {
	activeIds.push("active-video");
} else if (currentPage.includes("fotoalbum4.html")) {
	activeIds.push("active-photo-album");
} else if (currentPage.includes("foto4.html")) {
	activeIds.push("active-photo");
} else if (currentPage.includes("videoalbum4.html")) {
	activeIds.push("active-video-album");
} else if (currentPage.includes("video4.html")) {
	activeIds.push("active-video");
}  

// Применяем класс "active" к соответствующим элементам меню
activeIds.forEach(id => {
	const element = document.getElementById(id);
	if (element) {
		element.classList.add("active");
	}
});