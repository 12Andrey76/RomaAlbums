const albums = [
  {
		title: '8 Месяцев',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/746ca792b0526ac5bc.th.jpeg', href: '../foto/foto.html#slide58', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/75ef611328c32869ca.th.jpeg', href: '../foto/foto.html#slide59', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/768bdc2cd4e7c8248b.th.jpeg', href: '../foto/foto.html#slide60', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/7821b9b734ea7c414c.th.jpeg', href: '../foto/foto.html#slide61', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/26/802cf2c773d0b2a009.th.jpeg', href: '../foto/foto.html#slide62', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/8196bf7c0bde963687.th.jpeg', href: '../foto/foto.html#slide63', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/824a006c562ed4584d.th.jpeg', href: '../foto/foto.html#slide64', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/26/84a974dc5ef0023297.th.jpeg', href: '../foto/foto.html#slide65', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/26/858c86e6122c9e6c94.th.jpeg', href: '../foto/foto.html#slide66', alt: 'preview 9' },
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