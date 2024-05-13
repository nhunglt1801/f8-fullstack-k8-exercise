setTimeout(() => {
  var loading = document.getElementById("loading");
  var homepage = document.getElementById("homepage");
  loading.classList.remove("active");
  setTimeout(() => {
    homepage.classList.add("active");
  }, 500);
}, 6000);

var btntoggle = document.getElementsByClassName("btn-toggle")[0];
var iBtn = document.querySelector("button i.fa-moon");
var body = document.body;
btntoggle.addEventListener("click", function () {
  console.log(body.getAttribute("class"));
  if (body.getAttribute("class") == "light") {
    body.classList = "night";
    iBtn.classList.add("fa-sun");
    iBtn.classList.remove("fa-moon");
  } else {
    body.classList = "light";
    iBtn.classList.remove("fa-sun");
    iBtn.classList.add("fa-moon");
  }
});

document
  .querySelectorAll(".about .video-wrap .video-controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let btnActive = document.querySelector(
        ".about .video-wrap .video-controls .control-btn.active-btn"
      );
      btnActive.classList.remove("active-btn");
      btn.classList.add("active-btn");
      let src = btn.getAttribute("data-src");
      document.querySelector("video.video").src = src;
    };
  });
