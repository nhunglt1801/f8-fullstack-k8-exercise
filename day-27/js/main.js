var modalEl = document.querySelector(".modal");
var overlayEl = modalEl.querySelector(".overlay");
var btnLoginEl = document.querySelector(".header .btn-login");
var modalClose = modalEl.querySelector(".btn-close");

btnLoginEl.addEventListener("click", function () {
  modalEl.classList.add("active");
});

// Off modal
overlayEl.addEventListener("click", function () {
  modalEl.classList.remove("active");
});

modalClose.addEventListener("click", function () {
  modalEl.classList.remove("active");
});

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    modalEl.classList.remove("active");
  }
});
