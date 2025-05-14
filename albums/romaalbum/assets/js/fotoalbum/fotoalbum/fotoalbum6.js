const albums = [
  {
		id: 6,
		title: '6 Месяцев',
		images: [
			{ src: 'https://i8.wampi.ru/2024/01/18/197bb6b3c96dc9b6e.th.jpg', href: '../foto/foto.html#slide37', alt: 'preview 1' },
			{ src: 'https://im.wampi.ru/2024/01/18/22f7fe9719d3ba243.th.jpg', href: '../foto/foto.html#slide38', alt: 'preview 2' },
			{ src: 'https://i8.wampi.ru/2024/01/18/49f14d8cac181419e.th.jpg', href: '../foto/foto.html#slide39', alt: 'preview 3' },
      { src: 'https://i1.wampi.ru/2024/01/18/64174f54bb081cb52.th.jpg', href: '../foto/foto.html#slide40', alt: 'preview 4' },
			{ src: 'https://i8.wampi.ru/2024/01/18/8abd5846b85599295.th.jpg', href: '../foto/foto.html#slide41', alt: 'preview 5' },
			{ src: 'https://im.wampi.ru/2024/01/18/98afe25353a6ba17e.th.jpg', href: '../foto/foto.html#slide42', alt: 'preview 6' },
      { src: 'https://i8.wampi.ru/2024/01/18/10d7c093f527fff238.th.jpg', href: '../foto/foto.html#slide43', alt: 'preview 7' },
			{ src: 'https://i1.wampi.ru/2024/01/18/12.th.jpg', href: '../foto/foto.html#slide44', alt: 'preview 8' },
			{ src: 'https://i8.wampi.ru/2024/01/18/13.th.jpg', href: '../foto/foto.html#slide45', alt: 'preview 9' },
      { src: 'https://im.wampi.ru/2024/01/18/14.th.jpg', href: '../foto/foto.html#slide46', alt: 'preview 10' },
			{ src: 'https://im.wampi.ru/2024/01/18/15.th.jpg', href: '../foto/foto.html#slide47', alt: 'preview 11' },
			{ src: 'https://i1.wampi.ru/2024/01/18/16.th.jpg', href: '../foto/foto.html#slide48', alt: 'preview 12' },
      { src: 'https://i8.wampi.ru/2024/01/18/17.th.jpg', href: '../foto/foto.html#slide49', alt: 'preview 13' },
			{ src: 'https://i8.wampi.ru/2024/01/18/19.th.jpg', href: '../foto/foto.html#slide50', alt: 'preview 14' },
			{ src: 'https://im.wampi.ru/2024/01/18/20.th.jpg', href: '../foto/foto.html#slide51', alt: 'preview 15' },
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