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
	{ id: 1, image: "https://s3.radikal.cloud/2025/01/26/184045ca83871f5bc.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 2, image: "https://s3.radikal.cloud/2025/01/26/24cec597a68b9ae63.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 3, image: "https://s3.radikal.cloud/2025/01/26/3e0e3c66d68e5f8b8.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 4, image: "https://s3.radikal.cloud/2025/01/26/4ea235237992d415e.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 5, image: "https://s3.radikal.cloud/2025/01/26/5b41a12cac1050957.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 6, image: "https://s3.radikal.cloud/2025/01/26/6b242340610ba4cfc.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 7, image: "https://s3.radikal.cloud/2025/01/26/77200bbb6f9a34ab2.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 8, image: "https://s3.radikal.cloud/2025/01/26/80b02fb631f736c0d.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 9, image: "https://s3.radikal.cloud/2025/01/26/949571d01226a88b3.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 10, image: "https://s3.radikal.cloud/2025/01/26/1056b6e33176122dc4.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 11, image: "https://s3.radikal.cloud/2025/01/26/11c829c1e5a044ad4c.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 12, image: "https://s3.radikal.cloud/2025/01/26/12c3f85c40c8b25441.jpeg", block: 1, blockName: "Блок 1" },
	// ============####block2####=================
	{ id: 13, image: "https://s3.radikal.cloud/2025/01/26/1f5f956f695c65058.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 14, image: "https://s3.radikal.cloud/2025/01/26/2c49b4b2a428c9003.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 15, image: "https://s3.radikal.cloud/2025/01/26/31b9bdc0282f0382b.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 16, image: "https://s3.radikal.cloud/2025/01/26/4384c4fed4cad6e46.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 17, image: "https://s3.radikal.cloud/2025/01/26/5f48e071c4d751a89.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 18, image: "https://s3.radikal.cloud/2025/01/26/68f563ce09fc29a0b.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 19, image: "https://s3.radikal.cloud/2025/01/26/7041e7c7a349a4a30.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 20, image: "https://s3.radikal.cloud/2025/01/26/8decd4ee60b07e731.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 21, image: "https://s3.radikal.cloud/2025/01/26/982e4c602295effc0.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 22, image: "https://s3.radikal.cloud/2025/01/26/10882f759a93e33a04.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 23, image: "https://s3.radikal.cloud/2025/01/26/1184e7c9520af654d0.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 24, image: "https://s3.radikal.cloud/2025/01/26/1297f823ac206e330e.jpeg", block: 2, blockName: "Блок 2" },
	// ============####block3####=================
	{ id: 25, image: "https://s3.radikal.cloud/2025/01/26/1a6dd30c5c01df215.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 26, image: "https://s3.radikal.cloud/2025/01/26/281eafbb7f7e999ba.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 27, image: "https://s3.radikal.cloud/2025/01/26/3c7635c39764e16b7.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 28, image: "https://s3.radikal.cloud/2025/01/26/4ac64ea64d9e7f446.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 29, image: "https://s3.radikal.cloud/2025/01/26/5851fa6e17cb6712a.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 30, image: "https://s3.radikal.cloud/2025/01/26/69e4781aa4043ccf7.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 31, image: "https://s3.radikal.cloud/2025/01/26/725eb0f11c2e3bd2f.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 32, image: "https://s3.radikal.cloud/2025/01/26/867802f939ee3b1ba.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 33, image: "https://s3.radikal.cloud/2025/01/26/9afa43bec7b2aa696.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 34, image: "https://s3.radikal.cloud/2025/01/26/10146c372c0a404f01.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 35, image: "https://s3.radikal.cloud/2025/01/26/11bf4d9c55e65f143c.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 36, image: "https://s3.radikal.cloud/2025/01/26/12375b768c1a313aae.jpeg", block: 3, blockName: "Блок 3" },
	// ============####block4####=================
	{ id: 37, image: "https://s3.radikal.cloud/2025/01/26/187c0e2002a4cf470.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 38, image: "https://s3.radikal.cloud/2025/01/26/2f2643cfc983c2e9a.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 39, image: "https://s3.radikal.cloud/2025/01/26/3cfbbc75530e45785.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 40, image: "https://s3.radikal.cloud/2025/01/26/40a9193382b0dfb45.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 41, image: "https://s3.radikal.cloud/2025/01/26/575c1c011a2dbee6e.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 42, image: "https://s3.radikal.cloud/2025/01/26/6eab3f312a802bf60.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 43, image: "https://s3.radikal.cloud/2025/01/26/70713b1371688a1e2.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 44, image: "https://s3.radikal.cloud/2025/01/26/8a7ce26d19990e2f8.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 45, image: "https://s3.radikal.cloud/2025/01/26/9d6b5d0b0ff2e5ac6.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 46, image: "https://s3.radikal.cloud/2025/01/26/1096106687a478e6f2.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 47, image: "https://s3.radikal.cloud/2025/01/26/11ade863769e7d3c39.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 48, image: "https://s3.radikal.cloud/2025/01/26/124159eab37edccf94.jpeg", block: 4, blockName: "Блок 4" },
	// ============####block5####=================
	{ id: 49, image: "https://s3.radikal.cloud/2025/01/26/149bcfb13a3b889c1.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 50, image: "https://s3.radikal.cloud/2025/01/26/294a65fce532c06d1.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 51, image: "https://s3.radikal.cloud/2025/01/26/3dc4ce4934ec03064.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 52, image: "https://s3.radikal.cloud/2025/01/26/456ed09e9c88e1182.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 53, image: "https://s3.radikal.cloud/2025/01/26/5090b8b76f81bd9ad.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 54, image: "https://s3.radikal.cloud/2025/01/26/6ab4cf3a3fa528b6c.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 55, image: "https://s3.radikal.cloud/2025/01/26/7c765d837dd7f8da4.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 56, image: "https://s3.radikal.cloud/2025/01/26/8a1a214e02c609195.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 57, image: "https://s3.radikal.cloud/2025/01/26/99700a0fb9b0be150.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 58, image: "https://s3.radikal.cloud/2025/01/26/10be138e95106b4905.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 59, image: "https://s3.radikal.cloud/2025/01/26/11651c3f9679bd9eb7.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 60, image: "https://s3.radikal.cloud/2025/01/26/12b0d88f674a116d38.jpeg", block: 5, blockName: "Блок 5" },
	// ============####block6####=================
	{ id: 61, image: "https://s3.radikal.cloud/2025/01/26/152ed6fcc4b4469ea.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 62, image: "https://s3.radikal.cloud/2025/01/26/27cd0692748026bba.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 63, image: "https://s3.radikal.cloud/2025/01/26/3a514c37ed1a8f0f5.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 64, image: "https://s3.radikal.cloud/2025/01/26/43d6b50e3992afde1.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 65, image: "https://s3.radikal.cloud/2025/01/26/5d452e8dc569fbefe.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 66, image: "https://s3.radikal.cloud/2025/01/26/6c71fd119c4cfb7fc.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 67, image: "https://s3.radikal.cloud/2025/01/26/70c8a7355c5a2c251.jpeg", block: 6, blockName: "Блок 6" },
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
