// Bài 1
function displayFibonacci(n, a = 1, b = 1, count = 0) {
  if (count >= n) {
    return "";
  }
  var result = document.querySelector("#result-1 span");
  result.innerHTML += a + " ";
  displayFibonacci(n, b, a + b, count + 1);
}

document.querySelector("#ex01 .btn").onclick = function () {
  var result = document.querySelector("#result-1 span");
  result.innerHTML = "";
  var number = document.querySelector("#ex01 #number").value;
  if (number === "") {
    alert("Bạn chưa nhập số n!");
  } else {
    number = Number(number);
    if (number % 1 !== 0 || number <= 0) {
      result.innerHTML = "Số không hợp lệ. Vui lòng nhập số nguyên dương";
    } else {
      displayFibonacci(number);
    }
  }
};

//  Bài 2
function reverseNumber(number) {
  if (number % 1 !== 0) {
    return `Số không hợp lệ. Vui lòng nhập số nguyên`;
  } else {
    var isNegative = number < 0;
    var reverseNum = parseInt(
      Math.abs(number).toString().split("").reverse().join("")
    );
    if (isNegative) {
      reverseNum = -reverseNum;
    }
    return reverseNum;
  }
}
document.querySelector("#ex02 .btn").onclick = function () {
  var result = document.querySelector("#result-2 span");
  var number = document.querySelector("#ex02 #number").value;
  if (number === "") {
    alert("Bạn chưa nhập số n!");
  } else {
    number = Number(number);
    result.innerHTML = reverseNumber(number);
  }
};

// Bài 3:
function convertNumberToText(number) {
  if (number % 1 !== 0 || number < 0 || number > 9999) {
    return `Số không hợp lệ. Vui lòng nhập số nguyên từ 0 đến 9999`;
  } else {
    var unitWords = [
      "không",
      "một",
      "hai",
      "ba",
      "bốn",
      "năm",
      "sáu",
      "bảy",
      "tám",
      "chín",
    ];
    var tensWords = [
      "",
      "mười",
      "hai mươi",
      "ba mươi",
      "bốn mươi",
      "năm mươi",
      "sáu mươi",
      "bảy mươi",
      "tám mươi",
      "chín mươi",
    ];

    var result = "";
    var stringNum = number.toString();
    var length = stringNum.length;

    for (var i = 0; i < length; i++) {
      var digit = parseInt(stringNum[i]);
      var position = length - i;

      if (position === 4) {
        result += unitWords[digit] + " ngàn ";
      } else if (position === 3) {
        result += unitWords[digit] + " trăm ";
      } else if (position === 2) {
        if (digit === 0) {
          if (parseInt(stringNum[i + 1]) !== 0) {
            result += "lẻ ";
          }
        } else {
          result += tensWords[digit] + " ";
        }
      } else if (position === 1) {
        if (digit !== 0 || number === 0) {
          result += unitWords[digit] + " ";
        }
      }
    }
    result = result.replace(/mươi một/g, "mươi mốt");
    result = result.replace(/mươi năm/g, "mươi lăm");
    result = result.replace(/mười năm/g, "mười lăm");

    return result.trim();
  }
}

document.querySelector("#ex03 .btn").onclick = function () {
  var result = document.querySelector("#result-3 span");
  var number = document.querySelector("#ex03 #number").value;
  if (number === "") {
    alert("Bạn chưa nhập số n!");
  } else {
    number = Number(number);
    result.innerHTML = convertNumberToText(number);
  }
};
