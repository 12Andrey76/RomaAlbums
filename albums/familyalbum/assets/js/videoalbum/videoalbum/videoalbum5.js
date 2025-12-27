const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://radika1.link/2025/07/27/1000005900b6167ca4e2225f09.th.jpg', href: '../video/video5.html#slide1', alt: 'preview 1' },
			{ src: 'https://radika1.link/2025/07/27/1000005901c88185c014d58a70.th.jpg', href: '../video/video5.html#slide2', alt: 'preview 2' },
			{ src: 'https://radika1.link/2025/07/27/10000059026573c1a7e80c29d0.th.jpg', href: '../video/video5.html#slide3', alt: 'preview 3' },
			{ src: 'https://radika1.link/2025/07/27/100000590307468f2b575fbcb6.th.jpg', href: '../video/video5.html#slide4', alt: 'preview 4' },
			{ src: 'https://radika1.link/2025/07/27/1000005904f906737928cc8ecf.th.jpg', href: '../video/video5.html#slide5', alt: 'preview 5' },
			{ src: 'https://s2.radikal.cloud/2025/11/29/6ddd176f123621440.th.jpg', href: '../video/video5.html#slide6', alt: 'preview 6' },
			{ src: 'https://radika1.link/2025/12/27/74bd91f6b0722ec50.th.jpg', href: '../video/video5.html#slide7', alt: 'preview 7' },

		],
	},
  
]

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
loadScript('../../assets/js/js-component/prev-slides.js')
	.then(() => {
		console.log('Slides script loaded successfully');
	})
	.catch(error => {
		console.error(error);
	});