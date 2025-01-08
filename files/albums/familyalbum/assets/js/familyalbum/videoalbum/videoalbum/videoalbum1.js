const photoBlocks = [
  {
    id: 'prev1',
    title: 'Видеоблок #1',
    images: [
      '../video/video1.html#slide1',
      '../video/video1.html#slide2',
      '../video/video1.html#slide3',
      '../video/video1.html#slide4',
      '../video/video1.html#slide5',
      '../video/video1.html#slide6',
      '../video/video1.html#slide7',
      '../video/video1.html#slide8',
      '../video/video1.html#slide9',
      '../video/video1.html#slide10',
      '../video/video1.html#slide11',
      '../video/video1.html#slide12',
    ],
    imagesSrc: [
      'https://i8.wampi.ru/2024/01/16/1658c5b57419fd92b.jpg', 'https://im.wampi.ru/2024/01/16/28bc0c05737b86a88.jpg', 'https://i1.wampi.ru/2024/01/16/3e41457b8dbeee874.jpg', 'https://i8.wampi.ru/2024/01/16/4b9d1af0563592d8e.jpg', 'https://im.wampi.ru/2024/01/16/5c2c1236698cb69f7.jpg', 'https://i1.wampi.ru/2024/01/16/64c0a9df4f6234fc8.jpg', 'https://i8.wampi.ru/2024/01/16/7d1164878e9c2124c.jpg', 'https://im.wampi.ru/2024/01/16/804f04a07849a1aed.jpg', 'https://i1.wampi.ru/2024/01/16/919bb79425e2d0a08.jpg', 'https://i8.wampi.ru/2024/01/16/1061ce1da22192135c.jpg', 'https://im.wampi.ru/2024/01/16/112a2c1d6a4d9c6c83.jpg', 'https://i1.wampi.ru/2024/01/16/12d9ec702b5c80877d.jpg',
    ]
    
  },

  {
    id: 'prev2',
    title: 'Видеоблок #2',
    images: [
      '../video/video1.html#slide13',
      '../video/video1.html#slide14',
      '../video/video1.html#slide15',
      '../video/video1.html#slide16',
      '../video/video1.html#slide17',
      '../video/video1.html#slide18',
      '../video/video1.html#slide19',
      '../video/video1.html#slide20',
      '../video/video1.html#slide21',
    ],
    imagesSrc: [
      'https://i8.wampi.ru/2024/01/16/13.jpg',
      'https://im.wampi.ru/2024/01/16/14.jpg',
      'https://i1.wampi.ru/2024/01/16/15.jpg',
      'https://i8.wampi.ru/2024/01/16/169d2e71a74043498d.jpg',
      'https://im.wampi.ru/2024/01/16/17.jpg',
      'https://i1.wampi.ru/2024/01/16/18.jpg',
      'https://i8.wampi.ru/2024/01/16/19.jpg',
      'https://im.wampi.ru/2024/01/16/20.jpg',
      'https://i1.wampi.ru/2024/01/16/21.jpg',
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