// add_task,js file
const form = document.getElementById("taskForm");
const addTaskEl = document.getElementById("addTask");
const errorEl = document.getElementById("errorEl");
let tasks = [];

if (!(localStorage.getItem("tasks") === null)) {
  tasks = [...JSON.parse(localStorage.getItem("tasks"))];
}
console.log(tasks);
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const task = addTaskEl.value.trim();

  if (!task || task.lenght <= 0 || task == "" || task === "") {
    errorEl.innerText = "Task Cannot be empty!";
    return;
  }

  addNewEntries(addTaskEl.value.trim());
//   console.log(tasks);
  addTaskEl.value = "";
}

function addNewEntries(task) {
//   console.log(tasks);
  errorEl.innerText = "";
  if (tasks.includes(task)) {
    console.log("Sorry this task is already Stored!");
    errorEl.innerText = "Sorry this task is already Stored!";
  } else {
    const goal = {
      name: task,
      date: `${new Date().toLocaleDateString("en-GB")}`,
    };
    tasks.push(goal);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    errorEl.innerText = "";
    // console.log(goal);
    alert("Task added Successfully!");
    window.location.href = "history.html";
  }
}
