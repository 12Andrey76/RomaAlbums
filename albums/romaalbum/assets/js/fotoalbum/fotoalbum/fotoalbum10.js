const albums = [
  {
		title: '10 Месяцев',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/94915581363150e3a4.th.jpeg', href: '../foto/foto.html#slide73', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/97071bcdc856c368f2.th.jpeg', href: '../foto/foto.html#slide74', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/995a3828b65a6b66b9.th.jpeg', href: '../foto/foto.html#slide75', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/100f93011871f5ea062.th.jpeg', href: '../foto/foto.html#slide76', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/102520fa4539b52e38f.th.jpeg', href: '../foto/foto.html#slide77', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/1049f7739fc1ac459ee.th.jpeg', href: '../foto/foto.html#slide78', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/26/1064bec9546a2ee42e7.th.jpeg', href: '../foto/foto.html#slide79', alt: 'preview 7' },
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