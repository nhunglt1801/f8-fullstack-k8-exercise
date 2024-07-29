var countdown = document.querySelector(".countdown");
var getLinkBtn = document.querySelector("#getLinkBtn");
var countdownTime = 30;
var timer;
var lastTime = performance.now();

function handleCountdown() {
  var now = performance.now();
  var elapsedTime = (now - lastTime) / 1000;
  lastTime = now;
  countdownTime -= elapsedTime;
  countdown.textContent = Math.ceil(countdownTime);
  if (countdownTime <= 0) {
    countdown.textContent = 0;
    getLinkBtn.classList.add("active");
    getLinkBtn.disabled = false;
    getLinkBtn.addEventListener("click", function () {
      window.location.href = "https://fullstack.edu.vn/";
    });
    return;
  }

  timer = requestAnimationFrame(handleCountdown);
}

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    cancelAnimationFrame(timer);
  } else {
    lastTime = performance.now();
    handleCountdown();
  }
});
handleCountdown();
