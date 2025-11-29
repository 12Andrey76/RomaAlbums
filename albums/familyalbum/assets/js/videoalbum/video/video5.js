const slides = [
  {
		id: 1,
		video: "https://rutube.ru/play/embed/bbdb4ee9edcf4d553810bc94d10ead74/?p=AcBEE4Z1HJNu_IsoiJqaXA",
		title: "Видео 1",
		block: 1,
		links: {
			previous: 6,
			next: 2,
			block: "Блок 1",
			blockPrevious: 1,
			blockNext: 1,
		}
  },
  {
		id: 2,
		video: "https://rutube.ru/play/embed/107112bc04a791dc732bf99cf07b0072/?p=OJgWrQvAP_kkbglQzLnlDg",
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
		video: "https://rutube.ru/play/embed/4459857fa5f75242e4fba5fe54f5a770/?p=XXS_fc5gSQqxZsNC60hWVQ",
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
		video: "https://rutube.ru/play/embed/8c0feabdb908efa7abf34385689959a0/?p=xm6IP2-WhSfrIXw6ZkxybQ",
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
		video: "https://rutube.ru/play/embed/bdc098485237ee3108719e50f51aa12e/?p=FObc4Wgbp0jUTTH7oSVsQA",
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
		video: "https://rutube.ru/play/embed/ab9f8fa3667d468120d0419386594b8b/?p=d7XNDyIC3oNfhXwIYTBuRQ",
		title: "Видео 6",
		block: 1,
		links: {
			previous: 5,
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