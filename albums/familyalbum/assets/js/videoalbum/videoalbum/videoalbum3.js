const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/27/19154cc0426a1c519.jpeg', href: '../video/video3.html#slide1', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/23a11862d67a78894.jpeg', href: '../video/video3.html#slide2', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/3fa7b1154e4e0272a.jpeg', href: '../video/video3.html#slide3', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/27/461fc7a9d45af3181.jpeg', href: '../video/video3.html#slide4', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/27/51dfab304488307a5.jpeg', href: '../video/video3.html#slide5', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/66f0386c679d8ad37.jpeg', href: '../video/video3.html#slide6', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/76313f038c39e5c35.jpeg', href: '../video/video3.html#slide7', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/27/8f855676ebc4bf27b.jpeg', href: '../video/video3.html#slide8', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/27/9bf103735ab75ff19.jpeg', href: '../video/video3.html#slide9', alt: 'preview 9' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/102573c164df0a4ad5.jpeg', href: '../video/video3.html#slide10', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/11546a5f3e9be05b3a.jpeg', href: '../video/video3.html#slide11', alt: 'preview 11' },
      { src: 'https://s3.radikal.cloud/2025/01/27/12be8b9bec35df8ae1.jpeg', href: '../video/video3.html#slide12', alt: 'preview 12' },

		],
	},
	{
		title: 'Блок #2',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/27/13976f05d7c2bd9f46.jpeg', href: '../video/video3.html#slide13', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/1493d49660083e779a.jpeg', href: '../video/video3.html#slide14', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/15b4e8f575daa2bac3.jpeg', href: '../video/video3.html#slide15', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/27/16ffe540911f0670b8.jpeg', href: '../video/video3.html#slide16', alt: 'preview 4' },
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