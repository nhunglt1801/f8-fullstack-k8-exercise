var headingElement = document.getElementById("heading");
var content = headingElement.innerText;
var startWord = 0;
var endWord = 0;
function highlightWord() {
  if (startWord >= content.length) {
    startWord = 0;
  }

  endWord = content.indexOf(" ", startWord);
  if (endWord === -1) {
    endWord = content.length;
  }

  var newContent =
    content.slice(0, startWord) +
    '<span class="highlight">' +
    content.slice(startWord, endWord) +
    "</span>" +
    content.slice(endWord);

  headingElement.innerHTML = newContent;
  startWord = endWord + 1;
}
setInterval(highlightWord, 1000);
