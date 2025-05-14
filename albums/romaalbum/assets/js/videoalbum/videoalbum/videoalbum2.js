const albums = [
	{
		title: '4 Месяца',
		images: [
			{ src: 'https://i1.wampi.ru/2024/01/19/3.th.jpg', href: '../video/video.html#slide3', alt: 'preview 1' },
			{ src: 'https://i8.wampi.ru/2024/01/19/4.th.jpg', href: '../video/video.html#slide4', alt: 'preview 2' },
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
