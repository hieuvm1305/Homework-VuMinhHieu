let buttonAddTodo = document.getElementById("btn-add");
let titleTodo = document.getElementById("title");
let deadlineTodo = document.getElementById("deadline");
let statusTodo = document.getElementById("status");
let searchInput = document.getElementById("search-input");
let buttonUpdate = document.getElementById("btn-edit");
let todoList;


//Thêm todo mới
buttonAddTodo.addEventListener("click", addTask);
function addTask() {
  let newTodo = {
    todo: titleTodo.value,
    time: deadlineTodo.value,
    status: statusTodo.value,
  };
  if (titleTodo.value.trim() != 0) {
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
  let itemShow = document.querySelector(".todoList");
  todoList.forEach((data, index) => {
    html += `
    <div class="todoList row">
      <div class="col"><span class="text-title">${data.todo}</span></div>
      <div class="col"> <span class="text-time">${data.time}<span></div>
      <div class="col"><span class="text-status">${data.status}</span></div>
      <div class="col">
      <button class="editTask btn btn-warning" onClick="editTask(${index})">Sửa</button>
      <button class="deleteTask btn btn-danger" onClick="deleteItem(${index})">Xóa</button>
      </div>
    </div>
    `;
  });
  itemShow.innerHTML = html;
  color();
}
showTodoList();

//Edit
function editTask(index) {
  // buttonAddTodo.style.display = "none";
  // buttonUpdate.style.display = "inline-block";
  titleTodo.value = todoList[index].todo;
  deadlineTodo.value = todoList[index].time;
  statusTodo.value = todoList[index].status;
}

// buttonUpdate.addEventListener("click", () => {
//   todoList.splice(indexlocal, 1, {
//     todo: titleTodo.value,
//     time: deadlineTodo.value,
//     status: statusTodo.value,
//   });
// });

//Xóa
function deleteItem(index) {
  todoList.splice(index, 1);
  localStorage.setItem("localTodo", JSON.stringify(todoList));
  showTodoList();
}

//Thêm màu cho status
function color() {
  let statusTemp = document.getElementsByClassName("text-status");
  let timeList = document.getElementsByClassName("text-time");
  let newDate = new Date();
  for (let index = 0; index < statusTemp.length; index++) {
    let dateprocess = new Date(timeList[index].outerText);
    if (statusTemp[index].outerText == "Done") {
      statusTemp[index].style.color = "green";
    }
    if (statusTemp[index].outerText == "In process" && dateprocess < newDate) {
      statusTemp[index].style.color = "red";
    }
    if (statusTemp[index].outerText == "In process" && dateprocess >= newDate) {
      statusTemp[index].style.color = "orange";
    }
  }
}
// addAttribute sau khi thêm element, thực hiện sau.

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
            <button class="editTask btn btn-warning onClick="editTask(${index})">Sửa</button>
            <button class="deleteTask btn btn-danger" onClick="deleteItem(${index})">Xóa</button>
          </div>
        </div>
        `;
        itemShow.innerHTML = html;
      }
    });
  } else showTodoList();
}
