const photoBlocks = [
  {
    id: 'foto',
    title: 'Фотоменю',
    images: [
      'fotoalbum/fotoalbum/fotoalbum1.html',
      'fotoalbum/fotoalbum/fotoalbum2.html',
      'fotoalbum/fotoalbum/fotoalbum3.html',
      'fotoalbum/fotoalbum/fotoalbum4.html',
      'fotoalbum/fotoalbum/fotoalbum5.html',
      'fotoalbum/fotoalbum/fotoalbum6.html',
      'fotoalbum/fotoalbum/fotoalbum7.html',
      'fotoalbum/fotoalbum/fotoalbum8.html',
      'fotoalbum/fotoalbum/fotoalbum9.html',
      'fotoalbum/fotoalbum/fotoalbum10.html',
      'fotoalbum/fotoalbum/fotoalbum11.html',
      'fotoalbum/fotoalbum/fotoalbum12.html',
      
    ],
    imagesSrc: [
      'https://i1.wampi.ru/2025/05/03/13841a5fabf81715c.jpg', 
      'https://im.wampi.ru/2025/05/03/22e99e3bd372b456e.jpg', 
      'https://i1.wampi.ru/2025/05/03/39565cbaa9672b6f5.jpg', 
      'https://im.wampi.ru/2025/05/03/4c1f60ce977204143.jpg', 
      'https://i1.wampi.ru/2025/05/03/5d481a60eda2f1c0b.jpg', 
      'https://im.wampi.ru/2025/05/03/653d62588ef894033.jpg', 
      'https://i1.wampi.ru/2025/05/03/7a4569079da7ac801.jpg', 
      'https://im.wampi.ru/2025/05/03/8df05ee4c8e0a386f.jpg', 
      'https://i1.wampi.ru/2025/05/03/9745901d8aec1e3a1.jpg', 
      'https://im.wampi.ru/2025/05/03/104238ba6af7379989.jpg', 
      'https://i1.wampi.ru/2025/05/03/111cfa450446704bfa.jpg', 
      'https://im.wampi.ru/2025/05/03/12525fdcb825937981.jpg', 
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
      'videoalbum/videoalbum/videoalbum5.html',
      'videoalbum/videoalbum/videoalbum6.html',
      'videoalbum/videoalbum/videoalbum7.html',
      'videoalbum/videoalbum/videoalbum8.html',
      'videoalbum/videoalbum/videoalbum9.html',
    ],
    imagesSrc: [
      'https://im.wampi.ru/2025/05/03/31cf97585f07a12a4.jpg', 
      'https://i1.wampi.ru/2025/05/03/451f210ae9b267c12.jpg', 
      'https://im.wampi.ru/2025/05/03/6d2c009c46fcc2767.jpg', 
      'https://i1.wampi.ru/2025/05/03/7aece79b9df83264c.jpg', 
      'https://im.wampi.ru/2025/05/03/8f07bbd681598c49c.jpg', 
      'https://i1.wampi.ru/2025/05/03/911ff05aca0ee2ad6.jpg', 
      'https://im.wampi.ru/2025/05/03/10c7b172386a71ce86.jpg', 
      'https://i1.wampi.ru/2025/05/03/11f26b59fcf6746ba1.jpg', 
      'https://i1.wampi.ru/2025/05/03/12.jpg', 
    ]
  },

  // Добавьте больше фотоблоков по аналогии
];

// Функция для создания фотоблоков
function createPhotoBlock(block) {
  const container = document.getElementById('albummenu');
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
  imgGroupDiv.classList.add('img-album', 'row', 'row-cols-3');

  block.images.forEach((imageLink, index) => {
    const imgLink = document.createElement('a');
    imgLink.href = imageLink;

    const img = document.createElement('img');
    img.src = block.imagesSrc[index];
    img.alt = `preview ${index + 1}`;

    if (block.id === 'video') {
      img.classList.add('img-thumbnail', 'prev-video');
    } else {
      img.classList.add('img-thumbnail');
    }

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

// Найдите элемент с id 'album'.
const albumDiv = document.getElementById('album');

// Функция для вывода фотографий в div.
function renderAlbum( photoBlock ) {
  // Создаем заголовок
  const title = document.createElement('h2');
  title.textContent = photoBlock.title;
  albumDiv.appendChild(title);

  // Картинки
  const images = photoBlock.images;
  const imagesSrc = photoBlock.imagesSrc;

  images.forEach((image, index) => {
    const link = document.createElement('a');
    link.href = image; // Назначаем ссылку
    link.target = '_blank'; // Открываем в новой вкладке
    
    const img = document.createElement('img');
    img.src = imagesSrc[index]; // Назначаем источник изображения
    img.alt = `Image ${index + 1}`;
    img.classList.add('img-fluid'); // Добавляем Bootstrap класс для стилизации

    // Добавляем изображение в ссылку и ссылку в div
    link.appendChild(img);
    albumDiv.appendChild(link);
  });
}

// Вызов функции для рендеринга альбома.
renderAlbum(photoBlocks[0]);
