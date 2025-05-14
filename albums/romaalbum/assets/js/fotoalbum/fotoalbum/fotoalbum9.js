const albums = [
  {
		title: '9 Месяцев',
		images: [
			{ src: 'https://i1.wampi.ru/2024/01/18/18ff1b565402d8df6.th.jpg', href: '../foto/foto.html#slide67', alt: 'preview 1' },
			{ src: 'https://i8.wampi.ru/2024/01/18/23d868f7ed1dfefae.th.jpg', href: '../foto/foto.html#slide68', alt: 'preview 2' },
			{ src: 'https://im.wampi.ru/2024/01/18/37324e5d9b6fd64df.th.jpg', href: '../foto/foto.html#slide69', alt: 'preview 3' },
      { src: 'https://im.wampi.ru/2024/01/18/6291ff2267ca8363a.th.jpg', href: '../foto/foto.html#slide70', alt: 'preview 4' },
			{ src: 'https://i1.wampi.ru/2024/01/18/7ebf09e34e9d68add.th.jpg', href: '../foto/foto.html#slide71', alt: 'preview 5' },
			{ src: 'https://i8.wampi.ru/2024/01/18/86cdc87f246af5fdc.th.jpg', href: '../foto/foto.html#slide72', alt: 'preview 6' },
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