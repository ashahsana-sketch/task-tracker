import type { Task } from "./types.js";
import { tasks } from "./dag10.js";
// local storage
export function saveTasks(): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
//load tasks from local storage
export function loadTasks(): void {
    const stored = localStorage.getItem("tasks");

    if (!stored) return;

    try {
        const parsed: Task[] = JSON.parse(stored);
        tasks.length = 0;
        tasks.push(...parsed);
    } catch (error) {
        console.error("Failed to load tasks:", error);
    }
}