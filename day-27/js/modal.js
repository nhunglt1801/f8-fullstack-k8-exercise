var loginBtn = document.querySelector("#btn-modal-login");
var registerBtn = document.querySelector("#btn-modal-register");
var modalLogin = document.querySelector("#modal-login");
var modalRegister = document.querySelector("#modal-register");

loginBtn.addEventListener("click", function () {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  modalLogin.classList.add("active");
  modalRegister.classList.remove("active");
});

registerBtn.addEventListener("click", function () {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  modalRegister.classList.add("active");
  modalLogin.classList.remove("active");
});
