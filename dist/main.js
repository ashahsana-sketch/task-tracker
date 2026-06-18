console.log("Hello");
console.log("Sana4");
console.log("baaana");
const frukt = "apple"; // always first use const and then let
let antal = 3;
antal = 5;
//string
const firstname = " Sana";
const lastname = " Islam";
const fullname = "firstname" + " " + "lastname";
console.log(fullname);
console.log(`hello $ {firstname} ${lastname}`);
//number
let age = 42;
const distance = 10.5;
console.log(age + distance);
console.log(age - distance);
console.log(age * distance);
console.log(age / distance);
const newage = ++age;
console.log(newage);
const neawge = --age;
console.log(newage);
//module
const thirdage = age % 6;
console.log(thirdage);
//boolean
const isloggedin = true;
const issubscriber = false;
//typning
const isregistered = true;
const carBerand = "volvo";
let numbercars = 3;
//  numbercars= "hej";
//  let test =3;
//  test ="hej";
const myage = 34;
// any 
let anytype = 3; // any ka matlab ha k hum 
let value = "Hello";
console.log(value.toUpperCase());
//unknown
let value2 = "Hello";
if (typeof value2 === "string") {
    console.log(value2.toUpperCase());
}
// whole sentence
const occupation = "student";
console.log(`My name is ${firstname}`);
console.log(`I am  ${age} years old`);
console.log(`My occupation is ${occupation}`);
// task name
const taskname = "Learn Typescript";
const priority = 4;
const completed = false;
console.log("Task");
console.log("taskname");
console.log("===========================");
console.log("Task tracker-1");
console.log("===================");
console.log("Priority");
console.log(priority);
console.log("completed");
console.log(completed);
console.log(`
    Task: ${taskname}
    priority:${priority}
    completed:${completed}
`);
const task2name = "walk the dog";
const task2priority = 5;
const task2completed = true;
console.log(`
    Task: ${task2name}
    priority:${task2priority}
    completed:${task2completed}
`);
const task3name = "Make dinner";
const task3priority = 3;
const task3completed = false;
console.log(`
    Task: ${task3name}
    priority:${task3priority}
    completed:${task3completed}
`);
const completedtasks = 4;
;
const totaltask = 100;
const compltionrate = ((completedtasks / totaltask) * 100);
console.log(`Completedtask : ${compltionrate}`);
const user = {
    name: "Hayes",
    id: 0,
};
console.log(user);
console.log("=============jäförelse=================");
// jämförelse
// === lika med
//!== inte lika med    < mindre än   > större än  >=lika med eller större än <= lika med eller mindre än 
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
const age1 = 18;
console.log("===============if else===============");
if (age1 <= 18) {
    console.log("barn");
}
else {
    console.log("vuxen");
}
// logiska
// && AND   || OR
if (age <= 18 && myage === 34)
    console.log("Hurray");
//switch
const dayoftheweek = 2;
console.log("============switch==================");
switch (dayoftheweek) {
    case 1: {
        console.log("monday");
        break;
    }
    case 2: {
        console.log("tuesday");
        break;
    }
    default: {
        console.log("wrong entry");
        break;
    }
}
console.log("==============array================");
const tasks = [
    "lära oss",
    "Träna",
    "HAndla",
    "Tvätta",
    "skriva",
    "läsa"
];
console.log(tasks);
console.log(tasks[0]);
console.log(tasks[1]);
console.log(tasks.length);
console.log(tasks[tasks.length - 1]);
tasks.push("Diska"); // add one elemene
console.log(tasks);
console.log("============array pop==================");
const justdone = tasks.pop(); // remove last element
console.log(justdone);
console.log(tasks);
//loops
console.log("============for loop==================");
for (let i = 0; i < tasks.length - 1; i++) {
    console.log(tasks[i]);
}
console.log("=============for typescript=================");
for (const task of tasks) {
    console.log(tasks);
}
console.log("===========================");
console.log("Task tracker with the varible tasks3");
console.log("===================");
const tasks3 = [
    "lära oss",
    "Träna",
    "HAndla",
    "Tvätta",
    "skriva",
    "läsa"
];
console.log("============for loop==================");
for (let i = 0; i < tasks3.length - 1; i++) {
    console.log(tasks[i]);
}
console.log("===========================");
console.log("Task tracker with the varible tasks3");
console.log("===================");
const tasks10 = [
    "lära oss",
    "Träna",
    "HAndla",
    "Tvätta",
    "skriva",
    "läsa"
];
console.log("============for loop in typescript ==================");
for (let i = 0; i < tasks10.length; i++) {
    // console.log(tasks10[i]);
    console.log(`${(i + 1)}: ${tasks10[i]}`);
}
console.log(`Antal uppgifter:${tasks10.length} st`);
console.log("Check-why I wanted to know");
// while loop
console.log("============ while loop in typescript ==================");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
console.log("============ Do-while loop in typescript ==================");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
console.log("============ for loop short typescript ==================");
const age6 = 20;
const message = age6 >= 18 ? "adult" : "child";
console.log(message);
console.log("===========================");
console.log("Task tracker with the varible tasks4");
console.log("===================");
const tasks4 = [
    "lära oss",
    "Träna",
    "HAndla",
    "Tvätta",
    "skriva",
    "läsa"
];
console.log("Task trcker");
console.log("============ for loop ==================");
for (const task of tasks4) {
    console.log(tasks4);
}
console.log(`Antal uppgifet:$ {tasks5.length}`);
console.log("bye");
console.log("bye");
console.log("bye");
console.log("bye");
console.log("bye");
console.log("============ with function ==================");
function sayhello() {
    console.log("bye");
}
sayhello();
sayhello();
sayhello();
sayhello();
sayhello();
console.log("============ with function take input ==================");
function sayhello1(name) {
    console.log(`bye ${name}`);
}
sayhello1("Robert");
sayhello1("Per");
sayhello1("Greta");
console.log("============ with function take two input ==================");
function sayhello2(name, age6) {
    console.log(`bye ${name} with age ${age6} år`);
}
sayhello1("Robert,34");
sayhello1("Per,56");
sayhello1("Greta, 45");
console.log("============ with function take input and return something ==================");
function add(x, y) {
    return x + y;
}
console.log("============  functionwith addition ==================");
const result = add(5, 3);
console.log(result);
console.log("============ function with full name ==================");
function getfullname(fname, lname) {
    return `${fname}${lname}`;
}
const fname = getfullname("Sana", "ISlam");
console.log(fname);
const tasklist = ["Ts", "CSS", "HTML"];
function showtask() {
    for (const task of tasklist) {
        console.log(task);
    }
}
console.log("============ Arrow function ==================");
function greetold(name) { console.log(`Hej ${name}`); }
function addnumgetarrow(name) { console.log(`Hej ${name}`); }
console.log("============ show header by function function ==================");
function showheader() {
    console.log("===========================");
    console.log("Task tracker with functions");
    console.log("=============================");
}
function showtasks() {
    tasks.forEach(task => { console.log(task); });
}
function showStatistics() { ("Antal uppgifter: ${tasks.length}"); }
function addTask(taskname) { tasks.push(taskname); }
showheader();
showtask();
showStatistics();
addTask("go out");
addTask("come back");
showtask();
showStatistics();
export {};
//# sourceMappingURL=main.js.map