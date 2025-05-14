const albums = [
  {
		title: '4 Месяца',
		images: [
			{ src: 'https://i8.wampi.ru/2024/01/18/1.th.jpg', href: '../foto/foto.html#slide25', alt: 'preview 1' },
			{ src: 'https://im.wampi.ru/2024/01/18/2e2b972c14fb114d9.th.jpg', href: '../foto/foto.html#slide26', alt: 'preview 2' },
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