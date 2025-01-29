const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/27/1bf4b3c393ae9ee12.jpeg', href: '../video/video1.html#slide1', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/2a423d79e2a25b820.jpeg', href: '../video/video1.html#slide2', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/31e86dc94cf502e03.jpeg', href: '../video/video1.html#slide3', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/27/4c505cfe102148328.jpeg', href: '../video/video1.html#slide4', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/27/5fe21f4b71cb46145.jpeg', href: '../video/video1.html#slide5', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/68044e16152a1887b.jpeg', href: '../video/video1.html#slide6', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/7a1c81ca26ee60a33.jpeg', href: '../video/video1.html#slide7', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/27/873d92160b27b544a.jpeg', href: '../video/video1.html#slide8', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/27/943a94f047e312d9e.jpeg', href: '../video/video1.html#slide9', alt: 'preview 9' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/10a3f98516590fe165.jpeg', href: '../video/video1.html#slide10', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/111932b8f5cf5cf32c.jpeg', href: '../video/video1.html#slide11', alt: 'preview 11' },
      { src: 'https://s3.radikal.cloud/2025/01/27/127c645207647cc8eb.jpeg', href: '../video/video1.html#slide12', alt: 'preview 12' },

		],
	},
	{
		title: 'Блок #2',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/27/13cd4b66421bba0d1a.jpeg', href: '../video/video1.html#slide13', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/140034506f060f4420.jpeg', href: '../video/video1.html#slide14', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/15080b86d81a92b9a8.jpeg', href: '../video/video1.html#slide15', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/27/161f228b6dd2251d1c.jpeg', href: '../video/video1.html#slide16', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/1703f8cb4d60dc9b4c.jpeg', href: '../video/video1.html#slide17', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/18f44fcd3c7e804e89.jpeg', href: '../video/video1.html#slide18', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/27/19a5a60921891f8322.jpeg', href: '../video/video1.html#slide19', alt: 'preview 7' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/2084445a7e828e7455.jpeg', href: '../video/video1.html#slide20', alt: 'preview 8' },
			{ src: 'https://s3.radikal.cloud/2025/01/27/21db8926f57699adee.jpeg', href: '../video/video1.html#slide21', alt: 'preview 9' },
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