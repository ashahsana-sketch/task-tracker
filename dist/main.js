// Header
function showHeader() {
    console.log("=========================================");
    console.log("============ Task Tracker ===============");
    console.log("=========================================");
}
// Initial data
let tasks = [
    { id: 2, name: "Clean room", status: "completed", priority: "Medium" },
    { id: 3, name: "Prepare presentation", status: "pending", priority: "High" },
    { id: 4, name: "Call doctor", status: "pending", priority: "Low" }
];
let nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1;
// DOM refs
const title = document.querySelector("#h1");
if (title)
    title.textContent = "Task Tracker";
const headingTwo = document.querySelector("#h2");
if (headingTwo)
    headingTwo.textContent = "Task Tracker is Loading...";
const addButton = document.querySelector("#a-button");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority-input");
const app = document.querySelector("#app");
const tableBody = document.querySelector("#task-table-body");
// Console helpers
function showTasksInConsole() {
    tasks.forEach((task) => {
        console.log(`${task.name.padEnd(30)}${task.status.padEnd(20)}${task.priority.padEnd(8)}`);
    });
}
function showTasksInTable() {
    console.table(tasks);
}
function countCompletedTasks() {
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
    console.log("Completed:", completed);
    console.log("Incomplete:", incomplete);
    console.log("High:", high);
    console.log("Medium:", medium);
    console.log("Low:", low);
}
function showIncompleteTasks() {
    console.log("Incomplete tasks:");
    for (const task of tasks)
        if (task.status === "pending")
            console.log(task.name);
}
function showCompletedTasks() {
    console.log("Completed tasks:");
    for (const task of tasks)
        if (task.status === "completed")
            console.log(task.name);
}
function showHighPriorityTasks() {
    console.log("High priority tasks:");
    for (const task of tasks)
        if (task.priority === "High")
            console.log(task.name);
}
function showLowPriorityTasks() {
    console.log("Low priority tasks:");
    for (const task of tasks)
        if (task.priority === "Low")
            console.log(task.name);
}
function ascendingPriority() {
    console.log("\nAscending Order Priority\n");
    let PriorityOrder;
    (function (PriorityOrder) {
        PriorityOrder[PriorityOrder["Low"] = 1] = "Low";
        PriorityOrder[PriorityOrder["Medium"] = 2] = "Medium";
        PriorityOrder[PriorityOrder["High"] = 3] = "High";
    })(PriorityOrder || (PriorityOrder = {}));
    const sorted = [...tasks].sort((a, b) => PriorityOrder[a.priority] - PriorityOrder[b.priority]);
    for (const task of sorted)
        console.log(`${task.priority} - ${task.name} - ${task.status}`);
}
// DOM helpers
function addTaskToTable(task) {
    if (!tableBody)
        return;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.status}</td>
        <td>${task.priority}</td>
    `;
    tableBody.appendChild(row);
}
function loadTasks() {
    if (!tableBody)
        return;
    tableBody.innerHTML = "";
    for (const task of tasks)
        addTaskToTable(task);
}
function renderTasks() {
    if (!app)
        return;
    app.innerHTML = "";
    for (const task of tasks) {
        const card = document.createElement("div");
        card.classList.add("task");
        card.classList.add(task.priority === "Low" ? "low-priority" : task.priority === "Medium" ? "medium-priority" : "high-priority");
        if (task.status === "completed")
            card.classList.add("completed");
        const titleEl = document.createElement("h3");
        titleEl.textContent = task.name;
        const statusEl = document.createElement("p");
        statusEl.textContent = `Status: ${task.status}`;
        const priorityEl = document.createElement("p");
        priorityEl.textContent = `Priority: ${task.priority}`;
        const completeButton = document.createElement("button");
        completeButton.classList.add("btn");
        completeButton.style.margin = "20px";
        completeButton.textContent = task.status === "pending" ? "Complete" : "Undo";
        completeButton.addEventListener("click", () => toggleTask(task.id));
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(task.id));
        card.append(titleEl, statusEl, priorityEl, completeButton, deleteButton);
        app.append(card);
    }
}
// Task operations
function addTask1(task) {
    tasks.push(task);
}
function addTask(name, priority) {
    const newTask = { id: nextId++, name, status: "pending", priority };
    tasks.push(newTask);
    renderTasks();
    console.table(tasks);
    // Update statistics
    countCompletedTasks();
    showIncompleteTasks();
    showCompletedTasks();
    showHighPriorityTasks();
    showLowPriorityTasks();
    ascendingPriority();
    if (taskInput)
        taskInput.value = "";
}
function toggleTask(id) {
    const t = tasks.find((x) => x.id === id);
    if (!t)
        return;
    t.status = t.status === "pending" ? "completed" : "pending";
    renderTasks();
    console.table(tasks);
}
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
    console.table(tasks);
}
// Initialize
showHeader();
// sample extra task (kept from original)
addTask1({ id: 1, name: "Make programr", status: "completed", priority: "High" });
showTasksInConsole();
console.log("------ Tasks in table format -------");
showTasksInTable();
console.log("------ Task Statistics -------");
countCompletedTasks();
showIncompleteTasks();
showCompletedTasks();
showHighPriorityTasks();
showLowPriorityTasks();
ascendingPriority();
// Wire up UI
if (addButton && taskInput && priorityInput) {
    addButton.addEventListener("click", () => {
        const taskName = taskInput.value.trim();
        if (!taskName) {
            console.log("Task name is required.");
            return;
        }
        const priority = priorityInput.value || "Low";
        addTask(taskName, priority);
    });
}
renderTasks();
loadTasks();
export {};
// averageRating();
// ascendingYear();
// markedAsWatched("Pulp Fiction");
// showTasks();
// showCompletedTasks();
// markedAsWatched("The Shawshank Redemption");
// showTasks();
// showCompletedTasks();
// watchedPercentage();
// markedAsWatched("Dil");
// 
// // show the pending task
// function showPendingTasks() {
//     for (const task of tasks) {
//         if (!task.watched) {
//             console.log(task.name);
//         }
//     }
// }
// // show tose task that complets
// function showCompletedTasks() {
//     let watchedCount: number = 0;
//     let unwatchedCount: number = 0;
//     const watchedmovies: string[] = [];
//     const unwatchedmovies: string[] = [];
//     for (const task of tasks) {
//         if (task.watched) {
//             watchedmovies.push(task.name);
//             watchedCount++;
//         } else {
//             unwatchedmovies.push(task.name);
//             unwatchedCount++;
//         }
//     }
//     console.log("\n\nWatched Movies:");
//     for (const name of watchedmovies) {
//         console.log(name);
//     }
//     console.log("\n\nUnwatched Movies:");
//     for (const name of unwatchedmovies) {
//         console.log(name);
//     }
//    console.log("\n\nSummary:");
//     console.log(`Watched: ${watchedCount}`);
//     console.log(`Unwatched: ${unwatchedCount}`);
// }
//----------arrange the movies by higest rating
// function ratings() {
//     const ratingValues = tasks.map(task => task.Rating);
//     const maxMovie = tasks.reduce((max, task) =>task.Rating > max.Rating ? task : max);
//     const minMovie = tasks.reduce((min, task) =>task.Rating < min.Rating ? task : min);
//     console.log(`Max Rating: ${maxMovie.Rating} (${maxMovie.name})`);
//     console.log(`Min Rating: ${minMovie.Rating} (${minMovie.name})`);
// }
// 
// function markedAsWatched(movieName: string) {
//     for (const task of tasks) {
//         if (task.name === movieName) {
//             task.watched = true;
//             console.log(task);
//             return;
//         }
//     }
//     console.log("\n \nThis Movie is not found in list");
// }
// // average funtion
// function averageRating() {
//     console.log(
//         "Average Rating:",
//         tasks.reduce((sum, t) => sum + t.Rating, 0) / tasks.length
//     );
// }
// //percentage watched
// function watchedPercentage() {
//     const total = tasks.length;
//     const watched = tasks.filter(task => task.watched).length;
//     const percentage = (watched / total) * 100;
//     console.log(`Watched: ${percentage.toFixed(2)}%`);
// }
// // function completeTask(taskName: string) {
// //     for (const task of tasks) {
// //         if (task.name === taskName) {
// //             task.watched = true;
// //         }
// //     }
// // }
// // function showStatistics() {
// //     let completed = 0;
// //     let pending = 0;
// //     for (const task of tasks) {
// //         if (task.watched) {
// //             completed++;
// //         } else {
// //             pending++;
// //         }
// //     }
// //     console.log(`Completed: ${completed}, Pending: ${pending}`);
// // }
// // showTask(tasks[0]);
// // showTask(tasks[0]);
// // console.log("Pending:");
// // showPendingTasks();
// // console.log("Completed:");
// // showCompletedTasks();
// // console.log("Completed task:");
// // completeTask("Diska");
// // showCompletedTasks();
// // showStatistics();
// const frukt="apple"; // always first use const and then let
// let antal=3;
// antal = 5;
// //string
// const firstname=" Sana";
// const lastname= " Islam";
// const fullname="firstname" +" " + "lastname";
// console.log(fullname);
// console.log(`hello $ {firstname} ${lastname}`);
// //number
// let age=42;
// const distance= 10.5;
// console.log(age + distance);
// console.log(age - distance);
// console.log(age * distance);
// console.log(age / distance);
// const  newage= ++age;
// console.log(newage);
// const  neawge= --age;
// console.log(newage);
// //module
// const  thirdage= age % 6;
// console.log(thirdage);
// //boolean
// const isloggedin =true;
// const issubscriber =false;
// //typning
//  const isregistered: boolean =true;
//  const carBerand: string ="volvo";
//  let numbercars:number=3;
// //  numbercars= "hej";
// //  let test =3;
// //  test ="hej";
//  const myage: number=34;
//  // any 
//  let anytype: any=3; // any ka matlab ha k hum 
// let value: any="Hello";
// console.log(value.toUpperCase());
// //unknown
// let value2:unknown ="Hello";
// if (typeof value2 === "string")
// {
// console.log(value2.toUpperCase());
// }
// // whole sentence
// const occupation= "student";
// console.log(`My name is ${firstname}`);
// console.log(`I am  ${age} years old`);
// console.log(`My occupation is ${occupation}`);
// // task name
// const taskname ="Learn Typescript";
// const priority =4;
// const completed = false;
// console.log("Task");
// console.log("taskname");
// console.log("===========================");
// console.log("Task tracker-1");
// console.log("===================");
// console.log("Priority");
// console.log(priority);
// console.log("completed");
// console.log(completed);
// console.log(`
//     Task: ${taskname}
//     priority:${priority}
//     completed:${completed}
// `);
// const task2name="walk the dog";
// const task2priority =5;
// const task2completed = true;
// console.log(`
//     Task: ${task2name}
//     priority:${task2priority}
//     completed:${task2completed}
// `);
// const task3name= "Make dinner";
// const task3priority =3;
// const task3completed = false;
// console.log(`
//     Task: ${task3name}
//     priority:${task3priority}
//     completed:${task3completed}
// `);
//  const completedtasks=4;;
//  const totaltask =100;
//  const compltionrate = ((completedtasks/totaltask)*100); 
//  console.log(`Completedtask : ${compltionrate}`);
// // interface
// interface User {
//   name: string;
//   id: number;
// }
// const user: User = {
//   name: "Hayes",
//   id: 0,
// };
// console.log(user);
// console.log("=============jäförelse=================")
// // jämförelse
// // === lika med
// //!== inte lika med    < mindre än   > större än  >=lika med eller större än <= lika med eller mindre än 
// console.log(5>3)
// console.log(5<3)
// console.log(5===5)
// const age1 =18;
// console.log("===============if else===============")
// if (age1 <= 18 ) {
//     console.log("barn");
// }
// else{
//     console.log("vuxen");
//     }
//     // logiska
//     // && AND   || OR
//     if (age<=18 && myage===34)
//         console.log("Hurray")
//     //switch
//     const dayoftheweek : number =2
//   console.log("============switch==================")  
//     switch (dayoftheweek)
//     {
// case 1:{console.log("monday");break;}
// case 2:{console.log("tuesday"); break;}
// default:{console.log("wrong entry");break;}
//     }
// console.log("==============array================")
//     const tasks=[
//         "lära oss",
//         "Träna",
//         "HAndla",
//         "Tvätta",
//         "skriva",
//         "läsa"
//     ];
//     console.log(tasks);
//      console.log(tasks[0]);
//      console.log(tasks[1]);
//      console.log(tasks.length);
//      console.log(tasks[tasks.length-1]);
//      tasks.push ("Diska"); // add one elemene
//       console.log(tasks);
//       console.log("============array pop==================")
//      const justdone= tasks.pop(); // remove last element
//      console.log(justdone);
//      console.log(tasks );
//      //loops
//      console.log("============for loop==================")
//      for (let i=0; i<tasks.length-1; i++){
//         console.log(tasks[i]);
//      }
//      console.log("=============for typescript=================")
//      for (const task of tasks)
//         {
//             console.log(tasks);
//         }
// console.log("===========================");
// console.log("Task tracker with the varible tasks3");
// console.log("===================");
// const tasks3 =[
//     "lära oss",
//         "Träna",
//         "HAndla",
//         "Tvätta",
//         "skriva",
//         "läsa"
// ]
// console.log("============for loop==================")
//      for (let i=0; i<tasks3.length-1; i++){
//         console.log(tasks[i]);
//      }
// console.log("===========================");
// console.log("Task tracker with the varible tasks3");
// console.log("===================");
// const tasks10 = [
//     "lära oss",
//     "Träna",
//     "HAndla",
//     "Tvätta",
//     "skriva",
//     "läsa"
// ];
// console.log("============for loop in typescript ==================");
// for (let i = 0; i < tasks10.length ; i++) {
//     // console.log(tasks10[i]);
//     console.log(`${(i+1)}: ${tasks10[i]}`);
// }
// console.log(`Antal uppgifter:${tasks10.length} st`);
// console.log("Check-why I wanted to know");
// // while loop
// console.log("============ while loop in typescript ==================");
// let j=0;
// while (j<5)
// {
//     console.log(j);
// j++;
// }
// console.log("============ Do-while loop in typescript ==================");
// let k=0;
// do
// {
//     console.log(k)
// k++;
// }
// while (k<5);
// console.log("============ for loop short typescript ==================");
// const age6 = 20;
// const message = age6 >= 18 ? "adult" : "child";
// console.log(message);
// console.log("===========================");
// console.log("Task tracker with the varible tasks4");
// console.log("===================");
// const tasks4 =[
//     "lära oss",
//         "Träna",
//         "HAndla",
//         "Tvätta",
//         "skriva",
//         "läsa"
// ]
// console.log("Task trcker");
// console.log("============ for loop ==================");
// for (const task of tasks4)
//     { console.log(tasks4)}
// console.log(`Antal uppgifet:$ {tasks5.length}`);
// console.log("bye");
// console.log("bye");
// console.log("bye");
// console.log("bye");
// console.log("bye");
// console.log("============ with function ==================");
// function sayhello(){
//     console.log("bye");
// }
// sayhello();
// sayhello();
// sayhello();
// sayhello();
// sayhello();
// console.log("============ with function take input ==================");
// function sayhello1(name:string){
//     console.log(`bye ${name}`);
// }
// sayhello1( "Robert");
// sayhello1("Per");
// sayhello1("Greta");
// console.log("============ with function take two input ==================");
// function sayhello2(name:string, age6:number){
//     console.log(`bye ${name} with age ${age6} år`);
// }
// sayhello1( "Robert,34");
// sayhello1("Per,56");
// sayhello1("Greta, 45");
// console.log("============ with function take input and return something ==================");
// function add (x:number, y:number)
// {
// return x+y;}
// console.log("============  functionwith addition ==================");
// const result =add (5,3);
// console.log(result);
// console.log("============ function with full name ==================");
// function getfullname (fname:string, lname:string)
// {
//     return `${fname}${lname}`
// }
// const fname =getfullname("Sana", "ISlam");
// console.log(fname);
// const tasklist=["Ts", "CSS", "HTML"]
// function showtask()
// {for (const task of tasklist) {console.log(task);}
// }
// console.log("============ Arrow function ==================");
// function greetold(name:string):void{console.log(`Hej ${name}`);}
// function addnumgetarrow(name:string):void{console.log(`Hej ${name}`);}
// console.log("============ show header by function function ==================");
// function showheader(){
// console.log("===========================");
// console.log("Task tracker with functions");
// console.log("=============================");
// }
// function showtasks(){
//     tasks.forEach(tasks=>{console.log(tasks);})
// }
// function showStatistics(){("Antal uppgifter: ${tasks.length}");}
// function addTask(taskname:string){tasks.push(taskname);}
// showheader();
// showtask();
// showStatistics();
// addTask("go out");
// addTask("come back");
// showtask();
// showStatistics();
//# sourceMappingURL=main.js.map