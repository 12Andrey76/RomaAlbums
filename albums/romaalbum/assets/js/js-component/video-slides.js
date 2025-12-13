function generateSlides() {
  const container = document.getElementById('slides');
  slides.forEach((slide, index) => {
		const slideDiv = document.createElement('div');
		slideDiv.className = "container row item";
		slideDiv.id = `slide${slide.id}`;
		slideDiv.style.display = index === 0 ? 'block' : 'none'; 

		// Создаем навигацию для блоков (вверху)
		const blockNavContainer = document.createElement('div');
		blockNavContainer.className = "container";
		const blockNavDiv = document.createElement('div');
		blockNavDiv.className = "navigation row";

		// Кнопка "Предыдущий блок"
		const prevBlockCol = document.createElement('div');
		prevBlockCol.className = 'col-3';
		const prevBlockSlide = document.createElement('div');
		prevBlockSlide.className = 'block_album';
		if (slide.links.blockPrevious) {
			const prevBlockButton = document.createElement('a');
			prevBlockButton.href = '#';
			prevBlockButton.textContent = '<';
			prevBlockButton.className = 'prev-block';
			prevBlockButton.onclick = (event) => {
				event.preventDefault();
				showSlide(`slide${slide.links.blockPrevious}`);
				history.pushState(null, null, `#slide${slide.links.blockPrevious}`);
			};
			prevBlockSlide.appendChild(prevBlockButton);
		}
		prevBlockCol.appendChild(prevBlockSlide);
		blockNavDiv.appendChild(prevBlockCol);

		// Заголовок блока
		const headerBlockCol = document.createElement('div');
		headerBlockCol.className = 'col-6';
		const headerBlockSlide = document.createElement('div');
		headerBlockSlide.className = 'block_album';
		const headerBlock = document.createElement('h3');
		headerBlock.textContent = slide.links.block;
		headerBlockSlide.appendChild(headerBlock);
		headerBlockCol.appendChild(headerBlockSlide);
		blockNavDiv.appendChild(headerBlockCol);

		// Кнопка "Следующий блок"
		const nextBlockCol = document.createElement('div');
		nextBlockCol.className = 'col-3';
		const nextBlockSlide = document.createElement('div');
		nextBlockSlide.className = 'block_album';
		if (slide.links.blockNext) {
			const nextBlockButton = document.createElement('a');
			nextBlockButton.href = '#';
			nextBlockButton.textContent = '>';
			nextBlockButton.className = 'next-block';
			nextBlockButton.onclick = (event) => {
				event.preventDefault();
				showSlide(`slide${slide.links.blockNext}`);
				history.pushState(null, null, `#slide${slide.links.blockNext}`);
			};
			nextBlockSlide.appendChild(nextBlockButton);
		}
		nextBlockCol.appendChild(nextBlockSlide);
		blockNavDiv.appendChild(nextBlockCol);
		blockNavContainer.appendChild(blockNavDiv);

		// Создаем навигацию для слайдов (под блоками)
		const slideNavContainer = document.createElement('div');
		slideNavContainer.className = "container";
		const slideNavDiv = document.createElement('div');
		slideNavDiv.className = "navigation row";

		// Кнопка "Предыдущий слайд"
		const prevSlideCol = document.createElement('div');
		prevSlideCol.className = 'col-3';
		const prevSlideSlide = document.createElement('div');
		prevSlideSlide.className = 'slide_album';
		if (slide.links.previous) {
			const prevSlideButton = document.createElement('a');
			prevSlideButton.href = '#';
			prevSlideButton.textContent = '<';
			prevSlideButton.className = 'prev-slide';
			prevSlideButton.onclick = (event) => {
				event.preventDefault();
				showSlide(`slide${slide.links.previous}`);
				history.pushState(null, null, `#slide${slide.links.previous}`);
			};
			prevSlideSlide.appendChild(prevSlideButton);
		}
		prevSlideCol.appendChild(prevSlideSlide);
		slideNavDiv.appendChild(prevSlideCol);

		// Заголовок слайда
		const headerSlideCol = document.createElement('div');
		headerSlideCol.className = 'col-6';
		const headerSlideSlide = document.createElement('div');
		headerSlideSlide.className = 'slide_album';
		const headerSlide = document.createElement('h3');
		headerSlide.textContent = slide.title;
		headerSlideSlide.appendChild(headerSlide);
		headerSlideCol.appendChild(headerSlideSlide);
		slideNavDiv.appendChild(headerSlideCol);

		// Кнопка "Следующий слайд"
		const nextSlideCol = document.createElement('div');
		nextSlideCol.className = 'col-3';
		const nextSlideSlide = document.createElement('div');
		nextSlideSlide.className = 'slide_album';
		if (slide.links.next) {
			const nextSlideButton = document.createElement('a');
			nextSlideButton.href = '#';
			nextSlideButton.textContent = '>';
			nextSlideButton.className = 'next-slide';
			nextSlideButton.onclick = (event) => {
				event.preventDefault();
				showSlide(`slide${slide.links.next}`);
				history.pushState(null, null, `#slide${slide.links.next}`);
			};
			nextSlideSlide.appendChild(nextSlideButton);
		}
		nextSlideCol.appendChild(nextSlideSlide);
		slideNavDiv.appendChild(nextSlideCol);
		slideNavContainer.appendChild(slideNavDiv);

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
		slideDiv.appendChild(blockNavContainer); // Навигация по блокам      
		slideDiv.appendChild(slideNavContainer); // Навигация по слайдам
		container.appendChild(slideDiv);
		slideDiv.appendChild(iframeContainer); // iframe
  });
}

// Видео слайд
function showSlide(slideId) {
  // Перед тем, как скрыть все слайды, остановите видео текущего видимого слайда
  document.querySelectorAll('.row.item').forEach(slide => {
    if (slide.style.display === 'block') {
      const iframe = slide.querySelector('iframe');
      if (iframe) {
        // Остановка видео - сброс src
        iframe.setAttribute('data-src', iframe.src); // сохраняем текущий src
        iframe.src = ''; // отключает воспроизведение
      }
    }
  });
  
  // Скрыть все слайды
  document.querySelectorAll('.row.item').forEach(slide => {
    slide.style.display = 'none';
  });
  // Показать целевой слайд
  const targetSlide = document.getElementById(slideId);
  if (targetSlide) {
    targetSlide.style.display = 'block';

    // После отображения, можно восстановить src для следующего воспроизведения
    const iframe = targetSlide.querySelector('iframe');
    if (iframe && iframe.getAttribute('data-src')) {
      iframe.src = iframe.getAttribute('data-src');
      iframe.removeAttribute('data-src');
    }
  }
}
// Видео слайд

window.onload = () => {
  generateSlides();

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