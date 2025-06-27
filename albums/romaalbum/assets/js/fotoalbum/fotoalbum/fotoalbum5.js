const albums = [
  {
		title: '5 Месяцев',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/3338946ef0f727cf54.th.jpeg', href: '../foto/foto.html#slide27', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/34bc988ca24240eec7.th.jpeg', href: '../foto/foto.html#slide28', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/3581330aab6f37fde1.th.jpeg', href: '../foto/foto.html#slide29', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/36b71b09e26b51afa6.th.jpeg', href: '../foto/foto.html#slide30', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/26/381886b41279529539.th.jpeg', href: '../foto/foto.html#slide31', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/39a8a0ed297e586a1e.th.jpeg', href: '../foto/foto.html#slide32', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/41cb8e9c70fa256f76.th.jpeg', href: '../foto/foto.html#slide33', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/26/42f471c0df37c8a0c2.th.jpeg', href: '../foto/foto.html#slide34', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/26/43be41cce3e2e8dcb9.th.jpeg', href: '../foto/foto.html#slide35', alt: 'preview 9' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/44b1d796b2d5826fad.th.jpeg', href: '../foto/foto.html#slide36', alt: 'preview 10' },
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