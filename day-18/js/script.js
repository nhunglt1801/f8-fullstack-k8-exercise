// Hàm format lại số tiền
function formatCurrency(amount) {
  return amount.toLocaleString("vi-VN");
}

// Hàm tính tiền taxi
function taxiCost(distance) {
  var bill = 0;
  var priceLevel1 = 15000;
  var priceLevel2 = 13500;
  var priceLevel3 = 11000;
  if (distance >= 0 && distance <= 1) {
    bill = distance * priceLevel1;
  } else if (distance > 1 && distance <= 5) {
    bill = priceLevel1 + (distance - 1) * priceLevel2;
  } else if (distance > 5 && distance <= 120) {
    bill = priceLevel1 + 4 * priceLevel2 + (distance - 5) * priceLevel3;
  } else {
    bill =
      priceLevel1 +
      4 * priceLevel2 +
      (distance - 5) * priceLevel3 +
      ((priceLevel1 + 4 * priceLevel2 + (distance - 5) * priceLevel3) * 10) /
        100;
  }
  return bill;
}

// Hàm tính tiền điện
function eletricityCost(consumption) {
  var bill = 0;
  var priceLevel1 = 1678;
  var priceLevel2 = 1734;
  var priceLevel3 = 2014;
  var priceLevel4 = 2536;
  var priceLevel5 = 2834;
  var priceLevel6 = 2927;
  if (consumption > 0) {
    if (consumption <= 50) {
      bill = consumption * priceLevel1;
    } else if (consumption >= 51 && consumption <= 100) {
      bill = 50 * priceLevel1 + (consumption - 50) * priceLevel2;
    } else if (consumption >= 101 && consumption <= 200) {
      bill =
        50 * priceLevel1 + 50 * priceLevel2 + (consumption - 100) * priceLevel3;
    } else if (consumption >= 201 && consumption <= 300) {
      bill =
        50 * priceLevel1 +
        50 * priceLevel2 +
        100 * priceLevel3 +
        (consumption - 200) * priceLevel4;
    } else if (consumption >= 301 && consumption <= 400) {
      bill =
        50 * priceLevel1 +
        50 * priceLevel2 +
        100 * priceLevel3 +
        100 * priceLevel4 +
        (consumption - 300) * priceLevel5;
    } else {
      bill =
        50 * priceLevel1 +
        50 * priceLevel2 +
        100 * priceLevel3 +
        100 * priceLevel4 +
        100 * priceLevel5 +
        (consumption - 400) * priceLevel6;
    }
  }
  return bill;
}

// Hàm kiểm tra số nguyên tố
function isPrimeNumber(n) {
  if (n % 1 !== 0 || n <= 1) {
    return false;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
        break;
      }
    }
  }
  return true;
}

// Hàm vẽ tam giác số
function generateNumberTriangle(number) {
  var currentNumber = 1;
  var result = "";
  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= i; j++) {
      result += currentNumber + " ";
      currentNumber++;
    }
    result += "<br>";
  }
  return result;
}

// Hàm tính biểu thức 1*2 + 2*3 + 3*4 + ... + n*(n+1)
function calculateExpression(number) {
  var total = 0;
  if (number === 0) {
    total = 0;
  } else {
    for (var i = 1; i <= number; i++) {
      total += i * (i + 1);
    }
  }
  return total;
}

// Bài 1
document.querySelector("#ex01 .btn").onclick = () => {
  var distance = document.querySelector("#distance").value;
  if (distance === "") {
    alert("Bạn chưa nhập số km!");
  } else {
    distance = Number(distance);
    if (distance < 0) {
      text = `Vui lòng nhập lại số km lớn hơn 0`;
      document.querySelector("#ex01 #result span").innerText = text;
    } else {
      var bill = taxiCost(distance);
      document.querySelector("#ex01 #result span").innerText =
        formatCurrency(bill) + " đ";
    }
  }
};

