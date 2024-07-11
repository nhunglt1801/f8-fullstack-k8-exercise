var tableProducts = document.querySelector("#table-products");
var cartEl = document.querySelector("#cart-wrap");
var tableCart = cartEl.querySelector("#table-cart");
var spanEl = cartEl.querySelector("span.text");
var btnAddToCarts;
var btnRemoveFromCarts;
var btnUpdate = cartEl.querySelector(".btn-updates");
var btnDelete = cartEl.querySelector(".btn-deletes");
var CART_STORAGE_KEY = "CART";

var app = {
  products: [
    { id: 1, name: "Sản phẩm 1", price: 1000 },
    { id: 2, name: "Sản phẩm 2", price: 2000 },
    { id: 3, name: "Sản phẩm 3", price: 3000 },
    { id: 4, name: "Sản phẩm 4", price: 4000 },
  ],
  data: JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [],
  setData: function () {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.data));
  },
  renderProduct: function () {
    var count = 1;
    for (var i in this.products) {
      var row = tableProducts.insertRow();
      row.innerHTML = `
        <td>${count++}</td>
        <td class="title">${this.products[i].name}</td>
        <td class="price">${this.products[i].price}</td>
        <td>
            <input type="number" value="1" min="1" step="1">
            <button type="button" class="btn-add-to-cart" data-id=${
              this.products[i].id
            }>Thêm vào giỏ</button>
        </td>
      `;
    }
  },
  getProductId: function (id) {
    return this.products.find(function (product) {
      return product.id === parseInt(id);
    });
  },
  handleAddToCartEvents: function () {
    var _this = this;
    btnAddToCarts = tableProducts.querySelectorAll(".btn-add-to-cart");

    btnAddToCarts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var productId = parseInt(this.dataset.id);
        var inputQuantity = this.previousElementSibling;
        var quantity = parseInt(inputQuantity.value);
        if (quantity > 0) {
          var index = _this.data.findIndex(function (item) {
            return item.id === productId;
          });
          if (index === -1) {
            _this.data.push({ id: productId, quantity: quantity });
          } else {
            _this.data[index].quantity += quantity;
          }
          _this.setData();
          _this.renderCart();
        } else {
          alert("Số lượng đã nhập phải lớn hơn 0!");
        }
        inputQuantity.value = 1;
      });
    });
  },
  handleRemoveFromCartEvents: function () {
    var _this = this;
    btnRemoveFromCarts = tableCart.querySelectorAll(".btn-remove-from-cart");

    btnRemoveFromCarts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var productId = parseInt(this.dataset.id);
        var index = _this.data.findIndex(function (item) {
          return item.id === productId;
        });
        if (index !== -1) {
          var isConfirm = confirm("Bạn chắc chắn muốn xóa sản phẩm này chứ?");
          if (isConfirm) {
            _this.data.splice(index, 1);
            _this.setData();
          }
        }
        _this.renderCart();
      });
    });
  },
  handleUpdateCartEvents: function () {
    var _this = this;
    if (btnUpdate) {
      btnUpdate.addEventListener("click", function () {
        var quantityInputs = tableCart.querySelectorAll("input[type='number']");

        quantityInputs.forEach(function (input) {
          var newQuantity = parseInt(input.value);
          var productId = parseInt(input.dataset.id);
          var index = _this.data.findIndex(function (item) {
            return item.id === productId;
          });
          if (newQuantity > 0) {
            if (index !== -1) {
              _this.data[index].quantity = newQuantity;
            }
          } else {
            _this.data.splice(index, 1);
          }
        });
        _this.setData();
        _this.renderCart();
        alert("Cập nhật giỏ hàng thành công!");
      });
    }
  },
  handleRemoveAllFromCartEvents: function () {
    var _this = this;
    btnDelete.addEventListener("click", function () {
      var isConfirm = confirm(
        "Bạn chắc chắn muốn xóa tất cả sản phẩm trong giỏ hàng?"
      );
      if (isConfirm) {
        _this.data = [];
        _this.setData();
      }
      _this.renderCart();
    });
  },
  renderCart: function () {
    if (this.data.length) {
      spanEl.textContent = "";
      var count = 1;
      var totalPrice = 0;
      var totalQuantity = 0;
      var rowsHTML = `
        <tr>
            <th>STT</th>
            <th class="title">Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Thao tác</th>
        </tr>
      `;
      for (var i in this.data) {
        var product = this.getProductId(this.data[i].id);
        rowsHTML += `
          <tr>
              <td>${count++}</td>
              <td class="title">${product.name}</td>
              <td class="price">${product.price}</td>
              <td>
                  <input type="number" value="${
                    this.data[i].quantity
                  }" min="1" data-id=${this.data[i].id}>
              </td>
              <td class="total">${this.data[i].quantity * product.price}</td>
              <td>
                  <button type="button" class="btn-remove-from-cart" data-id=${
                    this.data[i].id
                  }>Xóa</button>
              </td>
          </tr>
        `;
        totalQuantity += this.data[i].quantity;
        totalPrice += this.data[i].quantity * product.price;
      }
      rowsHTML += `
        <tr>
            <th colspan="3" class="text-bold">Tổng</th>
            <td class="price text-bold">${totalQuantity}</td>
            <td class="total text-bold" colspan="2">${totalPrice}</td>
        </tr>
      `;
      tableCart.innerHTML = rowsHTML;
      btnUpdate.style.display = null;
      btnDelete.style.display = null;
    } else {
      spanEl.textContent = "Giỏ hàng không có sản phẩm!";
      tableCart.innerHTML = "";
      btnUpdate.style.display = "none";
      btnDelete.style.display = "none";
    }
    this.handleRemoveFromCartEvents();
  },
  show: function () {
    this.renderProduct();
    this.renderCart();
    this.handleAddToCartEvents();
    this.handleUpdateCartEvents();
    this.handleRemoveAllFromCartEvents();
  },
};

app.show();
