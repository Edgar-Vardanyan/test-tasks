const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let toastState = false;

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    if (!toastState) {
      showToast("Please enter a task name.");
    }
    return;
  }

  const taskTextEl = createElement("span", "", taskText);

  const li = createElement("li");
  li.appendChild(taskTextEl);
  li.onclick = () => li.classList.toggle("checked");

  const actionsDiv = createElement("div", "actions");
  const removeButton = createElement("button", "remove", "Remove");
  removeButton.onclick = () => taskList.removeChild(li);

  actionsDiv.appendChild(removeButton);
  li.appendChild(actionsDiv);
  taskList.appendChild(li);

  taskInput.value = "";
}

function createElement(tag, className = "", content = "") {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = content;
  return element;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";
  toastState = true;
  setTimeout(() => {
    toast.className = "toast";
    toastState = false;
  }, 3000);
}
