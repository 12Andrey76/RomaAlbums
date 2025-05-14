const albums = [
  {
		title: '10 Месяцев',
		images: [
			{ src: 'https://im.wampi.ru/2024/01/18/1698b3b0bfddc113e.th.jpg', href: '../foto/foto.html#slide73', alt: 'preview 1' },
			{ src: 'https://i1.wampi.ru/2024/01/18/222dbb07b0e64d5e5.th.jpg', href: '../foto/foto.html#slide74', alt: 'preview 2' },
			{ src: 'https://im.wampi.ru/2024/01/18/4b524cbd57cd90084.th.jpg', href: '../foto/foto.html#slide75', alt: 'preview 3' },
      { src: 'https://i1.wampi.ru/2024/01/18/5fccf0c7d7174e139.th.jpg', href: '../foto/foto.html#slide76', alt: 'preview 4' },
			{ src: 'https://i8.wampi.ru/2024/01/18/6007ae242004d5da5.th.jpg', href: '../foto/foto.html#slide77', alt: 'preview 5' },
			{ src: 'https://im.wampi.ru/2024/01/18/7b61984ddb9c45442.th.jpg', href: '../foto/foto.html#slide78', alt: 'preview 6' },
      { src: 'https://i8.wampi.ru/2024/01/18/9bc2e5dd1d16e2493.th.jpg', href: '../foto/foto.html#slide79', alt: 'preview 7' },
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