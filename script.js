import { formatDate } from "./utils.js";

let projectHeader = document.querySelector('[data-id="project-title"]')
let todoDone = document.querySelector('[data-id="done"]')
let todoTitle = document.querySelector('[data-id="title"]')
let todoContent = document.querySelector('[data-id="description"]')
let todoDueDate = document.querySelector('[data-id="dueDate"]')
let todoCreated = document.querySelector('[data-id="created"]')
let todoPriority = document.querySelector('[data-id="priority"]')

function createTodo(
  project = "nytt projekt",
  done = false,
  title,
  description,
  dueDate,
  priority
) {
  return {
    project,
    content: {
      done,
      title,
      description,
      dueDate,
      created: formatDate(Date()),
      priority,
    },
  };
}

const newTodo = createTodo(
  undefined,
  true,
  "new todo",
  "Skapa första dåligt gränssnitt för att ha som mall att visa anteckningar",
  "2025-07-30",
  "genast"
);

projectHeader.textContent = newTodo.project

todoDone.checked = newTodo.content.done
todoTitle.textContent = newTodo.content.title
todoContent.textContent = newTodo.content.description
todoCreated.textContent = newTodo.content.created
todoDueDate.textContent = newTodo.content.dueDate
todoPriority.textContent = newTodo.content.priority
