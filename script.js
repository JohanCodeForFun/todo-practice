import { formatDate } from "./utils.js";
import { createTodo, todos } from "./createTodo.js";

let tabList = document.querySelector(".tab-list");
let projectHeader = document.querySelector('[data-id="project-title"]');
let projectGroup = document.querySelector('[data-id="project-group"]');
let todoDone = document.querySelector('[data-id="done"]');
let todoTitle = document.querySelector('[data-id="title"]');
let todoContent = document.querySelector('[data-id="description"]');
let todoDueDate = document.querySelector('[data-id="dueDate"]');
let todoCreated = document.querySelector('[data-id="created"]');
let todoPriority = document.querySelector('[data-id="priority"]');

function openProject(evt, input) {
  if (input === "new") {
    console.error("show create", input, "project!");
  } else {
    const listProject = todos.filter(
      (filterProject) => input === filterProject.project
    );

    projectHeader.innerHTML = "";
    let todoContainer = document.querySelectorAll('.todo-container')
    todoContainer.forEach(section => section.remove())

    const { project } = listProject[0];

    projectHeader.textContent = project;

    listProject.forEach((x) => {
      const { done, title, description, dueDate, created, priority } =
        x.content;

      const section = document.createElement("section");
      section.classList = "todo-container";

      const h3 = document.createElement("h3");
      h3.classList = "data-id=title";
      h3.textContent = title;
      section.appendChild(h3);
      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.textContent = description;

      section.appendChild(descriptionParagraph);

      const tableList = ['Done', 'Created', 'Due', 'Priority'];
      const table = document.createElement('table')
      const thead = document.createElement('thead')
      const tr = document.createElement('tr')
      
      thead.appendChild(tr)
      tableList.forEach(x => {
        const th = document.createElement('th')
        
        th.textContent = x
        tr.appendChild(th)
      })

      table.appendChild(thead)
      section.appendChild(table)

      projectHeader.insertAdjacentElement("afterend", section);
    });
  }
}

const sortedTodos = todos.slice().sort((a, b) => {
  if (a.project < b.project) return -1;
  if (a.project > b.project) return 1;
  return 0;
});

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

// projectGroup.innerHTML = sortedTodos
//   .map((todo) => {
//     return `
//   <h2 data-id="project-title">${todo.project}!</h2>
//         <section class="todo-container">
//           <h3 data-id="title">${todo.content.title}</h3>
//           <p data-id="description"></p>

//           <table>
//             <thead>
//               <tr>
//                 <th>Done</th>
//                 <th>Created</th>
//                 <th>Due</th>
//                 <th>Priority</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th><input type="checkbox" ${
//                   todo.content.done ? "checked" : ""
//                 } name="" data-id="done" /></th>
//                 <td data-id="priority">${todo.content.priority}</td>
//                 <td data-id="created">${todo.content.created}</td>
//                 <td data-id="dueDate">${todo.content.dueDate}</td>
//               </tr>
//             </tbody>
//           </table>
//         </section>
//   `;
//   })
//   .join("");
