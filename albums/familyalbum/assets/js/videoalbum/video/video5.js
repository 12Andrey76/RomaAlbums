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
	{ id: 1, video: "https://rutube.ru/play/embed/bbdb4ee9edcf4d553810bc94d10ead74/?p=AcBEE4Z1HJNu_IsoiJqaXA", block: 1, blockName: "Блок 1" },
	{ id: 2, video: "https://rutube.ru/play/embed/107112bc04a791dc732bf99cf07b0072/?p=OJgWrQvAP_kkbglQzLnlDg", block: 1, blockName: "Блок 1" },
	{ id: 3, video: "https://rutube.ru/play/embed/4459857fa5f75242e4fba5fe54f5a770/?p=XXS_fc5gSQqxZsNC60hWVQ", block: 1, blockName: "Блок 1" },
	{ id: 4, video: "https://rutube.ru/play/embed/8c0feabdb908efa7abf34385689959a0/?p=xm6IP2-WhSfrIXw6ZkxybQ", block: 1, blockName: "Блок 1" },
	{ id: 5, video: "https://rutube.ru/play/embed/bdc098485237ee3108719e50f51aa12e/?p=FObc4Wgbp0jUTTH7oSVsQA", block: 1, blockName: "Блок 1" },
	{ id: 6, video: "https://rutube.ru/play/embed/ab9f8fa3667d468120d0419386594b8b/?p=d7XNDyIC3oNfhXwIYTBuRQ", block: 1, blockName: "Блок 1" },
	{ id: 7, video: "https://rutube.ru/play/embed/3e07ffb51f71e58cc335b20638bade4b/?p=wGqFHJhqYSlT-KmiYzsiEQ", block: 1, blockName: "Блок 1" },
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
