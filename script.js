import { formatDate } from "./utils.js";

let projectHeader = document.querySelector('[data-id="project-title"]')
let todoDone = document.querySelector('[data-id="done"]')
let todoTitle = document.querySelector('[data-id="title"]')
let todoContent = document.querySelector('[data-id="description"]')
let todoDueDate = document.querySelector('[data-id="dueDate"]')
let todoCreated = document.querySelector('[data-id="created"]')
let todoPriority = document.querySelector('[data-id="priority"]')

const todos = [];

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
  true,
  "Hav som böljar",
  "Lägg till hav som bööljar när det blåser",
  "2025-07-30",
  "genast"
);
const newTodo3 = createTodo(
  "Spelutveckling",
  true,
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
