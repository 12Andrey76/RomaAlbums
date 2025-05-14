const albums = [
  {
		title: '8 Месяцев',
		images: [
			{ src: 'https://i8.wampi.ru/2024/01/19/15.th.jpg', href: '../video/video.html#slide15', alt: 'preview 1' },
			{ src: 'https://im.wampi.ru/2024/01/19/16.th.jpg', href: '../video/video.html#slide16', alt: 'preview 2' },
			{ src: 'https://i1.wampi.ru/2024/01/19/17.th.jpg', href: '../video/video.html#slide17', alt: 'preview 3' },
		],
	}
	// Добавьте другие блоки аналогично
];

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
