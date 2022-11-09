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

const sizes = [{
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

const orientations = [{
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

const styles = [{
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

const colours = [{
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

const items = [{
    id: 1,
    title: 'Business card 1',
    typeId: 1,
    size: 1,
    corners: 1,
    orientation: 1,
    styles: [1, 3, 5],
    colours: [1, 2, 3],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: false
  },
  {
    id: 2,
    title: 'Business card 2',
    typeId: 1,
    size: 2,
    corners: 2,
    orientation: 2,
    styles: [4, 6, 10],
    colours: [4, 5, 6],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: false
  },
  {
    id: 3,
    title: 'Business card 3',
    typeId: 1,
    size: 3,
    corners: 2,
    orientation: 1,
    styles: [2, 7, 8, 9, 11, 12, 13, 14, 15],
    colours: [7, 8, 9, 10, 11, 12],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: false
  },
  {
    id: 4,
    title: 'Business card 4',
    typeId: 1,
    size: 2,
    corners: 1,
    orientation: 1,
    styles: [1, 3, 5],
    colours: [1, 2, 3],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: false
  },
  {
    id: 5,
    title: 'Business card 5',
    typeId: 1,
    size: 2,
    corners: 2,
    orientation: 2,
    styles: [4, 6, 10],
    colours: [4, 5, 6],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: false
  },
  {
    id: 6,
    title: 'Business card 6',
    typeId: 1,
    size: 3,
    corners: 2,
    orientation: 1,
    styles: [2, 7, 8, 9, 11, 12, 13, 14, 15],
    colours: [7, 8, 9, 10, 11, 12],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: false
  },
  {
    id: 7,
    title: 'Business card with logo',
    typeId: 1,
    size: 1,
    corners: 2,
    orientation: 1,
    styles: [2, 7, 8, 9, 11, 12, 13, 14, 15],
    colours: [7, 8, 9, 10, 11, 12],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: true,
  },
  {
    id: 10,
    title: 'Invitation Card',
    typeId: 2,
    size: 3,
    corners: 2,
    orientation: 1,
    styles: [2, 7, 8, 9, 11, 12, 13, 14, 15],
    colours: [7, 8, 9, 10, 11, 12],
    src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
    logo: false
  },
]

export {
  types,
  sizes,
  corners,
  orientations,
  styles,
  colours,
  items
}
