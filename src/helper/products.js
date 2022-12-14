const products = [{
    id: 1,
    productTypeId: 1,
    price: 50.00,
    product: 'business-cards',
    titleEn: 'Business Cards',
    titleRu: 'Визитная карточка',
    icon: 'mdi-card-account-details-outline',
    color: 'green darken-2',
    iconSrc: require('@/assets/order/Business-card.jpg'),
    briefRu: `Малая некнижная форма печати, традиционный носитель контактной информации о человеке или организации`,
    briefEn: `Cards bearing business information about a company or individual`,
    textEn: `Cards bearing business information about a company or individual. They are 
            shared during formal introductions as a convenience and a memory aid. 
            A business card typically includes the giver's name, company or business 
            affiliation (usually with a logo) and contact information such as street 
            addresses, telephone number(s), e-mail addresses and website.`,
    textRu: `Малая некнижная форма печати, традиционный носитель контактной информации о 
            человеке или организации`,
    options: [1, 3, 4, 5, 6, 7, 8],
    availableOrder: true,
    availableCreate: true,
    orderOrder: 1,
    createOrder: 1
  },
  {
    id: 2,
    productTypeId: 2,
    price: 77.77,
    product: 'invitation-cards',
    titleEn: 'Invitation Cards',
    titleRu: 'Приглашения',
    icon: 'mdi-card-account-details-star-outline',
    color: 'purple darken-2',
    iconSrc: require('@/assets/create/booklet.jpg'),
    briefRu: 'Invitation cards',
    briefEn: 'Приглашения text',
    textEn: `Invitation cards are an important tool for spreading the word about your 
    business – customise yours to advertise an event, product or launch. There are three 
    different types to choose from – standard, special finish or postcard – so you can 
    send your customers a product that stands out from the crowd`,
    textRu: `Приглашения text`,
    options: [1, 2, 3, 4, 5, 6, 7, 8],
    availableOrder: false,
    availableCreate: true,
    orderOrder: 2,
    createOrder: 2
  },
  {
    id: 3,
    productTypeId: 3,
    price: 150.00,
    product: 'presentation-folders',
    titleEn: 'Presentation Folders',
    titleRu: 'Буклеты',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/placeholder.jpg'),
    briefRu: `В форме  издаются краткие путеводители, рекламные проспекты, программы публичных мероприятий и т. п.`,
    briefEn: `В форме буклета издаются краткие путеводители, рекламные проспекты, программы публичных мероприятий и т. п.`,
    textEn: `A sheet, as a rule, with two or three folds, folded in various ways, for 
            example: in half, accordion, delta-shaped or in any other way that emphasizes 
            the individuality of the promotional product.
            In the form of a booklet, short guides, advertising brochures, programs of 
            public events, etc. are published`,
    textRu: `Лист, как правило, с двумя или тремя фальцами, сложенный всевозможными способами,
            например: пополам, гармошкой, дельтообразно или любым другим способом, подчёркивающим 
            индивидуальность рекламного продукта. В форме буклета издаются краткие путеводители, 
            рекламные проспекты, программы публичных мероприятий и т. п.`,
    options: [1, 2, 3, 4, 5, 6, 7, 8],
    availableOrder: true,
    availableCreate: true,
    orderOrder: 3,
    createOrder: 3
  },
  {
    id: 4,
    productTypeId: 4,
    price: 250.00,
    product: 'badges',
    titleEn: 'Badge',
    titleRu: 'Бейдж',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/Badge.jpg'),
    briefRu: `Элемент униформы, амуниции, в виде нагрудного знака, наклейки, карточки`,
    briefEn: `Элемент униформы, амуниции, в виде нагрудного знака, наклейки, карточки`,
    textEn: `Element of uniform, ammunition, in the form of a badge, sticker, card, 
            designed to provide information about its wearer`,
    textRu: `Элемент униформы, амуниции, в виде нагрудного знака, наклейки, карточки, 
            предназначенный для предоставления информации о его носителе`,
    options: [1, 3, 4, 5, 6, 7],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 4,
    createOrder: 4
  },
  {
    id: 5,
    productTypeId: 5,
    price: 350.00,
    product: 'doorhangers',
    titleEn: 'Doorhanger',
    titleRu: 'Дорхенгеры',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/Doorhanger.jpg'),
    briefRu: `Картонный крючок с рекламной информацией, которая вешается на ручку двери`,
    briefEn: `A door hanger is a plastic or cardboard sign, cut to hang from the handle or knob of a door`,
    textEn: `A door hanger is a plastic or cardboard sign, generally rectangular in shape, 
          cut to hang from the handle or knob of a door. They are sometimes used to 
          distribute print advertising to residences`,
    textRu: `Картонный крючок с рекламной информацией, которая вешается на ручку двери`,
    options: [1, 3, 4, 5, 6, 7],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 5,
    createOrder: 5
  },
  {
    id: 6,
    productTypeId: 6,
    price: 40.00,
    product: 'brochures',
    titleEn: 'Brochure',
    titleRu: 'Брошюры',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/brochure.jpg'),
    briefRu: `Непериодическое печатное издание объемом 4-48 страниц, состоящее из двух основных элементов: блока и обложки`,
    briefEn: `A non-periodical printed edition of 4-48 pages, consisting of two main 
            elements: a block and a cover`,
    textEn: `A non-periodical printed edition of 4-48 pages, consisting of two main 
          elements: a block and a cover, and fastened together with sewing, a paper clip, 
          thread or rope, and so on`,
    textRu: `Непериодическое печатное издание объемом 4-48 страниц, состоящее из двух 
          основных элементов: блока и обложки, и скрепленных между собой при помощи шитья, 
          скрепкой, ниткой или верёвкой и так далее.`,
    options: [1, 3, 4, 5, 6, 7],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 6,
    createOrder: 6
  },
  {
    id: 7,
    productTypeId: 7,
    price: 50.00,
    product: 'calendars',
    titleEn: 'Calendar',
    titleRu: 'Календарь',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/calendar.jpg'),
    briefRu: `Незаменимый полиграфический сувенир для партнеров и клиентов, а также важный рабочий инструмент для менеджеров, кадровиков и бухгалтеров`,
    briefEn: `A periodical containing a sequential list of days, weeks, months of a given year`,
    textEn: `A periodical containing a sequential list of days, weeks, months of a given 
            year. An irreplaceable printing souvenir for partners and clients, as well as 
            an important working tool for managers, personnel officers and accountants`,
    textRu: `Периодическое издание, содержащее последовательный перечень дней, недель, месяцев данного года. 
            Незаменимый полиграфический сувенир для партнеров и клиентов, а также важный рабочий инструмент для менеджеров, кадровиков и бухгалтеров`,
    options: [1, 3, 4, 5, 6, 7],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 7,
    createOrder: 7
  },
  {
    id: 8,
    productTypeId: 8,
    price: 59.00,
    product: 'vouchers',
    titleEn: 'Gift voucher',
    titleRu: 'Подарочный сертификат',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/gift-voucher.jpg'),
    briefRu: `Обычно картонная или пластиковая карта, которая несет в себе некоторый эквивалент стоимости в валюте`,
    briefEn: `Usually a cardboard (certificate) or plastic card that carries some equivalent value in the currency`,
    textEn: `Usually a cardboard (certificate) or plastic card that carries some equivalent value in the currency accepted in the country of issue`,
    textRu: `Обычно картонная (сертификат) или пластиковая карта, которая несет в себе некоторый эквивалент стоимости в валюте, принятой в стране эмитента.`,
    options: [1, 3, 4, 5, 6, 7],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 8,
    createOrder: 8
  },
  {
    id: 9,
    productTypeId: 9,
    price: 750.00,
    product: 'flyers',
    titleEn: 'Flyer',
    titleRu: 'Листовка',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/listovka.jpg'),
    briefRu: `Издание в виде одного листа печатного материала, с одним сгибом или без сгибов`,
    briefEn: `Издание в виде одного листа печатного материала, с одним сгибом или без сгибов`,
    textEn: 'Flyer text',
    textRu: `Издание в виде одного листа печатного материала, с одним сгибом или без сгибов.`,
    options: [1, 3, 4, 5, 6, 7],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 9,
    createOrder: 9
  },
  {
    id: 10,
    productTypeId: 10,
    price: 99.99,
    product: 'tags-and-labels',
    titleEn: 'Tag and label',
    titleRu: 'Стикер и бирка',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/tag-label-sticker.jpg'),
    briefRu: `Графический или текстовый знак, нанесённый в виде наклейки, бирки или талона на товар, экспонат, любой другой продукт производства`,
    briefEn: `A graphic or text sign applied in the form of a sticker, tag or coupon on a product, exhibit, any other product of production`,
    textEn: `A graphic or text sign applied in the form of a sticker, tag or coupon on a product, exhibit, any other product of production, indicating the manufacturer's trademark, name, production date, expiration date, and so on`,
    textRu: `Графический или текстовый знак, нанесённый в виде наклейки, бирки или талона на товар, экспонат, любой другой продукт производства, с указанием торговой марки производителя, названия, даты производства, срока годности и так далее`,
    options: [1, 3, 4, 5, 6, 7],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 10,
    createOrder: 10
  },
  {
    id: 11,
    productTypeId: 11,
    price: 77.00,
    product: 'leaflet',
    titleEn: 'Leaflet',
    titleRu: 'Лифлет',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/leaflet.jpg'),
    briefRu: `Издание в виде одного листа печатного материала, с одним сгибом или без сгибов`,
    briefEn: `Edition in the form of a single sheet of printed material, with or without a fold`,
    textEn: `Edition in the form of a single sheet of printed material, with or without a fold`,
    textRu: `Издание в виде одного листа печатного материала, с одним сгибом или без сгибов`,
    options: [1, 2, 3, 4, 5, 6, 7, 8],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 11,
    createOrder: 11
  },
  {
    id: 12,
    productTypeId: 12,
    price: 101.00,
    product: 'advertising',
    titleEn: 'Outdoor advertising',
    titleRu: 'Наружная реклама',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/Shtender.jpg'),
    briefRu: `Билборды, и т.д.`,
    briefEn: `Billboards, supersites, firewalls, panel-brackets, pointer, stellas, pavement signs and outdoor banners`,
    textEn: `Billboard. The most common form is in the form of a large shield 6x3 m. It is placed along roads and highways, usually has a backlight.
          City format. Luminous box 1.2 x 1.8 m. Also installed along city roads.
          City board. Same as format but twice the size of 2.7m x 3.7m.
          Supersite - a three-sided structure on a high support measuring 15 x 5 m, 12 x 3 m, 12 x 4 m. Usually installed near large stores.
          Firewall - a billboard with advertising on the walls of buildings. Sizes vary, from small to large, depending on the area.
          Panel-bracket - a medium-sized box illuminated from the inside, attached to the wall.
          Pointer. Advertising placed on road signs
          Stella - an advertising structure to indicate the location, for example, a cafe, a canteen, etc. Placed along highways, sometimes near the entrance to the office.
          Pavement sign is a portable outdoor advertising structure, which is installed on the street in close proximity to the advertiser.
          Outdoor banners`,
    textRu: `Издание в виде одного листа печатного материала, с одним сгибом или без сгибов`,
    options: [1, 2, 3, 4, 5, 6, 7, 8],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 12,
    createOrder: 12
  },
  {
    id: 13,
    productTypeId: 13,
    price: 101.00,
    product: 'Press wall',
    titleEn: 'Press wall',
    titleRu: 'Бренд-волл',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/placeholder.jpg'),
    briefRu: `Натянутый на каркас баннер для проведения мероприятий и презентаций`,
    briefEn: `A banner stretched over a frame, which is designed to decorate the interior during an event`,
    textEn: `A banner stretched over a frame, which is designed to decorate the interior 
            during an event (press conference, exhibition, presentation, show, ceremony, 
            and so on). The information on such a banner has an advertising, presentational
            or simply informative character`,
    textRu: `Баннер, натянутый на каркас, который предназначен для оформления интерьера 
            при проведении какого-либо события (пресс-конференции, выставки, презентации,
            показа, церемонии и так далее). Информация на таком баннере имеет рекламный, 
            презентационный или просто информативный характер`,
    options: [1, 2, 3, 4, 5, 6, 7, 8],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 13,
    createOrder: 13
  },
  {
    id: 14,
    productTypeId: 14,
    price: 10.00,
    product: 'Press wall',
    titleEn: 'Souvenir products',
    titleRu: 'Сувенирная продукция',
    icon: 'mdi-id-card',
    color: 'orange darken-2',
    iconSrc: require('@/assets/order/placeholder.jpg'),
    briefRu: `Блокноты, кружки, ручки и карандаши с печатью, ежедневники с нанесением, 
          флажки, флаги, значки, магниты, футболки, пакеты`,
    briefEn: `Notebooks, mugs, printed pens and pencils, diaries with drawing, flags, 
          badges, magnets, T-shirts, packages`,
    textEn: `Notebooks, mugs, printed pens and pencils, diaries with drawing, flags, 
          badges, magnets, T-shirts, packages`,
    textRu: `Блокноты, кружки, ручки и карандаши с печатью, ежедневники с нанесением, 
          флажки, флаги, значки, магниты, футболки, пакеты`,
    options: [1, 2, 3, 4, 5, 6, 7, 8],
    availableOrder: true,
    availableCreate: false,
    orderOrder: 14,
    createOrder: 14
  },
]

