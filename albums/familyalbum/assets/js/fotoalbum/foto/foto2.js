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
	{ id: 1, image: "https://s3.radikal.cloud/2025/01/26/1b1a7acea238f5d3b.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 2, image: "https://s3.radikal.cloud/2025/01/26/2a8e2ab70ff1ba6eb.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 3, image: "https://s3.radikal.cloud/2025/01/26/37d86fe59f3d3afe1.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 4, image: "https://s3.radikal.cloud/2025/01/26/4ba2988b0c6935b12.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 5, image: "https://s3.radikal.cloud/2025/01/26/5094cfdee5ad5feaa.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 6, image: "https://s3.radikal.cloud/2025/01/26/6791b462bc0f9e891.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 7, image: "https://s3.radikal.cloud/2025/01/26/7c7473346707bfe7e.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 8, image: "https://s3.radikal.cloud/2025/01/26/8a2a5f872f8309247.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 9, image: "https://s3.radikal.cloud/2025/01/26/9c471d4a5082de1fe.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 10, image: "https://s3.radikal.cloud/2025/01/26/10ccf148219e5780de.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 11, image: "https://s3.radikal.cloud/2025/01/26/11b554222d6269da4e.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 12, image: "https://s3.radikal.cloud/2025/01/26/1219afd655ae3edd7b.jpeg", block: 1, blockName: "Блок 1" },
	// ============####block2####=================
	{ id: 13, image: "https://s3.radikal.cloud/2025/01/26/13678f5a25bf9470da.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 14, image: "https://s3.radikal.cloud/2025/01/26/14adb53b77970c7640.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 15, image: "https://s3.radikal.cloud/2025/01/26/15e0d0d4045585475c.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 16, image: "https://s3.radikal.cloud/2025/01/26/16d3975bdbe9e60559.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 17, image: "https://s3.radikal.cloud/2025/01/26/1771e56324e7713ab5.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 18, image: "https://s3.radikal.cloud/2025/01/26/18036c0f0d5c565f30.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 19, image: "https://s3.radikal.cloud/2025/01/26/1937e91e63ad0c807b.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 20, image: "https://s3.radikal.cloud/2025/01/26/20b3354030c1edceb5.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 21, image: "https://s3.radikal.cloud/2025/01/26/21d437332fa848b89f.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 22, image: "https://s3.radikal.cloud/2025/01/26/227ec718f3eef62616.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 23, image: "https://s3.radikal.cloud/2025/01/26/23c30986cec5189b7f.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 24, image: "https://s3.radikal.cloud/2025/01/26/24dd0e2f9e1a6f054b.jpeg", block: 2, blockName: "Блок 2" },
	// ============####block3####=================
	{ id: 25, image: "https://s3.radikal.cloud/2025/01/26/25ea23f9debbf73b08.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 26, image: "https://s3.radikal.cloud/2025/01/26/26c99e0597d502d682.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 27, image: "https://s3.radikal.cloud/2025/01/26/27089168aebce729d4.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 28, image: "https://s3.radikal.cloud/2025/01/26/283e1ba112e04aee5d.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 29, image: "https://s3.radikal.cloud/2025/01/26/299008a8fa69f09609.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 30, image: "https://s3.radikal.cloud/2025/01/26/3080c5b3967ed5c2c4.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 31, image: "https://s3.radikal.cloud/2025/01/26/31d9ec53801e3e95df.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 32, image: "https://s3.radikal.cloud/2025/01/26/32db6e83ec0a8b6048.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 33, image: "https://s3.radikal.cloud/2025/01/26/330b973fa307aca194.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 34, image: "https://s3.radikal.cloud/2025/01/26/34b0c64d5594a5db85.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 35, image: "https://s3.radikal.cloud/2025/01/26/35ef4974019e7b5a00.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 36, image: "https://s3.radikal.cloud/2025/01/26/36e69d034544c81ce5.jpeg", block: 3, blockName: "Блок 3" },
	// ============####block4####=================
	{ id: 37, image: "https://s3.radikal.cloud/2025/01/26/37471ca55d4cb2058d.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 38, image: "https://s3.radikal.cloud/2025/01/26/3877ae6ed9bb2cc880.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 39, image: "https://s3.radikal.cloud/2025/01/26/39827641d96b0ffc38.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 40, image: "https://s3.radikal.cloud/2025/01/26/40d403d577e2848292.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 41, image: "https://s3.radikal.cloud/2025/01/26/4136a0487e69ed48e8.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 42, image: "https://s3.radikal.cloud/2025/01/26/420b5f3d06bb605123.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 43, image: "https://s3.radikal.cloud/2025/01/26/43b1a7a9b2f31b071d.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 44, image: "https://s3.radikal.cloud/2025/01/26/44769be1d7ca5a921a.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 45, image: "https://s3.radikal.cloud/2025/01/26/4563604bf695bf3c76.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 46, image: "https://s3.radikal.cloud/2025/01/26/467890855c75d00f08.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 47, image: "https://s3.radikal.cloud/2025/01/26/4759ad2a96e27a6c58.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 48, image: "https://s3.radikal.cloud/2025/01/26/48430a54f272750a7b.jpeg", block: 4, blockName: "Блок 4" },
	// ============####block5####=================
	{ id: 49, image: "https://s3.radikal.cloud/2025/01/26/49673f070a58e6da12.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 50, image: "https://s3.radikal.cloud/2025/01/26/5074ebce93e0365a02.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 51, image: "https://s3.radikal.cloud/2025/01/26/51faed1209ab884246.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 52, image: "https://s3.radikal.cloud/2025/01/26/5280c94ed2e7be62a8.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 53, image: "https://s3.radikal.cloud/2025/01/26/53fd03ac94df3b194d.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 54, image: "https://s3.radikal.cloud/2025/01/26/543c0023d13b8c6e9a.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 55, image: "https://s3.radikal.cloud/2025/01/26/55cbe3d3fe4a5c6764.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 56, image: "https://s3.radikal.cloud/2025/01/26/56553a2de65a92db17.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 57, image: "https://s3.radikal.cloud/2025/01/26/5755be1feba9376db0.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 58, image: "https://s3.radikal.cloud/2025/01/26/58a30b761ac7295bf4.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 59, image: "https://s3.radikal.cloud/2025/01/26/59a318f76831eeb906.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 60, image: "https://s3.radikal.cloud/2025/01/26/602499824d62f4208d.jpeg", block: 5, blockName: "Блок 5" },
	// ============####block6####=================
	{ id: 61, image: "https://s3.radikal.cloud/2025/01/26/6109d2e7c09cc3f225.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 62, image: "https://s3.radikal.cloud/2025/01/26/6279cf3acdf0fd6599.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 63, image: "https://s3.radikal.cloud/2025/01/26/63bd224909d1d8cb72.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 64, image: "https://s3.radikal.cloud/2025/01/26/6419d49212846aac83.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 65, image: "https://s3.radikal.cloud/2025/01/26/654664d5b3ee320fd8.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 66, image: "https://s3.radikal.cloud/2025/01/26/66c7008a45b58bd95d.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 67, image: "https://s3.radikal.cloud/2025/01/26/675e27aa05f16a4550.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 68, image: "https://s3.radikal.cloud/2025/01/26/68541095ec735772af.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 69, image: "https://s3.radikal.cloud/2025/01/26/6989231aa01a4226a4.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 70, image: "https://s3.radikal.cloud/2025/01/26/70e102d8b6b195db15.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 71, image: "https://s3.radikal.cloud/2025/01/26/713de5389d3c59b124.jpeg", block: 6, blockName: "Блок 6" },
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
