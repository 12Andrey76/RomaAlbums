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
			image: slide.image,
			title: `Фото ${currentIndexInBlock + 1}`,
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
	// ============####block1####=================
	{ id: 1, image: "https://s3.radikal.cloud/2025/01/26/1884143cfd46f0c9e.webp", block: 1, blockName: "Блок 1" },
	{ id: 2, image: "https://s3.radikal.cloud/2025/01/26/20a50560aa415d81b.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 3, image: "https://s3.radikal.cloud/2025/01/26/3a2104574458f0f73.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 4, image: "https://s3.radikal.cloud/2025/01/26/40093706c3cd81f16.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 5, image: "https://s3.radikal.cloud/2025/01/26/5ce34b12c40cb39cd.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 6, image: "https://s3.radikal.cloud/2025/01/26/6d2b3a9c29166d16c.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 7, image: "https://s3.radikal.cloud/2025/01/26/740234c7dd6543e3f.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 8, image: "https://s3.radikal.cloud/2025/01/26/86d70b6f0786c1559.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 9, image: "https://s3.radikal.cloud/2025/01/26/92a749bdea41b8907.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 10, image: "https://s3.radikal.cloud/2025/01/26/103a376dc0364e0c42.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 11, image: "https://s3.radikal.cloud/2025/01/26/11f21fc42266cc6e04.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 12, image: "https://s3.radikal.cloud/2025/01/26/124c34f799d12f10aa.jpeg", block: 1, blockName: "Блок 1" },
	// ============####block2####=================
	{ id: 13, image: "https://s3.radikal.cloud/2025/01/26/16b5d7c8c412375b3.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 14, image: "https://s3.radikal.cloud/2025/01/26/2acc508b3f37bb81d.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 15, image: "https://s3.radikal.cloud/2025/01/26/306848853b76c89b4.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 16, image: "https://s3.radikal.cloud/2025/01/26/4031a9890f58619d6.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 17, image: "https://s3.radikal.cloud/2025/01/26/5cbdc61cbd4dc5ca8.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 18, image: "https://s3.radikal.cloud/2025/01/26/6194b08203f9578b3.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 19, image: "https://s3.radikal.cloud/2025/01/26/70f4052cef105a536.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 20, image: "https://s3.radikal.cloud/2025/01/26/856ce12f3f3a4df69.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 21, image: "https://s3.radikal.cloud/2025/01/26/96424ddf2d2155ccf.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 22, image: "https://s3.radikal.cloud/2025/01/26/104f37264b03a65175.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 23, image: "https://s3.radikal.cloud/2025/01/26/110afe6b187c95439d.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 24, image: "https://s3.radikal.cloud/2025/01/26/12c12f8144b0d7d548.jpeg", block: 2, blockName: "Блок 2" },
	// ============####block3####=================
	{ id: 25, image: "https://s2.radikal.cloud/2025/04/22/18f9f28cd7fc955da.jpg", block: 3, blockName: "Блок 3" },
	{ id: 26, image: "https://s2.radikal.cloud/2025/04/22/2bc4b6279d5dddb93.jpg", block: 3, blockName: "Блок 3" },
	{ id: 27, image: "https://s2.radikal.cloud/2025/04/22/30e0e01c2d83b7e0a.jpg", block: 3, blockName: "Блок 3" },
	{ id: 28, image: "https://s2.radikal.cloud/2025/04/22/478b710fc8c36c057.jpg", block: 3, blockName: "Блок 3" },
	{ id: 29, image: "https://s2.radikal.cloud/2025/04/22/5516d8e7891d7e06f.jpg", block: 3, blockName: "Блок 3" },
	{ id: 30, image: "https://s2.radikal.cloud/2025/04/22/60ec620d3ff19f491.jpg", block: 3, blockName: "Блок 3" },
	{ id: 31, image: "https://s2.radikal.cloud/2025/04/22/7cc783737c10392da.jpg", block: 3, blockName: "Блок 3" },
	{ id: 32, image: "https://s2.radikal.cloud/2025/04/22/86d9703dee3b30404.jpg", block: 3, blockName: "Блок 3" },
	{ id: 33, image: "https://s2.radikal.cloud/2025/04/22/975f2c1967c13ad7c.jpg", block: 3, blockName: "Блок 3" },
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
loadScript('../../assets/js/js-component/foto-slides.js')
	.then(() => {
		console.log('Slides script loaded successfully');
	})
	.catch(error => {
		console.error(error);
	});
