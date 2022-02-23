// Get Data Form LocalStorage
let userName = localStorage.getItem('username');
let email = localStorage.getItem('email');
let products = JSON.parse(localStorage.getItem('products')) || productsDB
let myProducts = products.filter((i) => i.isMe === "Y")


// Variables
let user = document.querySelector('#username');
let userEmail = document.querySelector('#email');
let productsLength = document.querySelector('.products-length span');


user.innerHTML = userName;
userEmail.innerHTML = email;
productsLength.innerHTML = myProducts.length;