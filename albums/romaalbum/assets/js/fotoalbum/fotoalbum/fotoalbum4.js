const albums = [
  {
		title: '4 Месяца',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/3159424de88dc824a6.th.jpeg', href: '../foto/foto.html#slide25', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/32730e1a6def528d31.th.jpeg', href: '../foto/foto.html#slide26', alt: 'preview 2' },
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