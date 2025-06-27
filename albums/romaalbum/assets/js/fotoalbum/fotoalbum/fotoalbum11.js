const albums = [
  {
		title: '11 Месяцев',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/110ff266e6c05a9dc24.th.jpeg', href: '../foto/foto.html#slide80', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/11359bf056051483f4a.th.jpeg', href: '../foto/foto.html#slide81', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/11567a0d8f76a6a95b6.th.jpeg', href: '../foto/foto.html#slide82', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/117f97be6672b885f17.th.jpeg', href: '../foto/foto.html#slide83', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/118293ff42ffae4d9a6.th.jpeg', href: '../foto/foto.html#slide84', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/119ab9b4253d30f9d7c.th.jpeg', href: '../foto/foto.html#slide85', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/26/1218f809e1f198f2efb.th.jpeg', href: '../foto/foto.html#slide86', alt: 'preview 7' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/1239ad593afd42aa24b.th.jpeg', href: '../foto/foto.html#slide87', alt: 'preview 8' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/125ee40b3c1a08ae085.th.jpeg', href: '../foto/foto.html#slide88', alt: 'preview 9' },
      { src: 'https://s3.radikal.cloud/2025/01/26/126b0425362888f7be6.th.jpeg', href: '../foto/foto.html#slide89', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/128063fd29e3538fa07.th.jpeg', href: '../foto/foto.html#slide90', alt: 'preview 11' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/13055939c74649ae727.th.jpeg', href: '../foto/foto.html#slide91', alt: 'preview 12' },
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