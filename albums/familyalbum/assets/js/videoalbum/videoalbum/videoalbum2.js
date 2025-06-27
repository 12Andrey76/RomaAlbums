const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/27/14972a7d60d912b4b.jpeg', href: '../video/video2.html#slide1', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/2afa37cdc44f6bcd6.jpeg', href: '../video/video2.html#slide2', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/35bfcf78effbd5f84.jpeg', href: '../video/video2.html#slide3', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/27/49767687300fba06b.jpeg', href: '../video/video2.html#slide4', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/27/530efa0d3febf4c29.jpeg', href: '../video/video2.html#slide5', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/6de560adb8f629f22.jpeg', href: '../video/video2.html#slide6', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/78f0aceca35cdcf30.jpeg', href: '../video/video2.html#slide7', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/27/891b203feed92b12f.jpeg', href: '../video/video2.html#slide8', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/27/9f0642d6475d0e66a.jpeg', href: '../video/video2.html#slide9', alt: 'preview 9' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/104e65788ba67d9ddc.jpeg', href: '../video/video2.html#slide10', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/11b422b7d08fbf76c7.jpeg', href: '../video/video2.html#slide11', alt: 'preview 11' },
      { src: 'https://s3.radikal.cloud/2025/01/27/1233aa361d6b9cfa51.jpeg', href: '../video/video2.html#slide12', alt: 'preview 12' },
		],
	},
	{
		title: 'Блок #2',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/27/13aed0c54d945adfeb.jpeg', href: '../video/video2.html#slide13', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/14f239ff916a06a7d0.jpeg', href: '../video/video2.html#slide14', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/15e4f39a3939674ea1.jpeg', href: '../video/video2.html#slide15', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/27/161d8d14d309622f41.jpeg', href: '../video/video2.html#slide16', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/176d1907acbf201a1f.jpeg', href: '../video/video2.html#slide17', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/183e9b9858585d5da2.jpeg', href: '../video/video2.html#slide18', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/27/19ec708f20ea94dfbb.jpeg', href: '../video/video2.html#slide19', alt: 'preview 7' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/20e2fc242b6463a456.jpeg', href: '../video/video2.html#slide20', alt: 'preview 8' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/217cf562433fa0acfa.jpeg', href: '../video/video2.html#slide21', alt: 'preview 9' },
      { src: 'https://s3.radikal.cloud/2025/01/27/2245d9d2414bdf6484.jpeg', href: '../video/video2.html#slide22', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/239d386d226777f6e8.jpeg', href: '../video/video2.html#slide23', alt: 'preview 11' },
      { src: 'https://s3.radikal.cloud/2025/01/27/245cb94696656c5f1a.jpeg', href: '../video/video2.html#slide24', alt: 'preview 12' },
		],
	},
  {
		title: 'Блок #3',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/27/25e9ae8308a2b38bb4.jpeg', href: '../video/video2.html#slide25', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/265343ec5397cf8a88.jpeg', href: '../video/video2.html#slide26', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/275b07fc3481338997.jpeg', href: '../video/video2.html#slide27', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/27/28c9f7e3f21eae9dfa.jpeg', href: '../video/video2.html#slide28', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/298912678ced386e11.jpeg', href: '../video/video2.html#slide29', alt: 'preview 5' },
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