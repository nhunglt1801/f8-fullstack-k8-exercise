var modalEl = document.querySelector(".modal");
var formRegister = document.querySelector("#form-register");

var fullnameRegister = formRegister.querySelector("#register-fullname");
var emailRegister = formRegister.querySelector("#register-email");
var passwordRegister = formRegister.querySelector("#register-password");
var errFullnameRegister = formRegister.querySelector(".err-fullname");
var errEmailRegister = formRegister.querySelector(".err-email");
var errPasswordRegister = formRegister.querySelector(".err-password");
var eyesBtn = formRegister.querySelector(".btn-eye i");

function getParentElement(element, selector) {
  return element.closest(selector);
}

// Validate Fullname
fullnameRegister.oninput = function () {
  if (!emailRegister.value) {
    var formGroup = getParentElement(emailRegister, ".form-group");
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập email";
  }
  if (!passwordRegister.value) {
    var formGroup = getParentElement(passwordRegister, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password";
  }
  if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errFullnameRegister.innerHTML = "Vui lòng nhập họ và tên";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errFullnameRegister.innerHTML = "";
  }
};

fullnameRegister.onblur = function () {
  if (!emailRegister.value) {
    var formGroup = getParentElement(emailRegister, ".form-group");
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập email";
  }
  if (!passwordRegister.value) {
    var formGroup = getParentElement(passwordRegister, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password";
  }
  if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errFullnameRegister.innerHTML = "Vui lòng nhập họ và tên";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errFullnameRegister.innerHTML = "";
  }
};

// Validate Email
emailRegister.oninput = function () {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!passwordRegister.value) {
    var formGroup = getParentElement(passwordRegister, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password";
  }
  if (!regex.test(this.value) && this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập đúng định dạng email";
  } else if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập email";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errEmailRegister.innerHTML = "";
  }
};

emailRegister.onblur = function () {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!fullnameRegister.value) {
    var formGroup = getParentElement(fullnameRegister, ".form-group");
    formGroup.classList.add("invalid");
    errFullnameRegister.innerHTML = "Vui lòng nhập họ và tên";
  }
  if (!passwordRegister.value) {
    var formGroup = getParentElement(passwordRegister, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password";
  }
  if (!regex.test(this.value) && this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập đúng định dạng email";
  } else if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập email";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errEmailRegister.innerHTML = "";
  }
};

// Validate Password
passwordRegister.oninput = function () {
  if (!emailRegister.value) {
    var formGroup = getParentElement(emailRegister, ".form-group");
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập email";
  }
  if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password";
  } else if (this.value.length < 6) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password từ 6 ký tự trở lên";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errPasswordRegister.innerHTML = "";
  }
};

passwordRegister.onblur = function () {
  if (!fullnameRegister.value) {
    var formGroup = getParentElement(fullnameRegister, ".form-group");
    formGroup.classList.add("invalid");
    errFullnameRegister.innerHTML = "Vui lòng nhập họ và tên";
  }
  if (!emailRegister.value) {
    var formGroup = getParentElement(emailRegister, ".form-group");
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập email";
  }
  if (!this.value) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password";
  } else if (this.value.length < 6) {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password lớn hơn 6 ký tự";
  } else {
    var formGroup = getParentElement(this, ".form-group");
    formGroup.classList.remove("invalid");
    errPasswordRegister.innerHTML = "";
  }
};

// Show/Hide Password
eyesBtn.onclick = function () {
  if (passwordRegister.type === "password") {
    this.classList.add("fa-eye");
    this.classList.remove("fa-eye-slash");
    passwordRegister.type = "text";
  } else {
    this.classList.add("fa-eye-slash");
    this.classList.remove("fa-eye");
    passwordRegister.type = "password";
  }
};
// Register
formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!fullnameRegister.value) {
    var formGroup = fullnameRegister.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errFullnameRegister.innerHTML = "Vui lòng nhập họ tên";
  }
  if (!emailRegister.value) {
    var formGroup = emailRegister.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errEmailRegister.innerHTML = "Vui lòng nhập email";
  }
  if (!passwordRegister.value) {
    var formGroup = passwordRegister.parentElement.parentElement;
    formGroup.classList.add("invalid");
    errPasswordRegister.innerHTML = "Vui lòng nhập password";
  }
  if (fullnameRegister.value && emailRegister.value && passwordRegister.value) {
    modalEl.classList.remove("active");
    alert("Đăng ký thành công");
  }
});
