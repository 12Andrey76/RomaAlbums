// Функция для создания фотоблоков
function createPhotoBlock(block) {
  const container = document.getElementById('preview-container');
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('container', 'row', 'prev');
  blockDiv.id = block.id;

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('container', 'slide_album', 'text-center');
  titleDiv.innerHTML = `
    <h2>
      <a href="#" class="prev-block" data-target="${getPrevBlockId(block.id)}">&lt;</a>
      ${block.title}
      <a href="#" class="next-block" data-target="${getNextBlockId(block.id)}">&gt;</a>
    </h2>`;

  const imgGroupDiv = document.createElement('div');
  imgGroupDiv.classList.add('img-group', 'row', 'row-cols-3');

  block.images.forEach((imageLink, index) => {
    const imgLink = document.createElement('a');
    imgLink.href = imageLink;

    const img = document.createElement('img');
    img.src = block.imagesSrc[index];
    img.classList.add('img-thumbnail');
    img.alt = `preview ${index + 1}`;

    imgLink.appendChild(img);
    imgGroupDiv.appendChild(imgLink);
  });

  blockDiv.appendChild(titleDiv);
  blockDiv.appendChild(imgGroupDiv);
  container.appendChild(blockDiv);
}

// Функция для получения ID предыдущего блока
function getPrevBlockId(currentId) {
  const index = photoBlocks.findIndex(block => block.id === currentId);
  return index === 0 ? photoBlocks[photoBlocks.length - 1].id : photoBlocks[index - 1].id;
}

// Функция для получения ID следующего блока
function getNextBlockId(currentId) {
  const index = photoBlocks.findIndex(block => block.id === currentId);
  return index === photoBlocks.length - 1 ? photoBlocks[0].id : photoBlocks[index + 1].id;
}

window.onload = () => {
  photoBlocks.forEach(createPhotoBlock);
  
  // Обработчики событий для кнопок
  document.querySelectorAll('.prev-block, .next-block').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      const targetId = button.getAttribute('data-target');

      // Скрыть все фотоблоки
      document.querySelectorAll('.row.prev').forEach(block => {
        block.style.display = 'none';
      });

      // Показать целевой фотоблок
      if (targetId) {
        document.getElementById(targetId).style.display = 'block';
      }
    });
  });
};