import { formatDate } from "./utils.js";

export function createTodo(
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

export const todos = [];

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