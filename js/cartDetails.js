let AllProducts = JSON.parse(localStorage.getItem('products'));
let productID = localStorage.getItem('productId');
let itemDom = document.querySelector('.item-details');
let productDetails = AllProducts.find((item) => item.id == productID)

console.log(productDetails);

itemDom.innerHTML = `
  <img src="${productDetails.imageURL}" alt="">
  <h2>title: ${productDetails.title}</h2>
  <span>size : ${productDetails.size}</span> <br />
  <span>quantity : ${productDetails.qty}</span>
`