const types = [{
    id: 1,
    titleEn: 'Business Card',
    titleRu: 'Визитка',
    value: 'businessCards'
  },
  {
    id: 2,
    titleEn: 'Invitation Card',
    titleRu: 'Приглашение',
    value: 'invitation-card'
  },
  {
    id: 3,
    titleEn: 'Presentation Folder',
    titleRu: 'Буклет',
    value: 'presentation-folder'
  }
]

const size = [{
    id: 1,
    typeId: 1,
    titleEn: 'Standart (65 x 85 mm)',
    titleRu: 'Стандартная (65 x 85 мм)',
    value: 'standart'
  },
  {
    id: 2,
    typeId: 1,
    titleEn: 'Square (65 x 65 mm)',
    titleRu: 'Квадратная (65 x 65 мм)',
    value: 'square'
  },
  {
    id: 3,
    typeId: 1,
    titleEn: 'Slim (85 x 40 mm)',
    titleRu: 'Узкая (85 x 65 мм)',
    value: 'slim'
  },
  {
    id: 4,
    typeId: 2,
    titleEn: 'Standart (165 x 185 mm)',
    titleRu: 'Стандартная (165 x 185 мм)',
    value: 'standart'
  },
  {
    id: 5,
    typeId: 2,
    titleEn: 'Square (165 x 165 mm)',
    titleRu: 'Квадратная (165 x 165 мм)',
    value: 'square'
  },
  {
    id: 6,
    typeId: 2,
    titleEn: 'Slim (185 x 140 mm)',
    titleRu: 'Узкая (185 x 165 мм)',
    value: 'slim'
  },
  {
    id: 7,
    typeId: 3,
    titleEn: 'Standart (265 x 285 mm)',
    titleRu: 'Стандартная (265 x 285 мм)',
    value: 'standart'
  },
  {
    id: 8,
    typeId: 3,
    titleEn: 'Square (265 x 265 mm)',
    titleRu: 'Квадратная (265 x 265 мм)',
    value: 'square'
  },
  {
    id: 9,
    typeId: 3,
    titleEn: 'Slim (285 x 240 mm)',
    titleRu: 'Узкая (285 x 265 мм)',
    value: 'slim'
  },
]

const page = [{
    id: 1,
    titleEn: '1 page',
    titleRu: '1 страница',
    value: '1 page'
  },
  {
    id: 2,
    titleEn: '2 pages',
    titleRu: '2 страницы',
    value: '2 pages'
  },
  {
    id: 3,
    titleEn: '3 pages',
    titleRu: '3 страницы',
    value: '3 pages'
  }
]

const corners = [{
    id: 1,
    titleEn: 'Rounded',
    titleRu: 'Скругленные',
    value: 'rounded'
  },
  {
    id: 2,
    titleEn: 'Standart',
    titleRu: 'Стандартные',
    value: 'standart'
  }
]

const orientation = [{
    id: 1,
    titleEn: 'Horizontal',
    titleRu: 'Горизонтальная',
    value: 'horizontal'
  },
  {
    id: 2,
    titleEn: 'Vertical',
    titleRu: 'Вертикальная',
    value: 'vertical'
  }
]

const style = [{
    id: 1,
    titleEn: 'Animals',
    titleRu: 'Животные',
    value: 'animals'
  },
  {
    id: 2,
    titleEn: 'Bold & Colourful',
    titleRu: 'Красочный',
    value: 'colourful'
  },
  {
    id: 3,
    titleEn: 'Business Specific',
    titleRu: 'Для бизнесса',
    value: 'business'
  },
  {
    id: 4,
    titleEn: 'Cultural',
    titleRu: 'Культура',
    value: 'cultural'
  },
  {
    id: 5,
    titleEn: 'Floral',
    titleRu: 'Цветочный',
    value: 'floral'
  },
  {
    id: 6,
    titleEn: 'Folk & rustic',
    titleRu: 'Рустик',
    value: 'folk'
  },
  {
    id: 7,
    titleEn: 'Modern & Simple',
    titleRu: 'Простой и современный',
    value: 'modern'
  },
  {
    id: 8,
    titleEn: 'Patriotic & Military',
    titleRu: 'Патриотический',
    value: 'military'
  },
  {
    id: 9,
    titleEn: 'Patterns & Textures',
    titleRu: 'Узоры и текстуры',
    value: 'textures'
  },
  {
    id: 10,
    titleEn: 'Religious',
    titleRu: 'Религия',
    value: 'religious'
  },
  {
    id: 11,
    titleEn: 'Retro & Vintage',
    titleRu: 'Ретро и винтаж',
    value: 'retro'
  },
  {
    id: 12,
    titleEn: 'Seasonal',
    titleRu: 'Времена года',
    value: 'seasonal'
  },
  {
    id: 13,
    titleEn: 'Sports',
    titleRu: 'Спорт',
    value: 'sports'
  },
  {
    id: 14,
    titleEn: 'Typographical',
    titleRu: 'География',
    value: 'typographical'
  },
  {
    id: 15,
    titleEn: 'Wedding Events',
    titleRu: 'Свадьба',
    value: 'wedding'
  },
]

