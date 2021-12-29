let prductsDom = document.querySelector('.products');
let badgeCart = document.querySelector('.badge');


function drowCartProductUI( allProducts = [] ) {

  let products = JSON.parse(localStorage.getItem('productsincart')) || allProducts;

  let productsUI = products.map((item) => {
    return `
    <div class="product-item">
      <img src="${item.imageURL}" class="product-item-img" alt="HeadPhone Item">
      <div class="product-item-des">
        <h2>${item.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <span>Size : ${item.size}</span> <br/>
        <span>Quantaty : ${item.qty}</span>
      </div>
      <div class="product-item-actions">
        <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
      </div>
    </div>
    `
  }).join('')

  prductsDom.innerHTML = productsUI;
  badgeCart.style.display = 'block';
  badgeCart.innerHTML = products.length
  
}

drowCartProductUI();


function removeItemFromCart(id) {
  if (localStorage.getItem('productsincart')) {
    let items = JSON.parse(localStorage.getItem('productsincart'));

    let filteredItems = items.filter( item => item.id !== id)
    drowCartProductUI(filteredItems);

    localStorage.setItem('productsincart', JSON.stringify(filteredItems));
    drowCartProductUI(filteredItems);

  }
}