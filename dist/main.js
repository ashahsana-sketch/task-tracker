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
console.log("Task tracker");
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
//export {};
//# sourceMappingURL=main.js.map