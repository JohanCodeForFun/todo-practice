import { formatDate } from "./utils.js";

let projectHeader = document.querySelector('[data-id="project-title"]')
let projectGroup = document.querySelector('[data-id="project-group"]')
let todoDone = document.querySelector('[data-id="done"]')
let todoTitle = document.querySelector('[data-id="title"]')
let todoContent = document.querySelector('[data-id="description"]')
let todoDueDate = document.querySelector('[data-id="dueDate"]')
let todoCreated = document.querySelector('[data-id="created"]')
let todoPriority = document.querySelector('[data-id="priority"]')

const todos = [];

function openProject(evt, input) {
  if (input === "new") {
    console.log("show create", input, "project!")
  } else {
    console.log("list project tab..")
  }
}

document.querySelectorAll('.tablinks').forEach(btn => {
  btn.addEventListener('click', function(event) {
    openProject(event, btn.dataset.project);
  })
})

function createTodo(
  project = "nytt projekt",
  done = false,
  title,
  description,
  dueDate,
  priority
) {
  todos.push({
    project,
    content: {
      done,
      title,
      description,
      dueDate,
      created: formatDate(Date()),
      priority,
    },
  });
}

const newTodo1 = createTodo(
  "Webutveckling",
  true,
  "Utveckla UI",
  "Skapa första dåligt gränssnitt för att ha som mall att visa anteckningar",
  "2025-07-30",
  "genast"
);
const newTodo2 = createTodo(
  "Spelutveckling",
  false,
  "Hav som böljar",
  "Lägg till hav som bööljar när det blåser",
  "2025-07-30",
  "genast"
);
const newTodo3 = createTodo(
  "Spelutveckling",
  false,
  "Vind fysik",
  "Lägg till vind fysik som får båten att segla iväg",
  "2025-07-30",
  "genast"
);
const newTodo4 = createTodo(
  undefined,
  false,
  "Vind fysik",
  "Lägg till vind fysik som får båten att segla iväg",
  "2025-07-30",
  "genast"
);
const newTodo5 = createTodo(
  "Webutveckling",
  false,
  "Vind fysik",
  "Lägg till vind fysik som får båten att segla iväg",
  "2025-07-30",
  "genast"
);

projectHeader.textContent = todos[1].project

todoDone.checked = todos[1].content.done
todoTitle.textContent = todos[1].content.title
todoContent.textContent = todos[1].content.description
todoCreated.textContent = todos[1].content.created
todoDueDate.textContent = todos[1].content.dueDate
todoPriority.textContent = todos[1].content.priority

const sortedTodos = todos.slice().sort((a, b) => {
  if (a.project < b.project) return -1;
  if (a.project > b.project) return 1;
  return 0;
})

projectGroup.innerHTML = sortedTodos.map(todo => {
return `
  <h2 data-id="project-title">${todo.project}!</h2>
        <section class="todo-container">
          <h3 data-id="title">${todo.content.title}</h3>
          <p data-id="description"></p>

          <table>
            <thead>
              <tr>
                <th>Done</th>
                <th>Created</th>
                <th>Due</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><input type="checkbox" ${todo.content.done ? "checked" : ""} name="" data-id="done" /></th>
                <td data-id="priority">${todo.content.priority}</td>
                <td data-id="created">${todo.content.created}</td>
                <td data-id="dueDate">${todo.content.dueDate}</td>
              </tr>
            </tbody>
          </table>
        </section>
  `}).join("");
