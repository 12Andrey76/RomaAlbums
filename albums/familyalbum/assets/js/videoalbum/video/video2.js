const slides = [
  {
      id: 1,
      video: "https://rutube.ru/play/embed/82a71f4de4c9724d19b3698263259b8f?p=DLaXWxNXLtb67jXJIf8BNg",
      title: "Видео 1",
      block: 1,
      links: {
          previous: 12,
          next: 2,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 2,
      video: "https://rutube.ru/play/embed/84a319d76ffaacc25b6355b8a90f8875?p=ewb4Cy3lBN-zCr8m59Seog",
      title: "Видео 2",
      block: 1,
      links: {
          previous: 1,
          next: 3,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 3,
      video: "https://rutube.ru/play/embed/0d8341cb4c01eeba2d5cf87f67f96871?p=xFcctAYDWptZU99hiWpxiQ",
      title: "Видео 3",
      block: 1,
      links: {
          previous: 2,
          next: 4,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 4,
      video: "https://rutube.ru/play/embed/9e31e62dcd90d7bef520eb622b42d85d?p=5rwc-OiMpc8Z85jgJHdFZg",
      title: "Видео 4",
      block: 1,
      links: {
          previous: 3,
          next: 5,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 5,
      video: "https://rutube.ru/play/embed/b8e961543171de74ae9930d08a1ef507?p=4wYHV3WYp7KmqNKbulp56g",
      title: "Видео 5",
      block: 1,
      links: {
          previous: 4,
          next: 6,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 6,
      video: "https://rutube.ru/play/embed/64afd93dfb7c65293b00c3b27570b424?p=8X9bgd4so8ZpgacIY8rThw",
      title: "Видео 6",
      block: 1,
      links: {
          previous: 5,
          next: 7,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 7,
      video: "https://rutube.ru/play/embed/0437ce83264e74ea865cd6052f557f5a?p=0XfL5cIpXYknmo1Z16TjeA",
      title: "Видео 7",
      block: 1,
      links: {
          previous: 6,
          next: 8,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 8,
      video: "https://rutube.ru/play/embed/48308ae2e3729cd85208921dee06a1e0?p=q1pPI-UxG41mjgyjPi1MfA",
      title: "Видео 8",
      block: 1,
      links: {
          previous: 7,
          next: 9,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 9,
      video: "https://rutube.ru/play/embed/7603a910fc6fcd768bf4dbe0d2ad8f3a?p=hpDZvdtkBG6N3ITF295XYQ",
      title: "Видео 9",
      block: 1,
      links: {
          previous: 8,
          next: 10,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 10,
      video: "https://rutube.ru/play/embed/176b279559f3b9465191af3da3af9c26?p=10TWiAHCXlvnjGw541puQg",
      title: "Видео 10",
      block: 1,
      links: {
          previous: 9,
          next: 11,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 11,
      video: "https://rutube.ru/play/embed/793fb5f9dc64996ddfdf9fcf672016b8?p=k9iy9PMCV4CRtFNA5qguZg",
      title: "Видео 11",
      block: 1,
      links: {
          previous: 10,
          next: 12,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 12,
      video: "https://rutube.ru/play/embed/398c078ca7848fbaef7f0e8f0c300456?p=e8MqXX15KAld4Z2v-7gIqg",
      title: "Видео 12",
      block: 1,
      links: {
          previous: 11,
          next: 1,
          block: "Блок 1",
          blockPrevious: 25,
          blockNext: 13,
      }
  },
  {
      id: 13,
      video: "https://rutube.ru/play/embed/e1737d156f91286686c0b55bfa7eee14?p=LvJv3s9HuJ1Xz9GarKxViw",
      title: "Видео 1",
      block: 2,
      links: {
          previous: 24,
          next: 14,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 14,
      video: "https://rutube.ru/play/embed/96a6dbe97b5c4b42f7b8a73067df354f?p=fuX3gEhfBVcYbW8dhxX3-w",
      title: "Видео 2",
      block: 2,
      links: {
          previous: 13,
          next: 15,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 15,
      video: "https://rutube.ru/play/embed/bba2a75b2f4ac72bd41976d29712b4d6?p=KVEHe0lUMrMGidOr-dfCeg",
      title: "Видео 3",
      block: 2,
      links: {
          previous: 14,
          next: 16,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 16,
      video: "https://rutube.ru/play/embed/fae8172418cdd92f5b7c5b8cb2626be0?p=EsbCE9Wm1-qGbdcULwQthA",
      title: "Видео 4",
      block: 2,
      links: {
          previous: 15,
          next: 17,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 17,
      video: "https://rutube.ru/play/embed/4148f6083158f69e95f0a9ebb157cd53?p=_w_gn43BuZB7pLvSUZneAw",
      title: "Видео 5",
      block: 2,
      links: {
          previous: 16,
          next: 18,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 18,
      video: "https://rutube.ru/play/embed/c196db0ccb55829ee1dc09f192944265?p=0pAK9qqi5wHoZU0irquezw",
      title: "Видео 6",
      block: 2,
      links: {
          previous: 17,
          next: 19,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 19,
      video: "https://rutube.ru/play/embed/de1b54fba139d4242cb239229c87c4f6?p=SDZj7RRRJKODooNpVxv7Ew",
      title: "Видео 7",
      block: 2,
      links: {
          previous: 18,
          next: 20,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 20,
      video: "https://rutube.ru/play/embed/0f670e0f8b18f2ae3402220da13fafac?p=_rtkNfrUWHwgD1sgwPEeJQ",
      title: "Видео 8",
      block: 2,
      links: {
          previous: 19,
          next: 21,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 21,
      video: "https://rutube.ru/play/embed/3838a68fd11258690d68ecac79b89421?p=J3OkVflpoV1fncJLfFRjKA",
      title: "Видео 9",
      block: 2,
      links: {
          previous: 20,
          next: 22,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 22,
      video: "https://rutube.ru/play/embed/a24b4669bc76206e41cce167a949fb11?p=jZWOq9bR-tGr7qPhVbroGg",
      title: "Видео 10",
      block: 2,
      links: {
          previous: 21,
          next: 23,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 23,
      video: "https://rutube.ru/play/embed/6c3f32a97acc10afa119640b332f21a8?p=32BHIoS6Q4274iTJZ_vHhg",
      title: "Видео 11",
      block: 2,
      links: {
          previous: 22,
          next: 24,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 24,
      video: "https://rutube.ru/play/embed/2e4a2ffddbb96cea37358badf47729bc?p=MrdXR5SQga3_qSrXj4YUsw",
      title: "Видео 12",
      block: 1,
      links: {
          previous: 23,
          next: 13,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 25,
      }
  },
  {
      id: 25,
      video: "https://rutube.ru/play/embed/5166c458757a738962b2aed8ff4defef?p=VaGVXJLSwhHyDEiV9De1FA",
      title: "Видео 1",
      block: 3,
      links: {
          previous: 29,
          next: 26,
          block: "Блок 3",
          blockPrevious: 13,
          blockNext: 1,
      }
  },
  {
      id: 26,
      video: "https://rutube.ru/play/embed/4cb4720c7e5c262002a3c0bbfb377b88?p=XHk4z0R_qJSqK6n9f4jXKA",
      title: "Видео 2",
      block: 3,
      links: {
          previous: 25,
          next: 27,
          block: "Блок 3",
          blockPrevious: 13,
          blockNext: 1,
      }
  },
  {
      id: 27,
      video: "https://rutube.ru/play/embed/8c22649349b2ca5e9c4edc8e07067d6c?p=HjpLHR_zTvvYXn9fGzLpRw",
      title: "Видео 3",
      block: 3,
      links: {
          previous: 26,
          next: 28,
          block: "Блок 3",
          blockPrevious: 13,
          blockNext: 1,
      }
  },
  {
      id: 28,
      video: "https://rutube.ru/play/embed/4750922069b941f1293a03c5c41b1c3c?p=y6QMEEgKM13a7XqFxDt9tw",
      title: "Видео 4",
      block: 3,
      links: {
          previous: 27,
          next: 29,
          block: "Блок 3",
          blockPrevious: 13,
          blockNext: 1,
      }
  },
  {
      id: 29,
      video: "https://rutube.ru/play/embed/a37040cd85b13e0b4c4a54cc03f1103b?p=FNEFhR1OyMxMYseLfairFg",
      title: "Видео 5",
      block: 3,
      links: {
          previous: 28,
          next: 25,
          block: "Блок 3",
          blockPrevious: 13,
          blockNext: 1,
      }
  },
  // другие слайды...
];

function loadScript(url) {
return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
    document.head.appendChild(script);
});
}

// Загрузка скрипта slides.js
loadScript('../../assets/js/js-component/video-slides.js')
.then(() => {
    console.log('Slides script loaded successfully');
})
.catch(error => {
    console.error(error);
});