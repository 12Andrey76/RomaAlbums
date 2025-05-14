const albums = [
  {
		title: '5 Месяцев',
		images: [
			{ src: 'https://im.wampi.ru/2024/01/18/154ead15b873e9747.th.jpg', href: '../foto/foto.html#slide27', alt: 'preview 1' },
			{ src: 'https://i1.wampi.ru/2024/01/18/2.th.jpg', href: '../foto/foto.html#slide28', alt: 'preview 2' },
			{ src: 'https://i8.wampi.ru/2024/01/18/3.th.jpg', href: '../foto/foto.html#slide29', alt: 'preview 3' },
      { src: 'https://im.wampi.ru/2024/01/18/4.th.jpg', href: '../foto/foto.html#slide30', alt: 'preview 4' },
      { src: 'https://im.wampi.ru/2024/01/18/669430ea045e98c64.th.jpg', href: '../foto/foto.html#slide31', alt: 'preview 5' },
			{ src: 'https://i1.wampi.ru/2024/01/18/750c3e17083e3b713.th.jpg', href: '../foto/foto.html#slide32', alt: 'preview 6' },
			{ src: 'https://im.wampi.ru/2024/01/18/9.th.jpg', href: '../foto/foto.html#slide33', alt: 'preview 7' },
      { src: 'https://i1.wampi.ru/2024/01/18/10.th.jpg', href: '../foto/foto.html#slide34', alt: 'preview 8' },
      { src: 'https://i8.wampi.ru/2024/01/18/11.th.jpg', href: '../foto/foto.html#slide35', alt: 'preview 9' },
			{ src: 'https://i8.wampi.ru/2024/01/18/12c6e036eb4e0570fa.th.jpg', href: '../foto/foto.html#slide36', alt: 'preview 10' },
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