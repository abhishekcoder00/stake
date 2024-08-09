import { faHome, faFire, faDice, faStar, faTv, faRocket } from '@fortawesome/free-solid-svg-icons';

const CategoryData = [
  {   
    name: 'Lobby',
    icon: faHome,
    images: ['image/Category/lobby1.jpeg', 'image/Category/lobby2.jpeg', 'image/Category/lobby3.jpeg', 'image/Category/lobby4.jpeg', 'image/Category/lobby5.jpeg', 'image/Category/lobby6.jpeg', 'image/Category/lobby7.jpeg', 'image/Category/lobby8.jpeg', 'image/Category/lobby9.jpeg', 'image/Category/lobby10.jpeg', 'image/Category/lobby11.jpeg', 'image/Category/lobby12.jpeg'],
    span: "3,850 playing",
  },
  { 
    name: 'Stack Originals',
    icon: faFire,
    images: ['image/Category/stack1.jpeg', 'image/Category/stack2.jpeg', 'image/Category/stack3.jpeg', 'image/Category/stack4.jpeg', 'image/Category/stack5.jpeg', 'image/Category/stack6.jpeg', 'image/Category/stack7.jpeg', 'image/Category/stack8.jpeg', 'image/Category/stack9.jpeg', 'image/Category/stack10.jpeg', 'image/Category/stack11.jpeg', 'image/Category/stack12.jpeg'],
  },
  {   
    name: 'Slots',
    icon: faDice,
    images: ['https://mediumrare.imgix.net/931cf1fd7147d0d0deda93f16fb8ef556d6d42df3586214f6539a9cfcfcf57b9?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/c830595cbd07b2561ac76a365c2f01869dec9a8fe5e7be30634d78c51b2cc91e?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/102cf3d7c840018b939cd787bf013e080b996d80e604f3008f21dddf1f1aa201?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/e0a4131a16c28a1c1516958c93ec90c6f0f1bb00f41de87f72f6800c535b9c6f?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/7324297ac3a60dd5705db514330c5c363aca538432fda98be261bef8df232a77?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/5fcbd552a53b9be85428ecd7fa0ef663f9d763bd8a504dd0de222bc873b79887?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/59d1df22a2931a965fc241a436a398f460e71ea9d0214f66780a52b56655d392?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/08512fbdc9c4163e9fae5917c47ade43a7bfe8253de88d8d16296540eab0f0a1?&dpr=1.5&format=auto&auto=format&q=50&blur=200&px=6&quality=15', 'https://mediumrare.imgix.net/86cd89b12ec34439c0d1a6e32b06c971efc86091e09ba466182abe173c3d3f7d?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/931cf1fd7147d0d0deda93f16fb8ef556d6d42df3586214f6539a9cfcfcf57b9?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/7a2cc695cad10b097220f0c5c81858075c3ec4ee4235d8211cbbdbbd389c6d6c?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/3a6fa5d49d31f11ce131acb64d8cbbe6cc5d8f916bd0afacaeb1fc5976aa4fdf?&dpr=1.5&format=auto&auto=format&q=50'],
  },
  {   
    name: 'Live Casino', 
    icon: faDice,  // Using faDice as an alternative icon
    images: ['https://mediumrare.imgix.net/090fed78786a43c7a4e01368d2a5ae1be1df0eb1b0c46b61f230153d53615a40?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/2c030508b8732644f48a0ac8dc243fd3051023e2035b39895535d195bf1c392e?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/042eaf5a9e5bf27a65d2ac21bc5b3585410c46a608b1130705f41ef24026c5d2?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/953d840bbeddf380950cfc7cdd9027ccb09418149052574c34b5749b7ac39457?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/0be3a5300220fc63c7263235e7aab2ab0505b29659486da94a593f20b3fa4a03?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/d604ace48671c482b9d25483ce76642373eaeec654fea6aca3c59b3cfe240f90?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/2031c9083f859d35405e6a506507898aeebe2c1b407b64e94aaa26189f5265bf?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/dfc89638e91d2a4311d7b23c8d6666ebc3477ee08913c39d93acd53739df3500?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/e76c6197aa542fe40792362f682722c13bfa8d0d22d3f360e99edfa2a9cf41be?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/decfdebf6a0b53844655aeb025433c7eeb799d4624fbb2803034bba9ee2a249e?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/e03e17660721f43c862b926d79a55a8c61b9d5f10e73e5272aa5c742f47c56ba?&dpr=1.5&format=auto&auto=format&q=50', 'https://mediumrare.imgix.net/2c030508b8732644f48a0ac8dc243fd3051023e2035b39895535d195bf1c392e?&dpr=1.5&format=auto&auto=format&q=50&w=167'],
  },
  {   
    name: 'Game Shows', 
    icon: faTv,
    images: ['image/Category/games(1).jpg', 'image/Category/games(2).png', 'image/Category/games(3).jpg', 'image/Category/games(4).jpg', 'image/Category/games(5).jpg', 'image/Category/games(6).jpg', 'image/Category/games(7).jpg', 'image/Category/games(8).jpg', 'image/Category/games(9).jpg', 'image/Category/games(10).jpg', 'image/Category/games(11).png', 'image/Category/games(12).png'],
  },
  {   
    name: 'Stack Exclusives',
    icon: faStar,
    images: ['image/Category/exclusive1.jpg', 'image/Category/exclusive2.jpg', 'image/Category/exclusive3.png', 'image/Category/exclusive4.jpg', 'image/Category/exclusive5.jpg', 'image/Category/exclusive6.jpg', 'image/Category/exclusive7.jpg', 'image/Category/exclusive8.jpg', 'image/Category/exclusive9.jpg ', 'image/Category/exclusive10.jpg', 'image/Category/exclusive11.jpg', 'image/Category/exclusive12.jpg'],
  },
  {   
    name: 'New Release',
    icon: faRocket,
    images: ['image/Category/new1.jpeg', 'image/Category/new2.jpg', 'image/Category/new3.jpg', 'image/Category/new4.jpg', 'image/Category/new5.jpg', 'image/Category/new6.jpg', 'image/Category/new7.jpg', 'image/Category/new8.jpg', 'image/Category/new9.jpg', 'image/Category/new10.jpg', 'image/Category/new11.jpg', 'image/Category/new12.jpg' ],
  },

  
];

export default CategoryData;