var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// class Greeter { //buleprint for objects (its job is to say hello) Greeter Objects have a property called greeting, which stores a string.
//   greeting: string;
//
//   constructor (message: string) {//Keyword "constructor" = Greeter object must be passed a string on initialization for the message parameter, which is to be stored in the greeting property.
//     this.greeting = message;
//   }
//
//   greet() {// We declare a greet method, which may be called on any Greeter Obj. & return Hello w/message that is in the Greeter objects's greeting property.
//     return "Hello, " + this.greetings;
//   }
// }
//
// var greeters: Greeter[] = []; // the variable called greeters to be an array that used to  hold Greeter Objects.
// greeters.push(new Greeter("world")); //error push is undefined!!
// greeters.push(new Greeter("how are you?"));
// greeter.push (new Greeter("my baby, hello my honey, hello my ragtime gal!"));
// console.log(greeters);
// for(var greeter of greeters) {
//   alert(greeter.greet());
// }
//we still use the new keyword to create new instances of an object. Finally, we print the array of objects in the console, loop throught he array, and call each object's greet method in an alert box.
//let's compile this & add a script tag to index.html
//Next, we can shorten the class declaration by adding the word 'public' to our constructor parameter list.
//Rewrite using public
var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.message;
    };
    return Greeter;
}());
var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello..."));
console.log(greeters);
for (var _i = 0, greeters_1 = greeters; _i < greeters_1.length; _i++) {
    var greeter = greeters_1[_i];
    alert(greeter.greet());
}
var greeting = "Hi TypeScript!";
console.log(greeting);
var favoriteGuitarist = "Jimi Hendrix";
var favoriteMusicians = ["Jimi Hendrix", "The Cure", "RadioHead"];
// : called Optional Typing (declare type of the variable data)
//Interface is a plan, a custom data type made of existing data types like  booleans, string -even functions or other interfaces. It defines which data and functions must be present when the interface is implemented.
//The Noisy interface contains a sound property, (which we've declared as a string), and two methods. Now we can implement this interface to many classes.
var Elephant = (function () {
    function Elephant(sound) {
        this.sound = sound;
    }
    Elephant.prototype.angryNoise = function () {
        console.log("rumble");
    };
    Elephant.prototype.happyNoise = function () {
        console.log("trumpet");
    };
    return Elephant;
}());
var Dog = (function () {
    function Dog(sound) {
        this.sound = sound;
    }
    Dog.prototype.angryNoise = function () {
        console.log("growl");
    };
    Dog.prototype.happyNoise = function () {
        console.log("wroof");
    };
    return Dog;
}());
//Both animal class make diff noises from the same methods, this shows the interface's methods are personalized to each animal's class.
//interfaces allow us to separate what a class does(make angry noises, for instance) from how it does it (either rumbling or growling, depending on the animal). They also allow us to plan out exactly what methods & properties we'll need. And, in our case, if we're missing an element from an interface, TypeScript will actually let us know.
var findSum = function (first, second) {
    var sum = first + second;
    alert("The sum of your 2 numbers is: " + sum);
};
var number = parseInt(prompt('please enter a number.'));
var otherNumber = parseInt(prompt('enter another name.'));
findSum(number, otherNumber);
//These are called "Type annotations" = declare types for our variables & the parameters of the function; help prevent error in the code & by requiring the correct number of arguments "error TS2346: Supplied parameters do not match any signature of call target").
//adding Interfaces
// interface ITask {
//   description: string;
//   done: boolean;
//   priority: string;
//   markDone(): void;//method takes no arguments & returns no values = void
// }
//
// class Task implements ITask {
//   done: boolean = false;
//   constructor(public description: string, public priority: string){}
//   markDone(){
//     this.done = true;
//   }
// }
//***Remember, Every Class that implements an interface has to include each property & method defined by that interface, unless the property is explicitly defined as optional.
//Class that implement ITask may contain method & properties in addition to those defined by the interface, too. But again, each of the interface's properties & methods must be included in any class that implements it.
//Interface Benefit:
//-helps keep the projects organized
//ITask interface will use key properties & markDone() in any class implementing this interface. This lets you use the compiler to check yourself as you write related classes. If we had forgotten to include the done property in our class TypeScript would actually warn us.
//-Also, if our Task class was very large and complex, it would be incredibly helpful to see at-a-glance what it contains: 3 properties with specific types and one method returning nothing.
//-Classes can even implement more than one interface at the same time! This allows you to divide complex classes or objects up into smaller, more manageable pieces.
//Declaring Interfaces as Object Properties
//- We can declar variables or properties w/in a class to have a type of a particular interface. This helps to ensure that all the correct data will be present. Interfaces can be implemented directly by objects & used as data type annotations for properties.
//******************************************************************
//Let's say our To Do list must now serve a whole team of people. And we now need the ability to assign tasks to specific team members. When we assign a task, we'll need to know the person's name, and their email address so they can be notified.
//Let's break up our to-do.ts file into a ToDoList module that is divided logically amongst a few files.
//**Start with our class & interface declarations.
//Add Module = namespace
var ToDoList;
(function (ToDoList) {
    //let's add assignedTo? property to ITask interface & Set it to Iperson.
    //**Interface is just a blueprint or plan that clearly lays out required properties or methods.
    //By assigning the IPerson interface to the assignedTo property of the Task obj, we're simply saying if a Task is assigned to a specific person, we must include both that person's name & email(the string properties included in the IPerson Interface).
    //**Let's add the IPerson interface to our subclasses too. We'll also create several people to assign tasks to - Task, HomeTask, WorkTask, etc.
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority); //we don't need to pass IPerson here b/c it's optional
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo); //Thus, we do pass the IPerson obj to the parent constructor using super b/c we are sure it'll always be there. Then we assign the WorkTask to each person
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low"); //since the priority will always be "low", we can go ahead & pass "low" to the parent constructor in the second argument of super.
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
//moved people IPerson to to-do-people.ts
// //reference path="todo-interfaces.ts"/>
// module ToDoList {
//   var diane: ToDoList.IPerson = {
//     name: "Diane D",
//     email: "diane@epicodus.com"
//   }
//
//   var thor: ToDoList.IPerson = {
//     name: "Thor Son of Odin",
//     email: "thor@asgard.com"
//   }
//
//   var loki: ToDoList.IPerson = {
//     name: "God of mischief",
//     email: "loki@geocities.com"
//   }
//   //add export
//   export var people = {
//     "diane": diane,
//     "thor": thor,
//     "loki": loki,
//   };
// }
//move to app/to-do-creat-tasks.ts
//
// var tasks = [];
// tasks.push(new HomeTask("Do the dishes.", "High"));
// tasks.push(new HomeTask("Buy the chocolate.", "Low", diane));//can add Optional(?) IPerson - optional parameter on a class or interface with(?)
// tasks.push(new HomeTask("Wash the Laundry.", "High"));
// tasks[0].markDone();// mark 1st task as done.
//
// tasks.push(new HobbyTask("Build legos.",)); //already set to Low priority
// tasks.push(new HobbyTask("Make a sock animal"));
//
// var today = new Date(); //get the current date & store it in the variable called "today".
// var tomorrow = today; //set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
// tomorrow.setDate(today.getDate() + 1);
// var nextDay = today; // set it to today's date + 2.
// nextDay.setDate(today.getDate() + 2);
//
// tasks.push(new WorkTask(today, "Update blog.", "High", diane));
// tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", thor));
// tasks.push(new WorkTask(nextDay, "Clean.", "Low", loki));
//
// console.log(tasks); //log every tasks
//Also, since there may or may not be a person assigned to a HomeTask, we do not include it in super. Remember, super calls the parent constructor, and we wouldn't want to pass it an undefined argument. But now if we want to, we could have methods in our HomeTask that use the assignedTo person, but we still inherit all the parent Task methods. For example, we could add a method to HomeTask called remind, which emails the assigned person a reminder about their task. We wouldn't want Diane to forget to buy chocolate.
//Now we can compile this & add .js to index
//Since an interface includes at least a list of the properties that are required to be implemented, we could always use our IPerson interface like this for now, and then if we need to add methods to it later, we could implement it again in a Person class. Interfaces and classes together give us a lot of flexibility with how we organize our code, and it lets us check our work. Functions and methods, like our constructors, can be declared to receive parameters of a type of a particular interface. This is useful when passing several initial values into a new object at once in one argument (frequently referred to as an "option bag"). An interface is very useful for complex objects where you wouldn't want to forget a field. If you misspelled a field, or left one out, the interface would tell the compiler to warn you before you even tried the request in the browser.
// When an interface includes functions (like our markDone() function) it makes sense to use a class to implement the interface.
//Interface Inheritance
//Interfaces can also be extended into other, child interfaces, just like classes can be extended into other child classes. For example, a child interface might be a more specific version of its parent, the way a Rattlesnake could be a type of Animal, or a Ford is a type of Car. This is another example of inheritance. Similar to the manner classes may inherit properties and methods from parent classes, child interfaces may inherit properties and methods from parent interfaces. Both use the extends keyword.
///<reference path="to-do-interfaces.ts" />
//**not a comment but a marker pointing towards the other file we just made with our interface & class definitions in it. This file wouldn't know IPerson w/o the line 1****
//module NameOfModule {}
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com"
    };
    //add export
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
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
//Add to call out all thors tasks by calling out from to-do-listing-function.ts
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for (var _a = 0, thorTasks_1 = thorTasks; _a < thorTasks_1.length; _a++) {
    var task = thorTasks_1[_a];
    console.log(task);
}
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
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask() {
        _super.apply(this, arguments);
    }
    return HomeTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority) {
        _super.call(this, description, priority);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }
    return WorkTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy the chocolate.", "Low"));
tasks.push(new HomeTask("Wash the Laundry.", "High"));
tasks[0].markDone(); // mark 1st task as done.
tasks.push(new HobbyTask("Build legos.")); //already set to Low priority
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
