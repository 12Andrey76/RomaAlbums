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
	{ id: 1, image: "https://s2.radikal.cloud/2025/04/22/1b5bc6e786501801a.jpg", block: 1, blockName: "Блок 1" },
	{ id: 2, image: "https://s2.radikal.cloud/2025/04/22/222b433e76ac36e0d.jpg", block: 1, blockName: "Блок 1" },
	{ id: 3, image: "https://s2.radikal.cloud/2025/05/01/3b316f8ce6b20006c.jpg", block: 1, blockName: "Блок 1" },
	{ id: 4, image: "https://s2.radikal.cloud/2025/05/01/4048524a7cc50f79a.jpg", block: 1, blockName: "Блок 1" },
	{ id: 5, image: "https://s2.radikal.cloud/2025/05/01/599ec7c965db4ae46.jpg", block: 1, blockName: "Блок 1" },
	{ id: 6, image: "https://s2.radikal.cloud/2025/05/01/6cac88528ce9ed8c6.jpg", block: 1, blockName: "Блок 1" },
	{ id: 7, image: "https://s2.radikal.cloud/2025/05/01/75fbdc53076d7d94a.jpg", block: 1, blockName: "Блок 1" },
	{ id: 8, image: "https://s2.radikal.cloud/2025/05/01/8aa3ec5e19ea0d661.jpg", block: 1, blockName: "Блок 1" },
	{ id: 9, image: "https://s2.radikal.cloud/2025/05/01/9c1def78b826dc862.jpg", block: 1, blockName: "Блок 1" },
	{ id: 10, image: "https://s1.radikal.cloud/2025/05/19/106b4e361664fe2d46.jpg", block: 1, blockName: "Блок 1" },
	{ id: 11, image: "https://s1.radikal.cloud/2025/05/19/111f2216470c4e0040.jpg", block: 1, blockName: "Блок 1" },
	{ id: 12, image: "https://s3.radikal.cloud/2025/07/06/125ec038bb6dcabd7b.jpg", block: 1, blockName: "Блок 1" },
	// ============####block2####=================
	{ id: 13, image: "https://s3.radikal.cloud/2025/07/06/132eece640714142ae.jpg", block: 2, blockName: "Блок 2" },
	{ id: 14, image: "https://s3.radikal.cloud/2025/07/06/14a72b1a9303e07e95.jpg", block: 2, blockName: "Блок 2" },
	{ id: 15, image: "https://s3.radikal.cloud/2025/07/07/15274113fff7b61b07.jpg", block: 2, blockName: "Блок 2" },
	{ id: 16, image: "https://s3.radikal.cloud/2025/07/07/16c182c2609972dca8.jpg", block: 2, blockName: "Блок 2" },
	{ id: 17, image: "https://s3.radikal.cloud/2025/07/07/171c7925c0a0fb7fac.jpg", block: 2, blockName: "Блок 2" },
	{ id: 18, image: "https://s3.radikal.cloud/2025/07/07/18e9a5edfd6ffc8e36.jpg", block: 2, blockName: "Блок 2" },
	{ id: 19, image: "https://s2.radikal.cloud/2025/10/01/1000010471d3d9bf1a18edd196.jpg", block: 2, blockName: "Блок 2" },
	{ id: 20, image: "https://s2.radikal.cloud/2025/10/03/1000011303dc8b28c7a4855411.jpg", block: 2, blockName: "Блок 2" },
	{ id: 21, image: "https://radika1.link/2025/11/29/21d60af99cd1101582.jpg", block: 2, blockName: "Блок 2" },
	{ id: 22, image: "https://s1.radikal.cloud/2025/11/29/22.2eefd55a2b0488ee2.jpg", block: 2, blockName: "Блок 2" },
	{ id: 23, image: "https://radika1.link/2025/12/27/233a1c20f2a6c3754b.jpg", block: 2, blockName: "Блок 2" },
	{ id: 24, image: "https://radika1.link/2025/12/27/246e2f9f2925e77e33.jpg", block: 2, blockName: "Блок 2" },
	// ============####block3####=================
	{ id: 25, image: "https://s1.radikal.cloud/2025/12/27/250bc68d5613719b4b.jpg", block: 3, blockName: "Блок 3" },
	{ id: 26, image: "https://s1.radikal.cloud/2025/12/27/269d8487c71932ef0c.jpg", block: 3, blockName: "Блок 3" },
	{ id: 27, image: "https://radika1.link/2025/12/27/27e7ca45348b87cfd1.jpg", block: 3, blockName: "Блок 3" },
	{ id: 28, image: "https://s2.radikal.cloud/2025/12/27/28080321e655840631.jpg", block: 3, blockName: "Блок 3" },
	{ id: 29, image: "https://s2.radikal.cloud/2026/01/01/29583a912f5ab9ed69.jpg", block: 3, blockName: "Блок 3" },
	{ id: 30, image: "https://s2.radikal.cloud/2026/01/01/304c82e1f2e8799b05.jpg", block: 3, blockName: "Блок 3" },
	{ id: 31, image: "https://radika1.link/2026/01/01/31b76dc3f8eb474240.jpg", block: 3, blockName: "Блок 3" },
	{ id: 32, image: "https://s1.radikal.cloud/2026/01/01/32e63e7ef635fe9569.jpg", block: 3, blockName: "Блок 3" },
	{ id: 33, image: "https://radika1.link/2026/01/01/334850ce775b4ccc83.jpg", block: 3, blockName: "Блок 3" },
	{ id: 34, image: "https://radika1.link/2026/01/01/34e070403daf53da5d.jpg", block: 3, blockName: "Блок 3" },
	{ id: 35, image: "https://radika1.link/2026/01/01/3524810950b4158929.jpg", block: 3, blockName: "Блок 3" },
	{ id: 36, image: "https://s2.radikal.cloud/2026/01/01/369ac33f2d2f6f712d.jpg", block: 3, blockName: "Блок 3" },
	// ============####block4####=================
	{ id: 37, image: "https://radika1.link/2026/01/07/3768b0def463f18681.jpg", block: 4, blockName: "Блок 4" },
	{ id: 38, image: "https://s2.radikal.cloud/2026/01/07/385ec0116cb4e84e23.jpg", block: 4, blockName: "Блок 4" },
	{ id: 39, image: "https://s1.radikal.cloud/2026/01/07/397af88d9121c1b0ef.jpg", block: 4, blockName: "Блок 4" },
	{ id: 40, image: "https://radika1.link/2026/01/07/402ad3b137659f0640.jpg", block: 4, blockName: "Блок 4" },
	{ id: 41, image: "https://s1.radikal.cloud/2026/01/07/41a8b75002505e8430.jpg", block: 4, blockName: "Блок 4" },
	{ id: 42, image: "https://radika1.link/2026/01/07/42023e3c4c78aebffe.jpg", block: 4, blockName: "Блок 4" },
	{ id: 43, image: "https://radika1.link/2026/01/07/4340e3e4e27ea2732b.jpg", block: 4, blockName: "Блок 4" },
	{ id: 44, image: "https://radika1.link/2026/01/07/44fac0e884366cbc57.jpg", block: 4, blockName: "Блок 4" },
	{ id: 45, image: "https://radika1.link/2026/01/07/452fb34d7db7fd51a1.jpg", block: 4, blockName: "Блок 4" },
	{ id: 46, image: "https://radika1.link/2026/01/07/4646d24e0ffda4a43e.jpg", block: 4, blockName: "Блок 4" },
	{ id: 47, image: "https://radika1.link/2026/01/07/4708866fc592b8057a.jpg", block: 4, blockName: "Блок 4" },
	{ id: 48, image: "https://s1.radikal.cloud/2026/01/07/488160320473c4946a.jpg", block: 4, blockName: "Блок 4" },
	// ============####block5####=================
	{ id: 49, image: "https://radika1.link/2026/01/07/494dc1a372ffcebe01.jpg", block: 5, blockName: "Блок 5" },

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
