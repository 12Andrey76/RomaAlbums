const albums = [
 {
		title: '10 Месяцев',
		images: [
			{ src: 'https://s2.radikal.cloud/2025/06/22/216338be5c00fdb901.th.jpg', href: '../video/video.html#slide21', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/06/22/22dba22845a34e7453.th.jpg', href: '../video/video.html#slide22', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/06/22/2308a3b53942596420.th.jpg', href: '../video/video.html#slide23', alt: 'preview 3' },
      { src: 'https://s2.radikal.cloud/2025/06/22/24b1cf6bb28c2bf073.th.jpg', href: '../video/video.html#slide24', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/06/22/25a7d3ea03f405044a.th.jpg', href: '../video/video.html#slide25', alt: 'preview 5' },
			{ src: 'https://s2.radikal.cloud/2025/06/22/2628b2f3043d274025.th.jpg', href: '../video/video.html#slide26', alt: 'preview 6' },
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
