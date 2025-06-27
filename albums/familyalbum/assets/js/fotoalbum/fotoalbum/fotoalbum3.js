const albums = [
	{
		title: 'Блок #1',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/184045ca83871f5bc.th.jpeg', href: '../foto/foto3.html#slide1', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/24cec597a68b9ae63.th.jpeg', href: '../foto/foto3.html#slide2', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/3e0e3c66d68e5f8b8.th.jpeg', href: '../foto/foto3.html#slide3', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/4ea235237992d415e.th.jpeg', href: '../foto/foto3.html#slide4', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/26/5b41a12cac1050957.th.jpeg', href: '../foto/foto3.html#slide5', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/6b242340610ba4cfc.th.jpeg', href: '../foto/foto3.html#slide6', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/77200bbb6f9a34ab2.th.jpeg', href: '../foto/foto3.html#slide7', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/26/80b02fb631f736c0d.th.jpeg', href: '../foto/foto3.html#slide8', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/26/949571d01226a88b3.th.jpeg', href: '../foto/foto3.html#slide9', alt: 'preview 9' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/1056b6e33176122dc4.th.jpeg', href: '../foto/foto3.html#slide10', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/11c829c1e5a044ad4c.th.jpeg', href: '../foto/foto3.html#slide11', alt: 'preview 11' },
      { src: 'https://s3.radikal.cloud/2025/01/26/12c3f85c40c8b25441.th.jpeg', href: '../foto/foto3.html#slide12', alt: 'preview 12' },
		],
	},
	{
		title: 'Блок #2',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/1f5f956f695c65058.th.jpeg', href: '../foto/foto3.html#slide13', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/2c49b4b2a428c9003.th.jpeg', href: '../foto/foto3.html#slide14', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/31b9bdc0282f0382b.th.jpeg', href: '../foto/foto3.html#slide15', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/4384c4fed4cad6e46.th.jpeg', href: '../foto/foto3.html#slide16', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/5f48e071c4d751a89.th.jpeg', href: '../foto/foto3.html#slide17', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/68f563ce09fc29a0b.th.jpeg', href: '../foto/foto3.html#slide18', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/26/7041e7c7a349a4a30.th.jpeg', href: '../foto/foto3.html#slide19', alt: 'preview 7' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/8decd4ee60b07e731.th.jpeg', href: '../foto/foto3.html#slide20', alt: 'preview 8' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/982e4c602295effc0.th.jpeg', href: '../foto/foto3.html#slide21', alt: 'preview 9' },
      { src: 'https://s3.radikal.cloud/2025/01/26/10882f759a93e33a04.th.jpeg', href: '../foto/foto3.html#slide22', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/1184e7c9520af654d0.th.jpeg', href: '../foto/foto3.html#slide23', alt: 'preview 11' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/1297f823ac206e330e.th.jpeg', href: '../foto/foto3.html#slide24', alt: 'preview 12' },
		],
	},
  {
		title: 'Блок #3',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/1a6dd30c5c01df215.th.jpeg', href: '../foto/foto3.html#slide25', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/281eafbb7f7e999ba.th.jpeg', href: '../foto/foto3.html#slide26', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/3c7635c39764e16b7.th.jpeg', href: '../foto/foto3.html#slide27', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/4ac64ea64d9e7f446.th.jpeg', href: '../foto/foto3.html#slide28', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/26/5851fa6e17cb6712a.th.jpeg', href: '../foto/foto3.html#slide29', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/69e4781aa4043ccf7.th.jpeg', href: '../foto/foto3.html#slide30', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/725eb0f11c2e3bd2f.th.jpeg', href: '../foto/foto3.html#slide31', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/26/867802f939ee3b1ba.th.jpeg', href: '../foto/foto3.html#slide32', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/26/9afa43bec7b2aa696.th.jpeg', href: '../foto/foto3.html#slide33', alt: 'preview 9' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/10146c372c0a404f01.th.jpeg', href: '../foto/foto3.html#slide34', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/11bf4d9c55e65f143c.th.jpeg', href: '../foto/foto3.html#slide35', alt: 'preview 11' },
      { src: 'https://s3.radikal.cloud/2025/01/26/12375b768c1a313aae.th.jpeg', href: '../foto/foto3.html#slide36', alt: 'preview 12' },
		],
	},
	{
		title: 'Блок #4',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/187c0e2002a4cf470.th.jpeg', href: '../foto/foto3.html#slide37', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/2f2643cfc983c2e9a.th.jpeg', href: '../foto/foto3.html#slide38', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/3cfbbc75530e45785.th.jpeg', href: '../foto/foto3.html#slide39', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/40a9193382b0dfb45.th.jpeg', href: '../foto/foto3.html#slide40', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/575c1c011a2dbee6e.th.jpeg', href: '../foto/foto3.html#slide41', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/6eab3f312a802bf60.th.jpeg', href: '../foto/foto3.html#slide42', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/26/70713b1371688a1e2.th.jpeg', href: '../foto/foto3.html#slide43', alt: 'preview 7' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/8a7ce26d19990e2f8.th.jpeg', href: '../foto/foto3.html#slide44', alt: 'preview 8' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/9d6b5d0b0ff2e5ac6.th.jpeg', href: '../foto/foto3.html#slide45', alt: 'preview 9' },
      { src: 'https://s3.radikal.cloud/2025/01/26/1096106687a478e6f2.th.jpeg', href: '../foto/foto3.html#slide46', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/11ade863769e7d3c39.th.jpeg', href: '../foto/foto3.html#slide47', alt: 'preview 11' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/124159eab37edccf94.th.jpeg', href: '../foto/foto3.html#slide48', alt: 'preview 12' },
		],
	},
  {
		title: 'Блок #5',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/149bcfb13a3b889c1.th.jpeg', href: '../foto/foto3.html#slide49', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/294a65fce532c06d1.th.jpeg', href: '../foto/foto3.html#slide50', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/3dc4ce4934ec03064.th.jpeg', href: '../foto/foto3.html#slide51', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/456ed09e9c88e1182.th.jpeg', href: '../foto/foto3.html#slide52', alt: 'preview 4' },
      { src: 'https://s3.radikal.cloud/2025/01/26/5090b8b76f81bd9ad.th.jpeg', href: '../foto/foto3.html#slide53', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/6ab4cf3a3fa528b6c.th.jpeg', href: '../foto/foto3.html#slide54', alt: 'preview 6' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/7c765d837dd7f8da4.th.jpeg', href: '../foto/foto3.html#slide55', alt: 'preview 7' },
      { src: 'https://s3.radikal.cloud/2025/01/26/8a1a214e02c609195.th.jpeg', href: '../foto/foto3.html#slide56', alt: 'preview 8' },
      { src: 'https://s3.radikal.cloud/2025/01/26/99700a0fb9b0be150.th.jpeg', href: '../foto/foto3.html#slide57', alt: 'preview 9' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/10be138e95106b4905.th.jpeg', href: '../foto/foto3.html#slide58', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/11651c3f9679bd9eb7.th.jpeg', href: '../foto/foto3.html#slide59', alt: 'preview 11' },
      { src: 'https://s3.radikal.cloud/2025/01/26/12b0d88f674a116d38.th.jpeg', href: '../foto/foto3.html#slide60', alt: 'preview 12' },
		],
	},
	{
		title: 'Блок #6',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/152ed6fcc4b4469ea.th.jpeg', href: '../foto/foto3.html#slide61', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/27cd0692748026bba.th.jpeg', href: '../foto/foto3.html#slide62', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/3a514c37ed1a8f0f5.th.jpeg', href: '../foto/foto3.html#slide63', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/43d6b50e3992afde1.th.jpeg', href: '../foto/foto3.html#slide64', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/5d452e8dc569fbefe.th.jpeg', href: '../foto/foto3.html#slide65', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/6c71fd119c4cfb7fc.th.jpeg', href: '../foto/foto3.html#slide66', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/26/70c8a7355c5a2c251.th.jpeg', href: '../foto/foto3.html#slide67', alt: 'preview 7' },
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
