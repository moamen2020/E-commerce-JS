let prductsDom = document.querySelector('.products');

// database
let products = JSON.parse(localStorage.getItem('products'));
console.log(products);


let drowProductsUI;
(drowProductsUI = function (products) {
  let productsUI = products.map((item) => {
    return `
    <div class="product-item" style="border: ${item.isMe === "Y" ? "2px solid black" : "2px solid red"}" >
      <a onclick="detailsCart(${item.id})"><img src="${item.imageURL}" class="product-item-img" alt="HeadPhone Item"></a>
      <div class="product-item-des">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <span>Size : ${item.size}</span>

        ${item.isMe === "Y" ? "<button class='edit-product' onClick='editProduct(" + item.id + ")'>Edit Product</button>" : ""}
      </div>
      <div class="product-item-actions">
        <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
        <i class="favorite far fa-heart" onclick="addedToFavourite(${item.id})" style="color: ${item.liked === true ? 'red' : ''}"></i>
      </div>
    </div>
    `
  }).join('')

  prductsDom.innerHTML = productsUI
})(JSON.parse(localStorage.getItem('products')));


// Add To Cart
function addedToCart(id) {
  
  if (localStorage.getItem('username')) {
    let products = JSON.parse(localStorage.getItem('products')) || products;
    let product = products.find((item) => item.id === id );
    let isProductInCart = addedItem.some((i) => i.id === product.id);
    if (isProductInCart) {
      addedItem.map(p => {
        if(p.id === product.id) p.qty += 1;
        return p
      })
    } else {
      addedItem.push(product)
    }

    cartProductDiv.innerHTML = '';
    addedItem.forEach(item => {
      cartProductDiv.innerHTML += `<p>${item.title} <span class='item-qty'>${item.qty}</span></p>`;
      
    });



    // Save Data
    localStorage.setItem('productsincart', JSON.stringify(addedItem));

    // Add Counter of Items
    let productsLength = document.querySelectorAll('.carts-products div p');
    badgeCart.style.display = 'block';
    badgeCart.innerHTML = productsLength.length;

  } else {
    window.location = 'login.html'
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

  let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 )
  drowProductsUI(arr)
}


// Add To Favourite
let favouriteItems = localStorage.getItem('productsFavourite') 
? JSON.parse(localStorage.getItem('productsFavourite')) : [];
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
    window.location = 'login.html'
  }
}



// Filter Products By Size
let sizeFilter = document.getElementById('size-filter');

sizeFilter.addEventListener('change', getProductsFilteredBySize);


function getProductsFilteredBySize(e) {
  let value = e.target.value;
  let products = JSON.parse(localStorage.getItem('products')) || products;

  if(value === 'all') {
    drowProductsUI(products);
  }else {
    products = products.filter(i => i.size === value)
    drowProductsUI(products);
  }
}


// Edit Product
function editProduct(id) {
  localStorage.setItem('editProduct', id)

  window.location = 'editProduct.html'
}