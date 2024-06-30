var inputBox = document.querySelector("#input-box");
var listContainer = document.querySelector("#list-container");
var btnAdd = document.querySelector(".add-btn");
document.addEventListener("DOMContentLoaded", function () {
  inputBox.focus();
});
function addTask(e) {
  var input = e.target.parentElement.querySelector(".input-box");
  var inputValue = input.value;
  if (!inputValue) {
    input.focus();
    return;
  } else {
    var li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML = `
    <span class="text">${inputValue}</span>
    <i class="fa-solid fa-pen-to-square edit-btn"></i>
    <i class="fa-solid fa-trash delete-btn"></i>`;
    listContainer.appendChild(li);
  }
  input.value = "";
  input.focus();
}
btnAdd.addEventListener("click", function (e) {
  addTask(e);
});
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask(e);
  }
});

listContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("fa-pen-to-square")) {
    var li = e.target.parentElement;
    var inputValue = li.querySelector(".text").textContent;
    li.classList.add("row");
    li.classList.remove("list-item");
    li.innerHTML = `
    <input type="text" class="input-box" value="${inputValue}" placeholder="Update Task">
    <button class="add-btn">Add Task</button>`;
  }
  if (e.target.classList.contains("add-btn")) {
    var li = e.target.parentElement;
    var inputValue = li.querySelector(".input-box").value;
    li.classList.add("list-item");
    li.classList.remove("row");
    li.innerHTML = `
    <span class="text">${inputValue}</span>
    <i class="fa-solid fa-pen-to-square edit-btn"></i>
    <i class="fa-solid fa-trash delete-btn"></i>`;
  }
  e.target.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var li = e.target.parentElement;
      var inputValue = li.querySelector(".input-box").value;

      li.classList.add("list-item");
      li.classList.remove("row");
      if (
        inputValue === "" ||
        inputValue === null ||
        inputValue === undefined
      ) {
        li.innerHTML = `
        <span class="text"></span>
        <i class="fa-solid fa-pen-to-square edit-btn"></i>
        <i class="fa-solid fa-trash delete-btn"></i>`;
      } else {
        li.innerHTML = `
        <span class="text">${inputValue}</span>
        <i class="fa-solid fa-pen-to-square edit-btn"></i>
        <i class="fa-solid fa-trash delete-btn"></i>`;
      }
    }
  });
});
