var loginBtn = document.querySelector("#btn-modal-login");
var registerBtn = document.querySelector("#btn-modal-register");

var formLogin = document.querySelector("#form-login");
var emailLogin = formLogin.querySelector("#login-email");
var passwordLogin = formLogin.querySelector("#login-password");
var errEmailLogin = formLogin.querySelector(".err-email");
var errPasswordLogin = formLogin.querySelector(".err-password");

var formRegister = document.querySelector("#form-register");
var fullnameRegister = formRegister.querySelector("#register-fullname");
var emailRegister = formRegister.querySelector("#register-email");
var passwordRegister = formRegister.querySelector("#register-password");
var errFullnameRegister = formRegister.querySelector(".err-fullname");
var errEmailRegister = formRegister.querySelector(".err-email");
var errPasswordRegister = formRegister.querySelector(".err-password");

function getParentElement(element, selector) {
  return element.closest(selector);
}

// Modal content
document.addEventListener("DOMContentLoaded", function () {
  loginBtn.classList.add("active");
  formLogin.classList.add("active");
});

loginBtn.addEventListener("click", function () {
  this.classList.add("active");
  formLogin.classList.add("active");
  registerBtn.classList.remove("active");
  formRegister.classList.remove("active");

  formLogin.reset();
  var eyesBtn = formLogin.querySelector(".btn-eye i");
  if (passwordLogin.type !== "password") {
    eyesBtn.classList.add("fa-eye-slash");
    eyesBtn.classList.remove("fa-eye");
  }
  if (!emailLogin.value) {
    var formGroup = getParentElement(emailLogin, ".form-group");
    formGroup.classList.remove("invalid");
    errEmailLogin.innerHTML = "";
  }
  if (!passwordLogin.value) {
    var formGroup = getParentElement(passwordLogin, ".form-group");
    formGroup.classList.remove("invalid");
    errPasswordLogin.innerHTML = "";
  }
});

registerBtn.addEventListener("click", function () {
  this.classList.add("active");
  formRegister.classList.add("active");

  loginBtn.classList.remove("active");
  formLogin.classList.remove("active");

  formRegister.reset();
  var eyesBtn = formRegister.querySelector(".btn-eye i");
  if (passwordRegister.type !== "password") {
    eyesBtn.classList.add("fa-eye-slash");
    eyesBtn.classList.remove("fa-eye");
  }
  passwordRegister;
  if (!fullnameRegister.value) {
    var formGroup = getParentElement(fullnameRegister, ".form-group");
    formGroup.classList.remove("invalid");
    errFullnameRegister.innerHTML = "";
  }
  if (!emailRegister.value) {
    var formGroup = getParentElement(emailRegister, ".form-group");
    formGroup.classList.remove("invalid");
    errEmailRegister.innerHTML = "";
  }
  if (!passwordRegister.value) {
    var formGroup = getParentElement(passwordRegister, ".form-group");
    formGroup.classList.remove("invalid");
    errPasswordRegister.innerHTML = "";
  }
});
