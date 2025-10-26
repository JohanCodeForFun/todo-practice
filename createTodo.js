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
      created: formatDate(new Date()),
      priority,
    },
  });
}

export const todos = [];

createTodo(
  "Webutveckling",
  true,
  "Utveckla UI",
  "Skapa första dåligt gränssnitt för att ha som mall att visa anteckningar",
  "2025-07-30",
  "genast"
);
createTodo(
  "Spelutveckling",
  false,
  "Hav som böljar",
  "Lägg till hav som bööljar när det blåser",
  "2025-07-30",
  "genast"
);
createTodo(
  "Spelutveckling",
  false,
  "Vind fysik",
  "Lägg till vind fysik som får båten att segla iväg",
  "2025-07-30",
  "genast"
);
createTodo(
  undefined,
  false,
  "Vind fysik",
  "Lägg till vind fysik som får båten att segla iväg",
  "2025-07-30",
  "genast"
);
createTodo(
  "Webutveckling",
  false,
  "Vind fysik",
  "Lägg till vind fysik som får båten att segla iväg",
  "2025-07-30",
  "genast"
);

createTodo(
  "Trädgård",
  false,
  "Plantera blommor",
  "Plantera nya tulpanlökar i rabatten",
  "2025-08-10",
  "låg"
);
createTodo(
  "Hälsa",
  true,
  "Springa 5km",
  "Morgonlöpning i parken",
  "2025-08-02",
  "medel"
);
createTodo(
  "Matlagning",
  false,
  "Testa nytt recept",
  "Laga vegetarisk lasagne till middag",
  "2025-08-07",
  "hög"
);
createTodo(
  "Läsning",
  false,
  "Läs en bok",
  "Läs ut 'Sapiens' av Yuval Noah Harari",
  "2025-08-15",
  "låg"
);
createTodo(
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
