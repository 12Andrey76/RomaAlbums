const albums = [
  {
		id: 6,
		title: '6 Месяцев',
		images: [
			{ src: 'https://s3.radikal.cloud/2025/01/26/45a745330bd7147193.th.jpeg', href: '../foto/foto.html#slide37', alt: 'preview 1' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/466365a594270b7e1b.th.jpeg', href: '../foto/foto.html#slide38', alt: 'preview 2' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/48e625eaeeb8ad8063.th.jpeg', href: '../foto/foto.html#slide39', alt: 'preview 3' },
      { src: 'https://s3.radikal.cloud/2025/01/26/503870216d67c39230.th.jpeg', href: '../foto/foto.html#slide40', alt: 'preview 4' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/525969037a1243aeb0.th.jpeg', href: '../foto/foto.html#slide41', alt: 'preview 5' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/53c07ba51b6847148f.th.jpeg', href: '../foto/foto.html#slide42', alt: 'preview 6' },
      { src: 'https://s3.radikal.cloud/2025/01/26/54f05f3f01c7b1bcd1.th.jpeg', href: '../foto/foto.html#slide43', alt: 'preview 7' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/56915a83b804e82ac1.th.jpeg', href: '../foto/foto.html#slide44', alt: 'preview 8' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/572bc67253aa1044eb.th.jpeg', href: '../foto/foto.html#slide45', alt: 'preview 9' },
      { src: 'https://s3.radikal.cloud/2025/01/26/58d759615768082abf.th.jpeg', href: '../foto/foto.html#slide46', alt: 'preview 10' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/59bbd542e1f2959493.th.jpeg', href: '../foto/foto.html#slide47', alt: 'preview 11' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/6084e9257f236a1433.th.jpeg', href: '../foto/foto.html#slide48', alt: 'preview 12' },
      { src: 'https://s3.radikal.cloud/2025/01/26/6115fa8bbb7698a293.th.jpeg', href: '../foto/foto.html#slide49', alt: 'preview 13' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/63aa4e032bc277e209.th.jpeg', href: '../foto/foto.html#slide50', alt: 'preview 14' },
			{ src: 'https://s3.radikal.cloud/2025/01/26/64c5e69adadb833ad9.th.jpeg', href: '../foto/foto.html#slide51', alt: 'preview 15' },
		],
	}
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