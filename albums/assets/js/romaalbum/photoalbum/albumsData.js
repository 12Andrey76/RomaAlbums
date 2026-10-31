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

// Альбом Ромы — фото (плоские блоки = месяцы)
// [вставить хелперы из 1.1]

window.albumsData = {
  photo: {
    blocks: [
      photoBlockFiles("1 месяц",
        "../../../albumsFiles/upToOneYear/photo/photo1",
        ["1.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp","8.jpg","9.webp"]),
      photoBlock("2 месяца",  "../../../albumsFiles/upToOneYear/photo/photo2", 7),
      photoBlock("3 месяца",  "../../../albumsFiles/upToOneYear/photo/photo3", 8),
      photoBlock("4 месяца",  "../../../albumsFiles/upToOneYear/photo/photo4", 2),
      photoBlock("5 месяцев", "../../../albumsFiles/upToOneYear/photo/photo5", 10),
      photoBlock("6 месяцев", "../../../albumsFiles/upToOneYear/photo/photo6", 15),
      photoBlock("7 месяцев", "../../../albumsFiles/upToOneYear/photo/photo7", 6),
      photoBlock("8 месяцев", "../../../albumsFiles/upToOneYear/photo/photo8", 9),
      photoBlock("9 месяцев", "../../../albumsFiles/upToOneYear/photo/photo9", 6),
      photoBlock("10 месяцев","../../../albumsFiles/upToOneYear/photo/photo10", 7),
      photoBlock("11 месяцев","../../../albumsFiles/upToOneYear/photo/photo11", 12)
    ]
  }
};