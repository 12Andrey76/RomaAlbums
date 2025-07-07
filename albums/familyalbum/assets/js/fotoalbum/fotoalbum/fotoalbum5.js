const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://s2.radikal.cloud/2025/04/22/1b5bc6e786501801a.th.jpg', href: '../foto/foto5.html#slide1', alt: 'preview 1' },
			{ src: 'https://s2.radikal.cloud/2025/04/22/222b433e76ac36e0d.th.jpg', href: '../foto/foto5.html#slide2', alt: 'preview 2' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/3b316f8ce6b20006c.th.jpg', href: '../foto/foto5.html#slide3', alt: 'preview 3' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/4048524a7cc50f79a.th.jpg', href: '../foto/foto5.html#slide4', alt: 'preview 4' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/599ec7c965db4ae46.th.jpg', href: '../foto/foto5.html#slide5', alt: 'preview 5' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/6cac88528ce9ed8c6.th.jpg', href: '../foto/foto5.html#slide6', alt: 'preview 6' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/75fbdc53076d7d94a.th.jpg', href: '../foto/foto5.html#slide7', alt: 'preview 7' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/8aa3ec5e19ea0d661.th.jpg', href: '../foto/foto5.html#slide8', alt: 'preview 8' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/9c1def78b826dc862.th.jpg', href: '../foto/foto5.html#slide9', alt: 'preview 9' },
			{ src: 'https://s1.radikal.cloud/2025/05/19/106b4e361664fe2d46.th.jpg', href: '../foto/foto5.html#slide10', alt: 'preview 10' },
			{ src: 'https://s1.radikal.cloud/2025/05/19/111f2216470c4e0040.th.jpg', href: '../foto/foto5.html#slide11', alt: 'preview 11' },
			{ src: 'https://s3.radikal.cloud/2025/07/06/125ec038bb6dcabd7b.th.jpg', href: '../foto/foto5.html#slide12', alt: 'preview 12' },
		],
	},
	{
		title: 'Блок #2',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/07/06/132eece640714142ae.th.jpg', href: '../foto/foto5.html#slide13', alt: 'preview 13' },
			{ src: 'https://s3.radikal.cloud/2025/07/06/14a72b1a9303e07e95.th.jpg', href: '../foto/foto5.html#slide14', alt: 'preview 14' },
			{ src: 'https://s3.radikal.cloud/2025/07/07/15274113fff7b61b07.th.jpg', href: '../foto/foto5.html#slide15', alt: 'preview 15' },
			{ src: 'https://s3.radikal.cloud/2025/07/07/16c182c2609972dca8.th.jpg', href: '../foto/foto5.html#slide16', alt: 'preview 16' },
			{ src: 'https://s3.radikal.cloud/2025/07/07/171c7925c0a0fb7fac.th.jpg', href: '../foto/foto5.html#slide17', alt: 'preview 17' },
			{ src: 'https://s3.radikal.cloud/2025/07/07/18e9a5edfd6ffc8e36.th.jpg', href: '../foto/foto5.html#slide18', alt: 'preview 18' },
			
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
