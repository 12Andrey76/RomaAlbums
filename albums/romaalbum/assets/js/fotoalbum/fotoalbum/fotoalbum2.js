const albums = [
  {
		title: '2 Месяца',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/14c2d655aabf0f57b9.th.jpeg', href: '../foto/foto.html#slide10', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/1513b596fbe9353cfd.th.jpeg', href: '../foto/foto.html#slide11', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/164b8a7d839399a233.th.jpeg', href: '../foto/foto.html#slide12', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/17521ffa1ca53ef1c9.th.jpeg', href: '../foto/foto.html#slide13', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/1838fe99d98b3b6c4a.th.jpeg', href: '../foto/foto.html#slide14', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/19023230daceff42c7.th.jpeg', href: '../foto/foto.html#slide15', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/26/203960d38cfa5aa351.th.jpeg', href: '../foto/foto.html#slide16', alt: 'preview 7' },
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