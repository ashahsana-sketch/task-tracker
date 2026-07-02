const taskPrint = document.querySelector("#tasks-print");
const app = document.querySelector("#app");
export const statsDiv = document.querySelector("#stats");
export const inComplete = document.querySelector("#inComplete");
const addButton = document.querySelector("#save-task-button");
const errormessage = document.querySelector("#error-message");
const taskForm = document.querySelector("#form-element");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority-input");
export const highPriorityDiv = document.querySelector("#HighPriority");
const clearAllButton = document.querySelector("#clear-all");
const emptyMessage = document.querySelector("#empty-message");
function showHeader() {
    const h1 = document.querySelector("#h1");
    const h2 = document.querySelector("#h2");
    if (h1)
        h1.textContent = "Task Tracker...";
    if (h2)
        h2.textContent = "An application to learn TypeScript";
}
import { renderTasks, isTaskPriority } from "./render.js";
import { saveTasks, loadTasks } from "./storage.js";
import { deleteTask, showHighPriorityTasks, Taskstatistics, showIncompleteTasks, addTask } from "./tasks.js";
export const tasks = [
    { id: 1, name: "Clean room", status: "completed", priority: "Medium" },
    { id: 2, name: "Prepare presentation", status: "pending", priority: "High" },
    { id: 3, name: "Call doctor", status: "pending", priority: "Low" }
];
export let nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1;
taskForm?.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const taskInput = document.querySelector("#task-input");
    const priorityInput = document.querySelector("#priority-input");
    if (!taskInput || !priorityInput)
        return;
    const name = taskInput.value.trim();
    const priority = priorityInput.value.trim();
    if (!name) {
        if (errormessage) {
            console.log("Task name is required.");
            errormessage.textContent = "Task name is required.";
        }
        return;
    }
    if (!isTaskPriority(priority)) {
        if (errormessage) {
            console.log("Invalid priority selected.");
            errormessage.textContent = "Invalid priority selected.";
        }
        return;
    }
    if (errormessage) {
        console.log("error message cleared");
        errormessage.textContent = "";
    }
    if (tasks.some(task => task.name.toLowerCase() === name.toLowerCase())) {
        if (errormessage) {
            errormessage.textContent = "A task with this name already exists.";
        }
        return;
    }
    addTask(name, priority);
    taskForm?.reset();
}
// function to clear all tasks
clearAllButton?.addEventListener("click", () => {
    if (!confirm("Are you sure you want to delete all tasks?"))
        return;
    tasks.length = 0; // clear array
    localStorage.removeItem("tasks"); // clear storage
    updateUI(); // rerender page
});
export function updateUI() {
    renderTasks();
    Taskstatistics();
    showIncompleteTasks();
    showHighPriorityTasks();
    saveTasks();
}
showHeader();
addTask("Handla", "Medium");
loadTasks();
updateUI();
//# sourceMappingURL=dag10.js.map