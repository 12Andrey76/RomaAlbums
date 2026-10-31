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

// Альбом Ромы — видео (плоские блоки = месяцы)
// [вставить хелперы из 1.1]

window.albumsData = {
  video: {
    blocks: [
      videoBlock("3 месяца", "../../../albumsFiles/upToOneYear/video/video3", [
        "https://rutube.ru/play/embed/ca4afa0f8b66f69aa00283532a61e71d?p=hlbxs179rHTlYwf4AFFa1Q",
        "https://rutube.ru/play/embed/d287af3688396edc93036a092732de65?p=L0y1YIvqYZBS85lxT8QOpA"
      ], 'webp'),
      videoBlock("4 месяца", "../../../albumsFiles/upToOneYear/video/video4", [
        "https://rutube.ru/play/embed/ab0479ad77972ade9bf77488af645265?p=aE3uUxaLaXe2RJVspogrqg",
        "https://rutube.ru/play/embed/b91e66a55b2917973de6a80222b7350f?p=D-PZ0HktkPAnqyjIa-TzvA"
      ], 'webp'),
      videoBlock("6 месяцев", "../../../albumsFiles/upToOneYear/video/video6", [
        "https://rutube.ru/play/embed/47f1f3cd0126290826814a25645b8487?p=E80Kkhtcexq4jZJZ5knqtw",
        "https://rutube.ru/play/embed/e95e187dd12955cb0a9ed93de889062f?p=sKazqQU8RVKmYPWT1f2osA",
        "https://rutube.ru/play/embed/3e3fd1d508b4a9ff28e04baf958b9244?p=XvJ7QDTqD560Rp5ra2kRtQ",
        "https://rutube.ru/play/embed/02bd82a3fe37f7ae3c45f8bcdaea6cca?p=QeprsXh-JRhjwCriGp5MMA",
        "https://rutube.ru/play/embed/f90b8404ad266f1e8eaa8fc4fb84573e?p=aIYAyWGKmHccZ27hT1Qw-w",
        "https://rutube.ru/play/embed/59ae98f8dee139ef75f50d95ba0819b2?p=EANeLkF2rR4klr9Ci_51Ww",
        "https://rutube.ru/play/embed/756aba6e0e533047c225471a98e11939?p=StWbpZKxFoblZj1SUP6khQ",
        "https://rutube.ru/play/embed/891be2c9dda7b51e6f74724366258d24?p=6p2DmKR1cRRF2esQg7hdTA"
      ], 'webp'),
      videoBlock("7 месяцев", "../../../albumsFiles/upToOneYear/video/video7", [
        "https://rutube.ru/play/embed/45b4caa7203330677a9c2b44a1337a2d?p=z4DodxMBba0cJSatF1nJrQ",
        "https://rutube.ru/play/embed/f628b9a7603db4851095e24ae55b6eb9?p=Mmf5B3gP_FHlmq6yRYMJ3A"
      ], 'webp'),
      videoBlock("8 месяцев", "../../../albumsFiles/upToOneYear/video/video8", [
        "https://rutube.ru/play/embed/bb9f874d301b03f125b0ea3460a5d91e?p=u5wsWKODRYxFldDqK6pqBw",
        "https://rutube.ru/play/embed/24f81f6d3a5a514917110769ef006e5d?p=jvLhZOVdqsk6HqnRHZC5wQ",
        "https://rutube.ru/play/embed/7ffa7a9bb75eacf2fbc18ec53a9607ad?p=iltHB8tlX8_nuIwgqIFPfw"
      ], 'webp'),
      videoBlock("9 месяцев", "../../../albumsFiles/upToOneYear/video/video9", [
        "https://rutube.ru/play/embed/65e562c8cccaa6fcc48cce26e86f53db?p=vjocOYAikJ6dMFNnu9fUJw",
        "https://rutube.ru/play/embed/018716df94b832478e2b10776d0407b2?p=nP0IiGzKO-rbRMW7wOMRpA",
        "https://rutube.ru/play/embed/e67bcdb41d8495e5594a9b39de6352b4?p=w1G39q0q3ObNnzPwMnCarg"
      ], 'webp'),
      videoBlock("10 месяцев", "../../../albumsFiles/upToOneYear/video/video10", [
        "https://rutube.ru/play/embed/2861da268baf2f5d2b73607b64dcd4a4?p=JJXiF6ZXZOf3rjCOG1DtpQ",
        "https://rutube.ru/play/embed/11094b1ea66a7f71e932a10c413691e6?p=PCrW7gwRfT8691iJpDjeDw",
        "https://rutube.ru/play/embed/b5b367e09566daac0ad1819caa227a09?p=MalHukpKR6qn9ZDtHyiXkg",
        "https://rutube.ru/play/embed/9bdf1f4beea4e198aedcec6f450cac4d?p=tgZ7AzVdhP-CcdFZK76qbw",
        "https://rutube.ru/play/embed/811599a0259985eebfd97b13b6774673?p=t7dQXV9awan3rRPSf1lczQ",
        "https://rutube.ru/play/embed/1f601433cde4b4feb7a1165dbf147bcb?p=Ec0QwVFY3_FSRdyQS-bZUQ"
      ], 'webp'),
      videoBlock("11 месяцев", "../../../albumsFiles/upToOneYear/video/video11", [
        "https://rutube.ru/play/embed/873c516a8b5c57c375a660dca5791498?p=9m_jxDiy57sqo-Ye1KG5zQ",
        "https://rutube.ru/play/embed/299295a6caf86d4b8a2aae3d3f8e713b?p=iG2Dq6cRdgMKDoAm5bXoQw",
        "https://rutube.ru/play/embed/4020a36d194509f664ae01b4950b36a7?p=3OMspG9Z942gIHBnjOxnzQ",
        "https://rutube.ru/play/embed/4d2bfe1761022975f4034379f491d9d7?p=N_YURNE1lqZboYRgOTqddg",
        "https://rutube.ru/play/embed/e1e68ead3ba69481f88e9986751fc726?p=7cYK7pbZS9raa5AnHM2Kaw"
      ], 'webp')
    ]
  }
};