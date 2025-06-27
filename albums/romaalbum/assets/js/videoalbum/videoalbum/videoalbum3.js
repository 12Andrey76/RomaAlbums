const albums = [
 {
		title: '6 Месяцев',
		images: [
			{ src: 'https://s2.radikal.cloud/2025/06/22/5772226c0b7d297eb.th.jpg', href: '../video/video.html#slide5', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/06/22/6e4576a3528fe9dab.th.jpg', href: '../video/video.html#slide6', alt: 'preview 2' },
			{ src: 'https://s2.radikal.cloud/2025/06/22/7e883492ed3cfee49.th.jpg', href: '../video/video.html#slide7', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/06/22/85376dfcab4e4c41f.th.jpg', href: '../video/video.html#slide8', alt: 'preview 4' },
      { src: 'https://s2.radikal.cloud/2025/06/22/94d60dcbb971457de.th.jpg', href: '../video/video.html#slide9', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/06/22/10b0a9ad444e2be9d3.th.jpg', href: '../video/video.html#slide10', alt: 'preview 6' },
			{ src: 'https://s2.radikal.cloud/2025/06/22/11503dbc82c7a86648.th.jpg', href: '../video/video.html#slide11', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/06/22/12b96f07ea8b9bdd0f.th.jpg', href: '../video/video.html#slide12', alt: 'preview 8' },
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
