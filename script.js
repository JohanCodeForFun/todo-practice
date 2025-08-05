import { todos, sortedTodos } from "./createTodo.js";

let tabList = document.querySelector(".tab-list");
let projectHeader = document.querySelector('[data-id="project-title"]');

function openProject(evt, input) {
  if (input === "new") {
    console.error("show create", input, "project!");
  } else {
    // Remove old todo sections
    document
      .querySelectorAll(".todo-container")
      .forEach((section) => section.remove());

    // Filter todos for the selected project
    const listProject = todos.filter((todo) => todo.project === input);
    if (listProject.length === 0) return;

    // Set project title
    projectHeader.textContent = listProject[0].project;

    // For each todo in the project, create a section
    listProject.forEach(({ content }) => {
      const { done, title, description, dueDate, created, priority } = content;

      // Section
      const section = document.createElement("section");
      section.classList = "todo-container";

      // Title
      const h3 = document.createElement("h3");
      h3.classList = "data-id=title";
      h3.textContent = title;
      section.appendChild(h3);

      // Description
      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.dataset.id = "description";
      descriptionParagraph.textContent = description;
      section.appendChild(descriptionParagraph);

      // Table
      const table = document.createElement("table");

      // Table head
      const thead = document.createElement("thead");
      const trHead = document.createElement("tr");

      ["Done", "Created", "Due", "Priority"].forEach((text) => {
        const th = document.createElement("th");
        th.textContent = text;
        trHead.appendChild(th);
      });
      thead.appendChild(trHead);
      table.appendChild(thead);

      // Table body
      const tbody = document.createElement("tbody");
      const trBody = document.createElement("tr");

      // Done checkbox
      const tdDone = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.dataset.id = "checkbox";
      checkbox.type = "checkbox";
      checkbox.checked = !!done;
      tdDone.appendChild(checkbox);
      trBody.appendChild(tdDone);

      // Created, Due, Priority
      [created, dueDate, priority].forEach((val, idx) => {
        const td = document.createElement("td");
        td.textContent = val;

        if (idx === 0) td.dataset.id = "created";
        if (idx === 1) td.dataset.id = "dueDate";
        if (idx === 2) td.dataset.id = "priority";

        trBody.appendChild(td);
      });

      tbody.appendChild(trBody);
      table.appendChild(tbody);

      section.appendChild(table);

      projectHeader.insertAdjacentElement("afterend", section);
    });
  }
}

const distinctProjects = [
  ...new Set(sortedTodos.map((project) => project.project)),
];

function createButtonsFromProjectList(stringArray) {
  document.querySelectorAll(".tablinks.dynamic").forEach((btn) => btn.remove());

  let buttonList = stringArray.map((project) => {
    const button = document.createElement("button");
    (button.classList = "tablinks"), "dynamic";
    button.dataset.project = project;
    button.textContent = project;

    return button;
  });

  buttonList.forEach((btn) => tabList.appendChild(btn));

  return buttonList;
}

createButtonsFromProjectList(distinctProjects);

document.querySelectorAll(".tablinks").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    openProject(event, btn.dataset.project);
  });
});
