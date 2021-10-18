let userInfo = document.querySelector("#user_info"),
    userDom = document.querySelector("#user"),
    links = document.querySelector("#links"),
    logoutBtn = document.querySelector("#logout");



let userName_local = localStorage.getItem('username');
if (userName_local) {
  links.remove();
  userInfo.style.display = 'flex';
  userDom.innerHTML = userName_local;
}

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = 'register.html'
  }, 1500);
})


// define Products

let prductsDom = document.querySelector('.products');
let cartProductItem = document.querySelector(".carts-products");
let cartProductDiv = document.querySelector(".carts-products div");
let badgeCart = document.querySelector('.badge');
let shoppingCartIcon = document.querySelector('.shoppingCart');

let products = [
  {
    id: 1,
    title: 'HeadPhone',
    imageURL: 'images/headphone.jpg',
    size: 'large'
  },
  {
    id: 2,
    title: 'HeadPhone',
    imageURL: 'images/headphone.jpg',
    size: 'large'
  },
  {
    id: 3,
    title: 'HeadPhone',
    imageURL: 'images/headphone.jpg',
    size: 'large'
  },
  {
    id: 4,
    title: 'HeadPhone',
    imageURL: 'images/headphone.jpg',
    size: 'large'
  },
]

shoppingCartIcon.addEventListener("click", openCartMenu)


function drowProductsUI() {
  let productsUI = products.map((item) => {
    return `
    <div class="product-item">
      <img src="${item.imageURL}" class="product-item-img" alt="HeadPhone Item">
      <div class="product-item-des">
        <h2>${item.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <span>Size : ${item.size}</span>
      </div>
      <div class="product-item-actions">
        <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
        <i class="favorite far fa-heart"></i>
      </div>
    </div>
    `
  }).join('')

  prductsDom.innerHTML = productsUI
}


function addedToCart(id) {
  let choosenItem = products.find( (item) => item.id === id )
  cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`

  let productsLength = document.querySelectorAll('.carts-products div p');
  console.log(productsLength)
  badgeCart.style.display = 'block';
  badgeCart.innerHTML = productsLength.length
}

drowProductsUI();


function openCartMenu() {
  if (cartProductDiv.innerHTML != "") {
    if (cartProductItem.style.display != 'block') {
      cartProductItem.style.display =  'block'
    } else {
      cartProductItem.style.display =  'none'
    }
  }
}
