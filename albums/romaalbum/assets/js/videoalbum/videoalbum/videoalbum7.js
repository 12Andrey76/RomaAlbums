const albums = [
 {
		title: '10 Месяцев',
		images: [
			{ src: 'https://i8.wampi.ru/2024/01/19/21.th.jpg', href: '../video/video.html#slide21', alt: 'preview 1' },
			{ src: 'https://im.wampi.ru/2024/01/19/22.th.jpg', href: '../video/video.html#slide22', alt: 'preview 2' },
			{ src: 'https://i1.wampi.ru/2024/01/19/23.th.jpg', href: '../video/video.html#slide23', alt: 'preview 3' },
      { src: 'https://i8.wampi.ru/2024/01/19/24.th.jpg', href: '../video/video.html#slide24', alt: 'preview 4' },
			{ src: 'https://im.wampi.ru/2024/01/19/25.th.jpg', href: '../video/video.html#slide25', alt: 'preview 5' },
			{ src: 'https://i1.wampi.ru/2024/01/19/26.th.jpg', href: '../video/video.html#slide26', alt: 'preview 6' },
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
