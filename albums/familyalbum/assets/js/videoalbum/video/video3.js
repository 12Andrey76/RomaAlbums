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
	{ id: 1, video: "https://rutube.ru/play/embed/828d12428b641602344772742c7c8463?p=KIJYsDDTvrbCPhAauTl4dg", block: 1, blockName: "Блок 1" },
	{ id: 2, video: "https://rutube.ru/play/embed/04f65c04a4157f9d82df4d7c94948877?p=2dyHlYUR0df8v4IDozZKeg", block: 1, blockName: "Блок 1" },
	{ id: 3, video: "https://rutube.ru/play/embed/641dad688a57ab9cce7821aad6c63401?p=k8Kok78kiEb51lT-R7D_nA", block: 1, blockName: "Блок 1" },
	{ id: 4, video: "https://rutube.ru/play/embed/64d3ebacb68ad928694dd8de2f55127b?p=VEVQ4Tbblz7w5UY1fCaaiQ", block: 1, blockName: "Блок 1" },
	{ id: 5, video: "https://rutube.ru/play/embed/3f8dcf70c27afcbc9ae740ff34a04922?p=xtVjbptH3nC5PnItbrlC5A", block: 1, blockName: "Блок 1" },
	{ id: 6, video: "https://rutube.ru/play/embed/02ec27293ad7b09b2953e3ff4d4fe67f?p=srKnW-kfKsUKmgbzCbU9tQ", block: 1, blockName: "Блок 1" },
	{ id: 7, video: "https://rutube.ru/play/embed/4ab7fd7a1ed9d51bef83ffa2a84acbe9?p=QuFBUxYWqGVVJidk41kN1g", block: 1, blockName: "Блок 1" },
	{ id: 8, video: "https://rutube.ru/play/embed/5de6e80272faac70c1045c20d6623b03?p=HtBJqGg_DCoyH9x6NVCCIw", block: 1, blockName: "Блок 1" },
	{ id: 9, video: "https://rutube.ru/play/embed/0cb4d012b2cb4de3c61f9ee5c1cd6a57?p=q2ykKi2EpKOKUckHIMAl9Q", block: 1, blockName: "Блок 1" },
	{ id: 10, video: "https://rutube.ru/play/embed/36d40f8de122ab7168b35c76909e595a?p=jskGOLQfnJ4c8OPJlWo_Jg", block: 1, blockName: "Блок 1" },
	{ id: 11, video: "https://rutube.ru/play/embed/257f386e7aab8f06c446b3ac4766b498?p=PViYVV1JbMX0JG4UniGydQ", block: 1, blockName: "Блок 1" },
	{ id: 12, video: "https://rutube.ru/play/embed/c5a00fc0e4eb0300ef642cc4493b42f1?p=EcvULszbJVjAiOCHwsXakA", block: 1, blockName: "Блок 1" },
	{ id: 13, video: "https://rutube.ru/play/embed/5f22bc8bc5379563304370cee26a5ae8?p=6Q_FTX1cUbg3jZuRRw_NpQ", block: 2, blockName: "Блок 2" },
	{ id: 14, video: "https://rutube.ru/play/embed/ecefe137f90f625a74227dbb32eb88f1?p=od3b4_eLKrTAilkdAkJ6_g", block: 2, blockName: "Блок 2" },
	{ id: 15, video: "https://rutube.ru/play/embed/340ec95c2997f1d3d45c65242c2b3174?p=89-__mouahOkv6-tKT-8qA", block: 2, blockName: "Блок 2" },
	{ id: 16, video: "https://rutube.ru/play/embed/e8a65f029fa2eb0b3a3eca35c468af39/?p=eqVHLnkZkm6E8gybfz7IDQ&r=a", block: 2, blockName: "Блок 2" },
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
