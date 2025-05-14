const albums = [
  {
		title: '8 Месяцев',
		images: [
			{ src: 'https://i1.wampi.ru/2024/01/18/1be2fa1d55600fcb8.th.jpg', href: '../foto/foto.html#slide58', alt: 'preview 1' },
			{ src: 'https://im.wampi.ru/2024/01/18/2292caca2f3862db3.th.jpg', href: '../foto/foto.html#slide59', alt: 'preview 2' },
			{ src: 'https://i1.wampi.ru/2024/01/18/3a8b3352f9401c119.th.jpg', href: '../foto/foto.html#slide60', alt: 'preview 3' },
      { src: 'https://im.wampi.ru/2024/01/18/582c75ef8aafa1eb5.th.jpg', href: '../foto/foto.html#slide61', alt: 'preview 4' },
      { src: 'https://i8.wampi.ru/2024/01/18/78f9c02e059a0f609.th.jpg', href: '../foto/foto.html#slide62', alt: 'preview 5' },
			{ src: 'https://im.wampi.ru/2024/01/18/8af606334841a9c40.th.jpg', href: '../foto/foto.html#slide63', alt: 'preview 6' },
			{ src: 'https://i1.wampi.ru/2024/01/18/9a888af66cc059e23.th.jpg', href: '../foto/foto.html#slide64', alt: 'preview 7' },
      { src: 'https://im.wampi.ru/2024/01/18/116ca55ed5c23becc6.th.jpg', href: '../foto/foto.html#slide65', alt: 'preview 8' },
      { src: 'https://i1.wampi.ru/2024/01/18/122a6adedb3ce27eba.th.jpg', href: '../foto/foto.html#slide66', alt: 'preview 9' },
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