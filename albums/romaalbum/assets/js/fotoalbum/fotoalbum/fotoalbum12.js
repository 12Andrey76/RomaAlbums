const albums = [
  {
		title: '1 Годик',
		images: [
			{ src: 'https://i1.wampi.ru/2024/01/18/24a063437f2672907.th.jpg', href: '../foto/foto.html#slide92', alt: 'preview 1' },
			{ src: 'https://i1.wampi.ru/2024/01/18/5993415f46eb2a774.th.jpg', href: '../foto/foto.html#slide93', alt: 'preview 2' },
			{ src: 'https://i8.wampi.ru/2024/01/18/632d045a1dcf8320f.th.jpg', href: '../foto/foto.html#slide94', alt: 'preview 3' },
      { src: 'https://i1.wampi.ru/2024/01/18/94fac805f2acb63f3.th.jpg', href: '../foto/foto.html#slide95', alt: 'preview 4' },
			{ src: 'https://i8.wampi.ru/2024/01/18/10c50f0dce8c2aef75.th.jpg', href: '../foto/foto.html#slide96', alt: 'preview 5' },
			{ src: 'https://im.wampi.ru/2024/01/18/113c4d884388def43c.th.jpg', href: '../foto/foto.html#slide97', alt: 'preview 6' },
      { src: 'https://i1.wampi.ru/2024/01/18/12120767e46b5ae90f.th.jpg', href: '../foto/foto.html#slide98', alt: 'preview 7' },
			{ src: 'https://im.wampi.ru/2024/01/18/145dd515c023b196b5.th.jpg', href: '../foto/foto.html#slide99', alt: 'preview 8' },
			{ src: 'https://i1.wampi.ru/2024/01/18/15.th.jpg', href: '../foto/foto.html#slide100', alt: 'preview 9' },
      { src: 'https://i1.wampi.ru/2024/01/18/17834f8adee6a682a1.th.jpg', href: '../foto/foto.html#slide101', alt: 'preview 10' },
			{ src: 'https://i1.wampi.ru/2024/01/18/19.th.jpg', href: '../foto/foto.html#slide102', alt: 'preview 11' },
			{ src: 'https://i8.wampi.ru/2024/01/18/20.th.jpg', href: '../foto/foto.html#slide103', alt: 'preview 12' },
			{ src: 'https://i1.wampi.ru/2024/01/18/22.th.jpg', href: '../foto/foto.html#slide104', alt: 'preview 13' },
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