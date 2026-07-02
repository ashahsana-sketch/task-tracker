import { tasks } from "./dag10.js";
// local storage
export function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
//load tasks from local storage
export function loadTasks() {
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
//# sourceMappingURL=storage.js.map