// Header
function showHeader() {
    const h1 = document.querySelector("#h1");
    const h2 = document.querySelector("#h2");
    const h3 = document.querySelector("#h3");
    h1.textContent = "Task Tracker";
    h2.textContent = "Task Manage Application ";
    h3.textContent = "===================";
}
// Initialize
showHeader();
// Initialze data
let tasks = [
    { id: 2, name: "Clean room", status: "completed", priority: "Medium" },
    { id: 3, name: "Prepare presentation", status: "pending", priority: "High" },
    { id: 4, name: "Call doctor", status: "pending", priority: "Low" }
];
let nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1; // calc to the last maximum ID number assigned 
const addButton = document.querySelector("#a-button");
const taskInput = document.querySelector("#task-input"); // is sy taskInput.value mein aik input store hu jaye gi 
const priorityInput = document.querySelector("#priority-input");
const app = document.querySelector("#app");
const taskGrid = document.querySelector("#task-grid");
const tableBody = document.querySelector("#task-table-body");
const header = document.querySelector("#main-header");
const statsDiv = document.querySelector("#stats");
const inComplete = document.querySelector("#inComplete");
// add one task manually
function addTask1(task) {
    tasks.push(task);
    //renderTasks();
}
// =======================
// TYPE GUARD
// =======================
function isTaskPriority(value) {
    return value === "Low" || value === "Medium" || value === "High";
}
// =======================
// ADD TASK
// =======================
function addTask(name, priority) {
    const newTask = {
        id: nextId++,
        name,
        status: "pending",
        priority
    };
    tasks.push(newTask);
    renderTasks();
    countCompletedTasks();
    showIncompleteTasks();
    showHighPriorityTasks();
}
// // function add task
// function addTask(name: string, priority: TaskPriority): void {
//     const newTask: Task = { id: nextId++, name, status: "pending", priority };
//     tasks.push(newTask);
//     renderTasks();
//console.table(tasks);
// Update statistics
//countCompletedTasks();
//showIncompleteTasks();
//showCompletedTasks();
//showHighPriorityTasks();
//showLowPriorityTasks();
//ascendingPriority();
//if (taskInput) taskInput.value = "";
//}
// ---- calling functions one by one
// sample extra task (kept from original)
addTask1({ id: 1, name: "Make program", status: "completed", priority: "High" });
// user interface jab ye teno input mil jaen gi turuns when the 
// Save button is clicked
// 👉 reads input values
// 👉 validates them
// 👉 creates a new task safely using TypeScript types
if (addButton && taskInput && priorityInput) {
    addButton.addEventListener("click", () => {
        const taskName = taskInput.value.trim();
        if (!taskName) {
            console.log("Task name is required.");
            return;
        }
        const value = priorityInput.value;
        let priority = "Low";
        if (isTaskPriority(value)) {
            priority = value;
        }
        addTask(taskName, priority);
        // clear input after adding
        taskInput.value = "";
    });
}
renderTasks();
countCompletedTasks();
showIncompleteTasks();
showHighPriorityTasks();
// Console helpersfunction showTasksInConsole(): void {
//     tasks.forEach((task) => {
//         console.log(`${task.name.padEnd(30)}${task.status.padEnd(20)}${task.priority.padEnd(8)}`);
//     });
// }
// 
// function showTasksInTable(): void {
//     console.table(tasks);
// }
function countCompletedTasks() {
    console.log("::::::::::::Statistics:::::::");
    let completed = 0;
    let incomplete = 0;
    let high = 0;
    let medium = 0;
    let low = 0;
    for (const task of tasks) {
        if (task.status === "completed")
            completed++;
        else
            incomplete++;
        if (task.priority === "High")
            high++;
        else if (task.priority === "Medium")
            medium++;
        else
            low++;
    }
    if (!statsDiv)
        return;
    console.log("Completed:", completed);
    console.log("Incomplete:", incomplete);
    console.log("High:", high);
    console.log("Medium:", medium);
    console.log("Low:", low);
    statsDiv.innerHTML = `
        <h3>Statistics</h3>
        <ul> Total Task:${tasks.length}
        <ul>Completed: ${completed}</ul>
        <ul>Incomplete: ${incomplete}</ul>
        <ul>High Priority: ${high}</ul>
        <ul>Medium Priority: ${medium}</ul>
        <ul>Low Priority: ${low}</ul>
    `;
}
function showIncompleteTasks() {
    inComplete.innerHTML = "<h3>Incomplete Tasks</h3>";
    for (const task of tasks) {
        if (task.status === "pending") {
            inComplete.innerHTML += `<p>${task.name}</p>`;
        }
    }
}
// function showCompletedTasks(): void {
//     console.log("---------------- Incomplete Task ------------------")
//     for (const task of tasks) if (task.status === "completed") console.log(`Task-Name: ${task.name}`);
// }
function showHighPriorityTasks() {
    const HighPriority = document.querySelector("#HighPriority");
    HighPriority.innerHTML = `<h3> High Priority List</h3>`;
    console.log("------------High priority tasks:-----------------");
    for (const task of tasks) {
        if (task.priority === "High") {
            console.log(`Task-Name: ${task.name}`);
            HighPriority.innerHTML += `<p>${task.name}</p>`;
        }
    }
    ;
}
// function showLowPriorityTasks(): void {
//     console.log("--------------Low priority tasks:-----------------");
//     for (const task of tasks) if (task.priority === "Low") console.log(`Task-Name: ${task.name}`);
// }
// function ascendingPriority(): void {
//     console.log("\n-----------Ascending Order Priority-------------------\n");
//     enum PriorityOrder { Low = 1, Medium = 2, High = 3 }
//     const sorted = [...tasks].sort((a, b) => PriorityOrder[a.priority] - PriorityOrder[b.priority]);
//     for (const task of sorted) console.log(`Priority:${task.priority} - ${task.name} - ${task.status}`);
// }
// add the task on webpage
// function addTaskToTable(task: Task): void {
//     if (!tableBody) return;
//     const row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${task.name}</td>
//         <td>${task.status}</td>
//         <td>${task.priority}</td>
//     `;
//     tableBody.appendChild(row);
// }
// function loadTasks(): void {
//     if (!tableBody) return;
//     tableBody.innerHTML = "";
//     for (const task of tasks) addTaskToTable(task);
// }
function renderTasks() {
    const target = taskGrid || app;
    if (!target)
        return;
    target.innerHTML = "";
    for (const task of tasks) {
        const cardDisplay = document.createElement("div");
        cardDisplay.classList.add("task");
        cardDisplay.classList.add(task.priority === "Low" ? "low-priority" : task.priority === "Medium" ? "medium-priority" : "high-priority");
        if (task.status === "completed")
            cardDisplay.classList.add("completed");
        const cardTitle = document.createElement("h3");
        cardTitle.textContent = task.name;
        const cardStatus = document.createElement("p");
        cardStatus.textContent = `Status: ${task.status}`;
        const cardPriority = document.createElement("p");
        cardPriority.textContent = `Priority: ${task.priority}`;
        const completeButton = document.createElement("button");
        completeButton.classList.add("btn");
        if (task.status === "completed") {
            completeButton.classList.add("complete");
        }
        completeButton.textContent = task.status === "pending" ? "Complete" : "Undo";
        completeButton.addEventListener("click", () => toggleTask(task.id));
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(task.id));
        cardDisplay.append(cardTitle, cardStatus, cardPriority, completeButton, deleteButton);
        target.append(cardDisplay);
    }
}
function toggleTask(id) {
    const t = tasks.find((x) => x.id === id);
    if (!t)
        return;
    t.status = t.status === "pending" ? "completed" : "pending";
    renderTasks();
    console.table(tasks);
    renderTasks();
    countCompletedTasks();
    showIncompleteTasks();
    showHighPriorityTasks();
}
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    //const cardDisplay = document.createElement("div");
    //if (task.status ==="Delete")
    //cardDisplay.classList.add("deletedcard")}
    renderTasks();
    countCompletedTasks();
    showIncompleteTasks();
    showHighPriorityTasks();
    console.table(tasks);
}
//showTasksInConsole();
//console.log("------ Tasks in table format -------");
//showTasksInTable();
console.log("------ Task Statistics -------");
export {};
//  showIncompleteTasks();
// // showCompletedTasks();
// showHighPriorityTasks();
// // showLowPriorityTasks();
// // ascendingPriority();
// countCompletedTasks();
//loadTasks();
//# sourceMappingURL=main.js.map