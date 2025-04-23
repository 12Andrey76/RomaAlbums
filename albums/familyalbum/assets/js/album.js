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
      '#',
      '#',
      '#',
      '#',
    ],
    imagesSrc: [
      'https://s3.radikal.cloud/2025/01/26/186e5b584dd1210d6.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/2e523afaab24f9d46.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/3e46f9c59099fb1d8.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/4f9f136802481d7f3.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/5398131f8af1a6512.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/6f6ae154362b8bc55.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/75b4f4e2e6f9542f6.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/8f58d5a4157b11b65.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/98f91d718c0f96286.jpeg', 
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
      '#',
      '#',
      '#',
      '#',
    ],
    imagesSrc: [
      'https://s3.radikal.cloud/2025/01/26/186e5b584dd1210d6.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/2e523afaab24f9d46.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/3e46f9c59099fb1d8.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/4f9f136802481d7f3.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/5398131f8af1a6512.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/6f6ae154362b8bc55.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/75b4f4e2e6f9542f6.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/8f58d5a4157b11b65.jpeg', 
      'https://s3.radikal.cloud/2025/01/26/98f91d718c0f96286.jpeg', 
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