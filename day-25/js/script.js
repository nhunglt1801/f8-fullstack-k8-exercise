// Bài 1:

function sumNumber(...numbers) {
  var arr = [...numbers];
  for (var value of arr) {
    if (typeof value !== "number") {
      return "Invalid input";
    }
  }
  return arr.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}
console.log(sumNumber(1, 3, 3, 4, 5, 6, 7, 8, 9, 10));

// Bài 2:

Number.prototype.getCurrency = function (currency) {
  return this.toLocaleString("vi-VN") + " " + currency;
};
String.prototype.getCurrency = function (currency) {
  if (isNaN(Number(this))) {
    return "Invalid input";
  }
  return Number(this).toLocaleString("vi-VN") + " " + currency;
};
//Case 1
var price = 12000;
console.log(price.getCurrency("đ")); //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ")); //Hiển thị: 12,000,000 đ

// Bài 3:
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
  {
    id: 12,
    name: "Chuyên mục 2.2.3",
    parent: 5,
  },
];

function nestedCategories(categories, parentID = 0) {
  var result = [];
  for (var category of categories) {
    if (category.parent === parentID) {
      var children = nestedCategories(categories, category.id);
      if (children.length > 0) {
        category.children = children;
      }
      delete category.parent;
      result.push(category);
    }
  }
  return result;
}
// function nest(data) {
//   const map = {};
//   const result = [];

//   // Tạo các đối tượng với mảng children rỗng
//   data.forEach((item) => {
//     map[item.id] = { ...item, children: [] };
//   });
//   console.log(data);
//   console.log(map);
//   // Xây dựng cây
//   data.forEach((item) => {
//     if (item.parent === 0) {
//       result.push(map[item.id]);
//     } else {
//       map[item.parent].children.push(map[item.id]);
//     }
//   });

//   return result;
// }

// const nestedData = nest(categories);
// console.log(nestedData);
var result = nestedCategories(categories);

console.log("categories = " + JSON.stringify(result, null, 2));

// Bài 4:
Array.prototype.reduce2 = function (callback, initialValue) {
  var prevValue = initialValue || this[0];
  var index = initialValue ? 0 : 1;
  for (index; index < this.length; index++) {
    prevValue = callback(prevValue, this[index], index, this);
  }
  return prevValue;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = arr.reduce2(function (sum, number) {
  return sum + number;
});
console.log(result);
