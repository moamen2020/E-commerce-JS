let username = document.querySelector('#username'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    registerBtn = document.querySelector('#sign_up');


registerBtn.addEventListener('click', register)


function register(e) {
  e.preventDefault();
  if (username.value === '' || email.value === '' || password.value === '') {
    alert("Please Fill Data")
  } else {
    localStorage.setItem('username', username.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)

    setTimeout(()=> {
    window.location = "login.html"
  },1500 )
  }
}
