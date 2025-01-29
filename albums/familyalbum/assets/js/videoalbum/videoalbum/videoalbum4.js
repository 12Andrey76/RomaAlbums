const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/27/1adfb976911f8ed3e.th.jpeg', href: '../video/video4.html#slide1', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/2aa4b530e6e868f04.th.jpeg', href: '../video/video4.html#slide2', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/32a7b61dc140a429e.th.jpeg', href: '../video/video4.html#slide3', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/27/46c1ccfc025a351e1.th.jpeg', href: '../video/video4.html#slide4', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/27/5b3f26765b7290f13.th.jpeg', href: '../video/video4.html#slide5', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/64aaef7fe601d9dbb.th.jpeg', href: '../video/video4.html#slide6', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/797f3fe974336e2c9.th.jpeg', href: '../video/video4.html#slide7', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/27/883c13918cf43e836.th.jpeg', href: '../video/video4.html#slide8', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/27/982901126c48e8a6f.th.jpeg', href: '../video/video4.html#slide9', alt: 'preview 9' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/1028057a7f5c7f87b3.th.jpeg', href: '../video/video4.html#slide10', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/11fd06c338babc8e37.th.jpeg', href: '../video/video4.html#slide11', alt: 'preview 11' },
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