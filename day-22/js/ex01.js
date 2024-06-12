function display(element, data = " ") {
  element.innerHTML = data;
}

function getItemCommon(arrA, arrB) {
  var arr = [];
  arr = arrA.filter(function (item) {
    return arrB.includes(item);
  });
  arr = arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
  return arr;
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

var arrA = [1, 4, 3, 2, 1, 6, 6];
var arrB = [5, 2, 6, 7, 1, 6];
var data = `
<h2>Bài 1</h2>
<p class="text-bold">Lấy kết quả giao giữa 2 mảng</p>
<pre>
  var arrA = [${arrA}];
  var arrB = [${arrB}];

</pre>
<p class="result">Kết quả: <span class="text-bold"></span></p>
`;
var result = createElement(getItemCommon(arrA, arrB));
var ex01 = document.getElementById("ex01");
display(ex01, data);
var resultElement = document.querySelector("#ex01 .result span");
display(resultElement, result);
