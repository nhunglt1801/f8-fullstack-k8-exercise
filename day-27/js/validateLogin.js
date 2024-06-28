var modalEl = document.querySelector(".modal");
var formLogin = document.querySelector("#form-login");

var emailLogin = formLogin.querySelector("#login-email");
var passwordLogin = formLogin.querySelector("#login-password");
var errEmailLogin = formLogin.querySelector(".err-email");
var errPasswordLogin = formLogin.querySelector(".err-password");
var eyesBtn = formLogin.querySelector("btn-eye i");

function getParentElement(element, selector) {
  return element.closest(selector);
}

// Validate Email
emailLogin.oninput = function () {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!passwordLogin.value) {
    var formGroup = getParentElement(passwordLogin, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password";
  }
  if (!regex.test(this.value) && this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập đúng định dạng email";
  } else if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập email";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errEmailLogin.innerHTML = "";
  }
};

emailLogin.onblur = function () {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!passwordLogin.value) {
    var formGroup = getParentElement(passwordLogin, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password";
  }
  if (!regex.test(this.value) && this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập đúng định dạng email";
  } else if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập email";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errEmailLogin.innerHTML = "";
  }
};

// Validate Password
passwordLogin.oninput = function () {
  if (!emailLogin.value) {
    var formGroup = getParentElement(emailLogin, ".form-group");
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập email";
  }
  if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password";
  } else if (this.value.length < 6) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password từ 6 ký tự trở lên";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errPasswordLogin.innerHTML = "";
  }
};

passwordLogin.onblur = function () {
  if (!emailLogin.value) {
    var formGroup = getParentElement(emailLogin, ".form-group");
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập email";
  }
  if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password";
  } else if (this.value.length < 6) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password lớn hơn 6 ký tự";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errPasswordLogin.innerHTML = "";
  }
};

// Submit Form Login
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!emailLogin.value) {
    var formGroup = getParentElement(emailLogin, ".form-group");
    formGroup.classList.add("invalid");
    errEmailLogin.innerHTML = "Vui lòng nhập email";
  }
  if (!passwordLogin.value) {
    var formGroup = getParentElement(passwordLogin, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordLogin.innerHTML = "Vui lòng nhập password";
  }
  if (emailLogin.value && passwordLogin.value) {
    modalEl.classList.remove("active");
    alert("Đăng nhập thành công");
  }
});
