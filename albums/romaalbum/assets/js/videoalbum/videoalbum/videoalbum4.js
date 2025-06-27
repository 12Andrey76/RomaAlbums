const albums = [
	{
		title: '7 Месяцев',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/06/22/130ee0e16937973845.th.jpg', href: '../video/video.html#slide13', alt: 'preview 1' },
			{ src: 'https://s2.radikal.cloud/2025/06/22/14703bc069fdad51f9.th.jpg', href: '../video/video.html#slide14', alt: 'preview 2' },
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
