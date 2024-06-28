var loginBtn = document.querySelector("#btn-modal-login");
var registerBtn = document.querySelector("#btn-modal-register");
var formLogin = document.querySelector("#form-login");
var formRegister = document.querySelector("#form-register");

// Modal content
document.addEventListener("DOMContentLoaded", function () {
  loginBtn.classList.add("active");
  formLogin.classList.add("active");
});

loginBtn.addEventListener("click", function () {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  formLogin.classList.add("active");
  formRegister.classList.remove("active");
});

registerBtn.addEventListener("click", function () {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  formRegister.classList.add("active");
  formLogin.classList.remove("active");
});
