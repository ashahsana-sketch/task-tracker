const taskPrint = document.querySelector("#tasks-print") as HTMLElement | null;
const app = document.querySelector("#app") as HTMLElement | null;
export const statsDiv = document.querySelector("#stats") as HTMLElement | null;
export const inComplete = document.querySelector("#inComplete") as HTMLElement | null;
const addButton = document.querySelector("#save-task-button") as HTMLButtonElement | null;
const errormessage = document.querySelector("#error-message") as HTMLElement | null;
const taskForm = document.querySelector("#form-element") as HTMLFormElement | null;
const taskInput = document.querySelector("#task-input") as HTMLInputElement | null;
const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement | null;
export const highPriorityDiv = document.querySelector("#HighPriority") as HTMLElement | null;
const clearAllButton = document.querySelector("#clear-all") as HTMLButtonElement | null;
const emptyMessage = document.querySelector("#empty-message") as HTMLElement | null;

function showHeader(): void 
{
    const h1 = document.querySelector("#h1") as HTMLHeadingElement | null;
    const h2 = document.querySelector("#h2") as HTMLHeadingElement | null;
    if (h1) h1.textContent = "Task Tracker...";
    if (h2) h2.textContent = "An application to learn TypeScript";
}

import { renderTasks, isTaskPriority } from "./render.js";
import type { Task } from "./types.js";
import { saveTasks, loadTasks } from "./storage.js";
import {deleteTask,showHighPriorityTasks, Taskstatistics, showIncompleteTasks, addTask} from "./tasks.js";

export const tasks: Task[] = [
     { id: 1, name: "Clean room", status: "completed", priority: "Medium" },
     { id: 2, name: "Prepare presentation", status: "pending", priority: "High" },
     { id: 3, name: "Call doctor", status: "pending", priority: "Low" }
 ];
export let nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1;

taskForm?.addEventListener("submit", handleSubmit);
function handleSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const taskInput = document.querySelector("#task-input") as HTMLInputElement | null;
    const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement | null;
        if (!taskInput || !priorityInput) return;
    const name = taskInput.value.trim();
    const priority = priorityInput.value.trim();

    if (!name) 
    {
        if (errormessage) 
        {
            console.log("Task name is required.");
            errormessage.textContent = "Task name is required.";
        }
        return;
    }

    if (!isTaskPriority(priority)) 
    {
        if (errormessage) 
        {
            console.log("Invalid priority selected.");
            errormessage.textContent = "Invalid priority selected.";
        }
        return;
    }
    if (errormessage) 
        {
        console.log("error message cleared");
        errormessage.textContent = "";
        }
    if (tasks.some(task => task.name.toLowerCase() === name.toLowerCase())) 
        {
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
    if (!confirm("Are you sure you want to delete all tasks?")) return;
        tasks.length = 0;              // clear array
        localStorage.removeItem("tasks"); // clear storage
        updateUI();                    // rerender page
    });
        export function updateUI(): void {
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

