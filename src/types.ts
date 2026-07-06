//import { tasks } from "./dag10";

export type Task = {
    id: number;
    name: string;
    priority: "Low" | "Medium" | "High";
    status: "pending" | "completed" | "deleted";
    clickAt: Date;
};
export const tasks: Task[] = [
     { id: 1, name: "Clean room", status: "completed", priority: "Medium", clickAt:new Date("2026-07-03 10:30") },
     { id: 2, name: "Prepare presentation", status: "pending", priority: "High",clickAt:new Date("2026-07-03 10:00") },
     { id: 3, name: "Call doctor", status: "pending", priority: "Low", clickAt:new Date("2026-07-03 10:40") }
 ];
export let nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1;
 
 