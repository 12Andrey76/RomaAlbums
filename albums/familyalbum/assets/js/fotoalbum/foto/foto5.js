const slides = [
// ============####block1####=================
	{
		id: 1,
		image: "https://s2.radikal.cloud/2025/04/22/1b5bc6e786501801a.jpg",
		title: "Фото 1",
		block: 1,
		links: {
			previous: 11,
			next: 2,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 2,
		image: "https://s2.radikal.cloud/2025/04/22/222b433e76ac36e0d.jpg",
		title: "Фото 2",
		block: 1,
		links: {
			previous: 1,
			next: 3,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 3,
		image: "https://s2.radikal.cloud/2025/05/01/3b316f8ce6b20006c.jpg",
		title: "Фото 3",
		block: 1,
		links: {
			previous: 2,
			next: 4,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 4,
		image: "https://s2.radikal.cloud/2025/05/01/4048524a7cc50f79a.jpg",
		title: "Фото 4",
		block: 1,
		links: {
			previous: 3,
			next: 5,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 5,
		image: "https://s2.radikal.cloud/2025/05/01/599ec7c965db4ae46.jpg",
		title: "Фото 5",
		block: 1,
		links: {
			previous: 4,
			next: 6,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 6,
		image: "https://s2.radikal.cloud/2025/05/01/6cac88528ce9ed8c6.jpg",
		title: "Фото 6",
		block: 1,
		links: {
			previous: 5,
			next: 7,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 7,
		image: "https://s2.radikal.cloud/2025/05/01/75fbdc53076d7d94a.jpg",
		title: "Фото 7",
		block: 1,
		links: {
			previous: 6,
			next: 8,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 8,
		image: "https://s2.radikal.cloud/2025/05/01/8aa3ec5e19ea0d661.jpg",
		title: "Фото 8",
		block: 1,
		links: {
			previous: 7,
			next: 9,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 9,
		image: "https://s2.radikal.cloud/2025/05/01/9c1def78b826dc862.jpg",
		title: "Фото 9",
		block: 1,
		links: {
			previous: 8,
			next: 10,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 10,
		image: "https://s1.radikal.cloud/2025/05/19/106b4e361664fe2d46.jpg",
		title: "Фото 10",
		block: 1,
		links: {
			previous: 9,
			next: 11,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 11,
		image: "https://s1.radikal.cloud/2025/05/19/111f2216470c4e0040.jpg",
		title: "Фото 11",
		block: 1,
		links: {
			previous: 10,
			next: 1,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	
// ============####block2####=================
	
// ============####block3####=================
	
];

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
