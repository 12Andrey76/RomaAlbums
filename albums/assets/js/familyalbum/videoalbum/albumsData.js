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

// Семейный альбом — видео
// [вставить хелперы из 1.1]

window.albumsData = {
  video: {
    video1: {
      title: "Видеоальбом 1 год",
      blocks: [
        videoBlock("Блок #1", "../../../albumsFiles/afterAYear/video/video1/block1", [
          "https://rutube.ru/play/embed/1acd989e17f55a404fdbd90978498138?p=KSQ2Oy2a0WGiR_vjNxBudQ",
          "https://rutube.ru/play/embed/6eeeb977e45e2d736b57f9a5e5936ad0?p=2n0t7_yn_fNu_JxX69a4CQ",
          "https://rutube.ru/play/embed/2f3aa3f930bf1d23958e3eab4c859eb6?p=p1r1hqk93QX9cPbmzPaqzQ",
          "https://rutube.ru/play/embed/5bb1e3f5121c941ce87504a848146cc5/?r=a&p=J7AK5kJ4IyGKEgZQTgoOhQ",
          "https://rutube.ru/play/embed/3644b171e66d6242f2ee15ddae875951?p=3UjU9oUS5Tufb8uh8DhSZA",
          "https://rutube.ru/play/embed/014a54c3d606ef0a9a157b367bdae6ea?p=-DDTkzHw-emTmNnb_d70eQ",
          "https://rutube.ru/play/embed/56c9e121d6f372a22fb5ec0c5d1edf2a?p=3jguvq_vp48UZQExc5mXbg",
          "https://rutube.ru/play/embed/c4f8ac09107446077b70bbf82bffd491?p=3bJp8GS3eHukcEYb5e0J_g",
          "https://rutube.ru/play/embed/c26d6010549f1ecf5d973816dddf4200/?p=CAPI85s3CxZpvyKZEVi7xw",
          "https://rutube.ru/play/embed/61af4e4d4f47a118a6dca40f658af962/?p=_HKtWqK304VdGExJIwQ9fw",
          "https://rutube.ru/play/embed/13ca4ae8ada5ac60bdb4aabad166eea3/?p=NtesHTapM6M7b4Db7-I__A",
          "https://rutube.ru/play/embed/7f84b4a6c0aa402f24dcb6f48b4f2d6a/?p=nxi3gvgyZNhYC7gN6yENeA",
          "https://rutube.ru/play/embed/427888ad6161405949ffe8561e5c7dac/?p=i2fDpk_8yI9k400PR7mLOQ",
          "https://rutube.ru/play/embed/15adb7ef7ae595e5b451c2bfa8b37abd/?p=LFKllG4x_doxWPBoMXWiUw",
          "https://rutube.ru/play/embed/7606d6247042a762f102b89b2813e044/?p=dSgVw3iRTLVldMCu5tsVeQ",
        ]),
        videoBlock("Блок #2", "../../../albumsFiles/afterAYear/video/video1/block2", [
          "https://rutube.ru/play/embed/8331737f0e548ddf0e7a6c02b5b9c175/?p=Q-SCWMnmEQgf5-2z2O9lxw",
          "https://rutube.ru/play/embed/5be646e9314aa1cba6b9eea6213d341d/?p=whvYEuhPOZP9c8N0Nsd56A",
          "https://rutube.ru/play/embed/9067ae6b05335462b7871fdf73e96bb0/?p=dEoLb1Xhtz-pNg-dvL1wFw",
          "https://rutube.ru/play/embed/c89063f373d2c6a32f551efbfa129e19/?p=YMTKK3pqj8MdTVIYuB38AA",
          "https://rutube.ru/play/embed/6142335eb93295d2da428a28b3e09eef/?p=89LvD7yMjNpn-KA9h0CS6g",
          "https://rutube.ru/play/embed/167d6cf678e45e7b972dfa7ddf1f89c4/?p=AA1dXLT0BFwWnN6ehnPEFQ",
          "https://rutube.ru/play/embed/f25898e3a8e85d6fbd9d61293ba2b0ef/?p=rIDAOyBohvqog-jakK50Qw",
          "https://rutube.ru/play/embed/da2a151e4ade4d5336afbff0f12cd265/?p=-A0XD0RoUhtA3ZIg7OHvYg",
          "https://rutube.ru/play/embed/147ef80e9f70de7b9be4233b46b1c039/?p=sMF1SXQlmQlw9wt6hbqTAw"
        ])
      ]
    },
    video2: {
      title: "Видеоальбом 2 года",
      blocks: [
        videoBlock("Блок #1", "../../../albumsFiles/afterAYear/video/video2/block1", [
          "https://rutube.ru/play/embed/82a71f4de4c9724d19b3698263259b8f?p=DLaXWxNXLtb67jXJIf8BNg",
          "https://rutube.ru/play/embed/84a319d76ffaacc25b6355b8a90f8875?p=ewb4Cy3lBN-zCr8m59Seog",
          "https://rutube.ru/play/embed/0d8341cb4c01eeba2d5cf87f67f96871?p=xFcctAYDWptZU99hiWpxiQ",
          "https://rutube.ru/play/embed/9e31e62dcd90d7bef520eb622b42d85d?p=5rwc-OiMpc8Z85jgJHdFZg",
          "https://rutube.ru/play/embed/b8e961543171de74ae9930d08a1ef507?p=4wYHV3WYp7KmqNKbulp56g",
          "https://rutube.ru/play/embed/64afd93dfb7c65293b00c3b27570b424?p=8X9bgd4so8ZpgacIY8rThw",
          "https://rutube.ru/play/embed/0437ce83264e74ea865cd6052f557f5a?p=0XfL5cIpXYknmo1Z16TjeA",
          "https://rutube.ru/play/embed/48308ae2e3729cd85208921dee06a1e0?p=q1pPI-UxG41mjgyjPi1MfA",
          "https://rutube.ru/play/embed/7603a910fc6fcd768bf4dbe0d2ad8f3a?p=hpDZvdtkBG6N3ITF295XYQ",
          "https://rutube.ru/play/embed/176b279559f3b9465191af3da3af9c26?p=10TWiAHCXlvnjGw541puQg",
          "https://rutube.ru/play/embed/793fb5f9dc64996ddfdf9fcf672016b8?p=k9iy9PMCV4CRtFNA5qguZg",
          "https://rutube.ru/play/embed/398c078ca7848fbaef7f0e8f0c300456?p=e8MqXX15KAld4Z2v-7gIqg",
          "https://rutube.ru/play/embed/e1737d156f91286686c0b55bfa7eee14?p=LvJv3s9HuJ1Xz9GarKxViw",
          "https://rutube.ru/play/embed/96a6dbe97b5c4b42f7b8a73067df354f?p=fuX3gEhfBVcYbW8dhxX3-w",
          "https://rutube.ru/play/embed/bba2a75b2f4ac72bd41976d29712b4d6?p=KVEHe0lUMrMGidOr-dfCeg",
        ]),
        videoBlock("Блок #2", "../../../albumsFiles/afterAYear/video/video2/block2", [
          "https://rutube.ru/play/embed/fae8172418cdd92f5b7c5b8cb2626be0?p=EsbCE9Wm1-qGbdcULwQthA",
          "https://rutube.ru/play/embed/4148f6083158f69e95f0a9ebb157cd53?p=_w_gn43BuZB7pLvSUZneAw",
          "https://rutube.ru/play/embed/c196db0ccb55829ee1dc09f192944265?p=0pAK9qqi5wHoZU0irquezw",
          "https://rutube.ru/play/embed/de1b54fba139d4242cb239229c87c4f6?p=SDZj7RRRJKODooNpVxv7Ew",
          "https://rutube.ru/play/embed/87d720b15da41efd4c253c066d2e57c2/?p=9qfetGPJAxHbpDEiCPLFcA",
          "https://rutube.ru/play/embed/3838a68fd11258690d68ecac79b89421?p=J3OkVflpoV1fncJLfFRjKA",
          "https://rutube.ru/play/embed/a24b4669bc76206e41cce167a949fb11?p=jZWOq9bR-tGr7qPhVbroGg",
          "https://rutube.ru/play/embed/6c3f32a97acc10afa119640b332f21a8?p=32BHIoS6Q4274iTJZ_vHhg",
          "https://rutube.ru/play/embed/2e4a2ffddbb96cea37358badf47729bc?p=MrdXR5SQga3_qSrXj4YUsw",
          "https://rutube.ru/play/embed/5166c458757a738962b2aed8ff4defef?p=VaGVXJLSwhHyDEiV9De1FA",
          "https://rutube.ru/play/embed/3c6b4a93a791e17c1db3358b82a7d872/?p=K_9L5UHaQQSdgMHVu6gvCw",
          "https://rutube.ru/play/embed/8c22649349b2ca5e9c4edc8e07067d6c?p=HjpLHR_zTvvYXn9fGzLpRw",
          "https://rutube.ru/play/embed/4750922069b941f1293a03c5c41b1c3c?p=y6QMEEgKM13a7XqFxDt9tw",
          "https://rutube.ru/play/embed/a37040cd85b13e0b4c4a54cc03f1103b?p=FNEFhR1OyMxMYseLfairFg"
        ])
      ]
    },
    video3: {
      title: "Видеоальбом 3 года",
      blocks: [
        videoBlock("Блок #1", "../../../albumsFiles/afterAYear/video/video3/block1", [
          "https://rutube.ru/play/embed/828d12428b641602344772742c7c8463?p=KIJYsDDTvrbCPhAauTl4dg",
          "https://rutube.ru/play/embed/04f65c04a4157f9d82df4d7c94948877?p=2dyHlYUR0df8v4IDozZKeg",
          "https://rutube.ru/play/embed/641dad688a57ab9cce7821aad6c63401?p=k8Kok78kiEb51lT-R7D_nA",
          "https://rutube.ru/play/embed/64d3ebacb68ad928694dd8de2f55127b?p=VEVQ4Tbblz7w5UY1fCaaiQ",
          "https://rutube.ru/play/embed/3f8dcf70c27afcbc9ae740ff34a04922?p=xtVjbptH3nC5PnItbrlC5A",
          "https://rutube.ru/play/embed/02ec27293ad7b09b2953e3ff4d4fe67f?p=srKnW-kfKsUKmgbzCbU9tQ",
          "https://rutube.ru/play/embed/4ab7fd7a1ed9d51bef83ffa2a84acbe9?p=QuFBUxYWqGVVJidk41kN1g",
          "https://rutube.ru/play/embed/5de6e80272faac70c1045c20d6623b03?p=HtBJqGg_DCoyH9x6NVCCIw",
          "https://rutube.ru/play/embed/0cb4d012b2cb4de3c61f9ee5c1cd6a57?p=q2ykKi2EpKOKUckHIMAl9Q",
          "https://rutube.ru/play/embed/36d40f8de122ab7168b35c76909e595a?p=jskGOLQfnJ4c8OPJlWo_Jg",
          "https://rutube.ru/play/embed/257f386e7aab8f06c446b3ac4766b498?p=PViYVV1JbMX0JG4UniGydQ",
          "https://rutube.ru/play/embed/c5a00fc0e4eb0300ef642cc4493b42f1?p=EcvULszbJVjAiOCHwsXakA",
          "https://rutube.ru/play/embed/5f22bc8bc5379563304370cee26a5ae8?p=6Q_FTX1cUbg3jZuRRw_NpQ",
          "https://rutube.ru/play/embed/ecefe137f90f625a74227dbb32eb88f1?p=od3b4_eLKrTAilkdAkJ6_g",
          "https://rutube.ru/play/embed/340ec95c2997f1d3d45c65242c2b3174?p=89-__mouahOkv6-tKT-8qA",
          "https://rutube.ru/play/embed/e8a65f029fa2eb0b3a3eca35c468af39/?p=eqVHLnkZkm6E8gybfz7IDQ&r=a"
        ])
      ]
    },
    video4: {
      title: "Видеоальбом 4 года",
      blocks: [
        videoBlock("Блок #1", "../../../albumsFiles/afterAYear/video/video4/block1", [
          "https://rutube.ru/play/embed/23d1d75a6c56daa2e924f11436204f3e?p=6PlI1b9SYw-l1Hb4RluEqw",
          "https://rutube.ru/play/embed/2f92a295eabf61b5b309ca92f1f8447d?p=Oy2h3XuYo5C6uf86jjYjtA",
          "https://rutube.ru/play/embed/ccb775012bc261b6e325a5c7d3400c5a?p=m0aszhzhA0BXKJfDPToGVQ",
          "https://rutube.ru/play/embed/2996c675b224054194e5a4dcd5118db0?p=-89hLYzQgGP_boi5xXmReA",
          "https://rutube.ru/play/embed/1682ec35dc4786e27f41d350d53a5396?p=3K-awhQINNdPolC02a4rRw",
          "https://rutube.ru/play/embed/e85c187b311a81a47f004a3c86b20836?p=6qVUv6x4_BUi3pMFGL15AQ",
          "https://rutube.ru/play/embed/6b217fc101eb9cfc632b10912eac0a91?p=fsfB8cpASw6eqU78U7GUzA",
          "https://rutube.ru/play/embed/1eb3c7f0ad97a5c6e6a9bf296027fe49?p=1iCxowSD-1IbNQwn9mzzGA",
          "https://rutube.ru/play/embed/d63daa6959ad9a90fa1828d0c4b2fee4/?p=ehT3kE5JVVH4Xf_TX83huA",
          "https://rutube.ru/play/embed/11d10b8f407048020999bc08c11ffe54/?p=0t55Q5jOREbLUKypQakTyA",
          "https://rutube.ru/play/embed/2dd8bc2a17b1c60e9678ce981c31b605/?p=vT8jRxiZvF_GMDLCm4XwCw"
        ])
      ]
    },
    video5: {
      title: "Видеоальбом 5 лет",
      blocks: [
        videoBlock("Блок #1", "../../../albumsFiles/afterAYear/video/video5/block1", [
          "https://rutube.ru/play/embed/bbdb4ee9edcf4d553810bc94d10ead74/?p=AcBEE4Z1HJNu_IsoiJqaXA",
          "https://rutube.ru/play/embed/107112bc04a791dc732bf99cf07b0072/?p=OJgWrQvAP_kkbglQzLnlDg",
          "https://rutube.ru/play/embed/4459857fa5f75242e4fba5fe54f5a770/?p=XXS_fc5gSQqxZsNC60hWVQ",
          "https://rutube.ru/play/embed/8c0feabdb908efa7abf34385689959a0/?p=xm6IP2-WhSfrIXw6ZkxybQ",
          "https://rutube.ru/play/embed/bdc098485237ee3108719e50f51aa12e/?p=FObc4Wgbp0jUTTH7oSVsQA",
          "https://rutube.ru/play/embed/ab9f8fa3667d468120d0419386594b8b/?p=d7XNDyIC3oNfhXwIYTBuRQ",
          "https://rutube.ru/play/embed/3e07ffb51f71e58cc335b20638bade4b/?p=wGqFHJhqYSlT-KmiYzsiEQ",
          "https://rutube.ru/play/embed/d89956c9f49b6fdba529263928434c0b/?p=ajl-aF1WzuUDao22TJNhaA",
          "https://rutube.ru/play/embed/5d38ea9e3cbbbd37ae91dc59502e3722/?p=kZto9q2FXiQbxVKLjqiI5Q",
          "https://rutube.ru/play/embed/43c26f1acd97c64f504eb9a32094de35/?p=20rfeqN2MN2ZgrxcgyWHmw",
          "https://rutube.ru/play/embed/d989bdec8309ec71c78c570670cd228d/?p=aqaCHnDPWkggDLC4ObesUA"
        ])
      ]
    },
    video6: {
      title: "Видеоальбом 6 лет",
      blocks: [
        videoBlock("Блок #1", "../../../albumsFiles/afterAYear/video/video6/block1", [
          "https://rutube.ru/play/embed/cbcac33f41c253ccc76d8c2c92212c1a/?p=TEMgCmPdstIylajdbyGY2A",
          "https://rutube.ru/play/embed/8fdfc2fca1521db098a17c99fd910088/?p=N_RiXADsp69JA2bkWbhf6w",
          "https://rutube.ru/play/embed/4498212ed98ed262e1e7bc68fd87064b/?p=hGdHd_cBWqXcFF7p_1_HRw",
          "https://rutube.ru/play/embed/3f57ae0bf38c17b63c2a3de6fd873f9c/?p=4pu_WXr_mOb0y0gzFF2ZDw",
        ])
      ]
    }
  }
};