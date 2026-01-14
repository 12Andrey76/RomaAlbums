const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://s2.radikal.cloud/2025/04/22/1b5bc6e786501801a.th.jpg', href: '../foto/foto5.html#slide1', alt: 'preview 1' },
			{ src: 'https://s2.radikal.cloud/2025/04/22/222b433e76ac36e0d.th.jpg', href: '../foto/foto5.html#slide2', alt: 'preview 2' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/3b316f8ce6b20006c.th.jpg', href: '../foto/foto5.html#slide3', alt: 'preview 3' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/4048524a7cc50f79a.th.jpg', href: '../foto/foto5.html#slide4', alt: 'preview 4' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/599ec7c965db4ae46.th.jpg', href: '../foto/foto5.html#slide5', alt: 'preview 5' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/6cac88528ce9ed8c6.th.jpg', href: '../foto/foto5.html#slide6', alt: 'preview 6' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/75fbdc53076d7d94a.th.jpg', href: '../foto/foto5.html#slide7', alt: 'preview 7' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/8aa3ec5e19ea0d661.th.jpg', href: '../foto/foto5.html#slide8', alt: 'preview 8' },
			{ src: 'https://s2.radikal.cloud/2025/05/01/9c1def78b826dc862.th.jpg', href: '../foto/foto5.html#slide9', alt: 'preview 9' },
			{ src: 'https://s1.radikal.cloud/2025/05/19/106b4e361664fe2d46.th.jpg', href: '../foto/foto5.html#slide10', alt: 'preview 10' },
			{ src: 'https://s1.radikal.cloud/2025/05/19/111f2216470c4e0040.th.jpg', href: '../foto/foto5.html#slide11', alt: 'preview 11' },
			{ src: 'https://s3.radikal.cloud/2025/07/06/125ec038bb6dcabd7b.th.jpg', href: '../foto/foto5.html#slide12', alt: 'preview 12' },
		],
	},
	{
		title: 'Блок #2',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/07/06/132eece640714142ae.th.jpg', href: '../foto/foto5.html#slide13', alt: 'preview 13' },
			{ src: 'https://s3.radikal.cloud/2025/07/06/14a72b1a9303e07e95.th.jpg', href: '../foto/foto5.html#slide14', alt: 'preview 14' },
			{ src: 'https://s3.radikal.cloud/2025/07/07/15274113fff7b61b07.th.jpg', href: '../foto/foto5.html#slide15', alt: 'preview 15' },
			{ src: 'https://s3.radikal.cloud/2025/07/07/16c182c2609972dca8.th.jpg', href: '../foto/foto5.html#slide16', alt: 'preview 16' },
			{ src: 'https://s3.radikal.cloud/2025/07/07/171c7925c0a0fb7fac.th.jpg', href: '../foto/foto5.html#slide17', alt: 'preview 17' },
			{ src: 'https://s3.radikal.cloud/2025/07/07/18e9a5edfd6ffc8e36.th.jpg', href: '../foto/foto5.html#slide18', alt: 'preview 18' },
			{ src: 'https://s2.radikal.cloud/2025/10/01/1000010471d3d9bf1a18edd196.th.jpg', href: '../foto/foto5.html#slide19', alt: 'preview 19' },
			{ src: 'https://s2.radikal.cloud/2025/10/03/1000011303dc8b28c7a4855411.th.jpg', href: '../foto/foto5.html#slide20', alt: 'preview 20' },
			{ src: 'https://radika1.link/2025/11/29/21d60af99cd1101582.th.jpg', href: '../foto/foto5.html#slide21', alt: 'preview 21' },
			{ src: 'https://s1.radikal.cloud/2025/11/29/22.2eefd55a2b0488ee2.th.jpg', href: '../foto/foto5.html#slide22', alt: 'preview 22' },
			{ src: 'https://radika1.link/2025/12/27/233a1c20f2a6c3754b.th.jpg', href: '../foto/foto5.html#slide23', alt: 'preview 23' },
			{ src: 'https://radika1.link/2025/12/27/246e2f9f2925e77e33.th.jpg', href: '../foto/foto5.html#slide24', alt: 'preview 24' },
			
		],
	},
	{
		title: 'Блок #3',
		images: [
			{ src: 'https://s1.radikal.cloud/2025/12/27/250bc68d5613719b4b.th.jpg', href: '../foto/foto5.html#slide25', alt: 'preview 25' },
			{ src: 'https://s1.radikal.cloud/2025/12/27/269d8487c71932ef0c.th.jpg', href: '../foto/foto5.html#slide26', alt: 'preview 26' },
			{ src: 'https://radika1.link/2025/12/27/27e7ca45348b87cfd1.th.jpg', href: '../foto/foto5.html#slide27', alt: 'preview 27' },
			{ src: 'https://s2.radikal.cloud/2025/12/27/28080321e655840631.th.jpg', href: '../foto/foto5.html#slide28', alt: 'preview 28' },
			{ src: 'https://s2.radikal.cloud/2026/01/01/29583a912f5ab9ed69.th.jpg', href: '../foto/foto5.html#slide29', alt: 'preview 29' },
			{ src: 'https://s2.radikal.cloud/2026/01/01/304c82e1f2e8799b05.th.jpg', href: '../foto/foto5.html#slide30', alt: 'preview 30' },
			{ src: 'https://radika1.link/2026/01/01/31b76dc3f8eb474240.th.jpg', href: '../foto/foto5.html#slide31', alt: 'preview 31' },
			{ src: 'https://s1.radikal.cloud/2026/01/01/32e63e7ef635fe9569.th.jpg', href: '../foto/foto5.html#slide32', alt: 'preview 32' },
			{ src: 'https://radika1.link/2026/01/01/334850ce775b4ccc83.th.jpg', href: '../foto/foto5.html#slide33', alt: 'preview 33' },
			{ src: 'https://radika1.link/2026/01/01/34e070403daf53da5d.th.jpg', href: '../foto/foto5.html#slide34', alt: 'preview 34' },
			{ src: 'https://radika1.link/2026/01/01/3524810950b4158929.th.jpg', href: '../foto/foto5.html#slide35', alt: 'preview 35' },
			{ src: 'https://s2.radikal.cloud/2026/01/01/369ac33f2d2f6f712d.th.jpg', href: '../foto/foto5.html#slide36', alt: 'preview 36' },
		],
	},
	{
		title: 'Блок #4',
		images: [
			{ src: 'https://radika1.link/2026/01/07/3768b0def463f18681.th.jpg', href: '../foto/foto5.html#slide37', alt: 'preview 37' },
			{ src: 'https://s2.radikal.cloud/2026/01/07/385ec0116cb4e84e23.th.jpg', href: '../foto/foto5.html#slide38', alt: 'preview 38' },
			{ src: 'https://s1.radikal.cloud/2026/01/07/397af88d9121c1b0ef.th.jpg', href: '../foto/foto5.html#slide39', alt: 'preview 39' },
			{ src: 'https://radika1.link/2026/01/07/402ad3b137659f0640.th.jpg', href: '../foto/foto5.html#slide40', alt: 'preview 40' },
			{ src: 'https://s1.radikal.cloud/2026/01/07/41a8b75002505e8430.th.jpg', href: '../foto/foto5.html#slide41', alt: 'preview 41' },
			{ src: 'https://radika1.link/2026/01/07/42023e3c4c78aebffe.th.jpg', href: '../foto/foto5.html#slide42', alt: 'preview 42' },
			{ src: 'https://radika1.link/2026/01/07/4340e3e4e27ea2732b.th.jpg', href: '../foto/foto5.html#slide43', alt: 'preview 43' },
			{ src: 'https://radika1.link/2026/01/07/44fac0e884366cbc57.th.jpg', href: '../foto/foto5.html#slide44', alt: 'preview 44' },
			{ src: 'https://radika1.link/2026/01/07/452fb34d7db7fd51a1.th.jpg', href: '../foto/foto5.html#slide45', alt: 'preview 45' },
			{ src: 'https://radika1.link/2026/01/07/4646d24e0ffda4a43e.th.jpg', href: '../foto/foto5.html#slide46', alt: 'preview 46' },
			{ src: 'https://radika1.link/2026/01/07/4708866fc592b8057a.th.jpg', href: '../foto/foto5.html#slide47', alt: 'preview 47' },
			{ src: 'https://s1.radikal.cloud/2026/01/07/488160320473c4946a.th.jpg', href: '../foto/foto5.html#slide48', alt: 'preview 48' },
		],
	},
	{
		title: 'Блок #5',
		images: [
			{ src: 'https://radika1.link/2026/01/07/494dc1a372ffcebe01.th.jpg', href: '../foto/foto5.html#slide49', alt: 'preview 49' },
			{ src: 'https://radika1.link/2026/01/14/50a0f62b345079c72d.th.jpg', href: '../foto/foto5.html#slide50', alt: 'preview 50' },
			{ src: 'https://radika1.link/2026/01/14/51c54e7d8256f6aff2.th.jpg', href: '../foto/foto5.html#slide51', alt: 'preview 51' },
			{ src: 'https://radika1.link/2026/01/14/52df8ec56773079467.th.jpg', href: '../foto/foto5.html#slide52', alt: 'preview 52' },

		],
	},
	
	// Добавьте другие блоки аналогично
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
loadScript('../../assets/js/js-component/prev-slides.js')
	.then(() => {
		console.log('Slides script loaded successfully');
	})
	.catch(error => {
		console.error(error);
	});
