// header function
function showHeader() {
    console.log("\t\t\t\t=========================================");
    console.log("\t\t\t\t============ !!!Task tracker!!===========");
    console.log("\t\t\t\t=========================================");
}
// status with enum   every list has one number
var Status;
(function (Status) {
    Status["Todo"] = "Todo";
    Status["InProgress"] = "In Progress";
    Status["Done"] = "Done";
})(Status || (Status = {}));
const tasks = [
    {
        name: "Buy groceries",
        status: Status.Todo,
        priority: "High",
        description: "Buy milk, eggs and bread"
    },
    {
        name: "Finish assignment",
        status: Status.InProgress,
        priority: "Medium",
        notes: "Complete before Friday"
    },
    {
        name: "Exercise",
        status: Status.Done,
        priority: "Low"
    },
    {
        name: "Read a book",
        status: Status.Todo,
        priority: "Low",
        description: "Read at least 20 pages"
    },
    {
        name: "Clean room",
        status: Status.InProgress,
        priority: "Medium",
        notes: "Organize desk and wardrobe"
    },
    {
        name: "Prepare presentation",
        status: Status.Todo,
        priority: "High",
        description: "Slides for Monday meeting"
    },
    {
        name: "Call doctor",
        status: Status.Done,
        priority: "High",
        notes: "Annual checkup completed",
        description: "really sick"
    },
    {
        name: "Learn TypeScript",
        status: Status.InProgress,
        priority: "High",
        description: "Practice enums, types, and functions"
    }
];
// show task funtion
function showTasks() {
    tasks.forEach(task => {
        console.log(`${task.name.padEnd(30)}${String(task.status).padEnd(20)}${task.priority.padEnd(8)}${task.notes?.padEnd(30)}${task.description?.padEnd(20)}`);
    });
}
// task are shows in table
function showTasksintable() {
    console.table(tasks);
}
// count completed task
function countCompletedTasks() {
    let completestatus = 0;
    let incompletestatus = 0;
    let highpriority = 0;
    let mediumpriority = 0;
    let lowpriority = 0;
    for (const task of tasks) {
        if (task.status === Status.Done) {
            completestatus++;
        }
        incompletestatus++;
        if (task.priority === "High") {
            highpriority++;
        }
        else if (task.priority === "Medium") {
            mediumpriority++;
        }
        else {
            lowpriority++;
        }
    }
    console.log("Completed tasks:", completestatus);
    console.log("Incompleted tasks:", incompletestatus);
    console.log("High priority Task:", highpriority);
    console.log("Medium priority Task:", mediumpriority);
    console.log("Low priority Task:", lowpriority);
}
// show pending Task
function ShowInCompTask() {
    for (const task of tasks) {
        if (task.status === Status.InProgress) {
            console.log(task.name);
        }
    }
}
// show pending Task
function ShowCompTask() {
    for (const task of tasks) {
        if (task.status === Status.Done) {
            console.log(task.name);
        }
    }
}
//High Priority Task;
function HighPriorityTask() {
    for (const task of tasks) {
        if (task.priority === "High") {
            console.log(task.name, task.priority);
        }
    }
}
// // add task in the list
function addTask(task) {
    tasks.push(task);
}
// shows the task with low priority
function lowPriorityTask() {
    for (const task of tasks) {
        if (task.priority === "Low") {
            console.log("The completed tasks are", task.name);
        }
    }
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
    for (const task of sorted) {
        console.log(`${task.priority} - ${task.name} - ${task.status}`);
    }
}
//  Main program 
showHeader();
showTasks();
console.log("\n\n\n\n------TAsk is in Table format---------");
showTasksintable();
console.log("\n\n\n\n------Task Statistics---------");
countCompletedTasks();
console.log("\n\n\n\n------Task is in progress---------");
ShowInCompTask();
console.log("\n\n\n\n------Completed Task ---------");
ShowCompTask();
console.log("\n\n\n\n------High Priority Task ---------");
HighPriorityTask();
console.log("\n\n\n\n------ Mark one task is completed and print it ---------");
//markedAsCompleted("Done");
addTask({
    name: "Make programr",
    status: Status.Done,
    priority: "High",
    notes: "check the program",
    description: "Task Tracker"
});
console.log("\n\n\n\n------ Mark one task is completed and print it ---------");
showTasksintable();
console.log("\n\n\n\n------ Low Priority Task ---------");
lowPriorityTask();
console.log("\n\n\n\n------ Ascending Priority ---------");
ascendingPriority();
const title = document.querySelector("#h1");
title.textContent = "Task Tracker";
const headingTwo = document.querySelector("#h2");
headingTwo.textContent = "Task Tracker is Loading...";
const app = document.querySelector("#app");
function renderTasks() {
    if (app) {
        app.innerHTML = "";
    }
    for (const task of tasks) {
        const card = document.createElement("div");
        card.classList.add("task");
        if (task.priority === "Low") {
            card.classList.add("low-priority");
        }
        else if (task.priority === "Medium") {
            card.classList.add("medium-priority");
        }
        else if (task.priority === "High") {
            card.classList.add("high-priority");
        }
        const title = document.createElement("h3");
        title.textContent = task.name;
        const status = document.createElement("p");
        status.textContent = `Status: ${task.status}`;
        const priority = document.createElement("p");
        priority.textContent = `Priority: ${task.priority}`;
        const notes = document.createElement("p");
        notes.textContent = `Notes: ${task.notes}`;
        const description = document.createElement("p");
        description.textContent = `Description: ${task.description}`;
        const completeButton = document.createElement("button");
        completeButton.classList.add("btn");
        completeButton.style.margin = "20px";
        completeButton.textContent = "Complete";
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn");
        deleteButton.textContent = "Delete";
        card.append(title, status, priority, notes, description, completeButton, deleteButton);
        app?.append(card);
    }
}
renderTasks();
export {};
// watchedPercentage();
// console.log("\n\n Rating ");
// ratings();
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