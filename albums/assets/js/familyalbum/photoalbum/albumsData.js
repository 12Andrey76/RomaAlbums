// ===== ХЕЛПЕРЫ =====
// Фото-блок: 1.ext, 2.ext, ..., N.ext
function photoBlock(title, basePath, count, ext = 'webp') {
  const slides = [];
  for (let i = 1; i <= count; i++) {
    const src = `${basePath}/${i}.${ext}`;
    slides.push({ thumb: src, full: src, alt: `Фото ${i}`, title: `Фото ${i}` });
  }
  return { title, slides };
}

// Фото-блок с явным списком файлов (когда расширения смешанные)
function photoBlockFiles(title, basePath, files) {
  return {
    title,
    slides: files.map((f, i) => {
      const src = `${basePath}/${f}`;
      return { thumb: src, full: src, alt: `Фото ${i + 1}`, title: `Фото ${i + 1}` };
    })
  };
}

// Видео-блок: превью 1.ext..N.ext + массив Rutube-ссылок
function videoBlock(title, thumbBasePath, urls, ext = 'jpg') {
  return {
    title,
    slides: urls.map((iframeSrc, i) => ({
      thumb: `${thumbBasePath}/${i + 1}.${ext}`,
      iframeSrc,
      title: `Видео ${i + 1}`,
      alt: `Видео ${i + 1}`
    }))
  };
}

// Семейный альбом — фото
// [вставить хелперы из 1.1]

window.albumsData = {
  photo: {
    photo1: {
      title: "Фотоальбом 1 год",
      blocks: [
        photoBlockFiles("Блок #1",
          "../../../albumsFiles/afterAYear/photo/photo1/img1",
          ["1.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp",
           "8.webp","9.webp","10.webp","11.webp","12.webp" ,"13.webp","14.webp","15.webp"]),
        photoBlock("Блок #2", "../../../albumsFiles/afterAYear/photo/photo1/img2", 15),
        photoBlock("Блок #3", "../../../albumsFiles/afterAYear/photo/photo1/img3", 15),
        photoBlock("Блок #4", "../../../albumsFiles/afterAYear/photo/photo1/img4", 15),
        photoBlock("Блок #5", "../../../albumsFiles/afterAYear/photo/photo1/img5", 15),
        photoBlock("Блок #6", "../../../albumsFiles/afterAYear/photo/photo1/img6", 9)
      ]
    },
    photo2: {
      title: "Фотоальбом 2 года",
      blocks: [
        photoBlock("Блок #1", "../../../albumsFiles/afterAYear/photo/photo2/img1", 15),
        photoBlock("Блок #2", "../../../albumsFiles/afterAYear/photo/photo2/img2", 15),
        photoBlock("Блок #3", "../../../albumsFiles/afterAYear/photo/photo2/img3", 15),
        photoBlock("Блок #4", "../../../albumsFiles/afterAYear/photo/photo2/img4", 15),
        photoBlock("Блок #5", "../../../albumsFiles/afterAYear/photo/photo2/img5", 11)
      ]
    },
    photo3: {
      title: "Фотоальбом 3 года",
      blocks: [
        photoBlock("Блок #1", "../../../albumsFiles/afterAYear/photo/photo3/img1", 15),
        photoBlock("Блок #2", "../../../albumsFiles/afterAYear/photo/photo3/img2", 15),
        photoBlock("Блок #3", "../../../albumsFiles/afterAYear/photo/photo3/img3", 15),
        photoBlock("Блок #4", "../../../albumsFiles/afterAYear/photo/photo3/img4", 15),
        photoBlock("Блок #5", "../../../albumsFiles/afterAYear/photo/photo3/img5", 6)
      ]
    },
    photo4: {
      title: "Фотоальбом 4 года",
      blocks: [
        photoBlock("Блок #1", "../../../albumsFiles/afterAYear/photo/photo4/img1", 15),
        photoBlock("Блок #2", "../../../albumsFiles/afterAYear/photo/photo4/img2", 15),
        photoBlock("Блок #3", "../../../albumsFiles/afterAYear/photo/photo4/img3", 3)
      ]
    },
    photo5: {
      title: "Фотоальбом 5 лет",
      blocks: [
        photoBlock("Блок #1", "../../../albumsFiles/afterAYear/photo/photo5/img1", 15),
        photoBlock("Блок #2", "../../../albumsFiles/afterAYear/photo/photo5/img2", 15),
        photoBlock("Блок #3", "../../../albumsFiles/afterAYear/photo/photo5/img3", 15),
        photoBlock("Блок #4", "../../../albumsFiles/afterAYear/photo/photo5/img4", 15),
        photoBlock("Блок #5", "../../../albumsFiles/afterAYear/photo/photo5/img5", 3)
      ]
    },
    photo6: {
      title: "Фотоальбом 6 лет",
      blocks: [
        photoBlock("Блок #1", "../../../albumsFiles/afterAYear/photo/photo6/img1", 15),
        photoBlock("Блок #2", "../../../albumsFiles/afterAYear/photo/photo6/img2", 13),
      ]
    }
  }
};