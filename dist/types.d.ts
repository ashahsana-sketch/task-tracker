export type Task = {
    id: number;
    name: string;
    priority: "Low" | "Medium" | "High";
    status: "pending" | "completed" | "deleted";
    clickAt: Date;
};
export declare const tasks: Task[];
export declare let nextId: number;
//# sourceMappingURL=types.d.ts.map