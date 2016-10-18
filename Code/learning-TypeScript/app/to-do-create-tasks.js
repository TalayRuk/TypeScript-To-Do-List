///<reference path="to-do-interfaces.ts" />
///<reference path="to-do-people.ts"/>
/// <reference path="to-do-listing-function.ts" />
//ToDoList Module is a giant Object
//add TodoList.to subclasses
//add people. to the name properties that added to the task
var people = ToDoList.people; //for the exported people property
var tasks = []; //changed from var tasks: Task[] = [];
//add ToDoList.subclasses
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy the chocolate.", "Low", people.diane)); //can add Optional(?) IPerson - optional parameter on a class or interface with(?)
tasks.push(new ToDoList.HomeTask("Wash the Laundry.", "High"));
tasks[0].markDone(); // mark 1st task as done.
tasks.push(new ToDoList.HobbyTask("Build legos.")); //already set to Low priority
tasks.push(new ToDoList.HobbyTask("Make a sock animal"));
var today = new Date(); //get the current date & store it in the variable called "today".
var tomorrow = today; //set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
var nextDay = today; // set it to today's date + 2.
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
//Add more thor tasks
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean.", "Low", people.loki));
console.log(tasks); //log every tasks
//Add to call out all thors tasks
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
    console.log(task);
}
