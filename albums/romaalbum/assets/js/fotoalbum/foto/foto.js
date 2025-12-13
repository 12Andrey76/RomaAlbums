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

// Упрощенная структура данных - при добавлении нового объекта меняйте только id, image и block
const slidesData = [
	// ============####1 Месяц####=================
	{ id: 1, image: "https://s3.radikal.cloud/2025/01/26/158eb7074b03e9ad1.jpeg", block: 1, blockName: "1 Месяц" },
	{ id: 2, image: "https://s3.radikal.cloud/2025/01/26/3f257bfa0471f19a5.jpeg", block: 1, blockName: "1 Месяц" },
	{ id: 3, image: "https://s3.radikal.cloud/2025/01/26/476e4b24a45184277.jpeg", block: 1, blockName: "1 Месяц" },
	{ id: 4, image: "https://s3.radikal.cloud/2025/01/26/6a0cc80b8a5bd355d.jpeg", block: 1, blockName: "1 Месяц" },
	{ id: 5, image: "https://s3.radikal.cloud/2025/01/26/910b5f504151745c1.jpeg", block: 1, blockName: "1 Месяц" },
	{ id: 6, image: "https://s3.radikal.cloud/2025/01/26/107d116ef5382467f0.jpeg", block: 1, blockName: "1 Месяц" },
	{ id: 7, image: "https://s3.radikal.cloud/2025/01/26/11ef2e37f908bfac95.jpeg", block: 1, blockName: "1 Месяц" },
	{ id: 8, image: "https://s3.radikal.cloud/2025/01/26/121a52eff6edb9893d.jpeg", block: 1, blockName: "1 Месяц" },
	{ id: 9, image: "https://s3.radikal.cloud/2025/01/26/13.f6f754fea56ff0cc.jpeg", block: 1, blockName: "1 Месяц" },
	// ============####2 Месяца####================
	{ id: 10, image: "https://s3.radikal.cloud/2025/01/26/14c2d655aabf0f57b9.jpeg", block: 2, blockName: "2 Месяца" },
	{ id: 11, image: "https://s3.radikal.cloud/2025/01/26/1513b596fbe9353cfd.jpeg", block: 2, blockName: "2 Месяца" },
	{ id: 12, image: "https://s3.radikal.cloud/2025/01/26/164b8a7d839399a233.jpeg", block: 2, blockName: "2 Месяца" },
	{ id: 13, image: "https://s3.radikal.cloud/2025/01/26/17521ffa1ca53ef1c9.jpeg", block: 2, blockName: "2 Месяца" },
	{ id: 14, image: "https://s3.radikal.cloud/2025/01/26/1838fe99d98b3b6c4a.jpeg", block: 2, blockName: "2 Месяца" },
	{ id: 15, image: "https://s3.radikal.cloud/2025/01/26/19023230daceff42c7.jpeg", block: 2, blockName: "2 Месяца" },
	{ id: 16, image: "https://s3.radikal.cloud/2025/01/26/203960d38cfa5aa351.jpeg", block: 2, blockName: "2 Месяца" },
	// ============####3 Месяц####=================
	{ id: 17, image: "https://s3.radikal.cloud/2025/01/26/219b15f297b9f2d81f.jpeg", block: 3, blockName: "3 Месяца" },
	{ id: 18, image: "https://s3.radikal.cloud/2025/01/26/22123214bd1c7742fd.jpeg", block: 3, blockName: "3 Месяца" },
	{ id: 19, image: "https://s3.radikal.cloud/2025/01/26/23f7424ad2cbcaec2b.jpeg", block: 3, blockName: "3 Месяца" },
	{ id: 20, image: "https://s3.radikal.cloud/2025/01/26/2412f9ff4a8e61cdc8.jpeg", block: 3, blockName: "3 Месяца" },
	{ id: 21, image: "https://s3.radikal.cloud/2025/01/26/25354d1596203ed20a.jpeg", block: 3, blockName: "3 Месяца" },
	{ id: 22, image: "https://s3.radikal.cloud/2025/01/26/26e0d311ef38e2a64e.jpeg", block: 3, blockName: "3 Месяца" },
	{ id: 23, image: "https://s3.radikal.cloud/2025/01/26/29bf4dde8180d98eb4.jpeg", block: 3, blockName: "3 Месяца" },
	{ id: 24, image: "https://s3.radikal.cloud/2025/01/26/302df5d674fd891a8a.jpeg", block: 3, blockName: "3 Месяца" },
	// ============####4 Месяц####=================
	{ id: 25, image: "https://s3.radikal.cloud/2025/01/26/3159424de88dc824a6.jpeg", block: 4, blockName: "4 Месяца" },
	{ id: 26, image: "https://s3.radikal.cloud/2025/01/26/32730e1a6def528d31.jpeg", block: 4, blockName: "4 Месяца" },
	// ============####5 Месяцев####===============
	{ id: 27, image: "https://s3.radikal.cloud/2025/01/26/3338946ef0f727cf54.jpeg", block: 5, blockName: "5 Месяцев" },
	{ id: 28, image: "https://s3.radikal.cloud/2025/01/26/34bc988ca24240eec7.jpeg", block: 5, blockName: "5 Месяцев" },
	{ id: 29, image: "https://s3.radikal.cloud/2025/01/26/3581330aab6f37fde1.jpeg", block: 5, blockName: "5 Месяцев" },
	{ id: 30, image: "https://s3.radikal.cloud/2025/01/26/36b71b09e26b51afa6.jpeg", block: 5, blockName: "5 Месяцев" },
	{ id: 31, image: "https://s3.radikal.cloud/2025/01/26/381886b41279529539.jpeg", block: 5, blockName: "5 Месяцев" },
	{ id: 32, image: "https://s3.radikal.cloud/2025/01/26/39a8a0ed297e586a1e.jpeg", block: 5, blockName: "5 Месяцев" },
	{ id: 33, image: "https://s3.radikal.cloud/2025/01/26/41cb8e9c70fa256f76.jpeg", block: 5, blockName: "5 Месяцев" },
	{ id: 34, image: "https://s3.radikal.cloud/2025/01/26/42f471c0df37c8a0c2.jpeg", block: 5, blockName: "5 Месяцев" },
	{ id: 35, image: "https://s3.radikal.cloud/2025/01/26/43be41cce3e2e8dcb9.jpeg", block: 5, blockName: "5 Месяцев" },
	{ id: 36, image: "https://s3.radikal.cloud/2025/01/26/44b1d796b2d5826fad.jpeg", block: 5, blockName: "5 Месяцев" },
	// ============####6 Месяцев####===============
	{ id: 37, image: "https://s3.radikal.cloud/2025/01/26/45a745330bd7147193.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 38, image: "https://s3.radikal.cloud/2025/01/26/466365a594270b7e1b.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 39, image: "https://s3.radikal.cloud/2025/01/26/48e625eaeeb8ad8063.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 40, image: "https://s3.radikal.cloud/2025/01/26/503870216d67c39230.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 41, image: "https://s3.radikal.cloud/2025/01/26/525969037a1243aeb0.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 42, image: "https://s3.radikal.cloud/2025/01/26/53c07ba51b6847148f.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 43, image: "https://s3.radikal.cloud/2025/01/26/54f05f3f01c7b1bcd1.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 44, image: "https://s3.radikal.cloud/2025/01/26/56915a83b804e82ac1.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 45, image: "https://s3.radikal.cloud/2025/01/26/572bc67253aa1044eb.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 46, image: "https://s3.radikal.cloud/2025/01/26/58d759615768082abf.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 47, image: "https://s3.radikal.cloud/2025/01/26/59bbd542e1f2959493.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 48, image: "https://s3.radikal.cloud/2025/01/26/6084e9257f236a1433.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 49, image: "https://s3.radikal.cloud/2025/01/26/6115fa8bbb7698a293.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 50, image: "https://s3.radikal.cloud/2025/01/26/63aa4e032bc277e209.jpeg", block: 6, blockName: "6 Месяцев" },
	{ id: 51, image: "https://s3.radikal.cloud/2025/01/26/64c5e69adadb833ad9.jpeg", block: 6, blockName: "6 Месяцев" },
	// ============####7 Месяцев####==============
	{ id: 52, image: "https://s3.radikal.cloud/2025/01/26/65284bc81dc5607f9d.jpeg", block: 7, blockName: "7 Месяцев" },
	{ id: 53, image: "https://s3.radikal.cloud/2025/01/26/68e9778267da0d74a4.jpeg", block: 7, blockName: "7 Месяцев" },
	{ id: 54, image: "https://s3.radikal.cloud/2025/01/26/69116036c91b9282f8.jpeg", block: 7, blockName: "7 Месяцев" },
	{ id: 55, image: "https://s3.radikal.cloud/2025/01/26/7155554aedaa0802a8.jpeg", block: 7, blockName: "7 Месяцев" },
	{ id: 56, image: "https://s3.radikal.cloud/2025/01/26/72fe23fa29ad2921cf.jpeg", block: 7, blockName: "7 Месяцев" },
	{ id: 57, image: "https://s3.radikal.cloud/2025/01/26/735756eafe2d2284d1.jpeg", block: 7, blockName: "7 Месяцев" },
	// ============####8 Месяцев####==============
	{ id: 58, image: "https://s3.radikal.cloud/2025/01/26/746ca792b0526ac5bc.jpeg", block: 8, blockName: "8 Месяцев" },
	{ id: 59, image: "https://s3.radikal.cloud/2025/01/26/75ef611328c32869ca.jpeg", block: 8, blockName: "8 Месяцев" },
	{ id: 60, image: "https://s3.radikal.cloud/2025/01/26/768bdc2cd4e7c8248b.jpeg", block: 8, blockName: "8 Месяцев" },
	{ id: 61, image: "https://s3.radikal.cloud/2025/01/26/7821b9b734ea7c414c.jpeg", block: 8, blockName: "8 Месяцев" },
	{ id: 62, image: "https://s3.radikal.cloud/2025/01/26/802cf2c773d0b2a009.jpeg", block: 8, blockName: "8 Месяцев" },
	{ id: 63, image: "https://s3.radikal.cloud/2025/01/26/8196bf7c0bde963687.jpeg", block: 8, blockName: "8 Месяцев" },
	{ id: 64, image: "https://s3.radikal.cloud/2025/01/26/824a006c562ed4584d.jpeg", block: 8, blockName: "8 Месяцев" },
	{ id: 65, image: "https://s3.radikal.cloud/2025/01/26/84a974dc5ef0023297.jpeg", block: 8, blockName: "8 Месяцев" },
	{ id: 66, image: "https://s3.radikal.cloud/2025/01/26/858c86e6122c9e6c94.jpeg", block: 8, blockName: "8 Месяцев" },
	// ============####9 Месяцев####==============
	{ id: 67, image: "https://s3.radikal.cloud/2025/01/26/86c7919b9e713a95cc.jpeg", block: 9, blockName: "9 Месяцев" },
	{ id: 68, image: "https://s3.radikal.cloud/2025/01/26/87ea47e2bb39e134d7.jpeg", block: 9, blockName: "9 Месяцев" },
	{ id: 69, image: "https://s3.radikal.cloud/2025/01/26/882565f77f4295f0e2.jpeg", block: 9, blockName: "9 Месяцев" },
	{ id: 70, image: "https://s3.radikal.cloud/2025/01/26/9128d2b92d80ec6673.jpeg", block: 9, blockName: "9 Месяцев" },
	{ id: 71, image: "https://s3.radikal.cloud/2025/01/26/926d6014b8e06d687d.jpeg", block: 9, blockName: "9 Месяцев" },
	{ id: 72, image: "https://s3.radikal.cloud/2025/01/26/938ec8a2a6fed57ada.jpeg", block: 9, blockName: "9 Месяцев" },
	// ============####10 Месяцев####==============
	{ id: 73, image: "https://s3.radikal.cloud/2025/01/26/94915581363150e3a4.jpeg", block: 10, blockName: "10 Месяцев" },
	{ id: 74, image: "https://s3.radikal.cloud/2025/01/26/97071bcdc856c368f2.jpeg", block: 10, blockName: "10 Месяцев" },
	{ id: 75, image: "https://s3.radikal.cloud/2025/01/26/995a3828b65a6b66b9.jpeg", block: 10, blockName: "10 Месяцев" },
	{ id: 76, image: "https://s3.radikal.cloud/2025/01/26/100f93011871f5ea062.jpeg", block: 10, blockName: "10 Месяцев" },
	{ id: 77, image: "https://s3.radikal.cloud/2025/01/26/102520fa4539b52e38f.jpeg", block: 10, blockName: "10 Месяцев" },
	{ id: 78, image: "https://s3.radikal.cloud/2025/01/26/1049f7739fc1ac459ee.jpeg", block: 10, blockName: "10 Месяцев" },
	{ id: 79, image: "https://s3.radikal.cloud/2025/01/26/1064bec9546a2ee42e7.jpeg", block: 10, blockName: "10 Месяцев" },
	// ============####11 Месяцев####==============
	{ id: 80, image: "https://s3.radikal.cloud/2025/01/26/110ff266e6c05a9dc24.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 81, image: "https://s3.radikal.cloud/2025/01/26/11359bf056051483f4a.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 82, image: "https://s3.radikal.cloud/2025/01/26/11567a0d8f76a6a95b6.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 83, image: "https://s3.radikal.cloud/2025/01/26/117f97be6672b885f17.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 84, image: "https://s3.radikal.cloud/2025/01/26/118293ff42ffae4d9a6.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 85, image: "https://s3.radikal.cloud/2025/01/26/119ab9b4253d30f9d7c.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 86, image: "https://s3.radikal.cloud/2025/01/26/1218f809e1f198f2efb.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 87, image: "https://s3.radikal.cloud/2025/01/26/1239ad593afd42aa24b.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 88, image: "https://s3.radikal.cloud/2025/01/26/125ee40b3c1a08ae085.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 89, image: "https://s3.radikal.cloud/2025/01/26/126b0425362888f7be6.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 90, image: "https://s3.radikal.cloud/2025/01/26/128063fd29e3538fa07.jpeg", block: 11, blockName: "11 Месяцев" },
	{ id: 91, image: "https://s3.radikal.cloud/2025/01/26/13055939c74649ae727.jpeg", block: 11, blockName: "11 Месяцев" },
	// ============####1 Годик####==============
	{ id: 92, image: "https://s3.radikal.cloud/2025/01/26/13578ac2af557252607.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 93, image: "https://s3.radikal.cloud/2025/01/26/1421497868f091abc11.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 94, image: "https://s3.radikal.cloud/2025/01/26/14392a133b2402c33ac.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 95, image: "https://s3.radikal.cloud/2025/01/26/147a9bf06bcf95c9356.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 96, image: "https://s3.radikal.cloud/2025/01/26/14915eca4c7e5ac8c59.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 97, image: "https://s3.radikal.cloud/2025/01/26/150c05c666ae31f1f35.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 98, image: "https://s3.radikal.cloud/2025/01/26/1517c2939b1f58888a4.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 99, image: "https://s3.radikal.cloud/2025/01/26/1534d2586723577dac6.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 100, image: "https://s3.radikal.cloud/2025/01/26/154194f9336d9994801.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 101, image: "https://s3.radikal.cloud/2025/01/26/1565c3d7fb9c75b7e39.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 102, image: "https://s3.radikal.cloud/2025/01/26/158c233401d607d8dde.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 103, image: "https://s3.radikal.cloud/2025/01/26/15928b3c9e3c6d10c37.jpeg", block: 12, blockName: "1 Годик" },
	{ id: 104, image: "https://s3.radikal.cloud/2025/01/26/161109740446aa02f41.jpeg", block: 12, blockName: "1 Годик" },
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
