let productsDB = [
  {
    id: 1,
    title: 'headPhone',
    imageURL: 'images/headphone.jpg',
    size: 'large'
  },
  {
    id: 2,
    title: 'laptop',
    imageURL: 'images/headphone.jpg',
    size: 'large'
  },
  {
    id: 3,
    title: 'phone',
    imageURL: 'images/headphone.jpg',
    size: 'large'
  },
  {
    id: 4,
    title: 'computer',
    imageURL: 'images/headphone.jpg',
    size: 'large'
  },
]


localStorage.setItem('products' , JSON.stringify(productsDB))