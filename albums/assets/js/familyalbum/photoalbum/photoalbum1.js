const carouselItems = [
  {
    title: "Блок #1",
    slides: [
      { imgSrc: "https://s3.radikal.cloud/2025/01/26/1442912c765689010.th.jpeg",link: "photo1/photo1.html#slide1",alt: "preview 1" },
      { imgSrc: "https://s3.radikal.cloud/2025/01/26/220263a9308bccc1d.th.jpeg", link: "photo1/photo1.html#slide2", alt: "preview 2" },
      { imgSrc: "https://s3.radikal.cloud/2025/01/26/3dfc1d98338a77281.th.jpeg", link: "photo1/photo1.html#slide3", alt: "preview 3" },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/42dd07842e9093c58.th.jpeg', link: "photo1/photo1.html#slide4", alt: 'preview 4' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/55af9e951cc4d28d2.th.jpeg', link: "photo1/photo1.html#slide5", alt: 'preview 5' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/65ed3e76d7a2eff71.th.jpeg', link: "photo1/photo1.html#slide6", alt: 'preview 6' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/76949226560410180.th.jpeg', link: "photo1/photo1.html#slide7", alt: 'preview 7' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/8272ee43dfe124449.th.jpeg', link: "photo1/photo1.html#slide8", alt: 'preview 8' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/9bb74c20bd58b17b5.th.jpeg', link: "photo1/photo1.html#slide9", alt: 'preview 9' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/100c93013c37dd55f0.th.jpeg', link: "photo1/photo1.html#slide10", alt: 'preview 10' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/110d4bd79263b80013.th.jpeg', link: "photo1/photo1.html#slide11", alt: 'preview 11' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/1254a396af23a591df.th.jpeg', link: "photo1/photo1.html#slide12", alt: 'preview 12' },
    ]
  },
  {
    title: "Блок #2",
    slides: [
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/13c9b227849a765701.th.jpeg', link: "photo1/photo2.html#slide13", alt: 'preview 1' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/1479c530acb90ea84e.th.jpeg', link: "photo1/photo2.html#slide14", alt: 'preview 2' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/15648c12fff2d721b4.th.jpeg', link: "photo1/photo2.html#slide15", alt: 'preview 3' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/16ce247fd921f5fef4.th.jpeg', link: "photo1/photo2.html#slide16", alt: 'preview 4' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/170ac638543e1dfe10.th.jpeg', link: "photo1/photo2.html#slide17", alt: 'preview 5' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/1893d85f6341d33adf.th.jpeg', link: "photo/1photo2.html#slide18", alt: 'preview 6' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/19c2a7899b821b6964.th.jpeg', link: "photo/photo2.html#slide19", alt: 'preview 7' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/200df9e9d8bc71be6c.th.jpeg', link: "photo1/photo2.html#slide20", alt: 'preview 8' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/212e00e96cb3a3d828.th.jpeg', link: "photo1/photo2.html#slide21", alt: 'preview 9' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/22794457ede0d0d050.th.jpeg', link: "photo1/photo2.html#slide22", alt: 'preview 10' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/236a762d4a2665045f.th.jpeg', link: "photo1/photo2.html#slide23", alt: 'preview 11' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/248caf516f8ca3f665.th.jpeg', link: "photo1/photo2.html#slide24", alt: 'preview 12' },
    ]
  },
  {
    title: "Блок #3",
    slides: [
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/251485a07f2726ab7e.th.jpeg', link: "photo1/photo3.html#slide25", alt: 'preview 1' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/2614d773ea57b238ad.th.jpeg', link: "photo1/photo3.html#slide26", alt: 'preview 2' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/2741754e01de0314e8.th.jpeg', link: "photo1/photo3.html#slide27", alt: 'preview 3' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/28f0d4ad631e1dbe48.th.jpeg', link: "photo1/photo3.html#slide28", alt: 'preview 4' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/2908b89d9073ce51c6.th.jpeg', link: "photo1/photo3.html#slide29", alt: 'preview 5' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/30f870293b3598b9f3.th.jpeg', link: "photo1/photo3.html#slide30", alt: 'preview 6' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/31629f8ac60ae345c5.th.jpeg', link: "photo1/photo3.html#slide31", alt: 'preview 7' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/323ad383b09d7985ac.th.jpeg', link: "photo1/photo3.html#slide32", alt: 'preview 8' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/33af5f9d8fbf2268e3.th.jpeg', link: "photo1/photo3.html#slide33", alt: 'preview 9' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/34230dfe9cd38a364e.th.jpeg', link: "photo1/photo3.html#slide34", alt: 'preview 10' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/35ba8de49b882ab05e.th.jpeg', link: "photo1/photo3.html#slide35", alt: 'preview 11' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/36a640672ab03d1ab4.th.jpeg', link: "photo1/photo3.html#slide36", alt: 'preview 12' },
    ]
  },
  {
    title: "Блок #4",
    slides: [
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/37f408ed8ea154df65.th.jpeg', link: "photo1/photo4.html#slide37", alt: 'preview 1' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/38b2a4a6bb0194f80b.th.jpeg', link: "photo1/photo4.html#slide38", alt: 'preview 2' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/3993763e8b8833b4ac.th.jpeg', link: "photo1/photo4.html#slide39", alt: 'preview 3' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/40e3655beef179bdca.th.jpeg', link: "photo1/photo4.html#slide40", alt: 'preview 4' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/41b92a5b32d3a2a42f.th.jpeg', link: "photo1/photo4.html#slide41", alt: 'preview 5' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/42ab1b187132353ef7.th.jpeg', link: "photo1/photo4.html#slide42", alt: 'preview 6' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/438e804eaced353856.th.jpeg', link: "photo1/photo4.html#slide43", alt: 'preview 7' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/440fd9b65ca3226879.th.jpeg', link: "photo1/photo4.html#slide44", alt: 'preview 8' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/4570291adec86d5756.th.jpeg', link: "photo1/photo4.html#slide45", alt: 'preview 9' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/46d1cbbe54d0e3c26c.th.jpeg', link: "photo1/photo4.html#slide46", alt: 'preview 10' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/47133470b38c451885.th.jpeg', link: "photo1/photo4.html#slide47", alt: 'preview 11' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/487ba5ffd2ed853683.th.jpeg', link: "photo1/photo4.html#slide48", alt: 'preview 12' },
    ]
  },
  {
    title: "Блок #5",
    slides: [
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/49254c082f43e946e3.th.jpeg', link: "photo1/photo5.html#slide49", alt: 'preview 1' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/50f782a677ce7719ed.th.jpeg', link: "photo1/photo5.html#slide50", alt: 'preview 2' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/5158a0c4081759816b.th.jpeg', link: "photo1/photo5.html#slide51", alt: 'preview 3' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/52597facf8a4337c56.th.jpeg', link: "photo1/photo5.html#slide52", alt: 'preview 4' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/533a817fa1ece2ddc1.th.jpeg', link: "photo1/photo5.html#slide53", alt: 'preview 5' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/548af873b9a9d9ca78.th.jpeg', link: "photo1/photo5.html#slide54", alt: 'preview 6' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/55fe4cb73bb1899603.th.jpeg', link: "photo1/photo5.html#slide55", alt: 'preview 7' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/567aedbd83cb9b8522.th.jpeg', link: "photo1/photo5.html#slide56", alt: 'preview 8' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/57a6be33a4d2f358df.th.jpeg', link: "photo1/photo5.html#slide57", alt: 'preview 9' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/5848b47988fbeb461e.th.jpeg', link: "photo1/photo5.html#slide58", alt: 'preview 10' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/59298d7f55225d747f.th.jpeg', link: "photo1/photo5.html#slide59", alt: 'preview 11' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/605ac9862178b80df0.th.jpeg', link: "photo1/photo5.html#slide60", alt: 'preview 12' },
    ]
  },
  {
    title: "Блок #6",
    slides: [
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/61e67ff63ff9c54ff7.th.jpeg', link: "photo1/photo6.html#slide61", alt: 'preview 1' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/62fbfe844470962e22.th.jpeg', link: "photo1/photo6.html#slide62", alt: 'preview 2' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/63276243319f92dc39.th.jpeg', link: "photo1/photo6.html#slide63", alt: 'preview 3' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/6430b72dbcaafe36c1.th.jpeg', link: "photo1/photo6.html#slide64", alt: 'preview 4' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/659ae6e2d34ca22d34.th.jpeg', link: "photo1/photo6.html#slide65", alt: 'preview 5' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/66ad139e6e0e5863d3.th.jpeg', link: "photo1/photo6.html#slide66", alt: 'preview 6' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/675ad75b7b9da734c1.th.jpeg', link: "photo1/photo6.html#slide67", alt: 'preview 7' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/684aa7726ba9583542.th.jpeg', link: "photo1/photo6.html#slide68", alt: 'preview 8' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/69a997c26bc947c35c.th.jpeg', link: "photo1/photo6.html#slide69", alt: 'preview 9' },
      { imgSrc: 'https://s3.radikal.cloud/2025/01/26/700cf8f3081db77f70.th.jpeg', link: "photo1/photo6.html#slide70", alt: 'preview 10' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/71ddcfeba49d74ad2f.th.jpeg', link: "photo1/photo6.html#slide71", alt: 'preview 11' },
			{ imgSrc: 'https://s3.radikal.cloud/2025/01/26/7210e2ddf90e3fc58d.th.jpeg', link: "photo1/photo6.html#slide72", alt: 'preview 12' },
    ]
  }
];