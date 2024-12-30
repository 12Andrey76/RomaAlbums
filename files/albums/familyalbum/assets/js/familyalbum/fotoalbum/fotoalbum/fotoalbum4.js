const photoBlocks = [
  {
    id: 'prev1',
    title: 'Фотоблок #1',
    images: [
      '../foto/foto4.html#slide1',
      '../foto/foto4.html#slide2',
      '../foto/foto4.html#slide3',
      '../foto/foto4.html#slide4',
      '../foto/foto4.html#slide5',
      '../foto/foto4.html#slide6',
      '../foto/foto4.html#slide7',
      '../foto/foto4.html#slide8',
      '../foto/foto4.html#slide9',
      '../foto/foto4.html#slide10',
      '../foto/foto4.html#slide11',
      '../foto/foto4.html#slide12',
    ],
    imagesSrc: [
      'https://im.wampi.ru/2024/05/21/a5.25.th.webp', 'https://i1.wampi.ru/2024/04/23/22ebb853fcf52e604.th.jpg', 
      'https://i1.wampi.ru/2024/04/23/3.th.jpg', 'https://im.wampi.ru/2024/04/23/4.th.jpg', 'https://i1.wampi.ru/2024/04/23/5.th.jpg', 'https://im.wampi.ru/2024/04/23/6.th.jpg', 'https://im.wampi.ru/2024/05/27/7e1628fead0db8523.th.jpg', 'https://im.wampi.ru/2024/05/27/8ca9db6b2ed4429d4.th.jpg', 
      'https://i1.wampi.ru/2024/06/08/9.th.jpg', 
      'https://im.wampi.ru/2024/07/21/10.th.jpg', 'https://im.wampi.ru/2024/07/24/11.th.jpg', 'https://i1.wampi.ru/2024/07/24/12.th.jpg',
    ]
    
  },

  {
    id: 'prev2',
    title: 'Фотоблок #2',
    images: [
      '../foto/foto4.html#slide13',
      '../foto/foto4.html#slide14',
      '../foto/foto4.html#slide15',
      '../foto/foto4.html#slide16',
      '../foto/foto4.html#slide17',
      '../foto/foto4.html#slide18',
      '../foto/foto4.html#slide19',
      '../foto/foto4.html#slide20',
      '../foto/foto4.html#slide21',
      '../foto/foto4.html#slide22',
      '../foto/foto4.html#slide23',
      '../foto/foto4.html#slide24',
    ],
    imagesSrc: [
      'https://im.wampi.ru/2024/07/24/1d2424175c7e08bb6.th.jpg', 'https://i1.wampi.ru/2024/07/24/20639d802a38d8635.th.jpg', 'https://im.wampi.ru/2024/12/28/d.th.jpg', 'https://i1.wampi.ru/2024/12/28/e.th.jpg', 'https://im.wampi.ru/2024/12/28/f.th.jpg', 'https://i1.wampi.ru/2024/12/28/g.th.jpg', 'https://im.wampi.ru/2024/12/28/h.th.jpg', 'https://i1.wampi.ru/2024/12/28/i.th.jpg', 'https://im.wampi.ru/2024/12/28/j.th.jpg', 'https://i1.wampi.ru/2024/12/28/k.th.jpg', 'https://im.wampi.ru/2024/12/28/a.th.jpg', 'https://i1.wampi.ru/2024/12/28/b.th.jpg',
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