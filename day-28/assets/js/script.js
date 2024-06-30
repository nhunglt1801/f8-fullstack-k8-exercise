var inputBox = document.querySelector("#input-box");
var listContainer = document.querySelector("#list-container");
var btnAdd = document.querySelector(".add-btn");
document.addEventListener("DOMContentLoaded", function () {
  inputBox.focus();
});

function addTask(e) {
  var input = e.target.parentElement.querySelector(".input-box");
  var inputValue = input.value.trim();
  if (!inputValue) {
    input.focus();
    return;
  }
  var li = document.createElement("li");
  li.classList.add("list-item");
  li.innerHTML = `
    <span class="text">${inputValue}</span>
    <i class="fa-solid fa-pen-to-square edit-btn"></i>
    <i class="fa-solid fa-trash delete-btn"></i>`;
  listContainer.appendChild(li);
  input.value = "";
  input.focus();
}

function editTask(li) {
  var inputValue = li.querySelector(".text").textContent;
  li.classList.add("row");
  li.classList.remove("list-item");
  li.innerHTML = `
    <input type="text" class="input-box" value="${inputValue}" placeholder="Update Task">
    <button class="add-btn">Add Task</button>`;
}

function updateTask(li) {
  var input = li.querySelector(".input-box");
  var inputValue = input.value.trim();
  if (!inputValue) {
    input.focus();
    return;
  }
  li.classList.add("list-item");
  li.classList.remove("row");
  li.innerHTML = `
    <span class="text">${inputValue}</span>
    <i class="fa-solid fa-pen-to-square edit-btn"></i>
    <i class="fa-solid fa-trash delete-btn"></i>`;
}

function deleteTask(li) {
  li.remove();
}

btnAdd.addEventListener("click", addTask);
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask(e);
});

listContainer.addEventListener("click", function (e) {
  var childEl = e.target;
  var li = childEl.parentElement;
  if (childEl.classList.contains("fa-trash")) {
    deleteTask(li);
  } else if (childEl.classList.contains("fa-pen-to-square")) {
    editTask(li);
  } else if (childEl.classList.contains("add-btn")) {
    updateTask(li);
  }
  childEl.addEventListener("keyup", function (e) {
    if (e.key === "Enter") updateTask(li);
  });
});
