let productsDB = [
  {
    id: 1,
    title: 'headPhone',
    imageURL: 'images/headphone.jpg',
    size: 'large',
    qty: 1
  },
  {
    id: 2,
    title: 'laptop',
    imageURL: 'images/headphone.jpg',
    size: 'large',
    qty: 1
  },
  {
    id: 3,
    title: 'phone',
    imageURL: 'images/headphone.jpg',
    size: 'large',
    qty: 1
  },
  {
    id: 4,
    title: 'computer',
    imageURL: 'images/headphone.jpg',
    size: 'large',
    qty: 1
  },
]


localStorage.setItem('products' , JSON.stringify(productsDB))