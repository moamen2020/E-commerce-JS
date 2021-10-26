let prductsDom = document.querySelector('.products');
let cartProductItem = document.querySelector(".carts-products");
let cartProductDiv = document.querySelector(".carts-products div");
let badgeCart = document.querySelector('.badge');
let shoppingCartIcon = document.querySelector('.shoppingCart');

shoppingCartIcon.addEventListener("click", openCartMenu);


(function drowProductsUI() {
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
})();

let addedItem = localStorage.getItem('productsincart') ? JSON.parse(localStorage.getItem('productsincart')) : []

if (addedItem) {
addedItem.map(item => {
cartProductDiv.innerHTML += `<p>${item.title}</p>`
})

badgeCart.style.display = 'block';
badgeCart.innerHTML += addedItem.length
}

function addedToCart(id) {
  
  if (localStorage.getItem('username')) {
    let choosenItem = products.find( (item) => item.id === id )
    cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;

    addedItem = [...addedItem, choosenItem];
    localStorage.setItem('productsincart', JSON.stringify(addedItem));

    let productsLength = document.querySelectorAll('.carts-products div p');
    console.log(productsLength)
    badgeCart.style.display = 'block';
    badgeCart.innerHTML = productsLength.length;

  } else {
    window,location = 'login.html'
  }

}

function openCartMenu() {
  if (cartProductDiv.innerHTML != "") {
    if (cartProductItem.style.display != 'block') {
      cartProductItem.style.display =  'block'
    } else {
      cartProductItem.style.display =  'none'
    }
  }
}

