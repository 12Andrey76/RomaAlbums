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
	{ id: 1, image: "https://s3.radikal.cloud/2025/01/26/1442912c765689010.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 2, image: "https://s3.radikal.cloud/2025/01/26/220263a9308bccc1d.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 3, image: "https://s3.radikal.cloud/2025/01/26/3dfc1d98338a77281.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 4, image: "https://s3.radikal.cloud/2025/01/26/42dd07842e9093c58.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 5, image: "https://s3.radikal.cloud/2025/01/26/55af9e951cc4d28d2.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 6, image: "https://s3.radikal.cloud/2025/01/26/65ed3e76d7a2eff71.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 7, image: "https://s3.radikal.cloud/2025/01/26/76949226560410180.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 8, image: "https://s3.radikal.cloud/2025/01/26/8272ee43dfe124449.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 9, image: "https://s3.radikal.cloud/2025/01/26/9bb74c20bd58b17b5.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 10, image: "https://s3.radikal.cloud/2025/01/26/100c93013c37dd55f0.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 11, image: "https://s3.radikal.cloud/2025/01/26/110d4bd79263b80013.jpeg", block: 1, blockName: "Блок 1" },
	{ id: 12, image: "https://s3.radikal.cloud/2025/01/26/1254a396af23a591df.jpeg", block: 1, blockName: "Блок 1" },
	// ============####block2####=================
	{ id: 13, image: "https://s3.radikal.cloud/2025/01/26/13c9b227849a765701.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 14, image: "https://s3.radikal.cloud/2025/01/26/1479c530acb90ea84e.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 15, image: "https://s3.radikal.cloud/2025/01/26/15648c12fff2d721b4.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 16, image: "https://s3.radikal.cloud/2025/01/26/16ce247fd921f5fef4.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 17, image: "https://s3.radikal.cloud/2025/01/26/170ac638543e1dfe10.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 18, image: "https://s3.radikal.cloud/2025/01/26/1893d85f6341d33adf.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 19, image: "https://s3.radikal.cloud/2025/01/26/19c2a7899b821b6964.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 20, image: "https://s3.radikal.cloud/2025/01/26/200df9e9d8bc71be6c.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 21, image: "https://s3.radikal.cloud/2025/01/26/212e00e96cb3a3d828.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 22, image: "https://s3.radikal.cloud/2025/01/26/22794457ede0d0d050.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 23, image: "https://s3.radikal.cloud/2025/01/26/236a762d4a2665045f.jpeg", block: 2, blockName: "Блок 2" },
	{ id: 24, image: "https://s3.radikal.cloud/2025/01/26/248caf516f8ca3f665.jpeg", block: 2, blockName: "Блок 2" },
	// ============####block3####=================
	{ id: 25, image: "https://s3.radikal.cloud/2025/01/26/251485a07f2726ab7e.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 26, image: "https://s3.radikal.cloud/2025/01/26/2614d773ea57b238ad.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 27, image: "https://s3.radikal.cloud/2025/01/26/2741754e01de0314e8.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 28, image: "https://s3.radikal.cloud/2025/01/26/28f0d4ad631e1dbe48.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 29, image: "https://s3.radikal.cloud/2025/01/26/2908b89d9073ce51c6.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 30, image: "https://s3.radikal.cloud/2025/01/26/30f870293b3598b9f3.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 31, image: "https://s3.radikal.cloud/2025/01/26/31629f8ac60ae345c5.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 32, image: "https://s3.radikal.cloud/2025/01/26/323ad383b09d7985ac.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 33, image: "https://s3.radikal.cloud/2025/01/26/33af5f9d8fbf2268e3.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 34, image: "https://s3.radikal.cloud/2025/01/26/34230dfe9cd38a364e.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 35, image: "https://s3.radikal.cloud/2025/01/26/35ba8de49b882ab05e.jpeg", block: 3, blockName: "Блок 3" },
	{ id: 36, image: "https://s3.radikal.cloud/2025/01/26/36a640672ab03d1ab4.jpeg", block: 3, blockName: "Блок 3" },
	// ============####block4####=================
	{ id: 37, image: "https://s3.radikal.cloud/2025/01/26/37f408ed8ea154df65.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 38, image: "https://s3.radikal.cloud/2025/01/26/38b2a4a6bb0194f80b.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 39, image: "https://s3.radikal.cloud/2025/01/26/3993763e8b8833b4ac.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 40, image: "https://s3.radikal.cloud/2025/01/26/40e3655beef179bdca.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 41, image: "https://s3.radikal.cloud/2025/01/26/41b92a5b32d3a2a42f.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 42, image: "https://s3.radikal.cloud/2025/01/26/42ab1b187132353ef7.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 43, image: "https://s3.radikal.cloud/2025/01/26/438e804eaced353856.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 44, image: "https://s3.radikal.cloud/2025/01/26/440fd9b65ca3226879.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 45, image: "https://s3.radikal.cloud/2025/01/26/4570291adec86d5756.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 46, image: "https://s3.radikal.cloud/2025/01/26/46d1cbbe54d0e3c26c.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 47, image: "https://s3.radikal.cloud/2025/01/26/47133470b38c451885.jpeg", block: 4, blockName: "Блок 4" },
	{ id: 48, image: "https://s3.radikal.cloud/2025/01/26/487ba5ffd2ed853683.jpeg", block: 4, blockName: "Блок 4" },
	// ============####block5####=================
	{ id: 49, image: "https://s3.radikal.cloud/2025/01/26/49254c082f43e946e3.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 50, image: "https://s3.radikal.cloud/2025/01/26/50f782a677ce7719ed.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 51, image: "https://s3.radikal.cloud/2025/01/26/5158a0c4081759816b.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 52, image: "https://s3.radikal.cloud/2025/01/26/52597facf8a4337c56.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 53, image: "https://s3.radikal.cloud/2025/01/26/533a817fa1ece2ddc1.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 54, image: "https://s3.radikal.cloud/2025/01/26/548af873b9a9d9ca78.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 55, image: "https://s3.radikal.cloud/2025/01/26/55fe4cb73bb1899603.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 56, image: "https://s3.radikal.cloud/2025/01/26/567aedbd83cb9b8522.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 57, image: "https://s3.radikal.cloud/2025/01/26/57a6be33a4d2f358df.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 58, image: "https://s3.radikal.cloud/2025/01/26/5848b47988fbeb461e.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 59, image: "https://s3.radikal.cloud/2025/01/26/59298d7f55225d747f.jpeg", block: 5, blockName: "Блок 5" },
	{ id: 60, image: "https://s3.radikal.cloud/2025/01/26/605ac9862178b80df0.jpeg", block: 5, blockName: "Блок 5" },
	// ============####block6####=================
	{ id: 61, image: "https://s3.radikal.cloud/2025/01/26/61e67ff63ff9c54ff7.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 62, image: "https://s3.radikal.cloud/2025/01/26/62fbfe844470962e22.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 63, image: "https://s3.radikal.cloud/2025/01/26/63276243319f92dc39.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 64, image: "https://s3.radikal.cloud/2025/01/26/6430b72dbcaafe36c1.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 65, image: "https://s3.radikal.cloud/2025/01/26/659ae6e2d34ca22d34.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 66, image: "https://s3.radikal.cloud/2025/01/26/66ad139e6e0e5863d3.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 67, image: "https://s3.radikal.cloud/2025/01/26/675ad75b7b9da734c1.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 68, image: "https://s3.radikal.cloud/2025/01/26/684aa7726ba9583542.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 69, image: "https://s3.radikal.cloud/2025/01/26/69a997c26bc947c35c.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 70, image: "https://s3.radikal.cloud/2025/01/26/700cf8f3081db77f70.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 71, image: "https://s3.radikal.cloud/2025/01/26/71ddcfeba49d74ad2f.jpeg", block: 6, blockName: "Блок 6" },
	{ id: 72, image: "https://s3.radikal.cloud/2025/01/26/7210e2ddf90e3fc58d.jpeg", block: 6, blockName: "Блок 6" },
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
