export type Task = {
    id: number;
    name: string;
    priority: "Low" | "Medium" | "High";
    status: "pending" | "completed" | "deleted";
};

 export const tasks: Task[] = [
    { id: 1, name: "Clean room", status: "completed", priority: "Medium" },
    { id: 2, name: "Prepare presentation", status: "pending", priority: "High" },
    { id: 3, name: "Call doctor", status: "pending", priority: "Low" }
];