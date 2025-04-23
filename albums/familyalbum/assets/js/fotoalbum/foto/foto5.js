const slides = [
// ============####block1####=================
	{
		id: 1,
		image: "https://s2.radikal.cloud/2025/04/22/1b5bc6e786501801a.jpg",
		title: "Фото 1",
		block: 1,
		links: {
			previous: 2,
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
