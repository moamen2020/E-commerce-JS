let prductsDom = document.querySelector('.products');


function drowFavouritesProductUI( allProducts = [] ) {

  let products = JSON.parse(localStorage.getItem('productsFavourite')) || allProducts;

  let productsUI = products.map((item) => {
    return `
    <div class="product-item">
      <img src="${item.imageURL}" class="product-item-img" alt="HeadPhone Item">
      <div class="product-item-des">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <span>Size : ${item.size}</span> <br/>
        <span>Quantaty : ${item.qty}</span>
      </div>
      <div class="product-item-actions">
        <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Favourit</button>
      </div>
    </div>
    `
  }).join('')

  prductsDom.innerHTML = productsUI;
  badgeCart.style.display = 'block';
  badgeCart.innerHTML = products.length
  
}

drowFavouritesProductUI();


function removeItemFromCart(id) {
  if (localStorage.getItem('productsFavourite')) {
    let items = JSON.parse(localStorage.getItem('productsFavourite'));

    let filteredItems = items.filter( item => item.id !== id)
    localStorage.setItem('productsFavourite', JSON.stringify(filteredItems));
    drowFavouritesProductUI(filteredItems);

  }
}