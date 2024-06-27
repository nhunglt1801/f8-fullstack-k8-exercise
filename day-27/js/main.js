var modalEl = document.querySelector(".modal");
var modalOverlay = modalEl.querySelector(".modal-overlay");
var btnLoginEl = document.querySelector(".btn-login");
var modalClose = modalEl.querySelector(".modal-close");

btnLoginEl.addEventListener("click", function () {
  modalEl.classList.add("active");
});

// Off modal
modalOverlay.addEventListener("click", function () {
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
