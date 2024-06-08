function display(element, data = " ") {
  element.innerHTML = data;
}
function flatArray(arr) {
  var result = [];
  arr.forEach(function (value) {
    if (Array.isArray(value)) {
      result = result.concat(flatArray(value));
    } else {
      result.push(value);
    }
  });
  return result;
}
function createElement(arr) {
  var html = `[ `;
  arr.forEach((value) => {
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (index === value.length - 1) {
          html += `${item}`;
        } else {
          html += `${item},`;
        }
      });
    } else {
      html += `${value}`;
    }
    html += `, `;
  });
  html = html.slice(0, -2);
  html += ` ]`;
  return html;
}
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var data = `
<h2>Bài 2</h2>
<p class="text-bold">Làm phẳng array sau (Chuyển về mảng 1 chiều). Không được sử dụng flat()</p>
<pre>
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

</pre>
<p class="result">Kết quả: <span class="text-bold"></span></p>
`;
var result = createElement(flatArray(arr));
var ex02 = document.getElementById("ex02");
display(ex02, data);
var resultElement = document.querySelector("#ex02 .result span");
display(resultElement, result);
