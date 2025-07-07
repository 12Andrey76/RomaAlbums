const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://s2.radikal.cloud/2025/04/22/184a1c9a07010497a.th.jpg', href: '../video/video5.html#slide1', alt: 'preview 1' },
			{ src: 'https://s2.radikal.cloud/2025/04/22/2067ffd5c5808fe6b.th.jpg', href: '../video/video5.html#slide2', alt: 'preview 2' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/3af68c174640db867.th.jpg', href: '../video/video5.html#slide3', alt: 'preview 3' },
			{ src: 'https://s1.radikal.cloud/2025/05/19/40d8defc7491f8a2d.th.jpg', href: '../video/video5.html#slide4', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/07/07/10000034106feb369f9d153d80.th.jpg', href: '../video/video5.html#slide5', alt: 'preview 5' },

		],
	},
  
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