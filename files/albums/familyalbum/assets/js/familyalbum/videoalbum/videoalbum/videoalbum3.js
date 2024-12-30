const photoBlocks = [
  {
    id: 'prev1',
    title: 'Видеоблок #1',
    images: [
      '../video/video3.html#slide1',
      '../video/video3.html#slide2',
      '../video/video3.html#slide3',
      '../video/video3.html#slide4',
      '../video/video3.html#slide5',
      '../video/video3.html#slide6',
      '../video/video3.html#slide7',
      '../video/video3.html#slide8',
      '../video/video3.html#slide9',
      '../video/video3.html#slide10',
      '../video/video3.html#slide11',
      '../video/video3.html#slide12',
    ],
    imagesSrc: [
      'https://i8.wampi.ru/2024/01/16/1313744d5769d83ec.jpg', 'https://im.wampi.ru/2024/01/16/2946d80bc8f728d23.jpg', 'https://i1.wampi.ru/2024/01/16/30beacda4aa369891.jpg', 'https://i8.wampi.ru/2024/01/16/777948516cae24279.jpg', 'https://im.wampi.ru/2024/01/16/8096d39470c5ec89e.jpg', 'https://i1.wampi.ru/2024/01/16/9a6d5f7c36fac48e9.jpg', 'https://i8.wampi.ru/2024/01/16/107d5c67fa4d651b4f.jpg', 'https://i1.wampi.ru/2024/01/16/1963dbb69bb742a868.jpg', 'https://i8.wampi.ru/2024/01/16/2055d28504308b1cea.jpg', 'https://im.wampi.ru/2024/01/16/11c0fc650997f3033e.jpg', 'https://i1.wampi.ru/2024/01/16/122431228224a13ce7.jpg', 'https://im.wampi.ru/2024/01/16/27.jpg',
    ]
    
  },

  {
    id: 'prev2',
    title: 'Видеоблок #2',
    images: [
      '../video/video3.html#slide13',
      '../video/video3.html#slide14',
      '../video/video3.html#slide15',
      '../video/video3.html#slide16',
    ],
    imagesSrc: [
      'https://i1.wampi.ru/2024/01/16/28.jpg',
      'https://im.wampi.ru/2024/02/17/20b4c2a276e028d98.jpg',
      'https://im.wampi.ru/2024/03/06/29.th.jpg',
      'https://i1.wampi.ru/2024/03/18/32.th.jpg',
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