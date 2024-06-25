// Bài 1: Viết lại hàm push() trong Array. Đặt tên là push2()
console.log("Bài 1");

Array.prototype.push2 = function (...value) {
  for (var item of value) {
    this[this.length] = item;
  }
  return this.length;
};
var arr1 = [1, 2, "1", "2", { a: 2 }, [4, 5], null, true, false, undefined];
console.log("arr1 = ", arr1);
console.log(arr1.push2(2, 2, "4", { b: 1 }, [3]));
console.log(arr1);

// Bài 2: Viết làm vòng lặp filter trong Array. Đặt tên là filter2()
console.log("\nBài 2");
Array.prototype.filter2 = function (callback) {
  if (typeof callback !== "function") {
    var type = typeof callback;
    if (type === "string") {
      throw new TypeError(`string "${callback}" is not a function`);
    } else if (type === "number") {
      throw new TypeError(`number ${callback} is not a function`);
    } else if (type === "object") {
      throw new TypeError(`object ${callback} is not a function`);
    } else if (type === "boolean") {
      throw new TypeError(`boolean ${callback} is not a function`);
    } else if (type === "undefined") {
      throw new TypeError(`undefined is not a function`);
    }
  }
  var arr = [];
  var len = this.length;
  if (len === 0) return arr;
  for (var i = 0; i < len; i++) {
    if (callback(this[i],i,this)) {
      arr[arr.length] = this[i];
    }
  }
  return arr;
};

var arr2 = [1, 2, "1", "2", { a: 2 }, [4, 5], null, true, false, undefined];
console.log("arr2 = ", arr2);
var result = arr2.filter2(function (value) {
  return typeof value !== "string" && value !== null;
});
console.log("result = ", result);

// Bài 3: Chuyển mảng sau thành dạng thẻ html select option:
console.log("\n Bài 3");
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

function createOptions(categories, depth = 0) {
  var options = "";
  categories.forEach(function (category) {
    var indent = "--|".repeat(depth);
    options += `<option value="${category.id}">${indent}${category.name}</option>`;
    if (category.children) {
      options += createOptions(category.children, depth + 1);
    }
  });
  return options;
}

var selectHTML = `<select><option>Chọn chuyên mục</option>${createOptions(
  categories
)}</select>`;
document.write(selectHTML);
