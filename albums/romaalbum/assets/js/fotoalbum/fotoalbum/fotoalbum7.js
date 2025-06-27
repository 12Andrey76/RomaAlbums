const albums = [
  {
		title: '7 Месяцев',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/65284bc81dc5607f9d.th.jpeg', href: '../foto/foto.html#slide52', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/68e9778267da0d74a4.th.jpeg', href: '../foto/foto.html#slide53', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/69116036c91b9282f8.th.jpeg', href: '../foto/foto.html#slide54', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/7155554aedaa0802a8.th.jpeg', href: '../foto/foto.html#slide55', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/72fe23fa29ad2921cf.th.jpeg', href: '../foto/foto.html#slide56', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/735756eafe2d2284d1.th.jpeg', href: '../foto/foto.html#slide57', alt: 'preview 6' },
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