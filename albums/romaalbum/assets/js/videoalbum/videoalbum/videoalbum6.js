const albums = [
	{
		title: '9 Месяцев',
		images: [
			{ src: 'https://s2.radikal.cloud/2025/06/22/18fba15717e6d4d155.th.jpg', href: '../video/video.html#slide18', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/06/22/19f8a9914acc86dad1.th.jpg', href: '../video/video.html#slide19', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/06/22/207dbffcb8d93df4fb.th.jpg', href: '../video/video.html#slide20', alt: 'preview 3' },
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
