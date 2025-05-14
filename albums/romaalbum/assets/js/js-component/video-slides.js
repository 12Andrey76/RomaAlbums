function generateSlides() {
  const container = document.getElementById('slides');
  slides.forEach((slide, index) => {
		const slideDiv = document.createElement('div');
		slideDiv.className = "container row item";
		slideDiv.id = `slide${slide.id}`;
		slideDiv.style.display = index === 0 ? 'block' : 'none'; 

		// Создаем навигацию для блоков (вверху)
		const blockNavDiv = document.createElement('div');
		blockNavDiv.className = "container";
		blockNavDiv.innerHTML = `
			<div class="row">
				<div class="col-3">
					<div class="block_album">${slide.links.blockPrevious ? `<a href="#slide${slide.links.blockPrevious}" class="prev-block" data-target="slide${slide.links.blockPrevious}">&lt;</a>` : ''}</div>
				</div>
				<div class="col-6">
					<div class="block_album"><h3>${slide.links.block}</h3></div>
				</div>
				<div class="col-3">
					<div class="block_album">${slide.links.blockNext ? `<a href="#slide${slide.links.blockNext}" class="next-block" data-target="slide${slide.links.blockNext}">&gt;</a>` : ''}</div>
				</div>
			</div>`;

		// Создаем навигацию для слайдов (под блоками)
		const slideNavDiv = document.createElement('div');
		slideNavDiv.className = "container";
		slideNavDiv.innerHTML = `
			<div class="row">
				<div class="col-3">
					<div class="slide_album">${slide.links.previous ? `<a href="#slide${slide.links.previous}" class="prev-slide" data-target="slide${slide.links.previous}">&lt;</a>` : ''}</div>
				</div>
				<div class="col-6">
					<div class="slide_album"><h3>${slide.title}</h3></div>
				</div>
				<div class="col-3">
					<div class="slide_album">${slide.links.next ? `<a href="#slide${slide.links.next}" class="next-slide" data-target="slide${slide.links.next}">&gt;</a>` : ''}</div>
				</div>
			</div>`;

		 // Создаем контейнер с классом 'container'
     const iframeContainer = document.createElement('div');
     iframeContainer.className = 'container'; // Применяем класс 'container'
 
     // Создаем div с классом 'responsive-iframe'
     const responsiveIframeDiv = document.createElement('div');
     responsiveIframeDiv.className = 'responsive-iframe';
 
     // Создаем iframe
     const iframeElement = document.createElement('iframe');
     iframeElement.src = slide.video;
     iframeElement.className = 'iframe-class';
     iframeElement.style.width = '100%';
     iframeElement.style.height = '100%';
		 iframeElement.setAttribute('allowfullscreen', ''); 
		iframeElement.setAttribute('webkitallowfullscreen', ''); 
		iframeElement.setAttribute('mozallowfullscreen', '');
		iframeElement.setAttribute('loading', 'lazy');
 
     // Добавляем iframe в responsive-iframe div
     responsiveIframeDiv.appendChild(iframeElement);
 
     // Добавляем responsive-iframe div в контейнер
     iframeContainer.appendChild(responsiveIframeDiv);

		// Сначала добавляем блок навигации, затем навигацию для слайдов, и в конце изображение
		slideDiv.appendChild(blockNavDiv); // Навигация по блокам      
		slideDiv.appendChild(slideNavDiv); // Навигация по слайдам
		container.appendChild(slideDiv);
		slideDiv.appendChild(iframeContainer); // iframe
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