import {updateUI,highPriorityDiv, statsDiv, inComplete} from "./dag10.js";
import type { Task } from "./types.js";
import  {  tasks } from "./dag10.js";


export function deleteTask(id: number): void {
    const taskIndex = tasks.findIndex((item) => item.id === id);
    if (taskIndex === -1) return;

    tasks.splice(taskIndex, 1);
    updateUI();
}
export function showHighPriorityTasks(): void {
    if (!highPriorityDiv) return;

    highPriorityDiv.innerHTML = "<h3>High Priority List</h3>";
    for (const task of tasks) {
        if (task.priority === "High") {
            highPriorityDiv.innerHTML += `<p>${task.name}</p>`;
        }
    }
}
export function Taskstatistics(): void {
    //console.log("::::::::::::Statistics:::::::")
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

export function showIncompleteTasks(): void {
    if (!inComplete) return;

    inComplete.innerHTML = "<h3>Incomplete Tasks</h3>";

    for (const task of tasks) {
        if (task.status === "pending") {
            inComplete.innerHTML += `<p>${task.name}</p>`;
        }
    }
}
export function addTask(name: string, priority: "Low" | "Medium" | "High"): void {
    const newTask: Task = {
        id: tasks.length + 1,
        name,
        priority,
        status: "pending"
    };

    tasks.push(newTask);
    updateUI();

}