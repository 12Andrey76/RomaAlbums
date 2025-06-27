const albums = [
	{
		title: '1 Годик',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/06/22/32f7cdaa3389b42d85.th.jpg', href: '../video/video.html#slide32', alt: 'preview 1' },
			{ src: 'https://s2.radikal.cloud/2025/06/22/33d60248f0247bdd3c.th.jpg', href: '../video/video.html#slide33', alt: 'preview 2' },
			{ src: 'https://s2.radikal.cloud/2025/06/22/343c9bb14685fb2547.th.jpg', href: '../video/video.html#slide34', alt: 'preview 3' },
		],
	},
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
