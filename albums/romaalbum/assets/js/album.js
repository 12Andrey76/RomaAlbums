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
      'https://s2.radikal.cloud/2025/05/03/1cd85473b8d77bc62.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/2f8fb6a034fd5db02.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/3234ac8298a17ddbd.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/4bb067cec80c00e33.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/553f4dd0c5269f67a.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/6121194f12f3d6599.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/746c0ddce20cc2af5.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/8c4a8ef89ca108640.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/91933a4961f38e39a.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/1087792e34099af821.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/11aeb02e104bfa858f.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/12206bdd2eb955fa0c.th.jpg', 
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
      'https://s2.radikal.cloud/2025/05/03/35e51aac59effbf3d.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/4e897065fac539f6b.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/6ea2f2fcda498ab10.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/7e85a6576ace19a6a.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/87f3456892662cecb.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/9b4a346bbcf10720f.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/1086104bf9d7a7e0c5.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/11792fe55f93cf69d2.th.jpg', 
      'https://s2.radikal.cloud/2025/05/03/123de7855d9f1f48a4.th.jpg', 
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
