const albums = [
	{
		title: '1 Месяц',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/158eb7074b03e9ad1.th.jpeg', href: '../foto/foto.html#slide1', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/3f257bfa0471f19a5.th.jpeg', href: '../foto/foto.html#slide2', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/476e4b24a45184277.th.jpeg', href: '../foto/foto.html#slide3', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/6a0cc80b8a5bd355d.th.jpeg', href: '../foto/foto.html#slide4', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/26/910b5f504151745c1.th.jpeg', href: '../foto/foto.html#slide5', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/107d116ef5382467f0.th.jpeg', href: '../foto/foto.html#slide6', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/11ef2e37f908bfac95.th.jpeg', href: '../foto/foto.html#slide7', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/26/121a52eff6edb9893d.th.jpeg', href: '../foto/foto.html#slide8', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/26/13.f6f754fea56ff0cc.th.jpeg', href: '../foto/foto.html#slide9', alt: 'preview 9' },
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