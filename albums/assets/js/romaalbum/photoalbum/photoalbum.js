const carouselData = [
  {
    title: "1 месяц",
    id: 1,
    items: [
      { link: "photo/photo1.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/158eb7074b03e9ad1.th.jpeg" },
      { link: "photo/photo1.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/3f257bfa0471f19a5.th.jpeg" },
      { link: "photo/photo1.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/476e4b24a45184277.th.jpeg" },
      { link: "photo/photo1.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/6a0cc80b8a5bd355d.th.jpeg" },
      { link: "photo/photo1.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/910b5f504151745c1.th.jpeg" },
      { link: "photo/photo1.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/107d116ef5382467f0.th.jpeg" },
      { link: "photo/photo1.html#slide7", img: "https://s3.radikal.cloud/2025/01/26/11ef2e37f908bfac95.th.jpeg" },
      { link: "photo/photo1.html#slide8", img: "https://s3.radikal.cloud/2025/01/26/121a52eff6edb9893d.th.jpeg" },
      { link: "photo/photo1.html#slide9", img: "https://s3.radikal.cloud/2025/01/26/13.f6f754fea56ff0cc.th.jpeg" },
    ]
  },
  {
    title: "2 месяца",
    id: 2,
    items: [
      { link: "photo/photo2.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/14c2d655aabf0f57b9.th.jpeg" },
      { link: "photo/photo2.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/1513b596fbe9353cfd.th.jpeg" },
      { link: "photo/photo2.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/164b8a7d839399a233.th.jpeg" },
      { link: "photo/photo2.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/17521ffa1ca53ef1c9.th.jpeg" },
      { link: "photo/photo2.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/1838fe99d98b3b6c4a.th.jpeg" },
      { link: "photo/photo2.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/19023230daceff42c7.th.jpeg" },
      { link: "photo/photo2.html#slide7", img: "https://s3.radikal.cloud/2025/01/26/203960d38cfa5aa351.th.jpeg" },
    ]
  },
  {
    title: "3 месяца",
    id: 3,
    items: [
      { link: "photo/photo3.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/219b15f297b9f2d81f.th.jpeg" },
      { link: "photo/photo3.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/22123214bd1c7742fd.th.jpeg" },
      { link: "photo/photo3.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/23f7424ad2cbcaec2b.th.jpeg" },
      { link: "photo/photo3.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/2412f9ff4a8e61cdc8.th.jpeg" },
      { link: "photo/photo3.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/25354d1596203ed20a.th.jpeg" },
      { link: "photo/photo3.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/26e0d311ef38e2a64e.th.jpeg" },
      { link: "photo/photo3.html#slide7", img: "https://s3.radikal.cloud/2025/01/26/29bf4dde8180d98eb4.th.jpeg" },
      { link: "photo/photo3.html#slide8", img: "https://s3.radikal.cloud/2025/01/26/302df5d674fd891a8a.th.jpeg" }
    ]
  },
  {
    title: "4 месяца",
    id: 4,
    items: [
      { link: "photo/photo4.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/3159424de88dc824a6.th.jpeg" },
      { link: "photo/photo4.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/32730e1a6def528d31.th.jpeg" }
    ]
  },
  {
    title: "5 месяца",
    id: 5,
    items: [
      { link: "photo/photo5.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/3338946ef0f727cf54.th.jpeg" },
      { link: "photo/photo5.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/34bc988ca24240eec7.th.jpeg" },
      { link: "photo/photo5.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/3581330aab6f37fde1.th.jpeg" },
      { link: "photo/photo5.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/36b71b09e26b51afa6.th.jpeg" },
      { link: "photo/photo5.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/381886b41279529539.th.jpeg" },
      { link: "photo/photo5.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/39a8a0ed297e586a1e.th.jpeg" },
      { link: "photo/photo5.html#slide7", img: "https://s3.radikal.cloud/2025/01/26/41cb8e9c70fa256f76.th.jpeg" },
      { link: "photo/photo5.html#slide8", img: "https://s3.radikal.cloud/2025/01/26/42f471c0df37c8a0c2.th.jpeg" },
      { link: "photo/photo5.html#slide9", img: "https://s3.radikal.cloud/2025/01/26/43be41cce3e2e8dcb9.th.jpeg" },
      { link: "photo/photo5.html#slide10", img: "https://s3.radikal.cloud/2025/01/26/44b1d796b2d5826fad.th.jpeg" }
    ]
  },
  {
    title: "6 месяца",
    id: 6,
    items: [
      { link: "photo/photo6.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/45a745330bd7147193.th.jpeg" },
      { link: "photo/photo6.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/466365a594270b7e1b.th.jpeg" },
      { link: "photo/photo6.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/48e625eaeeb8ad8063.th.jpeg" },
      { link: "photo/photo6.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/503870216d67c39230.th.jpeg" },
      { link: "photo/photo6.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/525969037a1243aeb0.th.jpeg" },
      { link: "photo/photo6.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/53c07ba51b6847148f.th.jpeg" },
      { link: "photo/photo6.html#slide7", img: "https://s3.radikal.cloud/2025/01/26/54f05f3f01c7b1bcd1.th.jpeg" },
      { link: "photo/photo6.html#slide8", img: "https://s3.radikal.cloud/2025/01/26/56915a83b804e82ac1.th.jpeg" },
      { link: "photo/photo6.html#slide9", img: "https://s3.radikal.cloud/2025/01/26/572bc67253aa1044eb.th.jpeg" },
      { link: "photo/photo6.html#slide10", img: "https://s3.radikal.cloud/2025/01/26/58d759615768082abf.th.jpeg" },
      { link: "photo/photo6.html#slide11", img: "https://s3.radikal.cloud/2025/01/26/59bbd542e1f2959493.th.jpeg" },
      { link: "photo/photo6.html#slide12", img: "https://s3.radikal.cloud/2025/01/26/6084e9257f236a1433.th.jpeg" },
      { link: "photo/photo6.html#slide13", img: "https://s3.radikal.cloud/2025/01/26/6115fa8bbb7698a293.th.jpeg" },
      { link: "photo/photo6.html#slide14", img: "https://s3.radikal.cloud/2025/01/26/63aa4e032bc277e209.th.jpeg" },
      { link: "photo/photo6.html#slide15", img: "https://s3.radikal.cloud/2025/01/26/64c5e69adadb833ad9.th.jpeg" }
    ]
  },
  {
    title: "7 месяца",
    id: 7,
        items: [
      { link: "photo/photo7.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/65284bc81dc5607f9d.th.jpeg" },
      { link: "photo/photo7.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/68e9778267da0d74a4.th.jpeg" },
      { link: "photo/photo7.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/69116036c91b9282f8.th.jpeg" },
      { link: "photo/photo7.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/7155554aedaa0802a8.th.jpeg" },
      { link: "photo/photo7.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/72fe23fa29ad2921cf.th.jpeg" },
      { link: "photo/photo7.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/735756eafe2d2284d1.th.jpeg" }
    ]
  },
  {
    title: "8 месяц",
    id: 8,
    items: [
      { link: "photo/photo8.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/746ca792b0526ac5bc.th.jpeg" },
      { link: "photo/photo8.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/75ef611328c32869ca.th.jpeg" },
      { link: "photo/photo8.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/768bdc2cd4e7c8248b.th.jpeg" },
      { link: "photo/photo8.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/7821b9b734ea7c414c.th.jpeg" },
      { link: "photo/photo8.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/802cf2c773d0b2a009.th.jpeg" },
      { link: "photo/photo8.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/8196bf7c0bde963687.th.jpeg" },
      { link: "photo/photo8.html#slide7", img: "https://s3.radikal.cloud/2025/01/26/824a006c562ed4584d.th.jpeg" },
      { link: "photo/photo8.html#slide8", img: "https://s3.radikal.cloud/2025/01/26/84a974dc5ef0023297.th.jpeg" },
      { link: "photo/photo8.html#slide9", img: "https://s3.radikal.cloud/2025/01/26/858c86e6122c9e6c94.th.jpeg" }
    ]
  },
  {
    title: "9 месяца",
    id: 9,
    items: [
      { link: "photo/photo9.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/86c7919b9e713a95cc.th.jpeg" },
      { link: "photo/photo9.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/87ea47e2bb39e134d7.th.jpeg" },
      { link: "photo/photo9.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/882565f77f4295f0e2.th.jpeg" },
      { link: "photo/photo9.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/9128d2b92d80ec6673.th.jpeg" },
      { link: "photo/photo9.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/926d6014b8e06d687d.th.jpeg" },
      { link: "photo/photo9.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/938ec8a2a6fed57ada.th.jpeg" }
    ]
  },
  {
    title: "10 месяца",
    id: 10,
    items: [
      { link: "photo/photo10.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/94915581363150e3a4.th.jpeg" },
      { link: "photo/photo10.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/97071bcdc856c368f2.th.jpeg" },
      { link: "photo/photo10.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/995a3828b65a6b66b9.th.jpeg" },
      { link: "photo/photo10.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/100f93011871f5ea062.th.jpeg" },
      { link: "photo/photo10.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/102520fa4539b52e38f.th.jpeg" },
      { link: "photo/photo10.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/1049f7739fc1ac459ee.th.jpeg" },
      { link: "photo/photo10.html#slide7", img: "https://s3.radikal.cloud/2025/01/26/1064bec9546a2ee42e7.th.jpeg" }
    ]
  },
  {
    title: "11 месяца",
    id: 11,
    items: [
      { link: "photo/photo11.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/110ff266e6c05a9dc24.th.jpeg" },
      { link: "photo/photo11.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/11359bf056051483f4a.th.jpeg" },
      { link: "photo/photo11.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/11567a0d8f76a6a95b6.th.jpeg" },
      { link: "photo/photo11.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/117f97be6672b885f17.th.jpeg" },
      { link: "photo/photo11.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/118293ff42ffae4d9a6.th.jpeg" },
      { link: "photo/photo11.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/119ab9b4253d30f9d7c.th.jpeg" },
      { link: "photo/photo11.html#slide7", img: "https://s3.radikal.cloud/2025/01/26/1218f809e1f198f2efb.th.jpeg" },
      { link: "photo/photo11.html#slide8", img: "https://s3.radikal.cloud/2025/01/26/1239ad593afd42aa24b.th.jpeg" },
      { link: "photo/photo11.html#slide9", img: "https://s3.radikal.cloud/2025/01/26/125ee40b3c1a08ae085.th.jpeg" },
      { link: "photo/photo11.html#slide10", img: "https://s3.radikal.cloud/2025/01/26/126b0425362888f7be6.th.jpeg" },
      { link: "photo/photo11.html#slide11", img: "https://s3.radikal.cloud/2025/01/26/128063fd29e3538fa07.th.jpeg" },
      { link: "photo/photo11.html#slide12", img: "https://s3.radikal.cloud/2025/01/26/13055939c74649ae727.th.jpeg" }
    ]
  },
  {
    title: "1 годик",
    id: 12,
    items: [
      { link: "photo/photo12.html#slide1", img: "https://s3.radikal.cloud/2025/01/26/13578ac2af557252607.th.jpeg" },
      { link: "photo/photo12.html#slide2", img: "https://s3.radikal.cloud/2025/01/26/1421497868f091abc11.th.jpeg" },
      { link: "photo/photo12.html#slide3", img: "https://s3.radikal.cloud/2025/01/26/14392a133b2402c33ac.th.jpeg" },
      { link: "photo/photo12.html#slide4", img: "https://s3.radikal.cloud/2025/01/26/147a9bf06bcf95c9356.th.jpeg" },
      { link: "photo/photo12.html#slide5", img: "https://s3.radikal.cloud/2025/01/26/14915eca4c7e5ac8c59.th.jpeg" },
      { link: "photo/photo12.html#slide6", img: "https://s3.radikal.cloud/2025/01/26/150c05c666ae31f1f35.th.jpeg" },
      { link: "photo/photo12.html#slide7", img: "https://s3.radikal.cloud/2025/01/26/1517c2939b1f58888a4.th.jpeg" },
      { link: "photo/photo12.html#slide8", img: "https://s3.radikal.cloud/2025/01/26/1534d2586723577dac6.th.jpeg" },
      { link: "photo/photo12.html#slide9", img: "https://s3.radikal.cloud/2025/01/26/154194f9336d9994801.th.jpeg" },
      { link: "photo/photo12.html#slide10", img: "https://s3.radikal.cloud/2025/01/26/1565c3d7fb9c75b7e39.th.jpeg" },
      { link: "photo/photo12.html#slide11", img: "https://s3.radikal.cloud/2025/01/26/158c233401d607d8dde.th.jpeg" },
      { link: "photo/photo12.html#slide12", img: "https://s3.radikal.cloud/2025/01/26/15928b3c9e3c6d10c37.th.jpeg" },
      { link: "photo/photo12.html#slide13", img: "https://s3.radikal.cloud/2025/01/26/161109740446aa02f41.th.jpeg" }
    ]
  },
];
