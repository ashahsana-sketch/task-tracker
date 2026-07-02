import { tasks } from "./dag10";

export type Task = {
    id: number;
    name: string;
    priority: "Low" | "Medium" | "High";
    status: "pending" | "completed" | "deleted";
};
 
 