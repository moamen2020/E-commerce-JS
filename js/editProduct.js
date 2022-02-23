// // Variables
let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let productId = JSON.parse(localStorage.getItem('editProduct'));
let getProduct = products.find(i => i.id === productId);
console.log("Befor update", getProduct);

let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let productSizeValue;
let updateForm = document.getElementById('update-form');
let inputFile = document.getElementById('upload-image-file');
let uploadImageURL;




productName.value = getProduct.title;
productDesc.value = getProduct.description;
productSizeSelect.value = getProduct.size;
uploadImageURL = getProduct.imageURL;




// // Eventa
productSizeSelect.addEventListener('change', getProductSizeValue);
updateForm.addEventListener('submit', updateProductFun);
inputFile.addEventListener('change', uploadImage);



// Functions
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}


function updateProductFun(e) {
  e.preventDefault();

  getProduct.title = productName.value;
  getProduct.desc = productDesc.value;
  getProduct.size = productSizeSelect.value;
  getProduct.imageURL = uploadImageURL;

  console.log("after update", getProduct);
  
  localStorage.setItem('products', JSON.stringify(products));

  console.log(localStorage.getItem('products'));


    setTimeout(() => {
      window.location = 'index.html';
    }, 800);

}


function uploadImage() {

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploadImageURL = reader.result;
  });
  reader.readAsDataURL(this.files[0])
}


