var formRegister = document.querySelector("#form-register");

var fullnameRegister = formRegister.querySelector("#register-fullname");
var emailRegister = formRegister.querySelector("#register-email");
var passwordRegister = formRegister.querySelector("#register-password");
var errFullnameRegister = formRegister.querySelector(".err-fullname");
var errEmailRegister = formRegister.querySelector(".err-email");
var errPasswordRegister = formRegister.querySelector(".err-password");

// Register
formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  if (fullnameRegister.value === "") {
    var formGroup = fullnameRegister.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errFullnameRegister.innerHTML = "Vui lòng nhập họ tên";
  }
  if (emailRegister.value === "") {
    var formGroup = emailRegister.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập email";
  }
  if (passwordRegister.value === "") {
    var formGroup = passwordRegister.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password";
  }
});
