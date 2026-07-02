import { tasks } from "./dag10.js";
import { deleteTask } from "./tasks.js";
const taskPrint = document.querySelector("#tasks-print");
const app = document.querySelector("#app");
function getStatusButtonText(status) {
    return status === "completed" ? "Completed" : "Incomplete";
}
function getStatusButtonColor(status) {
    return status === "completed" ? "green" : "blue";
}
export function isTaskPriority(value) {
    return value === "Low" || value === "Medium" || value === "High";
}
function getPriorityButtonColor(priority) {
    if (priority === "High")
        return "red";
    if (priority === "Medium")
        return "orange";
    return "green";
}
function toggleTaskStatus(id) {
    const task = tasks.find((item) => item.id === id);
    if (!task)
        return;
    task.status = task.status === "completed" ? "pending" : "completed";
    renderTasks();
}
export function renderTasks() {
    const target = taskPrint || app;
    if (!target)
        return;
    target.innerHTML = "";
    for (const task of tasks) {
        const cardDisplay = document.createElement("div");
        cardDisplay.className = "bg-complate m-3";
        const cardTitle = document.createElement("h3");
        cardTitle.textContent = `${task.id}. ${task.name}`;
        const cardStatus = document.createElement("p");
        cardStatus.textContent = `Status: ${task.status}`;
        const cardPriority = document.createElement("p");
        cardPriority.textContent = `Priority: ${task.priority}`;
        const statusButton = document.createElement("button");
        statusButton.textContent = getStatusButtonText(task.status);
        statusButton.style.backgroundColor = getStatusButtonColor(task.status);
        statusButton.style.color = "white";
        //statusButton.style.border = "none";
        statusButton.style.padding = "0.4rem 0.8rem";
        statusButton.style.cursor = "pointer";
        statusButton.addEventListener("click", () => toggleTaskStatus(task.id));
        const priorityButton = document.createElement("button");
        priorityButton.textContent = task.priority;
        priorityButton.style.backgroundColor = getPriorityButtonColor(task.priority);
        priorityButton.style.color = "white";
        //priorityButton.style.border = "none";
        priorityButton.style.padding = "0.4rem 0.8rem";
        priorityButton.style.marginLeft = "0.5rem";
        priorityButton.disabled = true;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Task";
        deleteButton.style.backgroundColor = "gray";
        deleteButton.style.color = "white";
        deleteButton.style.padding = "0.4rem 0.8rem";
        deleteButton.style.marginLeft = "0.5rem";
        deleteButton.addEventListener("click", (event) => {
            event.preventDefault();
            deleteTask(task.id);
        });
        cardDisplay.append(cardTitle, cardStatus, cardPriority, statusButton, priorityButton, deleteButton);
        console.log(`Task rendered: ${task.name}`);
        target.append(cardDisplay);
    }
}
//# sourceMappingURL=render.js.map