// Bài 1:
console.log("Bài 1:");

var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

var getError = function (field) {
  var fields = field.split(".");
  var mainField = fields[0];
  var subField = fields[1];
  var errorMessage =
    errors[mainField]?.[subField] ||
    errors[mainField]?.required ||
    "Không tìm thấy lỗi";
  return errorMessage;
  // if (errors[mainField]) {
  //   if (fields.length > 1) {
  //     if (errors[mainField] && errors[mainField][subField]) {
  //       return errors[mainField][subField];
  //     }
  //     return new Error("Không tìm thấy lỗi");
  //   }
  //   return errors[mainField].required;
  // }
  // return new Error("Không tìm thấy lỗi");
};
console.log(getError("123")); // Không tìm thấy lỗi
console.log(getError("name")); //Vui lòng nhập họ tên
console.log(getError("name.min")); //Họ tên phải từ 5 ký tự
console.log(`getError("name.123"):`, getError("name.123")); //Không tìm thấy lỗi

console.log(getError("email")); //Vui lòng nhập địa chỉ email
console.log(getError("email.email")); //Định dạng email không hợp lệ
console.log(getError("email.unique")); //Email đã có người sử dụng

var ex01 = document.getElementById("ex01");
var inputEx01 = document.createElement("pre");
inputEx01.innerHTML = `var errors = ${JSON.stringify(errors, null, 3)}
<b>Yêu cầu: Viết hàm getError(field) có tham số truyền vào là field tương ứng với nhóm cần lấy lỗi. Tuy nhiên, chỉ trả về 1 chuỗi là lỗi đầu tiên tìm được(lỗi đầu tiên đúng) của 1 nhóm, mặc định là require.</b>
`;
var resultEx01 = document.createElement("pre");
var strResult = `
getError("name"): ${getError("name")}
getError("name.min"): ${getError("name.min")}
getError("name.123"): ${getError("name.123")}
getError("email"):  ${getError("email")}
getError("email.unique"):  ${getError("email.unique")}`;
resultEx01.innerHTML = `<b>Kết quả:</b>\n` + strResult;
ex01.appendChild(inputEx01);

ex01.appendChild(resultEx01);

// Bài 2:
console.log("Bài 2:");

const customers = [
  { name: "Nguyễn Văn A ", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B ", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

var createCustomer = function (name, age, address) {
  return {
    name: name,
    age: age,
    address: address,
  };
};
var customer = createCustomer("Nguyễn Văn D", 4, "Ha Nam");
console.log(customer);
customers.push(customer);
var createCustomers = function (customers) {
  var validData = customers.every(function (customer) {
    return (
      typeof customer.name === "string" &&
      customer.name &&
      typeof customer.age === "number" &&
      customer.age > 0 &&
      customer.age % 1 === 0 &&
      typeof customer.address === "string" &&
      customer.address
    );
  });
  if (validData) {
    return customers
      .map(function (customer) {
        var shortNameArr = customer.name.trim().split(" ");
        var shortName =
          shortNameArr[0] + " " + shortNameArr[shortNameArr.length - 1];
        return {
          name: customer.name,
          shortName: shortName,
          age: customer.age,
          address: customer.address,
        };
      })
      .sort(function (a, b) {
        return a.age - b.age;
      });
  }
  return `Vui lòng nhập lại dữ liệu`;
};

var result = createCustomers(customers);
console.log("Customers: ", result);
createCustomer;

var ex02 = document.getElementById("ex02");
var inputEx02 = document.createElement("pre");
inputEx02.innerHTML = `const customers = ${JSON.stringify(customers, null, 3)}

<b>Viết 1 hàm trả về 1 đối tượng có 3 thuộc tính: name, age, address
Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.
Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xết tăng dần theo tuổi và thêm một thuộc tính mới là shortName của mỗi đối tượng.</b>
`;
var resultEx02 = document.createElement("pre");

var strResult = JSON.stringify(result, null, 3);
resultEx02.innerHTML = `<b>Kết quả:</b> \n\n` + strResult;
ex02.appendChild(inputEx02);
ex02.appendChild(resultEx02);

// Bài 3:
console.log("Bài 3:");
var createUser = function (name, password, email) {
  return {
    name: name,
    password: password,
    email: email,
  };
};
var data = [];

var handleRegister = function (name, password, email) {
  if (!name || !password || !email) {
    console.log("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  name = String(name);
  password = String(password);
  email = String(email);
  var findUser = data.find(function (user) {
    return user.email === email;
  });
  if (!findUser) {
    var user = createUser(name, password, email);
    user.role = "user";
    data.push(user);
    console.log("Đăng ký thành công");
    return user;
  } else {
    console.log("User đã tồn tại: ", findUser);
    console.log("Vui lòng nhập lại địa chỉ email khác");
    return;
  }
};

var handleLogin = function (email, password) {
  if (data.length !== 0) {
    email = String(email);
    password = String(password);
    var user = data.find(function (user) {
      return user.email === email && user.password === password;
    });
    if (user) {
      return user;
    }
    return "Thông tin đăng nhập không hợp lệ";
  }
  return "Danh sách User trống";
};

var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van C",
  "12345678",
  "nguyenvanc@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van C",
  12345678,
  "nguyenvanc@email.com"
);
console.log("Data User: ", data);
var dataLogin = handleLogin("nguyenvanb@email.com", 1234567);

var ex03 = document.getElementById("ex03");
var inputEx03 = document.createElement("pre");
inputEx03.innerHTML = `<b>- Viết 1 hàm trả về 1 đối tượng có 3 thuộc tính: name, password và email.</b>

<b>- Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như trên.</b>
  Yêu cầu:
  + Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng + chương trình.
  + Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.
  + Tự động thêm role là user cho mỗi đối tượng.

<b>- Tạo một hàm login nhận vào 2 tham số email và password.</b>
  Yêu cầu:
  + Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.
  + Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.
`;
var register = document.createElement("pre");
register.innerHTML =
  `\n<b>Kết quả:</b> \n\ndata = ` + JSON.stringify(data, null, 3);
var login = document.createElement("pre");
login.innerHTML = `dataLogin = ` + JSON.stringify(dataLogin, null, 3);
ex03.appendChild(inputEx03);
ex03.appendChild(register);
ex03.appendChild(login);
