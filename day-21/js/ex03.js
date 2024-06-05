// Bài 3: Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
console.log("--- Bài 3 ---");
var numbers = [1, 2, 3, 1, 2, 4, 5, 5, 6];
console.log("Mảng số nguyên: ", numbers);
var results = [];
for (var i in numbers) {
  var check = true;
  for (var j in numbers) {
    if (results[+j] === numbers[+i]) {
      check = false;
      break;
    }
  }
  if (check) {
    results[results.length] = numbers[i];
  }
}
console.log("Mảng sau khi lọc trùng: ", results);

document.write(`<p><b>Bài 3: Cho mảng bất kỳ [${numbers}].</b></p>`);
document.write(
  `<p><b>Nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý</b></p>`
);
document.write(`<p>Mảng sau khi lọc trùng: [${results}]</p>`);
