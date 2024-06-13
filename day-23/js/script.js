// Bài 1:

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function isPalindrome(num) {
  var str = num.toString();
  return str === str.split("").reverse().join("");
}
function nextPrime(num) {
  while (true) {
    if (isPrime(num) && isPalindrome(num)) {
      return num;
    }
    num++;
  }
}
console.log(`Bài 1:`);

var n = 13;
console.log(`Số n: ${n}`);
var result = nextPrime(n);
console.log(`Số nguyên tố đối xứng tiếp theo: ${result}`);

document.write(`<h2>Bài 1</h2>Số n: ${n}`);
document.write(`<p>Số nguyên tố đối xứng tiếp theo: ${result}</p>`);

console.log(`\n`);
// Bài 2:

function getMedian(arr) {
  if (!Array.isArray(arr)) {
    return `Một trong hai giá trị truyền vào không phải là mảng`;
  }
  if (arr.length === 0) {
    return `Mảng truyền vào không có phần tử`;
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(`Mảng hợp nhất:`, arr);
  var len = arr.length;
  var mid = Math.floor(len / 2);
  console.log(mid);
  if (len % 2 === 0) {
    return `Trung vị = ${(arr[mid - 1] + arr[mid]) / 2}`;
  } else return `Trung vị = ${arr[mid]}`;
}

function concatenateArray(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return `Không phải mảng`;
  }
  return arr1.concat(arr2);
}

var arr1 = [2, 4, 5, 4];
var arr2 = [1, 2];

console.log("Bài 2:");
console.log(`arr1`, arr1);
console.log(`arr2`, arr2);
var result = getMedian(concatenateArray(arr1, arr2));
console.log(result);

document.write(`<h2>Bài 2</h2><p>arr1: [${arr1}]</p><p>arr2: [${arr2}]</p>`);
document.write(`<p>${result}</p>`);

console.log(`\n`);

// Bài 3:

console.log(`Bài 3:`);

function getNumberIntegerNotInArray(arr) {
  if (!Array.isArray(arr)) {
    return `Giá trị truyền vào không phải mảng`;
  }
  if (arr.length === 0) {
    return `Mảng truyền vào không có phần tử`;
  }
  for (var value of arr) {
    if (!Number.isInteger(value)) {
      return `Mảng có phần tử không phải là số nguyên`;
    }
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  var len = arr.length;
  var minNumber = 1;
  for (var i = 0; i < len; i++) {
    if (arr[i] > 0) {
      if (arr[i] === minNumber) {
        minNumber++;
      } else if (arr[i] > minNumber) {
        return `Số nguyên dương nhỏ nhất không có trong nums: ${minNumber}`;
      }
    }
  }
  return `Số nguyên dương nhỏ nhất không có trong nums: ${minNumber}`;
}
var nums = [3, 4, -1, 1];
console.log(`Mảng đã cho: `, nums);
document.write(`<h2>Bài 3</h2>Mảng đã cho: [${nums}]`);
var result = getNumberIntegerNotInArray(nums);
console.log(result);
document.write(`<p>${result}</p>`);
