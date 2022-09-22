let buttonAddTodo = document.getElementById("btn-add");
let titleTodo = document.getElementById("title");
let deadlineTodo = document.getElementById("deadline");
let statusTodo = document.getElementById("status");
let searchInput = document.getElementById("search-input");
let buttonUpdate = document.getElementById("btn-edit");
let todoList = [];

//Thêm todo mới
buttonAddTodo.addEventListener("click", addTask);
function addTask() {
  let newTodo = {
    todo: titleTodo.value,
    time: deadlineTodo.value,
    status: statusTodo.value,
  };
  if (titleTodo.value.trim() != 0 && deadlineTodo.value != 0) {
    let localTodoList = JSON.parse(localStorage.getItem("localTodo"));
    if (localTodoList == null) {
      todoList = [];
    } else {
      todoList = localTodoList;
    }
    todoList.push(newTodo);
    localStorage.setItem("localTodo", JSON.stringify(todoList));
    showTodoList();
  }
}

//Hiển thị danh sách
function showTodoList() {
  let localTodoList = JSON.parse(localStorage.getItem("localTodo"));
  if (localTodoList == null) {
    todoList = [];
  } else {
    todoList = localTodoList;
  }
  let html = ``;
  let itemShow = document.querySelector(".todolist");
  todoList.forEach((data, index) => {
    html += `
    <div class="todoList row">
      <div class="col"><span class="text-title">${data.todo}</span></div>
      <div class="col"> <span class="text-time">${data.time}<span></div>
      <div class="col"><span id="statustext" class="text-status">${data.status}</span></div>
      <div class="col">
      <button class="editTask btn btn-outline-info" onClick="editTask(${index})">Sửa</button>
      <button class="deleteTask btn btn-outline-danger" onClick="deleteItem(${index})">Xóa</button>
      </div>
    </div>
    `;
  });
  itemShow.innerHTML = html;
  color();
}
showTodoList();
//Edit
function editTask(data) {
  buttonAddTodo.style.display = "none";
  buttonUpdate.style.display = "inline-block";
  titleTodo.value = todoList[data].todo;
  deadlineTodo.value = todoList[data].time;
  statusTodo.value = todoList[data].status;
  localStorage.setItem("index",data.toString());
}

buttonUpdate.addEventListener("click", () => {
  let index = localStorage.getItem("index");
  todoList.splice(index, 1, {
    todo: titleTodo.value,
    time: deadlineTodo.value,
    status: statusTodo.value,
  });
  localStorage.setItem("localTodo", JSON.stringify(todoList));
  showTodoList();
});
//Xóa
function deleteItem(index) {
  todoList.splice(index, 1);
  localStorage.setItem("localTodo", JSON.stringify(todoList));
  showTodoList();
}

function color() {
  let list = document.getElementsByClassName("todoList");
  let statusTemp = document.getElementsByClassName("text-status");
  let timeList = document.getElementsByClassName("text-time");
  let newDate = new Date();
  for (let index = 0; index < list.length; index++) {
    let dateprocess = new Date(timeList[index].outerText);
    if (statusTemp[index].outerText == "Done") {
      list[index].style.color = "#20c907";
    }
    if (statusTemp[index].outerText == "In process" && dateprocess < newDate) {
      list[index].style.color = "red";
    }
    if (statusTemp[index].outerText == "In process" && dateprocess >= newDate) {
      list[index].style.color = "orange";
    }
  }
}

//Tìm kiếm
function search() {
  let params = searchInput.value;
  if (params.trim() != "") {
    let html = ``;
    let itemShow = document.querySelector(".todoList");
    todoList.forEach((data, index) => {
      if (data.todo == params) {
        html += `
        <div class="todoList row">
          <div class="col"><span class="text-title">${data.todo}</span></div>
          <div class="col"> <span class="text-time">${data.time}<span></div>
          <div class="col"><span class="text-status">${data.status}</span></div>
          <div class="col">
            <button class="editTask btn btn-outline-info" onClick="editTask(${index})">Sửa</button>
            <button class="deleteTask btn btn-outline-danger" onClick="deleteItem(${index})">Xóa</button>
          </div>
        </div>
        `;
      }
      itemShow.innerHTML = html;
    });
  } else showTodoList();
}