const colour = [{
    id: 1,
    titleEn: 'Pink',
    titleRu: 'Розовый',
    value: 'pink'
  },
  {
    id: 2,
    titleEn: 'Red',
    titleRu: 'Красный',
    value: 'red'
  },
  {
    id: 3,
    titleEn: 'Orange',
    titleRu: 'Оранжевый',
    value: 'orange'
  },
  {
    id: 4,
    titleEn: 'Yellow',
    titleRu: 'Желтый',
    value: 'yellow'
  },
  {
    id: 5,
    titleEn: 'Green',
    titleRu: 'Зеленый',
    value: 'green'
  },
  {
    id: 6,
    titleEn: 'Blue',
    titleRu: 'Синий',
    value: 'blue'
  },
  {
    id: 7,
    titleEn: 'Purple',
    titleRu: 'Фиолетовый',
    value: 'purple'
  },
  {
    id: 8,
    titleEn: 'Brown',
    titleRu: 'Коричневый',
    value: 'brown'
  },
  {
    id: 9,
    titleEn: 'Cream',
    titleRu: 'Бежевый',
    value: 'cream'
  },
  {
    id: 10,
    titleEn: 'White',
    titleRu: 'Белый',
    value: 'white'
  },
  {
    id: 11,
    titleEn: 'Gray',
    titleRu: 'Серый',
    value: 'gray'
  },
  {
    id: 12,
    titleEn: 'Black',
    titleRu: 'Черный',
    value: 'black'
  },
]

const logo = [{
  id: 1,
  value: 'Own logo/photo'
}]

const premium = [{
  id: 1,
  value: 'premium'
}]

const items = [{
    id: 1,
    title: 'Business card 1',
    typeId: 1,
    size: 1,
    corners: 1,
    orientation: 1,
    style: [1, 3, 5],
    colour: [1, 2, 3],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 0,
    price: 0
  },
  {
    id: 2,
    title: 'Business card 2',
    typeId: 1,
    size: 2,
    corners: 2,
    orientation: 2,
    style: [4, 6, 10],
    colour: [4, 5, 6],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 0,
    price: 0
  },
  {
    id: 3,
    title: 'Business card 3',
    typeId: 1,
    size: 3,
    corners: 2,
    orientation: 1,
    style: [2, 7, 8, 9, 11, 12, 13, 14, 15],
    colour: [7, 8, 9, 10, 11, 12],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 0,
    price: 0
  },
  {
    id: 4,
    title: 'Business card 4',
    typeId: 1,
    size: 2,
    corners: 1,
    orientation: 1,
    style: [1, 3, 5],
    colour: [1, 2, 3],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 0,
    price: 0
  },
  {
    id: 5,
    title: 'Business card 5',
    typeId: 1,
    size: 2,
    corners: 2,
    orientation: 2,
    style: [4, 6, 10],
    colour: [4, 5, 6],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 1,
    price: 15.80
  },
  {
    id: 6,
    title: 'Business card 6',
    typeId: 1,
    size: 3,
    corners: 2,
    orientation: 1,
    style: [2, 7, 8, 9, 11, 12, 13, 14, 15],
    colour: [7, 8, 9, 10, 11, 12],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 1,
    price: 30.60
  },
  {
    id: 7,
    title: 'Business card with logo',
    typeId: 1,
    size: 1,
    corners: 2,
    orientation: 1,
    style: [2, 7, 8, 9, 11, 12, 13, 14, 15],
    colour: [7, 8, 9, 10, 11, 12],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 1,
    premium: 1,
    price: 20.2
  },
  {
    id: 10,
    title: 'Invitation Card 1',
    typeId: 2,
    page: 1,
    size: 4,
    corners: 2,
    orientation: 1,
    style: [2, 7, 8, 9, 11, 12, 13, 14, 15],
    colour: [7, 8, 9, 10, 11, 12],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 1,
    price: 10.5
  },
  {
    id: 11,
    title: 'Invitation Card 2',
    typeId: 2,
    size: 5,
    page: 3,
    corners: 2,
    orientation: 1,
    style: [1, 3, 4],
    colour: [3, 4, 5],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 1,
    price: 19.9
  },
  {
    id: 12,
    title: 'Invitation Card 3',
    typeId: 2,
    size: 6,
    page: 2,
    corners: 2,
    orientation: 1,
    style: [1, 3, 4],
    colour: [3, 4, 5],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 1,
    premium: 1,
    price: 19.9
  },
  {
    id: 13,
    title: 'Invitation Card 4',
    typeId: 2,
    size: 4,
    page: 1,
    corners: 2,
    orientation: 1,
    style: [1, 3, 4],
    colour: [2, 4, 5],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 0,
    price: 0
  },
  {
    id: 14,
    title: 'Presentation Folder 1',
    typeId: 3,
    page: 3,
    size: 7,
    corners: 2,
    orientation: 1,
    style: [1, 3, 4],
    colour: [1, 2, 3, 4, 5],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 1,
    price: 19.9
  },
  {
    id: 15,
    title: 'Presentation Folder 2',
    typeId: 3,
    size: 8,
    page: 2,
    corners: 2,
    orientation: 1,
    style: [1, 3, 4],
    colour: [1, 2, 3, 4, 5],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 1,
    premium: 1,
    price: 19.9
  },
  {
    id: 16,
    title: 'Presentation Folder 3',
    typeId: 3,
    size: 9,
    page: 1,
    corners: 2,
    orientation: 1,
    style: [1, 2, 3, 4, 5],
    colour: [6, 8],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: 0,
    premium: 0,
    price: 0
  },
]

export {
  types,
  size,
  page,
  corners,
  orientation,
  style,
  colour,
  logo,
  premium,
  items
}
