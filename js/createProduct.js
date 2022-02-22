// Variables

let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let productSizeValue;
let createForm = document.getElementById('create-form');
let inputFile = document.getElementById('upload-image-file');
let uploadImageURL;


// Eventa
productSizeSelect.addEventListener('change', getProductSizeValue);
createForm.addEventListener('submit', createProductFun);
inputFile.addEventListener('change', uploadImage);



// Functions
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}


function createProductFun(e) {
  e.preventDefault;
  let allProducts = JSON.parse(localStorage.getItem('products')) || productsDB; 
  let nameValue = productName.value;
  let descValue = productDesc.value;

  if (nameValue && descValue) {
    
    let product = {
      id: (allProducts ? allProducts.length + 1  : 1) ,
      title: nameValue,
      imageURL: uploadImageURL,
      size: productSizeValue,
      description: descValue,
      qty: 1
    };
  
    let newProducts = (allProducts ? [...allProducts, product] : [product]) ;
    localStorage.setItem('products', JSON.stringify(newProducts));
  
    nameValue = "";
    descValue = "";
    productSizeSelect.value = ""

    setTimeout(() => {
      window.location = 'index.html';
    }, 800);

  } else {
    alert("Enter Data ...")
  }

}


function uploadImage() {

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploadImageURL = reader.result;
  });
  reader.readAsDataURL(this.files[0])
}
