const taskPrint = document.querySelector("#tasks-print") as HTMLElement | null;
const app = document.querySelector("#app") as HTMLElement | null;
const statsDiv = document.querySelector("#stats") as HTMLElement | null;
const inComplete = document.querySelector("#inComplete") as HTMLElement | null;
const addButton = document.querySelector("#save-task-button") as HTMLButtonElement | null;
const taskInput = document.querySelector("#task-input") as HTMLInputElement | null;
const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement | null;
const highPriorityDiv = document.querySelector("#HighPriority") as HTMLElement | null;

function showHeader(): void {
    const h1 = document.querySelector("#h1") as HTMLHeadingElement | null;
    const h2 = document.querySelector("#h2") as HTMLHeadingElement | null;

    if (h1) h1.textContent = "Task Tracker...";
    if (h2) h2.textContent = "An application to learn TypeScript";
}

type Task = {
    id: number;
    name: string;
    priority: "Low" | "Medium" | "High";
    status: "pending" | "completed" | "deleted";
};

const tasks: Task[] = [
    { id: 1, name: "Clean room", status: "completed", priority: "Medium" },
    { id: 2, name: "Prepare presentation", status: "pending", priority: "High" },
    { id: 3, name: "Call doctor", status: "pending", priority: "Low" }
];
let nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1;
function getStatusButtonText(status: Task["status"]): string {
    return status === "completed" ? "Completed" : "Incomplete";
}

function getStatusButtonColor(status: Task["status"]): string {
    return status === "completed" ? "green" : "blue";
}
function isTaskPriority(value: string): value is Task["priority"] {
    return value === "Low" || value === "Medium" || value === "High";
}
function getPriorityButtonColor(priority: Task["priority"]): string {
    if (priority === "High") return "red";
    if (priority === "Medium") return "orange";
    return "green";
}

function toggleTaskStatus(id: number): void {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;

    task.status = task.status === "completed" ? "pending" : "completed";
    renderTasks();
    Taskstatistics();
    showIncompleteTasks();
    showHighPriorityTasks();
}

function renderTasks(): void {
    const target = taskPrint || app;
    if (!target) return;
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

        cardDisplay.append(cardTitle, cardStatus, cardPriority, statusButton, priorityButton);
        target.append(cardDisplay);
    }
}

function addTask(name: string, priority: "Low" | "Medium" | "High"): void {
    const newTask: Task = {
        id: tasks.length + 1,
        name,
        priority,
        status: "pending"
    };

    tasks.push(newTask);
    renderTasks();
    Taskstatistics();
    showIncompleteTasks();
    showHighPriorityTasks();

}
function Taskstatistics(): void {
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
     if (!statsDiv) return;
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

function showIncompleteTasks(): void {
    if (!inComplete) return;

    inComplete.innerHTML = "<h3>Incomplete Tasks</h3>";

    for (const task of tasks) {
        if (task.status === "pending") {
            inComplete.innerHTML += `<p>${task.name}</p>`;
        }
    }
}

function showHighPriorityTasks(): void {
    if (!highPriorityDiv) return;

    highPriorityDiv.innerHTML = "<h3>High Priority List</h3>";
    for (const task of tasks) {
        if (task.priority === "High") {
            highPriorityDiv.innerHTML += `<p>${task.name}</p>`;
        }
    }
}

if (addButton && taskInput && priorityInput) {
    addButton.addEventListener("click", (event) => {
        event.preventDefault();

        const taskName = taskInput.value.trim();
        if (!taskName) {
            console.log("Task name is required.");
            return;
        }

        const value = priorityInput.value;
        let priority: Task["priority"] = "Low";

        if (isTaskPriority(value)) {
            priority = value;
        }

        addTask(taskName, priority);
        taskInput.value = "";
        priorityInput.value = "Low";
    });
}
showHeader();
addTask("Handla", "Medium");
renderTasks();
Taskstatistics();
showIncompleteTasks();
showHighPriorityTasks();
