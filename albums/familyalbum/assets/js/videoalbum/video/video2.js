// Функция для автоматического вычисления связей
function generateSlidesFromData(slidesData) {
	const slides = [];
	const blockMap = {}; // Карта блоков: blockNumber -> { firstId, lastId, blockName }

	// Первый проход: создаем карту блоков
	slidesData.forEach(slide => {
		if (!blockMap[slide.block]) {
			blockMap[slide.block] = {
				firstId: slide.id,
				lastId: slide.id,
				blockName: slide.blockName
			};
		} else {
			blockMap[slide.block].lastId = slide.id;
		}
	});

	// Второй проход: создаем полные объекты слайдов
	slidesData.forEach((slide, index) => {
		const blockInfo = blockMap[slide.block];
		const blockSlides = slidesData.filter(s => s.block === slide.block);
		const currentIndexInBlock = blockSlides.findIndex(s => s.id === slide.id);

		// Вычисляем previous и next в блоке (циклически)
		const prevInBlock = currentIndexInBlock > 0
			? blockSlides[currentIndexInBlock - 1].id
			: blockSlides[blockSlides.length - 1].id;
		const nextInBlock = currentIndexInBlock < blockSlides.length - 1
			? blockSlides[currentIndexInBlock + 1].id
			: blockSlides[0].id;

		// Вычисляем blockPrevious и blockNext
		const blockNumbers = Object.keys(blockMap).map(Number).sort((a, b) => a - b);
		const currentBlockIndex = blockNumbers.indexOf(slide.block);
		const prevBlock = currentBlockIndex > 0 ? blockNumbers[currentBlockIndex - 1] : blockNumbers[blockNumbers.length - 1];
		const nextBlock = currentBlockIndex < blockNumbers.length - 1 ? blockNumbers[currentBlockIndex + 1] : blockNumbers[0];

		const blockPrevious = blockMap[prevBlock] ? blockMap[prevBlock].firstId : null;
		const blockNext = blockMap[nextBlock] ? blockMap[nextBlock].firstId : null;

		// Создаем полный объект слайда
		const fullSlide = {
			id: slide.id,
			video: slide.video,
			title: `Видео ${currentIndexInBlock + 1}`,
			block: slide.block,
			links: {
				previous: prevInBlock,
				next: nextInBlock,
				block: blockInfo.blockName,
				blockPrevious: blockPrevious,
				blockNext: blockNext,
			}
		};

		slides.push(fullSlide);
	});

	return slides;
}

