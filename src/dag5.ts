// 
type Task ={
    name: string;
    completed:boolean;
    description?: string; // this is optional sometumes its avialable and sometimes not
}
const task: Task={
    name :"Trana",
    completed :false, 
    description: "spring 5km" // extra properties
};
const task2: Task={
    name :"diska",
    completed :true, 

};
console.log(task.description);
console.log(task2.description);
function showTask (task:Task){
    console.log(task.name);
}
showTask(tasks[1]!);