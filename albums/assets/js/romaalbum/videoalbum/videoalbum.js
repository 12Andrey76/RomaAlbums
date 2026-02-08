const carouselData = [
  {
    title: "3 месяц",
    id: 1,
    items: [
      { link: "video/video1.html#slide1", img: "https://s2.radikal.cloud/2025/06/22/1278505d4a3fb711e.th.jpg" },
      { link: "video/video1.html#slide2", img: "https://s3.radikal.cloud/2025/06/22/201c44b440dc6c578.th.jpg" }
    ]
  },
  {
    title: "4 месяца",
    id: 2,
    items: [
      { link: "video/video2.html#slide1", img: "https://s3.radikal.cloud/2025/06/22/3a743c74d6b6217f3.th.jpg" },
      { link: "video/video2.html#slide2", img: "https://s2.radikal.cloud/2025/06/22/4a9fceeb39eef8e64.th.jpg" }
    ]
  },
  {
    title: "6 месяца",
    id: 3,
    items: [
      { link: "video/video3.html#slide1", img: "https://s2.radikal.cloud/2025/06/22/5772226c0b7d297eb.th.jpg" },
      { link: "video/video3.html#slide2", img: "https://s3.radikal.cloud/2025/06/22/6e4576a3528fe9dab.th.jpg" },
      { link: "video/video3.html#slide3", img: "https://s2.radikal.cloud/2025/06/22/7e883492ed3cfee49.th.jpg" },
      { link: "video/video3.html#slide4", img: "https://s3.radikal.cloud/2025/06/22/85376dfcab4e4c41f.th.jpg" },
      { link: "video/video3.html#slide5", img: "https://s2.radikal.cloud/2025/06/22/94d60dcbb971457de.th.jpg" },
      { link: "video/video3.html#slide6", img: "https://s3.radikal.cloud/2025/06/22/10b0a9ad444e2be9d3.th.jpg" },
      { link: "video/video3.html#slide7", img: "https://s2.radikal.cloud/2025/06/22/11503dbc82c7a86648.th.jpg" },
      { link: "video/video3.html#slide8", img: "https://s3.radikal.cloud/2025/06/22/12b96f07ea8b9bdd0f.th.jpg" }
    ]
  },
  {
    title: "7 месяца",
    id: 4,
    items: [
      { link: "video/video4.html#slide1", img: "https://s3.radikal.cloud/2025/06/22/130ee0e16937973845.th.jpg" },
      { link: "video/video4.html#slide2", img: "https://s2.radikal.cloud/2025/06/22/14703bc069fdad51f9.th.jpg" }
    ]
  },
  {
    title: "8 месяца",
    id: 5,
    items: [
      { link: "video/video5.html#slide1", img: "https://s3.radikal.cloud/2025/06/22/15aff4d8cc980d1ce4.th.jpg" },
      { link: "video/video5.html#slide2", img: "https://s2.radikal.cloud/2025/06/22/16613e599a737fd0d2.th.jpg" },
      { link: "video/video5.html#slide3", img: "https://s2.radikal.cloud/2025/06/22/17affc5ca9c84deb14.th.jpg" }
    ]
  },
  {
    title: "9 месяца",
    id: 6,
    items: [
      { link: "video/video6.html#slide1", img: "https://s2.radikal.cloud/2025/06/22/18fba15717e6d4d155.th.jpg" },
      { link: "video/video6.html#slide2", img: "https://s3.radikal.cloud/2025/06/22/19f8a9914acc86dad1.th.jpg" },
      { link: "video/video6.html#slide3", img: "https://s3.radikal.cloud/2025/06/22/207dbffcb8d93df4fb.th.jpg" }
    ]
  },
  {
    title: "10 месяца",
    id: 7,
    items: [
      { link: 'video/video7.html#slide1', img: 'https://s2.radikal.cloud/2025/06/22/216338be5c00fdb901.th.jpg' },
      { link: 'video/video7.html#slide2', img: 'https://s3.radikal.cloud/2025/06/22/22dba22845a34e7453.th.jpg' },
      { link: 'video/video7.html#slide3', img: 'https://s3.radikal.cloud/2025/06/22/2308a3b53942596420.th.jpg' },
      { link: 'video/video7.html#slide4', img: 'https://s2.radikal.cloud/2025/06/22/24b1cf6bb28c2bf073.th.jpg' },
      { link: 'video/video7.html#slide5', img: 'https://s3.radikal.cloud/2025/06/22/25a7d3ea03f405044a.th.jpg' },
      { link: 'video/video7.html#slide6', img: 'https://s2.radikal.cloud/2025/06/22/2628b2f3043d274025.th.jpg' }
    ]

  },
  {
    title: "11 месяц",
    id: 8,
    items: [
      { link: "video/video8.html#slide1", img: "https://s2.radikal.cloud/2025/06/22/2768105fc1f5cb5a1b.th.jpg" },
      { link: "video/video8.html#slide2", img: "https://s3.radikal.cloud/2025/06/22/2805b189135d916f9b.th.jpg" },
      { link: "video/video8.html#slide3", img: "https://s3.radikal.cloud/2025/06/22/29aa2890c2d616ac87.th.jpg" },
      { link: "video/video8.html#slide4", img: "https://s2.radikal.cloud/2025/06/22/309b6416d1810f3ef7.th.jpg" },
      { link: "video/video8.html#slide5", img: "https://s3.radikal.cloud/2025/06/22/312eacbf3a48330b59.th.jpg" }
    ]

  },
  {
    title: "1 годик",
    id: 9,
    items: [
      { link: "video/video9.html#slide1", img: "https://s3.radikal.cloud/2025/06/22/32f7cdaa3389b42d85.th.jpg" },
      { link: "video/video9.html#slide2", img: "https://s2.radikal.cloud/2025/06/22/33d60248f0247bdd3c.th.jpg" },
      { link: "video/video9.html#slide3", img: "https://s2.radikal.cloud/2025/06/22/343c9bb14685fb2547.th.jpg" }
    ]

  },
];
