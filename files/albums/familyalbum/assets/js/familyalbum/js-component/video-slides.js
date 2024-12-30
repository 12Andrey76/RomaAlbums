function generateSlides() {
  const container = document.getElementById('slides-container');

  // Проверка на существование контейнера
  if (!container) {
    console.error('Slides container not found');
    return;
  }

  slides.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = "container row item";
    slideDiv.id = `slide${slide.id}`;
    slideDiv.style.display = index === 0 ? 'block' : 'none'; // Показываем только первый слайд

    // Создаем HTML для слайда
    slideDiv.innerHTML = `
      <div class="block_album text-center">
        <div class="col">
          <h2>
            ${slide.links.blockPrevious ? `<a href="#" class="prev-block" data-target="slide${slide.links.blockPrevious}" aria-label="Previous block">&lt;</a>` : ''}
            ${slide.links.block}
            ${slide.links.blockNext ? `<a href="#" class="next-block" data-target="slide${slide.links.blockNext}" aria-label="Next block">&gt;</a>` : ''}
          </h2>
        </div>
      </div>
      <div class="slide_album text-center">
        <div class="col">
          <h2>
            ${slide.links.previous ? `<a href="#" class="prev-slide" data-target="slide${slide.links.previous}" aria-label="Previous slide">&lt;</a>` : ''}
            ${slide.title}
            ${slide.links.next ? `<a href="#" class="next-slide" data-target="slide${slide.links.next}" aria-label="Next slide">&gt;</a>` : ''}
          </h2>
        </div>
      </div>
      <div class="responsive-iframe">
        <iframe src="${slide.video}" allowfullscreen></iframe>
      </div>
    `;

    container.appendChild(slideDiv);
  });
}

// Функция для показа слайда по ID
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
      showSlide(targetId);
      // Меняем хэш в URL, чтобы отобразить правильный слайд
      history.pushState(null, null, `#${targetId}`);
    });
  });

  // Обработка перехода по якорным ссылкам при загрузке
  const hash = window.location.hash.slice(1); // Убираем #
  if (hash) {
    showSlide(hash); // Показываем слайд, соответствующий якорю
  }

  // Обработка изменения хеша
  window.onhashchange = () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      showSlide(hash);
    }
  };
};