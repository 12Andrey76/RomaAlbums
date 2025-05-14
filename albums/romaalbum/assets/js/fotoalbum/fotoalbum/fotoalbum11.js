const albums = [
  {
		title: '11 Месяцев',
		images: [
			{ src: 'https://i8.wampi.ru/2024/01/18/15e016498367487d7.th.jpg', href: '../foto/foto.html#slide80', alt: 'preview 1' },
			{ src: 'https://im.wampi.ru/2024/01/18/26f7fe107e528c94d.th.jpg', href: '../foto/foto.html#slide81', alt: 'preview 2' },
			{ src: 'https://im.wampi.ru/2024/01/18/47c81584d3546da3a.th.jpg', href: '../foto/foto.html#slide82', alt: 'preview 3' },
      { src: 'https://i1.wampi.ru/2024/01/18/5b30cb737803be26b.th.jpg', href: '../foto/foto.html#slide83', alt: 'preview 4' },
			{ src: 'https://i8.wampi.ru/2024/01/18/6a2c23d11f23d9376.th.jpg', href: '../foto/foto.html#slide84', alt: 'preview 5' },
			{ src: 'https://im.wampi.ru/2024/01/18/781662689ad89b676.th.jpg', href: '../foto/foto.html#slide85', alt: 'preview 6' },
      { src: 'https://i1.wampi.ru/2024/01/18/8e4e8eb5877e6254f.th.jpg', href: '../foto/foto.html#slide86', alt: 'preview 7' },
			{ src: 'https://im.wampi.ru/2024/01/18/10010a2546a41ae0b7.th.jpg', href: '../foto/foto.html#slide87', alt: 'preview 8' },
			{ src: 'https://i8.wampi.ru/2024/01/18/12d18dbf48cb134aa7.th.jpg', href: '../foto/foto.html#slide88', alt: 'preview 9' },
      { src: 'https://im.wampi.ru/2024/01/18/13.th.jpg', href: '../foto/foto.html#slide89', alt: 'preview 10' },
			{ src: 'https://im.wampi.ru/2024/01/18/155879b90899083b48.th.jpg', href: '../foto/foto.html#slide90', alt: 'preview 11' },
			{ src: 'https://im.wampi.ru/2024/01/18/17.th.jpg', href: '../foto/foto.html#slide91', alt: 'preview 12' },
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