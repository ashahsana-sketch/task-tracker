// Header
function showHeader(): void {
    console.log("=========================================");
    console.log("============ Task Tracker ===============");
    console.log("=========================================");
}

// Taskpriority
type TaskPriority = "Low" | "Medium" | "High";

type Task = {
    id: number;
    name: string;
    status: "pending" | "completed";
    priority: TaskPriority;
};

// Initialze data
let tasks: Task[] = [
    { id: 2, name: "Clean room", status: "completed", priority: "Medium" },
    { id: 3, name: "Prepare presentation", status: "pending", priority: "High" },
    { id: 4, name: "Call doctor", status: "pending", priority: "Low" }
];

let nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1; // calc to the last maximum ID number assigned 

// DOM refs
const title = document.querySelector("#h1") as HTMLHeadingElement;
if (title) title.textContent = "Task Tracker";

const headingTwo = document.querySelector("#h2") as HTMLHeadingElement;
if (headingTwo) headingTwo.textContent = "Task Tracker is Loading...";

const addButton = document.querySelector("#a-button") as HTMLButtonElement;
const taskInput = document.querySelector("#task-input") as HTMLInputElement;
const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement;
const app = document.querySelector("#app") as HTMLElement;
const tableBody = document.querySelector("#task-table-body") as HTMLTableSectionElement;

// Console helpers
function showTasksInConsole(): void {
    tasks.forEach((task) => {
        console.log(`${task.name.padEnd(30)}${task.status.padEnd(20)}${task.priority.padEnd(8)}`);
    });
}

function showTasksInTable(): void {
    console.table(tasks);
}

function countCompletedTasks(): void {
    console.log("::::::::::::Statistics:::::::")
    let completed = 0;
    let incomplete = 0;
    let high = 0;
    let medium = 0;
    let low = 0;

    for (const task of tasks) {
        if (task.status === "completed") completed++; 
        else incomplete++;
            if (task.priority === "High") high++; 
            else if (task.priority === "Medium") medium++; 
            else low++;
    }

    console.log("Completed:", completed);
    console.log("Incomplete:", incomplete);
    console.log("High:", high);
    console.log("Medium:", medium);
    console.log("Low:", low);
}

function showIncompleteTasks(): void {
    console.log("--------------Incomplete tasks----------------");
    for (const task of tasks) if (task.status === "pending") console.log(`Task-Name: ${task.name}`);
}

function showCompletedTasks(): void {
    console.log("---------------- Incomplete Task ------------------")
    for (const task of tasks) if (task.status === "completed") console.log(`Task-Name: ${task.name}`);
}

function showHighPriorityTasks(): void {
    console.log("------------High priority tasks:-----------------");
    for (const task of tasks) if (task.priority === "High") console.log(`Task-Name: ${task.name}`);
}

function showLowPriorityTasks(): void {
    console.log("--------------Low priority tasks:-----------------");
    for (const task of tasks) if (task.priority === "Low") console.log(`Task-Name: ${task.name}`);
}

function ascendingPriority(): void {
    console.log("\n-----------Ascending Order Priority-------------------\n");
    enum PriorityOrder { Low = 1, Medium = 2, High = 3 }
    const sorted = [...tasks].sort((a, b) => PriorityOrder[a.priority] - PriorityOrder[b.priority]);
    for (const task of sorted) console.log(`Priority:${task.priority} - ${task.name} - ${task.status}`);
}

// DOM helpers
function addTaskToTable(task: Task): void {
    if (!tableBody) return;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.status}</td>
        <td>${task.priority}</td>
    `;
    tableBody.appendChild(row);
}

function loadTasks(): void {
    if (!tableBody) return;
    tableBody.innerHTML = "";
    for (const task of tasks) addTaskToTable(task);
}

function renderTasks(): void {
    if (!app) return;
    app.innerHTML = "";
    for (const task of tasks) {
        const card = document.createElement("div");
        card.classList.add("task");
        card.classList.add(task.priority === "Low" ? "low-priority" : task.priority === "Medium" ? "medium-priority" : "high-priority");
        if (task.status === "completed") card.classList.add("completed");

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
function addTask1(task: Task): void {
    tasks.push(task);
}

function addTask(name: string, priority: TaskPriority): void {
    const newTask: Task = { id: nextId++, name, status: "pending", priority };
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
    if (taskInput) taskInput.value = "";
}

function toggleTask(id: number): void {
    const t = tasks.find((x) => x.id === id);
    if (!t) return;
    t.status = t.status === "pending" ? "completed" : "pending";
    renderTasks();
    console.table(tasks);
}

function deleteTask(id: number): void {
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
        const priority = (priorityInput.value as TaskPriority) || "Low";
        addTask(taskName, priority);
    });
}

renderTasks();
loadTasks();