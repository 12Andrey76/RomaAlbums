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
	{ id: 1, video: "https://rutube.ru/play/embed/23d1d75a6c56daa2e924f11436204f3e?p=6PlI1b9SYw-l1Hb4RluEqw", block: 1, blockName: "Блок 1" },
	{ id: 2, video: "https://rutube.ru/play/embed/2f92a295eabf61b5b309ca92f1f8447d?p=Oy2h3XuYo5C6uf86jjYjtA", block: 1, blockName: "Блок 1" },
	{ id: 3, video: "https://rutube.ru/play/embed/ccb775012bc261b6e325a5c7d3400c5a?p=m0aszhzhA0BXKJfDPToGVQ", block: 1, blockName: "Блок 1" },
	{ id: 4, video: "https://rutube.ru/play/embed/2996c675b224054194e5a4dcd5118db0?p=-89hLYzQgGP_boi5xXmReA", block: 1, blockName: "Блок 1" },
	{ id: 5, video: "https://rutube.ru/play/embed/1682ec35dc4786e27f41d350d53a5396?p=3K-awhQINNdPolC02a4rRw", block: 1, blockName: "Блок 1" },
	{ id: 6, video: "https://rutube.ru/play/embed/e85c187b311a81a47f004a3c86b20836?p=6qVUv6x4_BUi3pMFGL15AQ", block: 1, blockName: "Блок 1" },
	{ id: 7, video: "https://rutube.ru/play/embed/6b217fc101eb9cfc632b10912eac0a91?p=fsfB8cpASw6eqU78U7GUzA", block: 1, blockName: "Блок 1" },
	{ id: 8, video: "https://rutube.ru/play/embed/1eb3c7f0ad97a5c6e6a9bf296027fe49?p=1iCxowSD-1IbNQwn9mzzGA", block: 1, blockName: "Блок 1" },
	{ id: 9, video: "https://rutube.ru/play/embed/d63daa6959ad9a90fa1828d0c4b2fee4/?p=ehT3kE5JVVH4Xf_TX83huA", block: 1, blockName: "Блок 1" },
	{ id: 10, video: "https://rutube.ru/play/embed/11d10b8f407048020999bc08c11ffe54/?p=0t55Q5jOREbLUKypQakTyA", block: 1, blockName: "Блок 1" },
	{ id: 11, video: "https://rutube.ru/play/embed/2dd8bc2a17b1c60e9678ce981c31b605/?p=vT8jRxiZvF_GMDLCm4XwCw", block: 1, blockName: "Блок 1" },
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
