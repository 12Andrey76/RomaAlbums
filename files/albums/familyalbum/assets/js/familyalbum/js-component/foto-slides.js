function generateSlides() {
	const container = document.getElementById('slides-container'); // Элемент, в который мы будем вставлять слайды
	slides.forEach((slide, index) => {
		const slideDiv = document.createElement('div');
		slideDiv.className = "container row item";
		slideDiv.id = `slide${slide.id}`;
		slideDiv.style.display = index === 0 ? 'block' : 'none'; // Показываем только первый слайд

		//Создаем навигацию для блоков (вверху)
		const blockNavDiv = document.createElement ('div');
		blockNavDiv.className = "block_album text-center block-navigation";
		blockNavDiv.innerHTML = `
			<h2>
				${slide.links.blockPrevious ? `<a href="#" class="prev-block" data-target="slide${slide.links.blockPrevious}">&lt;</a>` : ''}
				${slide.links.block}
				${slide.links.blockNext ? `<a href="#" class="next-block" data-target="slide${slide.links.blockNext}">&gt;</a>` : ''}
			</h2>`;

		// Создаем навигацию для слайдов (под блоками)
		const slideNavDiv = document.createElement('div');
		slideNavDiv.className = "slide_album text-center slide-navigation";
		slideNavDiv.innerHTML = `
			<h2>
				${slide.links.previous ? `<a href="#" class="prev-slide" data-target="slide${slide.links.previous}">&lt;</a>` : ''}
				${slide.title}
				${slide.links.next ? `<a href="#" class="next-slide" data-target="slide${slide.links.next}">&gt;</a>` : ''}
			</h2>`;

		const imageElement = document.createElement('img');
		imageElement.src = slide.image;
		imageElement.className = 'img-thumbnail';
		imageElement.alt = slide.title;

		// Добавляем навигационные элементы и изображение в слайд
		slideDiv.appendChild(blockNavDiv); // Навигация по блокам
		slideDiv.appendChild(slideNavDiv); // Навигация по слайдам (под блоками)
		slideDiv.appendChild(imageElement); // Картинка
		container.appendChild(slideDiv);
	});
}

function showSlide(slideId) {
	// Скрыть все слайды
	document.querySelectorAll('.row.item').forEach(slide => {
		slide.style.display = 'none';
	});
	// Показать целевой слайд
	const targetSlide = document.getElementById(slideId);
	if (targetSlide) {
		targetSlide.style.display = 'block';
	}
}

window.onload = () => {
	generateSlides();

	// Обработчики событий для кнопок слайдов и блоков
	document.querySelectorAll('.prev-slide, .next-slide, .prev-block, .next-block').forEach(button => {
		button.addEventListener('click', (event) => {
			event.preventDefault(); // Предотвращаем стандартное поведение ссылки
			const targetId = button.getAttribute('data-target');

			// Показать целевой слайд
			if (targetId) {
				showSlide(targetId);
				// Меняем хэш в URL, чтобы отобразить правильный слайд
				history.pushState(null, null, `#${targetId}`);
			}
		});
	});

	// Обработка перехода по якорным ссылкам при загрузке
	const hash = window.location.hash.slice(1); // Убираем #
	if (hash) {
		showSlide(hash); // Показываем слайд, соответствующий якорю
	}
};

// Обработка события изменения хеша, если требуется
window.onhashchange = () => {
	const hash = window.location.hash.slice(1);
	if (hash) {
		showSlide(hash);
	}
};