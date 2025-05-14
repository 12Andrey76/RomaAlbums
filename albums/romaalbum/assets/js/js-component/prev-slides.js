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

  albumContainer.appendChild(imgGroup);
}

// Инициализируем отображение
renderAlbum(currentAlbumIndex);