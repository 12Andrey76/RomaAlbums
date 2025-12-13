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

// Упрощенная структура данных - при добавлении нового объекта меняйте только id, video и block
const slidesData = [
	// ============####3 Месяца####==============
	{ id: 1, video: "https://rutube.ru/play/embed/ca4afa0f8b66f69aa00283532a61e71d?p=hlbxs179rHTlYwf4AFFa1Q", block: 1, blockName: "3 Месяца" },
	{ id: 2, video: "https://rutube.ru/play/embed/d287af3688396edc93036a092732de65?p=L0y1YIvqYZBS85lxT8QOpA", block: 1, blockName: "3 Месяца" },
	// ============####4 Месяца####==============
	{ id: 3, video: "https://rutube.ru/play/embed/ab0479ad77972ade9bf77488af645265?p=aE3uUxaLaXe2RJVspogrqg", block: 2, blockName: "4 Месяца" },
	{ id: 4, video: "https://rutube.ru/play/embed/b91e66a55b2917973de6a80222b7350f?p=D-PZ0HktkPAnqyjIa-TzvA", block: 2, blockName: "4 Месяца" },
	// ============####6 Месяцев####==============
	{ id: 5, video: "https://rutube.ru/play/embed/47f1f3cd0126290826814a25645b8487?p=E80Kkhtcexq4jZJZ5knqtw", block: 3, blockName: "6 Месяцев" },
	{ id: 6, video: "https://rutube.ru/play/embed/e95e187dd12955cb0a9ed93de889062f?p=sKazqQU8RVKmYPWT1f2osA", block: 3, blockName: "6 Месяцев" },
	{ id: 7, video: "https://rutube.ru/play/embed/3e3fd1d508b4a9ff28e04baf958b9244?p=XvJ7QDTqD560Rp5ra2kRtQ", block: 3, blockName: "6 Месяцев" },
	{ id: 8, video: "https://rutube.ru/play/embed/02bd82a3fe37f7ae3c45f8bcdaea6cca?p=QeprsXh-JRhjwCriGp5MMA", block: 3, blockName: "6 Месяцев" },
	{ id: 9, video: "https://rutube.ru/play/embed/f90b8404ad266f1e8eaa8fc4fb84573e?p=aIYAyWGKmHccZ27hT1Qw-w", block: 3, blockName: "6 Месяцев" },
	{ id: 10, video: "https://rutube.ru/play/embed/59ae98f8dee139ef75f50d95ba0819b2?p=EANeLkF2rR4klr9Ci_51Ww", block: 3, blockName: "6 Месяцев" },
	{ id: 11, video: "https://rutube.ru/play/embed/756aba6e0e533047c225471a98e11939?p=StWbpZKxFoblZj1SUP6khQ", block: 3, blockName: "6 Месяцев" },
	{ id: 12, video: "https://rutube.ru/play/embed/891be2c9dda7b51e6f74724366258d24?p=6p2DmKR1cRRF2esQg7hdTA", block: 3, blockName: "6 Месяцев" },
	// ============####7 Месяцев####==============
	{ id: 13, video: "https://rutube.ru/play/embed/45b4caa7203330677a9c2b44a1337a2d?p=z4DodxMBba0cJSatF1nJrQ", block: 4, blockName: "7 Месяцев" },
	{ id: 14, video: "https://rutube.ru/play/embed/f628b9a7603db4851095e24ae55b6eb9?p=Mmf5B3gP_FHlmq6yRYMJ3A", block: 4, blockName: "7 Месяцев" },
	// ============####8 Месяцев####==============
	{ id: 15, video: "https://rutube.ru/play/embed/bb9f874d301b03f125b0ea3460a5d91e?p=u5wsWKODRYxFldDqK6pqBw", block: 5, blockName: "8 Месяцев" },
	{ id: 16, video: "https://rutube.ru/play/embed/24f81f6d3a5a514917110769ef006e5d?p=jvLhZOVdqsk6HqnRHZC5wQ", block: 5, blockName: "8 Месяцев" },
	{ id: 17, video: "https://rutube.ru/play/embed/7ffa7a9bb75eacf2fbc18ec53a9607ad?p=iltHB8tlX8_nuIwgqIFPfw", block: 5, blockName: "8 Месяцев" },
	// ============####9 Месяцев####==============
	{ id: 18, video: "https://rutube.ru/play/embed/65e562c8cccaa6fcc48cce26e86f53db?p=vjocOYAikJ6dMFNnu9fUJw", block: 6, blockName: "9 Месяцев" },
	{ id: 19, video: "https://rutube.ru/play/embed/018716df94b832478e2b10776d0407b2?p=nP0IiGzKO-rbRMW7wOMRpA", block: 6, blockName: "9 Месяцев" },
	{ id: 20, video: "https://rutube.ru/play/embed/e67bcdb41d8495e5594a9b39de6352b4?p=w1G39q0q3ObNnzPwMnCarg", block: 6, blockName: "9 Месяцев" },
	// ============####10 Месяцев####==============
	{ id: 21, video: "https://rutube.ru/play/embed/2861da268baf2f5d2b73607b64dcd4a4?p=JJXiF6ZXZOf3rjCOG1DtpQ", block: 7, blockName: "10 Месяцев" },
	{ id: 22, video: "https://rutube.ru/play/embed/11094b1ea66a7f71e932a10c413691e6?p=PCrW7gwRfT8691iJpDjeDw", block: 7, blockName: "10 Месяцев" },
	{ id: 23, video: "https://rutube.ru/play/embed/b5b367e09566daac0ad1819caa227a09?p=MalHukpKR6qn9ZDtHyiXkg", block: 7, blockName: "10 Месяцев" },
	{ id: 24, video: "https://rutube.ru/play/embed/9bdf1f4beea4e198aedcec6f450cac4d?p=tgZ7AzVdhP-CcdFZK76qbw", block: 7, blockName: "10 Месяцев" },
	{ id: 25, video: "https://rutube.ru/play/embed/811599a0259985eebfd97b13b6774673?p=t7dQXV9awan3rRPSf1lczQ", block: 7, blockName: "10 Месяцев" },
	{ id: 26, video: "https://rutube.ru/play/embed/1f601433cde4b4feb7a1165dbf147bcb?p=Ec0QwVFY3_FSRdyQS-bZUQ", block: 7, blockName: "10 Месяцев" },
	// ============####11 Месяцев####==============
	{ id: 27, video: "https://rutube.ru/play/embed/873c516a8b5c57c375a660dca5791498?p=9m_jxDiy57sqo-Ye1KG5zQ", block: 8, blockName: "11 Месяцев" },
	{ id: 28, video: "https://rutube.ru/play/embed/299295a6caf86d4b8a2aae3d3f8e713b?p=iG2Dq6cRdgMKDoAm5bXoQw", block: 8, blockName: "11 Месяцев" },
	{ id: 29, video: "https://rutube.ru/play/embed/4020a36d194509f664ae01b4950b36a7?p=3OMspG9Z942gIHBnjOxnzQ", block: 8, blockName: "11 Месяцев" },
	{ id: 30, video: "https://rutube.ru/play/embed/4d2bfe1761022975f4034379f491d9d7?p=N_YURNE1lqZboYRgOTqddg", block: 8, blockName: "11 Месяцев" },
	{ id: 31, video: "https://rutube.ru/play/embed/e1e68ead3ba69481f88e9986751fc726?p=7cYK7pbZS9raa5AnHM2Kaw", block: 8, blockName: "11 Месяцев" },
	// ============####1 Годик####==============
	{ id: 32, video: "https://rutube.ru/play/embed/1acd989e17f55a404fdbd90978498138?p=KSQ2Oy2a0WGiR_vjNxBudQ", block: 9, blockName: "1 Годик" },
	{ id: 33, video: "https://rutube.ru/play/embed/6eeeb977e45e2d736b57f9a5e5936ad0?p=2n0t7_yn_fNu_JxX69a4CQ", block: 9, blockName: "1 Годик" },
	{ id: 34, video: "https://rutube.ru/play/embed/2f3aa3f930bf1d23958e3eab4c859eb6?p=p1r1hqk93QX9cPbmzPaqzQ", block: 9, blockName: "1 Годик" },
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