// Bài 2
document.querySelector("#ex02 .btn").onclick = () => {
  var consumption = document.querySelector("#electricity-number").value;
  if (consumption === "") {
    alert("Bạn chưa nhập số điện!");
  } else {
    consumption = Number(consumption);
    if (consumption < 0) {
      text = `Vui lòng nhập số điện lớn hơn 0`;
      document.querySelector("#ex02 #result span").innerText = text;
    } else {
      var bill = eletricityCost(consumption);
      document.querySelector("#ex02 #result span").innerText =
        formatCurrency(bill) + " đ";
    }
  }
};

// Bài 3
document.querySelector("#ex03 .btn").onclick = () => {
  var total;
  var text = "";
  var number = document.querySelector("#ex03 input#number").value;
  if (number === "") {
    alert("Bạn chưa nhập số n!");
  } else {
    number = Number(number);
    if (number % 1 !== 0 || number < 0) {
      text = `Vui lòng nhập số nguyên lớn hơn 0`;
      document.querySelector("#ex03 #result span").innerText = text;
    } else {
      total = calculateExpression(number);
      document.querySelector("#ex03 #result span").innerText = `S = ${total}`;
    }
  }
};

// Bài 4
document.querySelector("#ex04 .btn").onclick = () => {
  var number = document.querySelector("#ex04 input#number").value;
  var text;
  if (number === "") {
    alert("Bạn chưa nhập số!");
  } else {
    number = Number(number);
    if (isPrimeNumber(number)) {
      text = `${number} là số nguyên tố`;
    } else if (number < 1) {
      text = `Vui lòng nhập số nguyên dương lớn hơn 1`;
    } else {
      text = `${number} không phải là số nguyên tố`;
    }
    document.querySelector("#ex04 #result span").innerText = text;
  }
};

// Bài 5
document.querySelector("#ex05 .btn").onclick = () => {
  var number = document.querySelector("#ex05 input#number").value;
  var result;
  if (number === "") {
    alert("Bạn chưa nhập số dòng!");
  } else {
    number = Number(number);
    if (number % 1 !== 0 || number <= 0) {
      result = `Vui lòng nhập số nguyên dương lớn hơn 1`;
    } else {
      result = generateNumberTriangle(number);
    }
    document.getElementById("triangle").innerHTML = result;
  }
};

// Bài 6
// Hàm vẽ bàn cờ vua
function chessBoardTable() {
  var table = document.getElementById("chessBoard");
  for (var i = 1; i <= 8; i++) {
    var row = document.createElement("tr");
    for (var j = 1; j <= 8; j++) {
      var cell = document.createElement("td");
      if ((i + j) % 2 === 0) {
        cell.className = "white";
      } else {
        cell.className = "black";
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
chessBoardTable();

// Bài 7
// Hàm vẽ bảng cửu chương
function multiplicationTable(number) {
  var table = document.getElementById("multiplicationTable");
  for (var i = 1; i <= 10; i++) {
    var row = document.createElement("tr");
    for (var j = 1; j <= number; j++) {
      var cell = document.createElement("td");
      cell.innerHTML = `${j} * ${i} = ${i * j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
multiplicationTable(10);

// Bài 8
// Hàm tính biểu thức 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/N
function calculateSum(n) {
  if (n === 1) {
    return 1;
  } else {
    return 1 / n + calculateSum(n - 1);
  }
}
document.querySelector("#ex08 .btn").onclick = () => {
  var total;
  var text = "";
  var number = document.querySelector("#ex08 input#number").value;
  if (number === "") {
    alert("Bạn chưa nhập số n!");
  } else {
    number = Number(number);
    if (number % 1 !== 0 || number <= 0) {
      text = `Vui lòng nhập số nguyên lớn hơn 0`;
      document.querySelector("#ex08 #result span").innerText = text;
    } else {
      total = calculateSum(number);
      document.querySelector("#ex08 #result span").innerText = `S = ${total}`;
    }
  }
};
