const albums = [
  {
		title: '2 Месяца',
		images: [
			{ src: 'https://i1.wampi.ru/2024/01/18/14.th.jpg', href: '../foto/foto.html#slide10', alt: 'preview 1' },
			{ src: 'https://i8.wampi.ru/2024/01/18/15.th.jpg', href: '../foto/foto.html#slide11', alt: 'preview 2' },
			{ src: 'https://im.wampi.ru/2024/01/18/16.th.jpg', href: '../foto/foto.html#slide12', alt: 'preview 3' },
      { src: 'https://i1.wampi.ru/2024/01/18/17.th.jpg', href: '../foto/foto.html#slide13', alt: 'preview 4' },
			{ src: 'https://i8.wampi.ru/2024/01/18/18.th.jpg', href: '../foto/foto.html#slide14', alt: 'preview 5' },
			{ src: 'https://im.wampi.ru/2024/01/18/19.th.jpg', href: '../foto/foto.html#slide15', alt: 'preview 6' },
      { src: 'https://i1.wampi.ru/2024/01/18/20.th.jpg', href: '../foto/foto.html#slide16', alt: 'preview 7' },
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