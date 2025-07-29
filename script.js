import { formatDate } from "./utils.js";

function createTodo(
  project = "nytt projekt",
  title,
  description,
  dueDate,
  priority
) {
  return {
    project,
    content: {
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
  "new todo",
  "det här är en todo anteckning",
  "2025-07-30",
  "genast"
);

console.log(newTodo);

// optional:
//  notes,
//  checklist).
