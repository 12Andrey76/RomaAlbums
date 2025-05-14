const albums = [
	{
		title: '1 Месяц',
		images: [
			{ src: 'https://im.wampi.ru/2024/01/18/12faf289684f432f2.th.jpg', href: '../foto/foto.html#slide1', alt: 'preview 1' },
			{ src: 'https://i1.wampi.ru/2024/01/18/32632531b81097185.th.jpg', href: '../foto/foto.html#slide2', alt: 'preview 2' },
			{ src: 'https://i8.wampi.ru/2024/01/18/4.th.jpg', href: '../foto/foto.html#slide3', alt: 'preview 3' },
      { src: 'https://i1.wampi.ru/2024/01/18/6.th.jpg', href: '../foto/foto.html#slide4', alt: 'preview 4' },
      { src: 'https://i1.wampi.ru/2024/01/18/9.th.jpg', href: '../foto/foto.html#slide5', alt: 'preview 5' },
			{ src: 'https://i8.wampi.ru/2024/01/18/10.th.jpg', href: '../foto/foto.html#slide6', alt: 'preview 6' },
			{ src: 'https://im.wampi.ru/2024/01/18/11.th.jpg', href: '../foto/foto.html#slide7', alt: 'preview 7' },
      { src: 'https://i8.wampi.ru/2024/01/18/12.th.jpg', href: '../foto/foto.html#slide8', alt: 'preview 8' },
      { src: 'https://i8.wampi.ru/2024/01/18/13..th.jpg', href: '../foto/foto.html#slide9', alt: 'preview 9' },
		],
	}
]

function loadScript(url) {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = url;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
		document.head.appendChild(script);
	});
}

// Загрузка скрипта slides.js
loadScript('../../assets/js/js-component/prev-slides.js')
	.then(() => {
		console.log('Slides script loaded successfully');
	})
	.catch(error => {
		console.error(error);
	});