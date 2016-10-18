// // class Task { //Task class has 3 properties(done, description, priority)
// //   done: boolean; //declare done type is a boolean
// //   description: string;
// //   priority: string;
// //   constructor(public descriptionParameter: string, public priorityParameter: string); {//these 2 properties r initialized by the constructor & both r strings.
// //     //by using parameter of constructor = less repeating
// //     //we have to declare done property b/c it doesn't set by a parameter of the constructor.
// //     this.done = false;
// //     this.description = descriptionParameter;
// //     this.priority = priorityParameter;
// // }
// // markDone(){//class' method (job = to change done property from false to true)
// //   this.done = true; //we might want this to happen when we click a button in the interface when the task has been completed
// // }
// //
// // var tasks: Task[] = [];//we creating 3 tasks at different priority levels
// // tasks.push(new Task("Do the dishes.", High));
// // tasks.push(new Task("Buy chocolate.", Low));
// // tasks.push(new Task("Do the laundry.", High));
// // tasks[0].markDone(); //1st task is mark done
// // console.log(tasks);//print out the array of tasks
// // }
// // above version keep giving errors  about unexpected token and ;
// //short version -no error
//************************************************************
// class Task {
//  done: boolean;
//  constructor(public description: string, public priority: string)
//  {}//These constructor's methods from base class known as **Parent class or superclass** The new inheriting class (**Child class/ subclass)
//    markDone() {
//       this.done = true;
//    }
// }**************************************************************
//
// //just like declare regular variables
// //var greeting: string = "Hi TypeScript!";
//
// //*** class Thing {
//       //propertyName: type = initialValue;
//     //}
// //Inheritance --all 3 kinds of taks(home, work & hobby) r branching off of a base class called Task class. When a class inherits from another class, it gains access to all fo the base class's public properties & methods.
// *************************************************************
// class HomeTask extends Task {}//This is a child class by using extends are saying that the class HomeTask is inheriting from the base class Task. We don't need to change anything about it, so that's all we need to write in that class declaration.
// //we only need to replace the name of the class we are instantiating below from new Task() to new HomeTask().
//
// var tasks: Task[] = [];
// tasks.push(new HomeTask("do the dishes", "High"));
// tasks.push(new Task("Buy chocolate.", Low));
// tasks.push(new Task("Do the laundry.", High));
// tasks[0].markDone(); //1st task is mark done
// console.log(tasks); //log tasks
// ******************************************************
// class HobbyTask extends Task {//This is a child class; The constructor changed
//   constructor(public description: string) {//We only take 1 parameter from the parent class. The only thing we need to do to call the parent method of the same name as the current method by calling "SUPER" This fills in the rest of the default properies defined in the base class. We pass the description into the parent Task constructor, and our default value of "low" for priority.
//     super(description, "low");//b/c theses tasks r always low priority, it doesn't need priority parameter in the constructor.
//     //By re-declaring it inside of the new class declaration: It'll override the base class's constructor
//   }
// }
// *****************************************************
// //Keyword "Super" - we must use it when creating a constructor in child class.
// //B/c its job is to call the parent's constructor -Setting up properties for a particular instance of a class.
// //When we declare a constructor in a child class to be slightly different from the parent class constructor, such as we did by saying HobbyTasks should always be constructed with a "low" priority, we are doing the same thing as adding the Friday donut special. Here is some pseudocode:
//
// // a normal weekday.
// // class WeekdayAtTheCoffeeShop {
// //   constructor(pastries, coffee) {
// //     pastries.setup();
// //     coffee.brew();
// //     register.setup();
// //     clean();
// //     unlockDoors();
// //   }
// // }
// // // a Friday.
// // class FridayAtTheCoffeeShop extends WeekdayAtTheCoffeeShop {
// //   constructor(pastries, coffee) {
// //     // still receiving pastries and coffee, but this time, we pass in donuts as the day's pastry!
// //     this.donuts = pastries; **w/o calling "SUPER" the constructor would NOT brew any coffee or setup pastries, it'd only set up donuts. We need to add Super below this.donuts.
// //***  super(pastries, coffee); in order for the constructor to brew the coffee & set up the pastries ***
// //   }
// // }**********************************************
// //***To sum up, calling super() in a constructor is essentially just calling the parent's version of constructor() and telling it to finish its job.
// **************************************************
// class WorkTask extends Task {
//   constructor (public dueDate: Date, public description: string, public priority: string){
//     super(description, priority);//default properties from parent Task
//   }
// }

//To rewrite the task all together

class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}
class HomeTask extends Task {}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

var tasks: Task[] = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy the chocolate.", "Low"));
tasks.push(new HomeTask("Wash the Laundry.", "High"));
tasks[0].markDone();// mark 1st task as done.

tasks.push(new HobbyTask("Build legos.",)); //already set to Low priority
tasks.push(new HobbyTask("Make a sock animal"));

var today = new Date(); //get the current date & store it in the variable called "today".
var tomorrow = today; //set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
var nextDay = today; // set it to today's date + 2.
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean.", "Low"));

console.log(tasks); //log every tasks

//********************************************************************
//***Remember to compile tsc app/to-do.ts
// also add script tag to-do-inheritance.js to the index 



//We've declared our parent class Task. Then we've declared its three child classes HomeTask, HobbyTask, and WorkTask. HomeTasks have the same structure as a basic Task, HobbyTasks are always low priority, and WorkTasks have a due date.

//When we instantiate a new HomeTask, we pass in the strings for description and priority. HobbyTasks just take a description. Then because WorkTasks need due dates assigned to them, we create three JavaScript Date objects for today, tomorrow and the next day so that we can pass them into our WorkTasks. If we compile this, run it in the browser and look in the console, we can see our array of objects with complex, but consistent structures clearly outlined for us with our new class hierarchy.
