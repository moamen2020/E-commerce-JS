let productsDB = [
  {
    id: 1,
    title: 'headPhone',
    imageURL: 'images/headphone.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur',
    size: 'large',
    qty: 1,
    isMe: 'N',
    liked: false
  },
  {
    id: 2,
    title: 'laptop',
    imageURL: 'images/headphone.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur',
    size: 'large',
    qty: 1,
    isMe: 'N',
    liked: false
  },
  {
    id: 3,
    title: 'phone',
    imageURL: 'images/headphone.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur',
    size: 'large',
    qty: 1,
    isMe: 'N',
    liked: false
  },
  {
    id: 4,
    title: 'computer',
    imageURL: 'images/headphone.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur',
    size: 'large',
    qty: 1,
    isMe: 'N',
    liked: false
  },
]


localStorage.setItem('products' , JSON.stringify(productsDB))