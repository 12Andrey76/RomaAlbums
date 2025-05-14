const albums = [
	{
		title: '3 Месяца',
		images: [
			{ src: 'https://i8.wampi.ru/2024/01/19/1.th.jpg', href: '../video/video.html#slide1', alt: 'preview 1' },
			{ src: 'https://im.wampi.ru/2024/01/19/2.th.jpg', href: '../video/video.html#slide2', alt: 'preview 2' },
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
