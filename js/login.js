let username = document.querySelector('#username'),
    password = document.querySelector('#password'),
    registerBtn = document.querySelector('#sign_in');


let getUser = localStorage.getItem('username');
let getPassword = localStorage.getItem('password');

registerBtn.addEventListener('click', login)


 function login(e) {
  e.preventDefault();
  if (username.value === '' || password.value === '') {
    alert("Please Fill Data")
  } else {
    if ((getUser && getUser.trim() === username.value.trim() ) && (getPassword && getPassword === password.value)) {
      setTimeout(() => {
        window.location = 'index.html'
      }, 1500);
    } else {
      console.log('username or password is wrong !!')
    }
  }
}
