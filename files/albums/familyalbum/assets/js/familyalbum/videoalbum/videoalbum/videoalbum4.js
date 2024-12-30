const photoBlocks = [
  {
    id: 'prev1',
    title: 'Видеоблок #1',
    images: [
      '../video/video4.html#slide1',
      '../video/video4.html#slide2',
      '../video/video4.html#slide3',
      '../video/video4.html#slide4',
      '../video/video4.html#slide5',
      '../video/video4.html#slide6',
      '../video/video4.html#slide7',
      '../video/video4.html#slide8',
      '../video/video4.html#slide9',
      '../video/video4.html#slide10',
    ],
    imagesSrc: [
      'https://i1.wampi.ru/2024/04/22/1f1f12ddfc83fffe2.th.jpg', 'https://im.wampi.ru/2024/04/22/244f426b7b7c7e255.th.jpg', 'https://i1.wampi.ru/2024/05/05/3dbae23857e0a5b2f.th.jpg', 'https://i1.wampi.ru/2024/05/11/4b351933875aa7495.th.jpg', 'https://im.wampi.ru/2024/05/27/53f2e802157e618ad.th.jpg', 'https://im.wampi.ru/2024/07/20/6.th.jpg', 'https://im.wampi.ru/2024/07/24/7c90363f4050b5c57.th.jpg', 'https://i1.wampi.ru/2024/07/24/81340b55d6e5ad115.th.jpg', 'https://im.wampi.ru/2024/12/28/9.th.jpg', 'https://i1.wampi.ru/2024/12/28/10.th.jpg',
    ]
    
  },

  // Добавьте больше фотоблоков по аналогии
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
loadScript('../../assets/js/familyalbum/js-component/prev-slides.js')
	.then(() => {
			console.log('Slides script loaded successfully');
	})
	.catch(error => {
			console.error(error);
	});