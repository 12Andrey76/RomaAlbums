const albums = [
  {
		title: '1 Годик',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/13578ac2af557252607.th.jpeg', href: '../foto/foto.html#slide92', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/1421497868f091abc11.th.jpeg', href: '../foto/foto.html#slide93', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/14392a133b2402c33ac.th.jpeg', href: '../foto/foto.html#slide94', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/147a9bf06bcf95c9356.th.jpeg', href: '../foto/foto.html#slide95', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/14915eca4c7e5ac8c59.th.jpeg', href: '../foto/foto.html#slide96', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/150c05c666ae31f1f35.th.jpeg', href: '../foto/foto.html#slide97', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/26/1517c2939b1f58888a4.th.jpeg', href: '../foto/foto.html#slide98', alt: 'preview 7' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/1534d2586723577dac6.th.jpeg', href: '../foto/foto.html#slide99', alt: 'preview 8' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/154194f9336d9994801.th.jpeg', href: '../foto/foto.html#slide100', alt: 'preview 9' },
      { src: 'https://s3.radikal.cloud/2025/01/26/1565c3d7fb9c75b7e39.th.jpeg', href: '../foto/foto.html#slide101', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/158c233401d607d8dde.th.jpeg', href: '../foto/foto.html#slide102', alt: 'preview 11' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/15928b3c9e3c6d10c37.th.jpeg', href: '../foto/foto.html#slide103', alt: 'preview 12' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/161109740446aa02f41.th.jpeg', href: '../foto/foto.html#slide104', alt: 'preview 13' },
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