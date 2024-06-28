var formLogin = document.querySelector("#form-login");

var emailLogin = formLogin.querySelector("#login-email");
var passwordLogin = formLogin.querySelector("#login-password");
var errEmailLogin = formLogin.querySelector(".err-email");
var errPasswordLogin = formLogin.querySelector(".err-password");

// Login
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!emailLogin.value) {
    var formGroup = emailLogin.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập email";
  }
  if (!passwordLogin.value) {
    var formGroup = passwordLogin.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password";
  }
  if (emailLogin.value && passwordLogin.value) {
  }
});
emailLogin.oninput = function () {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailLogin.value)) {
    var formGroup = emailLogin.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập đúng định dạng email";
  } else {
    var formGroup = emailLogin.parentElement.parentElement;
    formGroup.classList.remove("invalid");
    errEmailLogin.innerHTML = "";
  }
  if (!passwordLogin.value) {
    var formGroup = passwordLogin.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password";
  }
};
passwordLogin.oninput = function () {
  if (!emailLogin.value) {
    var formGroup = emailLogin.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập email";
  }
  if (passwordLogin.value.length < 6) {
    var formGroup = passwordLogin.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password từ 6 ký tự trở lên";
  } else {
    var formGroup = passwordLogin.parentElement.parentElement;
    formGroup.classList.remove("invalid");
    errPasswordLogin.innerHTML = "";
  }
};
