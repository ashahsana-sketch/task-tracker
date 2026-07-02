const taskPrint = document.querySelector("#tasks-print");
const app = document.querySelector("#app");
const statsDiv = document.querySelector("#stats");
const inComplete = document.querySelector("#inComplete");
const addButton = document.querySelector("#save-task-button");
const errormessage = document.querySelector("#error-message");
const taskForm = document.querySelector("#form-element");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority-input");
const highPriorityDiv = document.querySelector("#HighPriority");
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
const tasks = [
    { id: 1, name: "Clean room", status: "completed", priority: "Medium" },
    { id: 2, name: "Prepare presentation", status: "pending", priority: "High" },
    { id: 3, name: "Call doctor", status: "pending", priority: "Low" }
];
let nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1;
function getStatusButtonText(status) {
    return status === "completed" ? "Completed" : "Incomplete";
}
function getStatusButtonColor(status) {
    return status === "completed" ? "green" : "blue";
}
function isTaskPriority(value) {
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
    updateUI();
}
// local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
//load tasks from local storage
function loadTasks() {
    const stored = localStorage.getItem("tasks");
    if (!stored)
        return;
    try {
        const parsed = JSON.parse(stored);
        tasks.length = 0;
        tasks.push(...parsed);
    }
    catch (error) {
        console.error("Failed to load tasks:", error);
    }
}
// function to validate and other problems in the input fields
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
            errormessage.textContent = "Task name is required.";
        }
        return;
    }
    if (!isTaskPriority(priority)) {
        if (errormessage) {
            errormessage.textContent = "Invalid priority selected.";
        }
        return;
    }
    //   if (name.length < 3) {
    //     errormessage!.textContent = "Task name must be at least 3 characters.";
    //     return;
    // }
    // if (name.length > 20) {
    //     errormessage!.textContent = "Task name cannot be longer than 20 characters.";
    //     return;
    // }
    if (errormessage) {
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
function renderTasks() {
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
        target.append(cardDisplay);
    }
}
function deleteTask(id) {
    const taskIndex = tasks.findIndex((item) => item.id === id);
    if (taskIndex === -1)
        return;
    tasks.splice(taskIndex, 1);
    updateUI();
}
function addTask(name, priority) {
    const newTask = {
        id: tasks.length + 1,
        name,
        priority,
        status: "pending"
    };
    tasks.push(newTask);
    updateUI();
}
function Taskstatistics() {
    //console.log("::::::::::::Statistics:::::::")
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
    // console.log("Completed:", completed);
    // console.log("Incomplete:", incomplete);
    // console.log("High:", high);
    // console.log("Medium:", medium);
    // console.log("Low:", low);
    statsDiv.innerHTML = `
        <h3>Statistics</h3>
        <ul>Total Task:${tasks.length}</ul>
        <ul>Completed: ${completed}</ul>
        <ul>Incomplete: ${incomplete}</ul>
        <ul>High Priority: ${high}</ul>
        <ul>Medium Priority: ${medium}</ul>
        <ul>Low Priority: ${low}</ul>
    `;
}
function showIncompleteTasks() {
    if (!inComplete)
        return;
    inComplete.innerHTML = "<h3>Incomplete Tasks</h3>";
    for (const task of tasks) {
        if (task.status === "pending") {
            inComplete.innerHTML += `<p>${task.name}</p>`;
        }
    }
}
function showHighPriorityTasks() {
    if (!highPriorityDiv)
        return;
    highPriorityDiv.innerHTML = "<h3>High Priority List</h3>";
    for (const task of tasks) {
        if (task.priority === "High") {
            highPriorityDiv.innerHTML += `<p>${task.name}</p>`;
        }
    }
}
function updateUI() {
    renderTasks();
    Taskstatistics();
    showIncompleteTasks();
    showHighPriorityTasks();
    saveTasks();
}
// if (addButton && taskInput && priorityInput) {
//     addButton.addEventListener("click", (event) => {
//         event.preventDefault();
//         const taskName = taskInput.value.trim();
//         if (!taskName) {
//             console.log("Task name is required.");
//             return;
//         }
//         const value = priorityInput.value;
//         let priority: Task["priority"] = "Low";
//         if (isTaskPriority(value)) {
//             priority = value;
//         }
//         addTask(taskName, priority);
//         taskInput.value = "";
//         priorityInput.value = "Low";
//     });
// }
showHeader();
//addTask("Handla", "Medium");
loadTasks();
updateUI();
export {};
//# sourceMappingURL=dag10.js.map