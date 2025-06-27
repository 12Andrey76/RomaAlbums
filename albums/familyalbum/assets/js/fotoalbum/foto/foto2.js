const slides = [
	// ============####block1####=================
	{
		id: 1,
		image: "https://s3.radikal.cloud/2025/01/26/1b1a7acea238f5d3b.jpeg",
		title: "Фото 1",
		block: 1,
		links: {
			previous: 12,
			next: 2,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
	}
	},
	{
		id: 2,
		image: "https://s3.radikal.cloud/2025/01/26/2a8e2ab70ff1ba6eb.jpeg",
		title: "Фото 2",
		block: 1,
		links: {
			previous: 1,
			next: 3,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	{
		id: 3,
		image: "https://s3.radikal.cloud/2025/01/26/37d86fe59f3d3afe1.jpeg",
		title: "Фото 3",
		block: 1,
		links: {
			previous: 2,
			next: 4,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	{
		id: 4,
		image: "https://s3.radikal.cloud/2025/01/26/4ba2988b0c6935b12.jpeg",
		title: "Фото 4",
		block: 1,
		links: {
			previous: 3,
			next: 5,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	{
		id: 5,
		image: "https://s3.radikal.cloud/2025/01/26/5094cfdee5ad5feaa.jpeg",
		title: "Фото 5",
		block: 1,
		links: {
			previous: 4,
			next: 6,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
	}
	},
	{
		id: 6,
		image: "https://s3.radikal.cloud/2025/01/26/6791b462bc0f9e891.jpeg",
		title: "Фото 6",
		block: 6,
		links: {
			previous: 5,
			next: 7,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	{
		id: 7,
		image: "https://s3.radikal.cloud/2025/01/26/7c7473346707bfe7e.jpeg",
		title: "Фото 7",
		block: 1,
		links: {
			previous: 6,
			next: 8,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	{
		id: 8,
		image: "https://s3.radikal.cloud/2025/01/26/8a2a5f872f8309247.jpeg",
		title: "Фото 8",
		block: 1,
		links: {
			previous: 7,
			next: 9,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	{
		id: 9,
		image: "https://s3.radikal.cloud/2025/01/26/9c471d4a5082de1fe.jpeg",
		title: "Фото 9",
		block: 1,
		links: {
			previous: 8,
			next: 10,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	{
		id: 10,
		image: "https://s3.radikal.cloud/2025/01/26/10ccf148219e5780de.jpeg",
		title: "Фото 10",
		block: 1,
		links: {
			previous: 9,
			next: 11,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	{
		id: 11,
		image: "https://s3.radikal.cloud/2025/01/26/11b554222d6269da4e.jpeg",
		title: "Фото 11",
		block: 1,
		links: {
			previous: 10,
			next: 12,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	{
		id: 12,
		image: "https://s3.radikal.cloud/2025/01/26/1219afd655ae3edd7b.jpeg",
		title: "Фото 12",
		block: 1,
		links: {
			previous: 11,
			next: 1,
			block: "Блок 1",
			blockPrevious: 61,
			blockNext: 13,
		}
	},
	// ============####block2####=================
	{
		id: 13,
		image: "https://s3.radikal.cloud/2025/01/26/13678f5a25bf9470da.jpeg",
		title: "Фото 1",
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
		image: "https://s3.radikal.cloud/2025/01/26/14adb53b77970c7640.jpeg",
		title: "Фото 2",
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
		image: "https://s3.radikal.cloud/2025/01/26/15e0d0d4045585475c.jpeg",
		title: "Фото 3",
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
		image: "https://s3.radikal.cloud/2025/01/26/16d3975bdbe9e60559.jpeg",
		title: "Фото 4",
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
		image: "https://s3.radikal.cloud/2025/01/26/1771e56324e7713ab5.jpeg",
		title: "Фото 5",
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
		image: "https://s3.radikal.cloud/2025/01/26/18036c0f0d5c565f30.jpeg",
		title: "Фото 6",
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
		image: "https://s3.radikal.cloud/2025/01/26/1937e91e63ad0c807b.jpeg",
		title: "Фото 7",
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
		image: "https://s3.radikal.cloud/2025/01/26/20b3354030c1edceb5.jpeg",
		title: "Фото 8",
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
		image: "https://s3.radikal.cloud/2025/01/26/21d437332fa848b89f.jpeg",
		title: "Фото 9",
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
		image: "https://s3.radikal.cloud/2025/01/26/227ec718f3eef62616.jpeg",
		title: "Фото 10",
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
		image: "https://s3.radikal.cloud/2025/01/26/23c30986cec5189b7f.jpeg",
		title: "Фото 11",
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
		image: "https://s3.radikal.cloud/2025/01/26/24dd0e2f9e1a6f054b.jpeg",
		title: "Фото 12",
		block: 2,
		links: {
			previous: 23,
			next: 13,
			block: "Блок 2",
			blockPrevious: 1,
			blockNext: 25,
		}
	},
	// ============####block3####=================
	{
		id: 25,
		image: "https://s3.radikal.cloud/2025/01/26/25ea23f9debbf73b08.jpeg",
		title: "Фото 1",
		block: 3,
		links: {
			previous: 36,
			next: 26,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 26,
		image: "https://s3.radikal.cloud/2025/01/26/26c99e0597d502d682.jpeg",
		title: "Фото 2",
		block: 3,
		links: {
			previous: 25,
			next: 27,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 27,
		image: "https://s3.radikal.cloud/2025/01/26/27089168aebce729d4.jpeg",
		title: "Фото 3",
		block: 3,
		links: {
			previous: 26,
			next: 28,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 28,
		image: "https://s3.radikal.cloud/2025/01/26/283e1ba112e04aee5d.jpeg",
		title: "Фото 4",
		block: 3,
		links: {
			previous: 27,
			next: 29,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 29,
		image: "https://s3.radikal.cloud/2025/01/26/299008a8fa69f09609.jpeg",
		title: "Фото 5",
		block: 3,
		links: {
			previous: 28,
			next: 30,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 30,
		image: "https://s3.radikal.cloud/2025/01/26/3080c5b3967ed5c2c4.jpeg",
		title: "Фото 6",
		block: 3,
		links: {
			previous: 29,
			next: 31,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 31,
		image: "https://s3.radikal.cloud/2025/01/26/31d9ec53801e3e95df.jpeg",
		title: "Фото 7",
		block: 3,
		links: {
			previous: 30,
			next: 32,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 32,
		image: "https://s3.radikal.cloud/2025/01/26/32db6e83ec0a8b6048.jpeg",
		title: "Фото 8",
		block: 3,
		links: {
			previous: 31,
			next: 33,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 33,
		image: "https://s3.radikal.cloud/2025/01/26/330b973fa307aca194.jpeg",
		title: "Фото 9",
		block: 3,
		links: {
			previous: 32,
			next: 34,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 34,
		image: "https://s3.radikal.cloud/2025/01/26/34b0c64d5594a5db85.jpeg",
		title: "Фото 10",
		block: 3,
		links: {
			previous: 33,
			next: 35,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 35,
		image: "https://s3.radikal.cloud/2025/01/26/35ef4974019e7b5a00.jpeg",
		title: "Фото 11",
		block: 3,
		links: {
			previous: 34,
			next: 36,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	{
		id: 36,
		image: "https://s3.radikal.cloud/2025/01/26/36e69d034544c81ce5.jpeg",
		title: "Фото 12",
		block: 3,
		links: {
			previous: 35,
			next: 25,
			block: "Блок 3",
			blockPrevious: 13,
			blockNext: 37,
		}
	},
	// ============####block4####=================
	{
		id: 37,
		image: "https://s3.radikal.cloud/2025/01/26/37471ca55d4cb2058d.jpeg",
		title: "Фото 1",
		block: 4,
		links: {
			previous: 48,
			next: 38,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 38,
		image: "https://s3.radikal.cloud/2025/01/26/3877ae6ed9bb2cc880.jpeg",
		title: "Фото 2",
		block: 4,
		links: {
			previous: 37,
			next: 39,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 39,
		image: "https://s3.radikal.cloud/2025/01/26/39827641d96b0ffc38.jpeg",
		title: "Фото 3",
		block: 4,
		links: {
			previous: 38,
			next: 40,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 40,
		image: "https://s3.radikal.cloud/2025/01/26/40d403d577e2848292.jpeg",
		title: "Фото 4",
		block: 4,
		links: {
			previous: 39,
			next: 41,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 41,
		image: "https://s3.radikal.cloud/2025/01/26/4136a0487e69ed48e8.jpeg",
		title: "Фото 5",
		block: 4,
		links: {
			previous: 40,
			next: 42,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 42,
		image: "https://s3.radikal.cloud/2025/01/26/420b5f3d06bb605123.jpeg",
		title: "Фото 6",
		block: 4,
		links: {
			previous: 41,
			next: 43,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 43,
		image: "https://s3.radikal.cloud/2025/01/26/43b1a7a9b2f31b071d.jpeg",
		title: "Фото 7",
		block: 4,
		links: {
			previous: 42,
			next: 44,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 44,
		image: "https://s3.radikal.cloud/2025/01/26/44769be1d7ca5a921a.jpeg",
		title: "Фото 8",
		block: 4,
		links: {
			previous: 43,
			next: 45,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 45,
		image: "https://s3.radikal.cloud/2025/01/26/4563604bf695bf3c76.jpeg",
		title: "Фото 9",
		block: 4,
		links: {
			previous: 44,
			next: 46,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 46,
		image: "https://s3.radikal.cloud/2025/01/26/467890855c75d00f08.jpeg",
		title: "Фото 10",
		block: 4,
		links: {
			previous: 45,
			next: 47,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 47,
		image: "https://s3.radikal.cloud/2025/01/26/4759ad2a96e27a6c58.jpeg",
		title: "Фото 11",
		block: 2,
		links: {
			previous: 46,
			next: 48,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	{
		id: 48,
		image: "https://s3.radikal.cloud/2025/01/26/48430a54f272750a7b.jpeg",
		title: "Фото 12",
		block: 4,
		links: {
			previous: 47,
			next: 37,
			block: "Блок 4",
			blockPrevious: 25,
			blockNext: 49,
		}
	},
	// ============####block5####=================
	{
		id: 49,
		image: "https://s3.radikal.cloud/2025/01/26/49673f070a58e6da12.jpeg",
		title: "Фото 1",
		block: 5,
		links: {
			previous: 60,
			next: 50,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 50,
		image: "https://s3.radikal.cloud/2025/01/26/5074ebce93e0365a02.jpeg",
		title: "Фото 2",
		block: 5,
		links: {
			previous: 49,
			next: 51,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 51,
		image: "https://s3.radikal.cloud/2025/01/26/51faed1209ab884246.jpeg",
		title: "Фото 3",
		block: 5,
		links: {
			previous: 50,
			next: 52,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 52,
		image: "https://s3.radikal.cloud/2025/01/26/5280c94ed2e7be62a8.jpeg",
		title: "Фото 4",
		block: 5,
		links: {
			previous: 51,
			next: 53,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 53,
		image: "https://s3.radikal.cloud/2025/01/26/53fd03ac94df3b194d.jpeg",
		title: "Фото 5",
		block: 5,
		links: {
			previous: 52,
			next: 54,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 54,
		image: "https://s3.radikal.cloud/2025/01/26/543c0023d13b8c6e9a.jpeg",
		title: "Фото 6",
		block: 5,
		links: {
			previous: 53,
			next: 55,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 55,
		image: "https://s3.radikal.cloud/2025/01/26/55cbe3d3fe4a5c6764.jpeg",
		title: "Фото 7",
		block: 5,
		links: {
			previous: 54,
			next: 56,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 56,
		image: "https://s3.radikal.cloud/2025/01/26/56553a2de65a92db17.jpeg",
		title: "Фото 8",
		block: 5,
		links: {
			previous: 55,
			next: 57,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 57,
		image: "https://s3.radikal.cloud/2025/01/26/5755be1feba9376db0.jpeg",
		title: "Фото 9",
		block: 5,
		links: {
			previous: 56,
			next: 58,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 58,
		image: "https://s3.radikal.cloud/2025/01/26/58a30b761ac7295bf4.jpeg",
		title: "Фото 10",
		block: 5,
		links: {
			previous: 57,
			next: 59,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 59,
		image: "https://s3.radikal.cloud/2025/01/26/59a318f76831eeb906.jpeg",
		title: "Фото 11",
		block: 5,
		links: {
			previous: 58,
			next: 60,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	{
		id: 60,
		image: "https://s3.radikal.cloud/2025/01/26/602499824d62f4208d.jpeg",
		title: "Фото 12",
		block: 5,
		links: {
			previous: 59,
			next: 49,
			block: "Блок 5",
			blockPrevious: 37,
			blockNext: 61,
		}
	},
	// ============####block6####=================
	{
		id: 61,
		image: "https://s3.radikal.cloud/2025/01/26/6109d2e7c09cc3f225.jpeg",
		title: "Фото 1",
		block: 6,
		links: {
			previous: 71,
			next: 62,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 62,
		image: "https://s3.radikal.cloud/2025/01/26/6279cf3acdf0fd6599.jpeg",
		title: "Фото 2",
		block: 6,
		links: {
			previous: 61,
			next: 63,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 63,
		image: "https://s3.radikal.cloud/2025/01/26/63bd224909d1d8cb72.jpeg",
		title: "Фото 3",
		block: 6,
		links: {
			previous: 62,
			next: 64,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 64,
		image: "https://s3.radikal.cloud/2025/01/26/6419d49212846aac83.jpeg",
		title: "Фото 4",
		block: 6,
		links: {
			previous: 63,
			next: 65,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 65,
		image: "https://s3.radikal.cloud/2025/01/26/654664d5b3ee320fd8.jpeg",
		title: "Фото 5",
		block: 6,
		links: {
			previous: 64,
			next: 66,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 66,
		image: "https://s3.radikal.cloud/2025/01/26/66c7008a45b58bd95d.jpeg",
		title: "Фото 6",
		block: 6,
		links: {
			previous: 65,
			next: 67,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 67,
		image: "https://s3.radikal.cloud/2025/01/26/675e27aa05f16a4550.jpeg",
		title: "Фото 7",
		block: 6,
		links: {
			previous: 66,
			next: 68,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 68,
		image: "https://s3.radikal.cloud/2025/01/26/68541095ec735772af.jpeg",
		title: "Фото 8",
		block: 6,
		links: {
			previous: 67,
			next: 69,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 69,
		image: "https://s3.radikal.cloud/2025/01/26/6989231aa01a4226a4.jpeg",
		title: "Фото 9",
		block: 6,
		links: {
			previous: 68,
			next: 70,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 70,
		image: "https://s3.radikal.cloud/2025/01/26/70e102d8b6b195db15.jpeg",
		title: "Фото 10",
		block: 6,
		links: {
			previous: 69,
			next: 71,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
	{
		id: 71,
		image: "https://s3.radikal.cloud/2025/01/26/713de5389d3c59b124.jpeg",
		title: "Фото 11",
		block: 6,
		links: {
			previous: 70,
			next: 61,
			block: "Блок 6",
			blockPrevious: 49,
			blockNext: 1,
		}
	},
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
loadScript('../../assets/js/js-component/foto-slides.js')
	.then(() => {
		console.log('Slides script loaded successfully');
	})
	.catch(error => {
		console.error(error);
	});