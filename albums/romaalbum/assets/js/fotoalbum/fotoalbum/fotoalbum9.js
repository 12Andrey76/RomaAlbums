const albums = [
  {
		title: '9 Месяцев',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/86c7919b9e713a95cc.th.jpeg', href: '../foto/foto.html#slide67', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/87ea47e2bb39e134d7.th.jpeg', href: '../foto/foto.html#slide68', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/882565f77f4295f0e2.th.jpeg', href: '../foto/foto.html#slide69', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/9128d2b92d80ec6673.th.jpeg', href: '../foto/foto.html#slide70', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/926d6014b8e06d687d.th.jpeg', href: '../foto/foto.html#slide71', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/938ec8a2a6fed57ada.th.jpeg', href: '../foto/foto.html#slide72', alt: 'preview 6' },
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