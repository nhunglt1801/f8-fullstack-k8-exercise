const searchBox = document.querySelector(".search-box");
const btn = searchBox.querySelector(".btn");
const action = searchBox.querySelector(".action");
const result = searchBox.querySelector(".result");

const textAction = "Hãy nói nội dung bạn muốn";
const textSuccess = "Đã nói xong. Hy vọng kết quả như ý bạn muốn";
const textResultSuccess = "Đã thực hiện xong";
const textResultFail = "Không thực hiện được yêu cầu";

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "vi-VN";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const updateAction = (text, success = false) => {
  action.textContent = text;
  if (success) {
    action.classList.add("success");
  } else {
    action.classList.remove("success");
  }
};

const updateResult = (text, active = false) => {
  result.textContent = text;
  if (active) {
    result.classList.add("active");
  } else {
    result.classList.remove("active");
  }
};

const redirectLink = (url) => {
  window.open(url, "_blank");
};

btn.addEventListener("click", () => {
  updateAction(textAction);
  updateResult("");
  recognition.start();
});

recognition.addEventListener("result", (event) => {
  const value = event.results[0][0].transcript.trim().toLowerCase();
  if (!value) {
    return;
  }
  updateResult(`Đang thực hiện: ${value}`, true);
  updateAction(textSuccess, true);
  setTimeout(() => {
    let url;
    if (
      value.includes("chỉ đường") ||
      value.includes("tới") ||
      value.includes("đường tới")
    ) {
      const location = value.replace(
        /chỉ đường tới |chỉ đường |tới |đường tới /,
        ""
      );
      url = `https://www.google.com/maps/search/${encodeURIComponent(
        location
      )}`;
    } else if (value.includes("bài hát")) {
      const song = value.replace(/mở bài hát |nghe bài hát |bài hát /, "");
      url = `https://zingmp3.vn/tim-kiem/tat-ca?q=${encodeURIComponent(song)}`;
    } else if (
      value.includes("video") ||
      value.includes("xem video") ||
      value.includes("mở video")
    ) {
      const video = value.replace(/mở video |xem video |video /, "");
      url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        video
      )}`;
    } else {
      switch (value) {
        case "google":
          url = "https://www.google.com/";
          break;
        case "youtube":
          url = "https://www.youtube.com/";
          break;
        case "facebook":
          url = "https://www.facebook.com/";
          break;
        case "google drive":
          url = "https://drive.google.com/drive/u/0/home";
          break;
        case "google maps":
        case "bản đồ":
          url = "https://www.google.com/maps";
          break;
        default:
          updateResult(textResultFail, true);
          return;
      }
    }
    redirectLink(url);
    updateResult(textResultSuccess, true);
  }, 1000);
});

recognition.addEventListener("speechend", () => {
  recognition.stop();
});

recognition.addEventListener("error", (event) => {
  const error = event.error;
  if (error) {
    const css = {
      borderColor: "red",
      fontWeight: "bold",
      color: "red",
    };
    Object.assign(result.style, css);
    if (error === "not-allowed") {
      updateResult(`Không được phép truy cập vào Micro`, true);
    } else if (error === "no-speech") {
      updateResult(`Không nhận diện được giọng nói`, true);
    }
  }
});
