// history.js file
// const goalsEl = document.getElementById("goals");
// let tasks = [];

// if (!(localStorage.getItem("tasks") === null)) {
//   tasks = [...JSON.parse(localStorage.getItem("tasks"))];
// }

// // clear all previous entries
// goalsEl.innerHTML = "";

// for (i = 0; i < tasks.length; i++) {
//   console.log(`${tasks[i].name}\n`);
//   goalsEl.innerHTML += `<div class="task">
//         <p>${tasks[i].name}</p>
//         <p><i>${tasks[i].date}</i></p>
//       </div>`;
// }

const goalsEl = document.getElementById("goals");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Clear previous
goalsEl.innerHTML = "";

// Create nodes safely
tasks.forEach(task => {
  const div = document.createElement("div");
  div.classList.add("task");

  const nameEl = document.createElement("p");
  nameEl.textContent = task.name;

  const dateEl = document.createElement("p");
  const iEl = document.createElement("i");
  iEl.textContent = task.date;
  dateEl.appendChild(iEl);

  div.appendChild(nameEl);
  div.appendChild(dateEl);
  goalsEl.appendChild(div);
});
