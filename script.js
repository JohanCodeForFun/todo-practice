import { formatDate } from "./utils.js";

function createTodo (title, description, dueDate, priority) {
  const todoObject = {
    title,
    description,
    dueDate,
    created: formatDate(Date()),
    priority,
  }

  return todoObject;
}

const newTodo = createTodo(
  'new todo',
  'det här är en todo anteckning',
  '2025-07-30',
  'genast'
);

console.log(newTodo)

// optional: 
//  notes, 
//  checklist).
