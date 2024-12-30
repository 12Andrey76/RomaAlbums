const slides = [
	{
		id: 1,
		image: "https://im.wampi.ru/2024/05/21/a5.25.webp",
		title: "Фото 1",
		block: 1,
		links: {
			previous: 12,
			next: 2,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
	}
	},
	{
		id: 2,
		image: "https://i1.wampi.ru/2024/04/23/22ebb853fcf52e604.jpg",
		title: "Фото 2",
		block: 1,
		links: {
			previous: 1,
			next: 3,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 3,
		image: "https://i1.wampi.ru/2024/04/23/3.jpg",
		title: "Фото 3",
		block: 1,
		links: {
			previous: 2,
			next: 4,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 4,
		image: "https://im.wampi.ru/2024/04/23/4.jpg",
		title: "Фото 4",
		block: 1,
		links: {
			previous: 3,
			next: 5,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 5,
		image: "https://i1.wampi.ru/2024/04/23/5.jpg",
		title: "Фото 5",
		block: 1,
		links: {
			previous: 4,
			next: 6,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
	}
	},
	{
		id: 6,
		image: "https://im.wampi.ru/2024/04/23/6.jpg",
		title: "Фото 6",
		block: 6,
		links: {
			previous: 5,
			next: 7,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 7,
		image: "https://im.wampi.ru/2024/05/27/7e1628fead0db8523.jpg",
		title: "Фото 7",
		block: 1,
		links: {
			previous: 6,
			next: 8,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 8,
		image: "https://im.wampi.ru/2024/05/27/8ca9db6b2ed4429d4.jpg",
		title: "Фото 8",
		block: 1,
		links: {
			previous: 7,
			next: 9,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 9,
		image: "https://i1.wampi.ru/2024/06/08/9.jpg",
		title: "Фото 9",
		block: 1,
		links: {
			previous: 8,
			next: 10,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 10,
		image: "https://im.wampi.ru/2024/07/21/10.jpg",
		title: "Фото 10",
		block: 1,
		links: {
			previous: 9,
			next: 11,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 11,
		image: "https://im.wampi.ru/2024/07/24/11.jpg",
		title: "Фото 11",
		block: 1,
		links: {
			previous: 10,
			next: 12,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 12,
		image: "https://i1.wampi.ru/2024/07/24/12.jpg",
		title: "Фото 12",
		block: 1,
		links: {
			previous: 11,
			next: 1,
			block: "Блок 1",
			blockPrevious: 13,
			blockNext: 13,
		}
	},
	{
		id: 13,
		image: "https://im.wampi.ru/2024/07/24/1d2424175c7e08bb6.jpg",
		title: "Фото 1",
		block: 2,
		links: {
			previous: 24,
			next: 14,
			block: "Блок 2",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 14,
		image: "https://i1.wampi.ru/2024/07/24/20639d802a38d8635.jpg",
		title: "Фото 2",
		block: 2,
		links: {
			previous: 13,
			next: 15,
			block: "Блок 2",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 15,
		image: "https://im.wampi.ru/2024/12/28/d.jpg",
		title: "Фото 3",
		block: 2,
		links: {
			previous: 14,
			next: 16,
			block: "Блок 2",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 16,
		image: "https://i1.wampi.ru/2024/12/28/e.jpg",
		title: "Фото 4",
		block: 2,
		links: {
			previous: 15,
			next: 17,
			block: "Блок 2",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 17,
		image: "https://im.wampi.ru/2024/12/28/f.jpg",
		title: "Фото 5",
		block: 1,
		links: {
			previous: 16,
			next: 18,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 18,
		image: "https://i1.wampi.ru/2024/12/28/g.jpg",
		title: "Фото 6",
		block: 1,
		links: {
			previous: 17,
			next: 19,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 19,
		image: "https://im.wampi.ru/2024/12/28/h.jpg",
		title: "Фото 7",
		block: 1,
		links: {
			previous: 18,
			next: 20,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 20,
		image: "https://i1.wampi.ru/2024/12/28/i.jpg",
		title: "Фото 8",
		block: 1,
		links: {
			previous: 19,
			next: 21,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 21,
		image: "https://im.wampi.ru/2024/12/28/j.jpg",
		title: "Фото 9",
		block: 2,
		links: {
			previous: 20,
			next: 22,
			block: "Блок 2",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 22,
		image: "https://i1.wampi.ru/2024/12/28/k.jpg",
		title: "Фото 10",
		block: 2,
		links: {
			previous: 21,
			next: 23,
			block: "Блок 2",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 23,
		image: "https://im.wampi.ru/2024/12/28/a.jpg",
		title: "Фото 11",
		block: 2,
		links: {
			previous: 22,
			next: 24,
			block: "Блок 2",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
	{
		id: 24,
		image: "https://i1.wampi.ru/2024/12/28/b.jpg",
		title: "Фото 12",
		block: 2,
		links: {
			previous: 23,
			next: 13,
			block: "Блок 2",
			blockPrevious: 1,
			blockNext: 1,
		}
	},
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
loadScript('../../assets/js/familyalbum/js-component/foto-slides.js')
	.then(() => {
			console.log('Slides script loaded successfully');
	})
	.catch(error => {
			console.error(error);
	});