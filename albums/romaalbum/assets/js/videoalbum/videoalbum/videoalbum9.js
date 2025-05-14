const albums = [
	{
		title: '1 Годик',
		images: [
			{ src: 'https://im.wampi.ru/2024/01/19/32.th.jpg', href: '../video/video.html#slide32', alt: 'preview 1' },
			{ src: 'https://i1.wampi.ru/2024/01/19/33.th.jpg', href: '../video/video.html#slide33', alt: 'preview 2' },
			{ src: 'https://i8.wampi.ru/2024/01/19/34.th.jpg', href: '../video/video.html#slide34', alt: 'preview 3' },
		],
	},
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
