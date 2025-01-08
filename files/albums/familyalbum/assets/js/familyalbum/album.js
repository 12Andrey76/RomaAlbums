const photoBlocks = [
  {
    id: 'foto',
    title: 'Фотоменю',
    images: [
      'fotoalbum/fotoalbum/fotoalbum1.html',
      'fotoalbum/fotoalbum/fotoalbum2.html',
      'fotoalbum/fotoalbum/fotoalbum3.html',
      'fotoalbum/fotoalbum/fotoalbum4.html',
      '#',
      '#',
      '#',
      '#',
      '#',
    ],
    imagesSrc: [
      'https://im.wampi.ru/2024/01/16/1009d6826a0bbdb5f.jpg', 
      'https://i1.wampi.ru/2024/01/16/2c11eda4f91e26756.jpg', 
      'https://i8.wampi.ru/2024/01/16/321ecdcacd1b3e4a9.jpg', 
      'https://im.wampi.ru/2024/01/16/4f430344bb3446683.jpg', 
      'https://i1.wampi.ru/2024/01/16/5a528f5491ea3ce68.jpg', 
      'https://i8.wampi.ru/2024/01/16/6f2f98038f0ad7173.jpg', 
      'https://im.wampi.ru/2024/01/16/7d4d6c4b52cd2ce68.jpg', 
      'https://i1.wampi.ru/2024/01/16/8c48f9f796f76f1c5.jpg', 
      'https://i8.wampi.ru/2024/01/16/948e2efb06cffdd3a.jpg', 
    ]
    
  },

  {
    id: 'video',
    title: 'Видеоменю',
    images: [
      'videoalbum/videoalbum/videoalbum1.html',
      'videoalbum/videoalbum/videoalbum2.html',
      'videoalbum/videoalbum/videoalbum3.html',
      'videoalbum/videoalbum/videoalbum4.html',
      '#',
      '#',
      '#',
      '#',
      '#',
    ],
    imagesSrc: [
      'https://i1.wampi.ru/2024/09/14/15dae022736cd0214.th.jpg', 
      'https://im.wampi.ru/2024/09/14/260091cae90f60d6b.th.jpg', 
      'https://i1.wampi.ru/2024/09/14/3c3531c3d4433f64c.th.jpg', 
      'https://im.wampi.ru/2024/09/14/4e0eebafcb772d690.th.jpg', 
      'https://i1.wampi.ru/2024/09/14/5e71059cfd4cf25ef.th.jpg', 
      'https://im.wampi.ru/2024/09/14/6a8c6e61b03ecbe93.th.jpg', 
      'https://i1.wampi.ru/2024/09/14/721856f0f459d8fdb.th.jpg', 
      'https://im.wampi.ru/2024/09/14/8b093eda55c3dd29d.th.jpg', 
      'https://i1.wampi.ru/2024/09/14/9.th.jpg', 
    ]
    
  },

  // Добавьте больше фотоблоков по аналогии
];

// Функция для создания фотоблоков
function createPhotoBlock(block) {
  const container = document.getElementById('albummenu-container');
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('container', 'row', 'prev');
  blockDiv.id = block.id;

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('container', 'slide_album', 'text-center');
  titleDiv.innerHTML = `
      <h2>
          <a href="#" class="prev-block" data-target="${getPrevBlockId(block.id)}">&lt; ${block.title} &gt;</a>
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