const options = [{
    id: 1,
    name: 'size',
    titleEn: 'Size',
    titleRu: 'Размер',
    type: 'radiobutton',
    required: 0
  },
  {
    id: 2,
    name: 'page',
    titleEn: 'Pages',
    titleRu: 'Количество страниц',
    type: 'radiobutton',
    required: 0
  },
  {
    id: 3,
    name: 'corners',
    titleEn: 'Corners',
    titleRu: 'Углы',
    type: 'radiobutton',
    required: 0
  },
  {
    id: 4,
    name: 'orientation',
    titleEn: 'Orientation',
    titleRu: 'Ориентация',
    type: 'radiobutton',
    required: 0
  },
  {
    id: 5,
    name: 'style',
    titleEn: 'Style',
    titleRu: 'Стили',
    type: 'checkboxes',
    required: 0
  },
  {
    id: 6,
    name: 'colour',
    titleEn: 'Colour',
    titleRu: 'Цвета',
    type: 'checkboxes',
    required: 0
  },
  {
    id: 7,
    name: 'logo',
    titleEn: 'Logo/photo area',
    titleRu: 'Логотип или фото',
    type: 'checkbox',
    required: 0
  },
  {
    id: 8,
    name: 'premium',
    titleEn: 'Premium',
    titleRu: 'Премиум',
    type: 'checkbox',
    required: 0,
    hideForOrder: true
  },
]



export {
  products,
  options,
}
