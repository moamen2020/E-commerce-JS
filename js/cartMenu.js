let cartProductDiv = document.querySelector(".carts-products div");
let badgeCart = document.querySelector('.badge');
let cartProductItem = document.querySelector(".carts-products");
let shoppingCartIcon = document.querySelector('.shoppingCart');

shoppingCartIcon.addEventListener("click", openCartMenu);


// Check Items in LoackStorage
let addedItem = localStorage.getItem('productsincart') ? JSON.parse(localStorage.getItem('productsincart')) : [];
if (addedItem) {

  addedItem.map(item => {
    cartProductDiv.innerHTML += `<p>${item.title} ${item.qty} </p>`;
  });

  badgeCart.style.display = 'block';
  badgeCart.innerHTML += addedItem.length;
}


// Open Cart Menu
function openCartMenu() {
  if (cartProductDiv.innerHTML != "") {
    if (cartProductItem.style.display != 'block') {
      cartProductItem.style.display =  'block'
    } else {
      cartProductItem.style.display =  'none'
    }
  }
}
