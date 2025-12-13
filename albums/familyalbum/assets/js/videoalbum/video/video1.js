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
	{ id: 1, video: "https://rutube.ru/play/embed/5bb1e3f5121c941ce87504a848146cc5/?r=a&p=J7AK5kJ4IyGKEgZQTgoOhQ", block: 1, blockName: "Блок 1" },
	{ id: 2, video: "https://rutube.ru/play/embed/3644b171e66d6242f2ee15ddae875951?p=3UjU9oUS5Tufb8uh8DhSZA", block: 1, blockName: "Блок 1" },
	{ id: 3, video: "https://rutube.ru/play/embed/014a54c3d606ef0a9a157b367bdae6ea?p=-DDTkzHw-emTmNnb_d70eQ", block: 1, blockName: "Блок 1" },
	{ id: 4, video: "https://rutube.ru/play/embed/56c9e121d6f372a22fb5ec0c5d1edf2a?p=3jguvq_vp48UZQExc5mXbg", block: 1, blockName: "Блок 1" },
	{ id: 5, video: "https://rutube.ru/play/embed/c4f8ac09107446077b70bbf82bffd491?p=3bJp8GS3eHukcEYb5e0J_g", block: 1, blockName: "Блок 1" },
	{ id: 6, video: "https://rutube.ru/play/embed/c26d6010549f1ecf5d973816dddf4200/?p=CAPI85s3CxZpvyKZEVi7xw", block: 1, blockName: "Блок 1" },
	{ id: 7, video: "https://rutube.ru/play/embed/61af4e4d4f47a118a6dca40f658af962/?p=_HKtWqK304VdGExJIwQ9fw", block: 1, blockName: "Блок 1" },
	{ id: 8, video: "https://rutube.ru/play/embed/13ca4ae8ada5ac60bdb4aabad166eea3/?p=NtesHTapM6M7b4Db7-I__A", block: 1, blockName: "Блок 1" },
	{ id: 9, video: "https://rutube.ru/play/embed/7f84b4a6c0aa402f24dcb6f48b4f2d6a/?p=nxi3gvgyZNhYC7gN6yENeA", block: 1, blockName: "Блок 1" },
	{ id: 10, video: "https://rutube.ru/play/embed/427888ad6161405949ffe8561e5c7dac/?p=i2fDpk_8yI9k400PR7mLOQ", block: 1, blockName: "Блок 1" },
	{ id: 11, video: "https://rutube.ru/play/embed/15adb7ef7ae595e5b451c2bfa8b37abd/?p=LFKllG4x_doxWPBoMXWiUw", block: 1, blockName: "Блок 1" },
	{ id: 12, video: "https://rutube.ru/play/embed/7606d6247042a762f102b89b2813e044/?p=dSgVw3iRTLVldMCu5tsVeQ", block: 1, blockName: "Блок 1" },
	{ id: 13, video: "https://rutube.ru/play/embed/8331737f0e548ddf0e7a6c02b5b9c175/?p=Q-SCWMnmEQgf5-2z2O9lxw", block: 2, blockName: "Блок 2" },
	{ id: 14, video: "https://rutube.ru/play/embed/5be646e9314aa1cba6b9eea6213d341d/?p=whvYEuhPOZP9c8N0Nsd56A", block: 2, blockName: "Блок 2" },
	{ id: 15, video: "https://rutube.ru/play/embed/9067ae6b05335462b7871fdf73e96bb0/?p=dEoLb1Xhtz-pNg-dvL1wFw", block: 2, blockName: "Блок 2" },
	{ id: 16, video: "https://rutube.ru/play/embed/c89063f373d2c6a32f551efbfa129e19/?p=YMTKK3pqj8MdTVIYuB38AA", block: 2, blockName: "Блок 2" },
	{ id: 17, video: "https://rutube.ru/play/embed/6142335eb93295d2da428a28b3e09eef/?p=89LvD7yMjNpn-KA9h0CS6g", block: 2, blockName: "Блок 2" },
	{ id: 18, video: "https://rutube.ru/play/embed/167d6cf678e45e7b972dfa7ddf1f89c4/?p=AA1dXLT0BFwWnN6ehnPEFQ", block: 2, blockName: "Блок 2" },
	{ id: 19, video: "https://rutube.ru/play/embed/ddda4ac99841f340a437edf23d54e89d/?p=gONPXxpQhfLI8vBuZlZKBA", block: 2, blockName: "Блок 2" },
	{ id: 20, video: "https://rutube.ru/play/embed/da2a151e4ade4d5336afbff0f12cd265/?p=-A0XD0RoUhtA3ZIg7OHvYg", block: 2, blockName: "Блок 2" },
	{ id: 21, video: "https://rutube.ru/play/embed/147ef80e9f70de7b9be4233b46b1c039/?p=sMF1SXQlmQlw9wt6hbqTAw", block: 2, blockName: "Блок 2" },
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
