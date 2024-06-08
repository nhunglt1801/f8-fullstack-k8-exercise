function display(element, data = " ") {
  element.innerHTML = data;
}
function separateDataType(arr) {
  var result = [[], [], []];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result[j].push(arr[i][j]);
    }
  }
  return result;
}
function createElement(arr) {
  var html = `[ `;
  arr.forEach((value) => {
    html += `[ `;
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (index === value.length - 1) {
          html += `${item}`;
        } else {
          html += `${item}, `;
        }
      });
    } else {
      html += `${value}`;
    }
    html += ` ],`;
  });
  html = html.slice(0, -1);
  html += ` ]`;
  return html;
}
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
result = createElement(separateDataType(arr));
var data = `
<h2>Bài 3</h2>
<p class="text-bold">Tách phần tử trong mảng theo đúng kiểu dữ liệu</p>
<pre>
  var arr = [["a", 1, true], ["b", 2, false]];

</pre>
<p class="result">Kết quả: <span class="text-bold"></span></p>
`;
var ex03 = document.getElementById("ex03");
display(ex03, data);
var resultElement = document.querySelector("#ex03 .result span");
display(resultElement, result);
