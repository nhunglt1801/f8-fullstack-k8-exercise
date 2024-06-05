/**
 * Bài 4:
 * Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
Bước 1: Sắp xếp mảng theo thứ tự tăng dần
Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
 */
console.log("--- Bài 4 ---");
var numbers = [1, 8, 2, 5];
console.log("Mảng số nguyên: ", numbers);
document.write(`<p><b>Bài 4: Cho mảng số nguyên [${numbers}]</b></p>`);
document.write(
  `<p><b>Bước 1: Sắp xếp mảng theo thứ tự tăng dần<br>Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng</b></p>`
);
function sortMinMax(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
function searchPosition(number, arr) {
  if (number < arr[0]) {
    return 0;
  }
  if (number > arr[arr.length - 1]) {
    return arr.length;
  }
  for (var index in arr) {
    if (arr[index] >= number) {
      return +index;
    }
  }
}
function insertElement(number, arr) {
  var index = searchPosition(number, arr);
  for (var i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = number;
  return arr;
}

numbers = sortMinMax(numbers);
console.log("Mảng sau khi sắp xếp theo thứ tự tăng dần: ", numbers);
document.write(
  `<p>Mảng sau khi sắp xếp theo thứ tự tăng dần: [${numbers}]</p>`
);
var element = 2;
console.log("Chèn thêm phần tử: ", element);
document.write(`<p>Chèn thêm phần tử: ${element}</p>`);

numbers = insertElement(element, numbers);
console.log("Mảng sau khi thêm phần tử: ", numbers);
document.write(`<p>Mảng sau khi thêm phần tử: [${numbers}]</p>`);

var element = 14;
console.log("Chèn thêm phần tử: ", element);
document.write(`<p>Chèn thêm phần tử: ${element}</p>`);

numbers = insertElement(element, numbers);
console.log("Mảng sau khi thêm phần tử: ", numbers);
document.write(`<p>Mảng sau khi thêm phần tử: [${numbers}]</p>`);

var element = 0;
console.log("Chèn thêm phần tử: ", element);
document.write(`<p>Chèn thêm phần tử: ${element}</p>`);

numbers = insertElement(element, numbers);
console.log("Mảng sau khi thêm phần tử: ", numbers);
document.write(`<p>Mảng sau khi thêm phần tử: [${numbers}]</p>`);
