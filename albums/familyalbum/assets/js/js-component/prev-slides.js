let currentAlbumIndex = 0;

function renderAlbum(albumIndex) {
	const album = albums[albumIndex];
	const albumContainer = document.getElementById('preview');
	albumContainer.innerHTML = ''; // Очистить текущее содержимое

  // Создание элементов для изображений
  const imgGroup = document.createElement('div');
  imgGroup.className = 'img-group row row-cols-3';

  album.images.forEach(image => {
    const link = document.createElement('a');
    link.href = image.href;

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.className = 'img-thumbnail';

    link.appendChild(img);
    imgGroup.appendChild(link);
  });

  // Создание навигации
  const nav = document.createElement('div');
  nav.className = 'navigation row'; // добавляем row, чтобы использовать стили Bootstrap

  // Кнопка "Предыдущий"
  const prevCol = document.createElement('div');
  prevCol.className = 'col-3';
  const prevSlide = document.createElement('div');
  prevSlide.className = 'slide_album';
  const prevButton = document.createElement('a');
  prevButton.href = '#';
  prevButton.textContent = '<';
  prevButton.className = 'prev-block';
  prevButton.onclick = () => {
    currentAlbumIndex = (albumIndex - 1 + albums.length) % albums.length;
    renderAlbum(currentAlbumIndex);
  };
  prevSlide.appendChild(prevButton);
  prevCol.appendChild(prevSlide);
  nav.appendChild(prevCol);

  // Заголовок обернутый в div
  const headerCol = document.createElement('div');
  headerCol.className = 'col-6';
  const headerSlide = document.createElement('div');
  headerSlide.className = 'slide_album';
  const header = document.createElement('h4');
  header.textContent = album.title;
  headerSlide.appendChild(header);
  headerCol.appendChild(headerSlide);
  nav.appendChild(headerCol);

  // Кнопка "Следующий"
  const nextCol = document.createElement('div');
  nextCol.className = 'col-3';
  const nextSlide = document.createElement('div');
  nextSlide.className = 'slide_album';
  const nextButton = document.createElement('a');
  nextButton.href = '#';
  nextButton.textContent = '>';
  nextButton.className = 'next-block';
  nextButton.onclick = () => {
    currentAlbumIndex = (albumIndex + 1) % albums.length;
    renderAlbum(currentAlbumIndex);
  };
  nextSlide.appendChild(nextButton);
  nextCol.appendChild(nextSlide);
  nav.appendChild(nextCol);

  // Добавление навигации и изображений в контейнер альбома
  albumContainer.appendChild(nav);
  albumContainer.appendChild(imgGroup);
}

// Инициализируем отображение
renderAlbum(currentAlbumIndex);
