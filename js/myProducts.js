let prductsDom = document.querySelector('.products');
let noProducts = document.querySelector('.noProducts')

// Display Products
let drowProductsUI;
(drowProductsUI = function (products = []) {
  let myProducts = products.filter((item) => item.isMe === "Y")
  if(myProducts) {
    let productsUI = myProducts.map((item) => {
      return `
      <div class="product-item" style="border: ${item.isMe === "Y" ? "2px solid black" : "2px solid red"}" >
        <a onclick="detailsCart(${item.id})"><img src="${item.imageURL}" class="product-item-img" alt="HeadPhone Item"></a>
        <div class="product-item-des">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <span>Size : ${item.size}</span>

          <button class='edit-product' onClick='editProduct(${item.id})'>Edit Product</button>
          <button class='delete-product' onClick='deleteProduct(${item.id})'>Delete Product</button>
        </div>
      </div>
      `
    }).join('')
    prductsDom.innerHTML = productsUI
  }
  
  if(myProducts.length === 0) {
    console.log("no Products", noProducts);
    noProducts.innerHTML = "No Products !!"
  }

})(JSON.parse(localStorage.getItem('products')) || productsDB);


// Edit Product
function editProduct(id) {
  localStorage.setItem('editProduct', id)
  window.location = 'editProduct.html'
}


// Delete Product
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem('products')) || productsDB;
  let myProducts = products.filter((item) => item.isMe === "Y")
  let filtered = myProducts.filter(i => i.id !== id);

  let clickedItem = myProducts.find(i => i.id === id)
  products = products.filter(i => i.id !== clickedItem.id)
  localStorage.setItem('products', JSON.stringify(products))
  drowProductsUI(filtered)
}
