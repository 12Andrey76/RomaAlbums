const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://s2.radikal.cloud/2025/04/22/1b5bc6e786501801a.th.jpg', href: '../foto/foto5.html#slide1', alt: 'preview 1' },
			{ src: 'https://s2.radikal.cloud/2025/04/22/222b433e76ac36e0d.th.jpg', href: '../foto/foto5.html#slide2', alt: 'preview 2' },

		],
	},
	
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
