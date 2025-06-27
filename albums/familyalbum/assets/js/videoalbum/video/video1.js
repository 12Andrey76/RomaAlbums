const slides = [
  {
      id: 1,
      video: "https://rutube.ru/play/embed/5bb1e3f5121c941ce87504a848146cc5/?r=a&p=J7AK5kJ4IyGKEgZQTgoOhQ",
      title: "Видео 1",
      block: 1,
      links: {
          previous: 12,
          next: 2,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 2,
      video: "https://rutube.ru/play/embed/3644b171e66d6242f2ee15ddae875951?p=3UjU9oUS5Tufb8uh8DhSZA",
      title: "Видео 2",
      block: 1,
      links: {
          previous: 1,
          next: 3,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 3,
      video: "https://rutube.ru/play/embed/014a54c3d606ef0a9a157b367bdae6ea?p=-DDTkzHw-emTmNnb_d70eQ",
      title: "Видео 3",
      block: 1,
      links: {
          previous: 2,
          next: 4,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 4,
      video: "https://rutube.ru/play/embed/56c9e121d6f372a22fb5ec0c5d1edf2a?p=3jguvq_vp48UZQExc5mXbg",
      title: "Видео 4",
      block: 1,
      links: {
          previous: 3,
          next: 5,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 5,
      video: "https://rutube.ru/play/embed/c4f8ac09107446077b70bbf82bffd491?p=3bJp8GS3eHukcEYb5e0J_g",
      title: "Видео 5",
      block: 1,
      links: {
          previous: 4,
          next: 6,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 6,
      video: "https://rutube.ru/play/embed/c26d6010549f1ecf5d973816dddf4200/?p=CAPI85s3CxZpvyKZEVi7xw",
      title: "Видео 6",
      block: 1,
      links: {
          previous: 5,
          next: 7,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 7,
      video: "https://rutube.ru/play/embed/61af4e4d4f47a118a6dca40f658af962/?p=_HKtWqK304VdGExJIwQ9fw",
      title: "Видео 7",
      block: 1,
      links: {
          previous: 6,
          next: 8,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 8,
      video: "https://rutube.ru/play/embed/13ca4ae8ada5ac60bdb4aabad166eea3/?p=NtesHTapM6M7b4Db7-I__A",
      title: "Видео 8",
      block: 1,
      links: {
          previous: 7,
          next: 9,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 9,
      video: "https://rutube.ru/play/embed/7f84b4a6c0aa402f24dcb6f48b4f2d6a/?p=nxi3gvgyZNhYC7gN6yENeA",
      title: "Видео 9",
      block: 1,
      links: {
          previous: 8,
          next: 10,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 10,
      video: "https://rutube.ru/play/embed/427888ad6161405949ffe8561e5c7dac/?p=i2fDpk_8yI9k400PR7mLOQ",
      title: "Видео 10",
      block: 1,
      links: {
          previous: 9,
          next: 11,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 11,
      video: "https://rutube.ru/play/embed/15adb7ef7ae595e5b451c2bfa8b37abd/?p=LFKllG4x_doxWPBoMXWiUw",
      title: "Видео 11",
      block: 1,
      links: {
          previous: 10,
          next: 12,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 12,
      video: "https://rutube.ru/play/embed/7606d6247042a762f102b89b2813e044/?p=dSgVw3iRTLVldMCu5tsVeQ",
      title: "Видео 12",
      block: 1,
      links: {
          previous: 11,
          next: 1,
          block: "Блок 1",
          blockPrevious: 13,
          blockNext: 13,
      }
  },
  {
      id: 13,
      video: "https://rutube.ru/play/embed/8331737f0e548ddf0e7a6c02b5b9c175/?p=Q-SCWMnmEQgf5-2z2O9lxw",
      title: "Видео 1",
      block: 2,
      links: {
          previous: 21,
          next: 14,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 14,
      video: "https://rutube.ru/play/embed/5be646e9314aa1cba6b9eea6213d341d/?p=whvYEuhPOZP9c8N0Nsd56A",
      title: "Видео 2",
      block: 2,
      links: {
          previous: 13,
          next: 15,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 15,
      video: "https://rutube.ru/play/embed/9067ae6b05335462b7871fdf73e96bb0/?p=dEoLb1Xhtz-pNg-dvL1wFw",
      title: "Видео 3",
      block: 2,
      links: {
          previous: 14,
          next: 16,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 16,
      video: "https://rutube.ru/play/embed/c89063f373d2c6a32f551efbfa129e19/?p=YMTKK3pqj8MdTVIYuB38AA",
      title: "Видео 4",
      block: 2,
      links: {
          previous: 15,
          next: 17,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 17,
      video: "https://rutube.ru/play/embed/6142335eb93295d2da428a28b3e09eef/?p=89LvD7yMjNpn-KA9h0CS6g",
      title: "Видео 5",
      block: 2,
      links: {
          previous: 16,
          next: 18,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 18,
      video: "https://rutube.ru/play/embed/167d6cf678e45e7b972dfa7ddf1f89c4/?p=AA1dXLT0BFwWnN6ehnPEFQ",
      title: "Видео 6",
      block: 2,
      links: {
          previous: 17,
          next: 19,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 19,
      video: "https://rutube.ru/play/embed/ddda4ac99841f340a437edf23d54e89d/?p=gONPXxpQhfLI8vBuZlZKBA",
      title: "Видео 7",
      block: 2,
      links: {
          previous: 18,
          next: 20,
          block: "Блок 2",
          blockPrevious: 1,
          blockNext: 1,
      }
  },
  {
      id: 20,
      video: "https://rutube.ru/play/embed/da2a151e4ade4d5336afbff0f12cd265/?p=-A0XD0RoUhtA3ZIg7OHvYg",
      title: "Видео 8",
      block: 2,
      links: {
        previous: 19,
        next: 21,
        block: "Блок 2",
        blockPrevious: 1,
        blockNext: 1,
      }
  },
  {
      id: 21,
      video: "https://rutube.ru/play/embed/147ef80e9f70de7b9be4233b46b1c039/?p=sMF1SXQlmQlw9wt6hbqTAw",
      title: "Видео 9",
      block: 2,
      links: {
        previous: 20,
        next: 13,
        block: "Блок 2",
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