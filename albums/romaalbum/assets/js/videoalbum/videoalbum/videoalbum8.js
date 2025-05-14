const albums = [
  {
		title: '11 Месяцев',
		images: [
			{ src: 'https://i1.wampi.ru/2024/01/19/27.th.jpg', href: '../video/video.html#slide27', alt: 'preview 1' },
			{ src: 'https://i8.wampi.ru/2024/01/19/28.th.jpg', href: '../video/video.html#slide28', alt: 'preview 2' },
			{ src: 'https://im.wampi.ru/2024/01/19/29.th.jpg', href: '../video/video.html#slide29', alt: 'preview 3' },
      { src: 'https://i1.wampi.ru/2024/01/19/30.th.jpg', href: '../video/video.html#slide30', alt: 'preview 4' },
      { src: 'https://i8.wampi.ru/2024/01/19/31.th.jpg', href: '../video/video.html#slide31', alt: 'preview 5' },
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
