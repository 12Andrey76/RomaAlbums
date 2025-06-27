const albums = [
  {
		title: '8 Месяцев',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/06/22/15aff4d8cc980d1ce4.th.jpg', href: '../video/video.html#slide15', alt: 'preview 1' },
			{ src: 'https://s2.radikal.cloud/2025/06/22/16613e599a737fd0d2.th.jpg', href: '../video/video.html#slide16', alt: 'preview 2' },
			{ src: 'https://s2.radikal.cloud/2025/06/22/17affc5ca9c84deb14.th.jpg', href: '../video/video.html#slide17', alt: 'preview 3' },
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
