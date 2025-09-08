const getYealEl = document.getElementById("yearElFooter");
const motivationalEl = document.getElementById("motivationEl");
const prevAchievmentEl = document.getElementById("prev-achievmentEl");
const allQuotes = { quotes: null };
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const currDate = new Date().getFullYear();
getYealEl.innerText += ` ${currDate} | Maalug Jonathan`;

function downloadLocalStorage() {
  const data = localStorage.getItem("quotes");
  allQuotes["quotes"] = JSON.parse(data);

  const blob = new Blob([JSON.stringify(allQuotes["quotes"], null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();

  URL.revokeObjectURL(url);
}

async function fetchQuotesFromJson() {
  fetch("./quotes.json")
    .then((res) => res.json())
    .then((data) => {
      allQuotes["quotes"] = data;
      addQuotesToDom(data);
    })
    .catch((err) => console.error(err));
}

function addQuotesToDom(quotes) {
  //   console.log(quotes[Math.floor(Math.random() * 50)]["h"]);
  motivationalEl.innerHTML = quotes[Math.floor(Math.random() * 50)]["h"];
}

fetchQuotesFromJson();

// display
// latest 5
// decremt from szie -1 till we reach the desired item count

// tasks.forEach((task, index) => {
// //   console.log(task, index, tasks.length);

// });
let breakCond = 0;

for (let i = tasks.length - 1; i >= 0; i--) {
  if (breakCond >= 5) break;

  const myDiv = document.createElement("div");
  myDiv.classList.add("tasks");

  const nameEl = document.createElement("p");
  nameEl.textContent = tasks[i].name;

  const dateEl = document.createElement("p");
  const iEl = document.createElement("i");
  iEl.textContent = tasks[i].date;

  dateEl.appendChild(iEl);
  myDiv.appendChild(nameEl);
  myDiv.appendChild(dateEl);
  prevAchievmentEl.appendChild(myDiv);

  breakCond++;
}
