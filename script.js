import { todos, sortedTodos } from "./createTodo.js";
import { openProject } from "./openProject.js";

let tabList = document.querySelector(".tab-list");

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
