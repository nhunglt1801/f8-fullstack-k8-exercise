var carouselInner = document.querySelector(".carousel .carousel-inner");
var items = carouselInner.querySelectorAll(".carousel-inner .item");
var nextBtn = document.querySelector(".carousel .next");
var prevBtn = document.querySelector(".carousel .prev");
var carouselDots = document.querySelector(".carousel .carousel-dots");
var lengthItems = items.length - 1;

function addDot() {
  var span = document.createElement("span");
  carouselDots.appendChild(span);
}

if (lengthItems) {
  items.forEach(function () {
    addDot();
  });
}

var dots = carouselDots.querySelectorAll("span");
dots[0].classList.add("active-dot");
var position = 0;
function reloadSlider() {
  var checkLeft = items[position].offsetLeft;
  console.log(checkLeft);
  carouselInner.style.translate = `-${checkLeft}px`;
  var lastActiveDot = document.querySelector(".carousel-dots .active-dot");
  lastActiveDot.classList.remove("active-dot");
  dots[position].classList.add("active-dot");
}
nextBtn.addEventListener("click", function () {
  if (position + 1 > lengthItems) {
    return;
  } else {
    position++;
  }
  reloadSlider();
});
prevBtn.addEventListener("click", function () {
  if (position - 1 < 0) {
    return;
  } else {
    position--;
  }
  reloadSlider();
});

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    position = index;
    reloadSlider();
  });
});
