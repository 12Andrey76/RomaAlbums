const photoBlocks = [
  {
    id: 'prev1',
    title: 'Видеоблок #1',
    images: [
      '../video/video2.html#slide1',
      '../video/video2.html#slide2',
      '../video/video2.html#slide3',
      '../video/video2.html#slide4',
      '../video/video2.html#slide5',
      '../video/video2.html#slide6',
      '../video/video2.html#slide7',
      '../video/video2.html#slide8',
      '../video/video2.html#slide9',
      '../video/video2.html#slide10',
      '../video/video2.html#slide11',
      '../video/video2.html#slide12',
    ],
    imagesSrc: [
      'https://im.wampi.ru/2024/01/16/163c7ef7386e08b17.jpg', 'https://i1.wampi.ru/2024/01/16/2915a31b311e05454.jpg', 'https://i8.wampi.ru/2024/01/16/34fa30189c6bc53b5.jpg', 'https://im.wampi.ru/2024/01/16/4f48ebf003ea3d205.jpg', 'https://i1.wampi.ru/2024/01/16/527a4ed95168f2cce.jpg', 'https://i8.wampi.ru/2024/01/16/6259093b62cd895de.jpg', 'https://im.wampi.ru/2024/01/16/754699bc5c358963d.jpg', 'https://i1.wampi.ru/2024/01/16/8a8f9da1022c71cc5.jpg', 'https://i8.wampi.ru/2024/01/16/92026a9964448d28e.jpg', 'https://im.wampi.ru/2024/01/16/1046a407da67ab5149.jpg', 'https://i1.wampi.ru/2024/01/16/11584a32ab1ef2145c.jpg', 'https://i8.wampi.ru/2024/01/16/1202bafdad590372cf.jpg',
    ]
    
  },

  {
    id: 'prev2',
    title: 'Видеоблок #2',
    images: [
      '../video/video2.html#slide13',
      '../video/video2.html#slide14',
      '../video/video2.html#slide15',
      '../video/video2.html#slide16',
      '../video/video2.html#slide17',
      '../video/video2.html#slide18',
      '../video/video2.html#slide19',
      '../video/video2.html#slide20',
      '../video/video2.html#slide21',
      '../video/video2.html#slide22',
      '../video/video2.html#slide23',
      '../video/video2.html#slide24',
    ],
    imagesSrc: [
      'https://i1.wampi.ru/2024/01/16/13.jpg',
      'https://i8.wampi.ru/2024/01/16/14.jpg',
      'https://im.wampi.ru/2024/01/16/15.jpg',
      'https://i1.wampi.ru/2024/01/16/168b21108887f70ecb.jpg',
      'https://i8.wampi.ru/2024/01/16/17.jpg',
      'https://im.wampi.ru/2024/01/16/18.jpg',
      'https://i1.wampi.ru/2024/01/16/19.jpg',
      'https://i8.wampi.ru/2024/01/16/20.jpg',
      'https://im.wampi.ru/2024/01/16/21.jpg',
      'https://i1.wampi.ru/2024/01/16/22.jpg',
      'https://i8.wampi.ru/2024/01/16/23.jpg',
      'https://im.wampi.ru/2024/01/16/24.jpg',
    ]
    
  },

  {
    id: 'prev3',
    title: 'Видеоблок #3',
    images: [
      '../video/video2.html#slide25',
      '../video/video2.html#slide26',
      '../video/video2.html#slide27',
      '../video/video2.html#slide28',
      '../video/video2.html#slide29',
    ],
    imagesSrc: [
      'https://i8.wampi.ru/2024/01/16/25.jpg',
      'https://im.wampi.ru/2024/01/16/26.jpg',
      'https://i1.wampi.ru/2024/01/16/27.jpg',
      'https://i8.wampi.ru/2024/01/16/28.jpg',
      'https://im.wampi.ru/2024/01/16/29.jpg',
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