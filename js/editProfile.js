// Get Data Form LocalStorage
let userName = localStorage.getItem('username');
let email = localStorage.getItem('email');


// Variables
let nameProfile = document.querySelector('#name');
let emailProfile = document.querySelector('#email');
let updateProfile = document.getElementById('edit-profile-form');

nameProfile.value = userName;
emailProfile.value = email;



updateProfile.addEventListener('submit', updateNameEmail);


function updateNameEmail(e) {
  e.preventDefault();

  localStorage.setItem('username', nameProfile.value);
  localStorage.setItem('email', emailProfile.value);

  setTimeout(() => {
    window.location = 'profile.html';
  }, 800);

}
