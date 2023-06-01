const pizza = [
  {
    title: 'Креветки по-азиатски',
    src: 'https://i7.photo.2gis.com/images/branch/38/5348024604702550_bafc.jpg',
    price: '390',
    id: 1,
  },
  {
    title: 'Четыре сезона',
    src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d51fa179760041f0831e63fa21c39402_292x292.webp',
    price: '489',
    id: 2,
  },
  {
    title: 'Чоризо фреш',
    src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/02ca2561953b488993878d1f70e359de_292x292.webp',
    price: '550',
    id: 3,
  },
  {
    title: 'Двойной цыпленок',
    src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_292x292.webp',
    price: '350',
    id: 4,
  },
  {
    title: 'Бургер-пицца',
    src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/3a948b9d5af14d219e2c54282229755a_292x292.webp',
    price: '439',
    id: 5,
  },
  {
    title: 'Песто',
    src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ba58ba9c2a3a4dbda7eb618882d7128d_292x292.webp',
    price: '489',
    id: 6,
  },
  {
    title: 'Пепперони фреш',
    src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_292x292.webp',
    price: '720',
    id: 7,
  },
  {
    title: 'Цыпленок карри',
    src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c8ac7d2eb95b4bd0b8bc2f366415896c_292x292.webp',
    price: '420',
    id: 8,
  },
];

export function getPizzas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pizza);
    }, 1000);
  });
}
