var controls = document.querySelector(".controls");
var fileBtn = controls.querySelector(".btn-primary");
var dropdownMenu = controls.querySelector(".dropdown-menu");
var btnOptions = controls.querySelectorAll(".btn-option");
var colorOption = controls.querySelector(".color-option");

var newBtn = document.querySelector("#new-btn");
var txtBtn = document.querySelector("#txt-btn");
var pdfBtn = document.querySelector("#pdf-btn");
var fileNameInput = document.querySelector("#filename-input");
var contentEl = document.querySelector("#content");
var numberCharacter = document.querySelector(".number-character");
var numberWord = document.querySelector(".number-word");

function modifyText(command, defaultUi, value) {
  document.execCommand(command, defaultUi, value);
}

// btn option event
btnOptions.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modifyText(btn.id, false, null);
  });
});
colorOption.addEventListener("change", function () {
  modifyText(colorOption.id, false, this.value);
});

// contentEl input event
contentEl.addEventListener("input", function () {
  var text = this.innerText;
  var charCount = contentEl.innerText.length;

  var words = text.trim().split(/\s+/);
  var wordCount = words.filter(function (word) {
    return word.length > 0;
  }).length;
  numberWord.innerText = wordCount;
  numberCharacter.innerText = charCount;
});
// contentEl paste event
contentEl.addEventListener("paste", function (e) {
  e.preventDefault();
  var text = e.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
});
// dropdown menu event
fileBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle("show");
});
document.addEventListener("click", function () {
  dropdownMenu.classList.remove("show");
});
// new file event
newBtn.addEventListener("click", function (e) {
  contentEl.innerText = "";
  fileNameInput.value = "untitled";
  numberWord.innerText = 0;
  numberCharacter.innerText = 0;
});
function exportTxt(element) {
  var text = element.innerText;
  var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileNameInput.value}.txt`;
  link.click();
}
// txt btn event
txtBtn.addEventListener("click", function () {
  exportTxt(contentEl);
});
// export pdf function
function exportPDF(element) {
  var opt = {
    margin: 1,
    filename: `${fileNameInput.value}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
}
// pdf btn event
pdfBtn.addEventListener("click", function () {
  exportPDF(contentEl);
});
