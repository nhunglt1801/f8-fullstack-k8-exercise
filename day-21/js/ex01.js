// Bài 1: Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
console.log("--- Bài 1 ---");
var numbers = [1, 8, 2, 5, 0];
console.log("Mảng số nguyên: ", numbers);
var max = numbers[0];
var min = numbers[0];
var indexMax = 0;
var indexMin = 0;
for (var index in numbers) {
  if (max < numbers[index]) {
    max = numbers[index];
    indexMax = +index;
  }
  if (min > numbers[index]) {
    min = numbers[index];
    indexMin = +index;
  }
}
console.log("Số lớn nhất: ", max, "- index: ", indexMax);
console.log("Số nhỏ nhất: ", min, "- index: ", indexMin);
document.write(`<p><b>Bài 1: Cho mảng số nguyên [${numbers}].</b></p>`);
document.write(`<p><b>Tìm số lớn nhất, nhỏ nhất trong mảng và vị trí</b></p>`);
document.write(`<p>Số lớn nhất: ${max} - index: ${indexMax}</p>`);
document.write(`<p>Số nhỏ nhất: ${min} - index: ${indexMin}</p>`);
