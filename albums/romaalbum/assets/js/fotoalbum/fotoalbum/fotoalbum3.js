const albums = [
  {
		title: '3 Месяца',
		images: [
			{ src: 'https://i1.wampi.ru/2024/01/18/1.th.jpg', href: '../foto/foto.html#slide17', alt: 'preview 1' },
			{ src: 'https://i8.wampi.ru/2024/01/18/2ab3b07dc96fc5d01.th.jpg', href: '../foto/foto.html#slide18', alt: 'preview 2' },
			{ src: 'https://im.wampi.ru/2024/01/18/3.th.jpg', href: '../foto/foto.html#slide19', alt: 'preview 3' },
      { src: 'https://i1.wampi.ru/2024/01/18/4.th.jpg', href: '../foto/foto.html#slide20', alt: 'preview 4' },
      { src: 'https://i8.wampi.ru/2024/01/18/5.th.jpg', href: '../foto/foto.html#slide21', alt: 'preview 5' },
			{ src: 'https://im.wampi.ru/2024/01/18/6.th.jpg', href: '../foto/foto.html#slide22', alt: 'preview 6' },
			{ src: 'https://i1.wampi.ru/2024/01/18/9e378c414b211d812.th.jpg', href: '../foto/foto.html#slide23', alt: 'preview 7' },
      { src: 'https://i8.wampi.ru/2024/01/18/100d1a835825e0545d.th.jpg', href: '../foto/foto.html#slide24', alt: 'preview 8' },
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