const slidesData = [
	{ id: 1, video: "https://rutube.ru/play/embed/82a71f4de4c9724d19b3698263259b8f?p=DLaXWxNXLtb67jXJIf8BNg", block: 1, blockName: "Блок 1" },
	{ id: 2, video: "https://rutube.ru/play/embed/84a319d76ffaacc25b6355b8a90f8875?p=ewb4Cy3lBN-zCr8m59Seog", block: 1, blockName: "Блок 1" },
	{ id: 3, video: "https://rutube.ru/play/embed/0d8341cb4c01eeba2d5cf87f67f96871?p=xFcctAYDWptZU99hiWpxiQ", block: 1, blockName: "Блок 1" },
	{ id: 4, video: "https://rutube.ru/play/embed/9e31e62dcd90d7bef520eb622b42d85d?p=5rwc-OiMpc8Z85jgJHdFZg", block: 1, blockName: "Блок 1" },
	{ id: 5, video: "https://rutube.ru/play/embed/b8e961543171de74ae9930d08a1ef507?p=4wYHV3WYp7KmqNKbulp56g", block: 1, blockName: "Блок 1" },
	{ id: 6, video: "https://rutube.ru/play/embed/64afd93dfb7c65293b00c3b27570b424?p=8X9bgd4so8ZpgacIY8rThw", block: 1, blockName: "Блок 1" },
	{ id: 7, video: "https://rutube.ru/play/embed/0437ce83264e74ea865cd6052f557f5a?p=0XfL5cIpXYknmo1Z16TjeA", block: 1, blockName: "Блок 1" },
	{ id: 8, video: "https://rutube.ru/play/embed/48308ae2e3729cd85208921dee06a1e0?p=q1pPI-UxG41mjgyjPi1MfA", block: 1, blockName: "Блок 1" },
	{ id: 9, video: "https://rutube.ru/play/embed/7603a910fc6fcd768bf4dbe0d2ad8f3a?p=hpDZvdtkBG6N3ITF295XYQ", block: 1, blockName: "Блок 1" },
	{ id: 10, video: "https://rutube.ru/play/embed/176b279559f3b9465191af3da3af9c26?p=10TWiAHCXlvnjGw541puQg", block: 1, blockName: "Блок 1" },
	{ id: 11, video: "https://rutube.ru/play/embed/793fb5f9dc64996ddfdf9fcf672016b8?p=k9iy9PMCV4CRtFNA5qguZg", block: 1, blockName: "Блок 1" },
	{ id: 12, video: "https://rutube.ru/play/embed/398c078ca7848fbaef7f0e8f0c300456?p=e8MqXX15KAld4Z2v-7gIqg", block: 1, blockName: "Блок 1" },
	{ id: 13, video: "https://rutube.ru/play/embed/e1737d156f91286686c0b55bfa7eee14?p=LvJv3s9HuJ1Xz9GarKxViw", block: 2, blockName: "Блок 2" },
	{ id: 14, video: "https://rutube.ru/play/embed/96a6dbe97b5c4b42f7b8a73067df354f?p=fuX3gEhfBVcYbW8dhxX3-w", block: 2, blockName: "Блок 2" },
	{ id: 15, video: "https://rutube.ru/play/embed/bba2a75b2f4ac72bd41976d29712b4d6?p=KVEHe0lUMrMGidOr-dfCeg", block: 2, blockName: "Блок 2" },
	{ id: 16, video: "https://rutube.ru/play/embed/fae8172418cdd92f5b7c5b8cb2626be0?p=EsbCE9Wm1-qGbdcULwQthA", block: 2, blockName: "Блок 2" },
	{ id: 17, video: "https://rutube.ru/play/embed/4148f6083158f69e95f0a9ebb157cd53?p=_w_gn43BuZB7pLvSUZneAw", block: 2, blockName: "Блок 2" },
	{ id: 18, video: "https://rutube.ru/play/embed/c196db0ccb55829ee1dc09f192944265?p=0pAK9qqi5wHoZU0irquezw", block: 2, blockName: "Блок 2" },
	{ id: 19, video: "https://rutube.ru/play/embed/de1b54fba139d4242cb239229c87c4f6?p=SDZj7RRRJKODooNpVxv7Ew", block: 2, blockName: "Блок 2" },
	{ id: 20, video: "https://rutube.ru/play/embed/0f670e0f8b18f2ae3402220da13fafac?p=_rtkNfrUWHwgD1sgwPEeJQ", block: 2, blockName: "Блок 2" },
	{ id: 21, video: "https://rutube.ru/play/embed/3838a68fd11258690d68ecac79b89421?p=J3OkVflpoV1fncJLfFRjKA", block: 2, blockName: "Блок 2" },
	{ id: 22, video: "https://rutube.ru/play/embed/a24b4669bc76206e41cce167a949fb11?p=jZWOq9bR-tGr7qPhVbroGg", block: 2, blockName: "Блок 2" },
	{ id: 23, video: "https://rutube.ru/play/embed/6c3f32a97acc10afa119640b332f21a8?p=32BHIoS6Q4274iTJZ_vHhg", block: 2, blockName: "Блок 2" },
	{ id: 24, video: "https://rutube.ru/play/embed/2e4a2ffddbb96cea37358badf47729bc?p=MrdXR5SQga3_qSrXj4YUsw", block: 2, blockName: "Блок 2" },
	{ id: 25, video: "https://rutube.ru/play/embed/5166c458757a738962b2aed8ff4defef?p=VaGVXJLSwhHyDEiV9De1FA", block: 3, blockName: "Блок 3" },
	{ id: 26, video: "https://rutube.ru/play/embed/4cb4720c7e5c262002a3c0bbfb377b88?p=XHk4z0R_qJSqK6n9f4jXKA", block: 3, blockName: "Блок 3" },
	{ id: 27, video: "https://rutube.ru/play/embed/8c22649349b2ca5e9c4edc8e07067d6c?p=HjpLHR_zTvvYXn9fGzLpRw", block: 3, blockName: "Блок 3" },
	{ id: 28, video: "https://rutube.ru/play/embed/4750922069b941f1293a03c5c41b1c3c?p=y6QMEEgKM13a7XqFxDt9tw", block: 3, blockName: "Блок 3" },
	{ id: 29, video: "https://rutube.ru/play/embed/a37040cd85b13e0b4c4a54cc03f1103b?p=FNEFhR1OyMxMYseLfairFg", block: 3, blockName: "Блок 3" },
];

// Генерируем полный массив slides из упрощенной структуры
const slides = generateSlidesFromData(slidesData);

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
loadScript('../../assets/js/js-component/video-slides.js')
	.then(() => {
		console.log('Slides script loaded successfully');
	})
	.catch(error => {
		console.error(error);
	});
