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

const newTodo6 = createTodo(
  "Trädgård",
  false,
  "Plantera blommor",
  "Plantera nya tulpanlökar i rabatten",
  "2025-08-10",
  "låg"
);
const newTodo7 = createTodo(
  "Hälsa",
  true,
  "Springa 5km",
  "Morgonlöpning i parken",
  "2025-08-02",
  "medel"
);
const newTodo8 = createTodo(
  "Matlagning",
  false,
  "Testa nytt recept",
  "Laga vegetarisk lasagne till middag",
  "2025-08-07",
  "hög"
);
const newTodo9 = createTodo(
  "Läsning",
  false,
  "Läs en bok",
  "Läs ut 'Sapiens' av Yuval Noah Harari",
  "2025-08-15",
  "låg"
);
const newTodo10 = createTodo(
  "Resa",
  false,
  "Boka hotell",
  "Boka hotell för helgresan till Göteborg",
  "2025-08-12",
  "hög"
);

export const sortedTodos = todos.slice().sort((a, b) => {
  if (a.project < b.project) return -1;
  if (a.project > b.project) return 1;
  return 0;
});
