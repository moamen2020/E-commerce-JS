let prductsDom = document.querySelector('.products');
let cartProductItem = document.querySelector(".carts-products");
let cartProductDiv = document.querySelector(".carts-products div");
let badgeCart = document.querySelector('.badge');
let shoppingCartIcon = document.querySelector('.shoppingCart');

// database
let products = JSON.parse(localStorage.getItem('products'));

shoppingCartIcon.addEventListener("click", openCartMenu);

let drowProductsUI;
(drowProductsUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
    <div class="product-item">
      <a onclick="detailsCart(${item.id})"><img src="${item.imageURL}" class="product-item-img" alt="HeadPhone Item"></a>
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
})(JSON.parse(localStorage.getItem('products')));

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

function detailsCart(id) {
  localStorage.setItem('productId', id);
  window.location = 'cartDetails.html';
}






// Search function

let input_search = document.getElementById('search');

input_search.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    search(e.target.value, JSON.parse(localStorage.getItem('products')))

    if (e.target.value.trim() === '') {
      drowProductsUI(JSON.parse(localStorage.getItem('products')))
    }
  }
})


function search(title, myArray) {
  
  // for (let i = 0; i < myArray.length; i++) {
  //   if (myArray[i].title === title) {
  //     console.log(myArray[i]);
  //   }
  // }

  let arr = myArray.filter((item) => item.title.indexOf(title) !== -1 )
  drowProductsUI(arr)
}
