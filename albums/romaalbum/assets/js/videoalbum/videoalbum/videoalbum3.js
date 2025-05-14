const albums = [
 {
		title: '6 Месяцев',
		images: [
			{ src: 'https://i1.wampi.ru/2024/01/19/5.th.jpg', href: '../video/video.html#slide5', alt: 'preview 1' },
			{ src: 'https://i8.wampi.ru/2024/01/19/6.th.jpg', href: '../video/video.html#slide6', alt: 'preview 2' },
			{ src: 'https://im.wampi.ru/2024/01/19/7.th.jpg', href: '../video/video.html#slide7', alt: 'preview 3' },
      { src: 'https://i1.wampi.ru/2024/01/19/8.th.jpg', href: '../video/video.html#slide8', alt: 'preview 4' },
      { src: 'https://i8.wampi.ru/2024/01/19/9.th.jpg', href: '../video/video.html#slide9', alt: 'preview 5' },
			{ src: 'https://im.wampi.ru/2024/01/19/10.th.jpg', href: '../video/video.html#slide10', alt: 'preview 6' },
			{ src: 'https://i1.wampi.ru/2024/01/19/11.th.jpg', href: '../video/video.html#slide11', alt: 'preview 7' },
      { src: 'https://i8.wampi.ru/2024/01/19/12.th.jpg', href: '../video/video.html#slide12', alt: 'preview 8' },
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
