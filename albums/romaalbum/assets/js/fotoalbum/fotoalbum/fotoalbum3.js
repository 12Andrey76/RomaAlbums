const albums = [
  {
		title: '3 Месяца',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/219b15f297b9f2d81f.th.jpeg', href: '../foto/foto.html#slide17', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/22123214bd1c7742fd.th.jpeg', href: '../foto/foto.html#slide18', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/23f7424ad2cbcaec2b.th.jpeg', href: '../foto/foto.html#slide19', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/2412f9ff4a8e61cdc8.th.jpeg', href: '../foto/foto.html#slide20', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/26/25354d1596203ed20a.th.jpeg', href: '../foto/foto.html#slide21', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/26e0d311ef38e2a64e.th.jpeg', href: '../foto/foto.html#slide22', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/29bf4dde8180d98eb4.th.jpeg', href: '../foto/foto.html#slide23', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/26/302df5d674fd891a8a.th.jpeg', href: '../foto/foto.html#slide24', alt: 'preview 8' },
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