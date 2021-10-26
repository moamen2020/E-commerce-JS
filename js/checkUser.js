let userInfo = document.querySelector("#user_info"),
    userDom = document.querySelector("#user"),
    links = document.querySelector("#links"),
    logoutBtn = document.querySelector("#logout");



let userName_local = localStorage.getItem('username');
if (userName_local) {
  links.remove();
  userInfo.style.display = 'flex';
  userDom.innerHTML = userName_local;
}

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = 'register.html'
  }, 1500);
})

