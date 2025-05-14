const albums = [
  {
		title: '7 Месяцев',
		images: [
			{ src: 'https://im.wampi.ru/2024/01/18/14fb9d099d347e491.th.jpg', href: '../foto/foto.html#slide52', alt: 'preview 1' },
			{ src: 'https://im.wampi.ru/2024/01/18/40f0f7f2da13bc02b.th.jpg', href: '../foto/foto.html#slide53', alt: 'preview 2' },
			{ src: 'https://i1.wampi.ru/2024/01/18/5.th.jpg', href: '../foto/foto.html#slide54', alt: 'preview 3' },
      { src: 'https://im.wampi.ru/2024/01/18/7.th.jpg', href: '../foto/foto.html#slide55', alt: 'preview 4' },
			{ src: 'https://i1.wampi.ru/2024/01/18/8.th.jpg', href: '../foto/foto.html#slide56', alt: 'preview 5' },
			{ src: 'https://i8.wampi.ru/2024/01/18/9.th.jpg', href: '../foto/foto.html#slide57', alt: 'preview 6' },
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