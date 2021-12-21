let projects = [];
let ulDom = document.querySelector(".navbar-nav");
let taskDom = document.querySelector(".tasklist");
let addButtonDom = document.getElementById("addButton");

class Project {
  constructor(title, description, dueDate, priority, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
  }
}

function newProject(
  newTitle,
  newDescription,
  newdueDate,
  newPriority,
  newChecklist
) {
  projects.push(
    new Project(newTitle, newDescription, newdueDate, newPriority, newChecklist)
  );
  renderLi();
}

function renderLi() {
  ulDom.innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    let liTemplate = `<li class="nav-item">
<a onclick="render(${i})" class="nav-link">
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="far"
    data-icon="circle"
    class="svg-inline--fa fa-circle fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
    ></path>
  </svg>
  <span class="link-text">${projects[i].title}</span>
</a>
</li>`;
    let li = document.createElement("li");
    li.innerHTML = liTemplate;
    li.classList.add("nav-item");
    ulDom.appendChild(li);
  }
}

function render(i) {
  taskDom.innerHTML = "";
  let template = `
  <div class="taskbar-checkbox">
  <input type="checkbox" />
  </div>
  <div class="taskbar-wrapper">
  <div class="taskbar-title">${projects[i].title}, </div>
  <div class="taskbar-due">${projects[i].dueDate}</div>
  <div class="taskbar-notes">
  ${projects[i].description}
  </div>
  </div>
  <div class="taskbar-edit">X</div>`;
  let div = document.createElement("div");
  div.innerHTML = template;
  div.classList.add("taskbar");
  taskDom.appendChild(div);
}
