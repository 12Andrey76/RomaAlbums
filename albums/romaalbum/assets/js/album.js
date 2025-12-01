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
      'https://s3.radikal.cloud/2025/11/30/19eb5b3ffe266e964.th.jpg', 
      'https://s3.radikal.cloud/2025/11/30/2f68fb817e5ed7cb9.th.jpg', 
      'https://s2.radikal.cloud/2025/11/30/3930895ee3ac10863.th.jpg', 
      'https://s1.radikal.cloud/2025/11/30/48e6dfa958f423ed9.th.jpg', 
      'https://radika1.link/2025/11/30/57334af798cfd24ca.th.jpg', 
      'https://s1.radikal.cloud/2025/11/30/6c98d33a194c8624b.th.jpg', 
      'https://radika1.link/2025/11/30/7c9f480ba07ec5ead.th.jpg', 
      'https://s1.radikal.cloud/2025/11/30/88466056522aa93dc.th.jpg', 
      'https://radika1.link/2025/11/30/9be28056cfd1d346b.th.jpg', 
      'https://s2.radikal.cloud/2025/11/30/1077aa33f2a5ebe764.th.jpg', 
      'https://radika1.link/2025/11/30/11a596020c03f9798b.th.jpg', 
      'https://s1.radikal.cloud/2025/11/30/12c6e5b900d6df67e5.th.jpg', 
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
      'https://radika1.link/2025/11/30/3ca5776af797f0d77.th.jpg', 
      'https://s2.radikal.cloud/2025/11/30/4c2bcfa5349ada6cd.th.jpg', 
      'https://radika1.link/2025/11/30/686eef653fe56edc2.th.jpg', 
      'https://radika1.link/2025/11/30/75aefdccfdd18f35e.th.jpg', 
      'https://s1.radikal.cloud/2025/11/30/8291e6b25a92d2876.th.jpg', 
      'https://radika1.link/2025/11/30/9d0d4397f75bb53e4.th.jpg', 
      'https://radika1.link/2025/11/30/1061660d8adec0b1e2.th.jpg', 
      'https://s1.radikal.cloud/2025/11/30/112ec390ef40c01b3b.th.jpg', 
      'https://s3.radikal.cloud/2025/11/30/123c92af4c79574351.th.jpg', 
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
