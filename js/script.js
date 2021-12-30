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
        <i class="favorite far fa-heart" style="color: ${item.liked === true ? 'red' : ''}" onclick="addedToFavourite(${item.id})"></i>
      </div>
    </div>
    `
  }).join('')

  prductsDom.innerHTML = productsUI
})(JSON.parse(localStorage.getItem('products')));


// Check Items in LoackStorage
let addedItem = localStorage.getItem('productsincart') ? JSON.parse(localStorage.getItem('productsincart')) : []

if (addedItem) {

    addedItem.map(item => {
    cartProductDiv.innerHTML += `<p>${item.title} ${item.qty} </p>`
  })

  badgeCart.style.display = 'block';
  badgeCart.innerHTML += addedItem.length
}


// Add To Cart

let allItems = [];
function addedToCart(id) {
  
  if (localStorage.getItem('username')) {
    let choosenItem = products.find((item) => item.id === id );
    let item = allItems.find((i) => i.id === choosenItem.id);
    if (item) {
      choosenItem.qty += 1
    } else {
      allItems.push(choosenItem)
    }

    cartProductDiv.innerHTML = '';
    allItems.forEach(item => {
      cartProductDiv.innerHTML += `<p>${item.title} ${item.qty}</p>`;
      
    });



    addedItem = [...addedItem, choosenItem];

    let uniqueProducts = getUniqueArr(addedItem, 'id')
    localStorage.setItem('productsincart', JSON.stringify(uniqueProducts));

    let productsLength = document.querySelectorAll('.carts-products div p');
    badgeCart.style.display = 'block';
    badgeCart.innerHTML = productsLength.length;

  } else {
    window,location = 'login.html'
  }

}

function getUniqueArr (array, filterType) {
  let unique = array
  .map((item) => item[filterType])
  .map((ele, index, finalArr) => finalArr.indexOf(ele) === index && index)
  .filter((item) => array[item])
  .map((item) => array[item])
  return unique;
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



// Add To Favourite

let favouriteItems = localStorage.getItem('productsFavourite') 
? JSON.parse(localStorage.getItem('productsFavourite')) : []


function addedToFavourite(id) {

  if (localStorage.getItem('username')) {

    let choosenItem = products.find((item) => item.id === id );
    choosenItem.liked = true;
    favouriteItems = [...favouriteItems, choosenItem];
    let uniqueProducts = getUniqueArr(favouriteItems, 'id')
    localStorage.setItem('productsFavourite', JSON.stringify(uniqueProducts));
    products.map((item) => {
      if (item.id === choosenItem.id) {
        item.liked = true;
      }
    });
    localStorage.setItem('products', JSON.stringify(products));
    drowProductsUI(products);
  } else {
    window,location = 'login.html'
  }

}