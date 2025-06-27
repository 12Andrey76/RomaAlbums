const slides = [
  {
      id: 1,
      video: "https://rutube.ru/play/embed/23d1d75a6c56daa2e924f11436204f3e?p=6PlI1b9SYw-l1Hb4RluEqw",
      title: "Видео 1",
      block: 1,
      links: {
          previous: 11,
          next: 2,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 2,
      video: "https://rutube.ru/play/embed/2f92a295eabf61b5b309ca92f1f8447d?p=Oy2h3XuYo5C6uf86jjYjtA",
      title: "Видео 2",
      block: 1,
      links: {
          previous: 1,
          next: 3,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 3,
      video: "https://rutube.ru/play/embed/ccb775012bc261b6e325a5c7d3400c5a?p=m0aszhzhA0BXKJfDPToGVQ",
      title: "Видео 3",
      block: 1,
      links: {
          previous: 2,
          next: 4,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 4,
      video: "https://rutube.ru/play/embed/2996c675b224054194e5a4dcd5118db0?p=-89hLYzQgGP_boi5xXmReA",
      title: "Видео 4",
      block: 1,
      links: {
          previous: 3,
          next: 5,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 5,
      video: "https://rutube.ru/play/embed/1682ec35dc4786e27f41d350d53a5396?p=3K-awhQINNdPolC02a4rRw",
      title: "Видео 5",
      block: 1,
      links: {
          previous: 4,
          next: 6,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 6,
      video: "https://rutube.ru/play/embed/e85c187b311a81a47f004a3c86b20836?p=6qVUv6x4_BUi3pMFGL15AQ",
      title: "Видео 6",
      block: 1,
      links: {
          previous: 5,
          next: 7,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 7,
      video: "https://rutube.ru/play/embed/6b217fc101eb9cfc632b10912eac0a91?p=fsfB8cpASw6eqU78U7GUzA",
      title: "Видео 7",
      block: 1,
      links: {
          previous: 6,
          next: 8,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 8,
      video: "https://rutube.ru/play/embed/1eb3c7f0ad97a5c6e6a9bf296027fe49?p=1iCxowSD-1IbNQwn9mzzGA",
      title: "Видео 8",
      block: 1,
      links: {
          previous: 7,
          next: 9,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 9,
      video: "https://rutube.ru/play/embed/d63daa6959ad9a90fa1828d0c4b2fee4/?p=ehT3kE5JVVH4Xf_TX83huA",
      title: "Видео 9",
      block: 1,
      links: {
          previous: 8,
          next: 10,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 10,
      video: "https://rutube.ru/play/embed/11d10b8f407048020999bc08c11ffe54/?p=0t55Q5jOREbLUKypQakTyA",
      title: "Видео 10",
      block: 1,
      links: {
          previous: 9,
          next: 11,
          block: "Блок 1",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 11,
      video: "https://rutube.ru/play/embed/2dd8bc2a17b1c60e9678ce981c31b605/?p=vT8jRxiZvF_GMDLCm4XwCw",
      title: "Видео 11",
      block: 1,
      links: {
          previous: 10,
          next: 1,
          block: "Блок 1",
          blockPrevious: 1,
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