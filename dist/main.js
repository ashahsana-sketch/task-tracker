// Header
function showHeader() {
    console.log("=========================================");
    console.log("============ Task Tracker ===============");
    console.log("=========================================");
}
// Initialze data
let tasks = [
    { id: 2, name: "Clean room", status: "completed", priority: "Medium" },
    { id: 3, name: "Prepare presentation", status: "pending", priority: "High" },
    { id: 4, name: "Call doctor", status: "pending", priority: "Low" }
];
let nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1; // calc to the last maximum ID number assigned 
// DOM refs
const title = document.querySelector("#h1");
if (title)
    title.textContent = "Task Tracker";
const headingTwo = document.querySelector("#h2");
if (headingTwo)
    headingTwo.textContent = "Task Tracker is Loading...";
const addButton = document.querySelector("#a-button");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority-input");
const app = document.querySelector("#app");
const tableBody = document.querySelector("#task-table-body");
// Console helpers
function showTasksInConsole() {
    tasks.forEach((task) => {
        console.log(`${task.name.padEnd(30)}${task.status.padEnd(20)}${task.priority.padEnd(8)}`);
    });
}
function showTasksInTable() {
    console.table(tasks);
}
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
    console.log("Completed:", completed);
    console.log("Incomplete:", incomplete);
    console.log("High:", high);
    console.log("Medium:", medium);
    console.log("Low:", low);
}
function showIncompleteTasks() {
    console.log("--------------Incomplete tasks----------------");
    for (const task of tasks)
        if (task.status === "pending")
            console.log(`Task-Name: ${task.name}`);
}
function showCompletedTasks() {
    console.log("---------------- Incomplete Task ------------------");
    for (const task of tasks)
        if (task.status === "completed")
            console.log(`Task-Name: ${task.name}`);
}
function showHighPriorityTasks() {
    console.log("------------High priority tasks:-----------------");
    for (const task of tasks)
        if (task.priority === "High")
            console.log(`Task-Name: ${task.name}`);
}
function showLowPriorityTasks() {
    console.log("--------------Low priority tasks:-----------------");
    for (const task of tasks)
        if (task.priority === "Low")
            console.log(`Task-Name: ${task.name}`);
}
function ascendingPriority() {
    console.log("\n-----------Ascending Order Priority-------------------\n");
    let PriorityOrder;
    (function (PriorityOrder) {
        PriorityOrder[PriorityOrder["Low"] = 1] = "Low";
        PriorityOrder[PriorityOrder["Medium"] = 2] = "Medium";
        PriorityOrder[PriorityOrder["High"] = 3] = "High";
    })(PriorityOrder || (PriorityOrder = {}));
    const sorted = [...tasks].sort((a, b) => PriorityOrder[a.priority] - PriorityOrder[b.priority]);
    for (const task of sorted)
        console.log(`Priority:${task.priority} - ${task.name} - ${task.status}`);
}
// DOM helpers
function addTaskToTable(task) {
    if (!tableBody)
        return;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.status}</td>
        <td>${task.priority}</td>
    `;
    tableBody.appendChild(row);
}
function loadTasks() {
    if (!tableBody)
        return;
    tableBody.innerHTML = "";
    for (const task of tasks)
        addTaskToTable(task);
}
function renderTasks() {
    if (!app)
        return;
    app.innerHTML = "";
    for (const task of tasks) {
        const card = document.createElement("div");
        card.classList.add("task");
        card.classList.add(task.priority === "Low" ? "low-priority" : task.priority === "Medium" ? "medium-priority" : "high-priority");
        if (task.status === "completed")
            card.classList.add("completed");
        const titleEl = document.createElement("h3");
        titleEl.textContent = task.name;
        const statusEl = document.createElement("p");
        statusEl.textContent = `Status: ${task.status}`;
        const priorityEl = document.createElement("p");
        priorityEl.textContent = `Priority: ${task.priority}`;
        const completeButton = document.createElement("button");
        completeButton.classList.add("btn");
        completeButton.style.margin = "20px";
        completeButton.textContent = task.status === "pending" ? "Complete" : "Undo";
        completeButton.addEventListener("click", () => toggleTask(task.id));
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(task.id));
        card.append(titleEl, statusEl, priorityEl, completeButton, deleteButton);
        app.append(card);
    }
}
// Task operations
function addTask1(task) {
    tasks.push(task);
}
function addTask(name, priority) {
    const newTask = { id: nextId++, name, status: "pending", priority };
    tasks.push(newTask);
    renderTasks();
    console.table(tasks);
    // Update statistics
    countCompletedTasks();
    showIncompleteTasks();
    showCompletedTasks();
    showHighPriorityTasks();
    showLowPriorityTasks();
    ascendingPriority();
    if (taskInput)
        taskInput.value = "";
}
function toggleTask(id) {
    const t = tasks.find((x) => x.id === id);
    if (!t)
        return;
    t.status = t.status === "pending" ? "completed" : "pending";
    renderTasks();
    console.table(tasks);
}
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
    console.table(tasks);
}
// Initialize
showHeader();
// sample extra task (kept from original)
addTask1({ id: 1, name: "Make programr", status: "completed", priority: "High" });
showTasksInConsole();
console.log("------ Tasks in table format -------");
showTasksInTable();
console.log("------ Task Statistics -------");
countCompletedTasks();
showIncompleteTasks();
showCompletedTasks();
showHighPriorityTasks();
showLowPriorityTasks();
ascendingPriority();
// user interface
if (addButton && taskInput && priorityInput) {
    addButton.addEventListener("click", () => {
        const taskName = taskInput.value.trim();
        if (!taskName) {
            console.log("Task name is required.");
            return;
        }
        const priority = priorityInput.value || "Low";
        addTask(taskName, priority);
    });
}
renderTasks();
loadTasks();
export {};
//# sourceMappingURL=main.js.map