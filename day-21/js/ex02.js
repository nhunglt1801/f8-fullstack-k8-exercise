// Bài 2: Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
console.log("--- Bài 2 ---");
var numbers = [1, 8, 4, 5, 7, 2, 3];
console.log("Mảng số nguyên: ", numbers);

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function averagePrimeNumber(arr) {
  var sum = 0;
  var count = 0;
  for (var index in arr) {
    if (isPrime(arr[index])) {
      sum += arr[index];
      count++;
    }
  }
  if (count > 0) {
    var averageNumber = sum / count;
    console.log("Trung bình các số nguyên tố trong mảng: ", averageNumber);
    return averageNumber;
  } else {
    console.log("Không có số nguyên tố trong mảng.");
    return `Không có số nguyên tố trong mảng`;
  }
}
document.write(`<p><b>Bài 2: Cho mảng số nguyên [${numbers}]. </b></p>`);
document.write(
  `<p><b>Tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố</b></p>`
);
var result = averagePrimeNumber(numbers);
document.write(`<p>Kết quả: ${result}</p>`);
