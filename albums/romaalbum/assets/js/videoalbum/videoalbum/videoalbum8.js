const albums = [
  {
		title: '11 Месяцев',
		images: [
			{ src: 'https://s2.radikal.cloud/2025/06/22/2768105fc1f5cb5a1b.th.jpg', href: '../video/video.html#slide27', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/06/22/2805b189135d916f9b.th.jpg', href: '../video/video.html#slide28', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/06/22/29aa2890c2d616ac87.th.jpg', href: '../video/video.html#slide29', alt: 'preview 3' },
      { src: 'https://s2.radikal.cloud/2025/06/22/309b6416d1810f3ef7.th.jpg', href: '../video/video.html#slide30', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/06/22/312eacbf3a48330b59.th.jpg', href: '../video/video.html#slide31', alt: 'preview 5' },
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
