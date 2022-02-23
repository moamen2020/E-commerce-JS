let AllProducts = JSON.parse(localStorage.getItem('products'));
let productID = localStorage.getItem('productId');
let itemDom = document.querySelector('.item-details');
let productDetails = AllProducts.find((item) => item.id == productID)


itemDom.innerHTML = `
  <img src="${productDetails.imageURL}" alt="">
  <h2>title: ${productDetails.title}</h2>
  <p>title: ${productDetails.description}</p>
  <span>size : ${productDetails.size}</span> <br />
  <span>quantity : ${productDetails.qty}</span><br />
  <button class='edit-product' onClick="editProduct(${productDetails.id})">Edit Product</button>
`


// Edit Product
function editProduct(id) {
  localStorage.setItem('editProduct', id)

  window.location = 'editProduct.html'
}