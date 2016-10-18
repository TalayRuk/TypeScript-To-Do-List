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
module ToDoList {
  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    markDone(): void;
    assignedTo?: IPerson;//a ? next to the assignedTo? property in ITask. This is because the task's assignedTo? property will be optional. (For example, there may be some tasks we haven't assigned to anyone yet). We also add this same ? syntax to the assignedTo property in our Task constructor.
  }
  export interface IPerson {
    name: string;
    email: string;
    phone?: string; //optional phone number
  }
  //let's add assignedTo? property to ITask interface & Set it to Iperson.



  //**Interface is just a blueprint or plan that clearly lays out required properties or methods.
  //By assigning the IPerson interface to the assignedTo property of the Task obj, we're simply saying if a Task is assigned to a specific person, we must include both that person's name & email(the string properties included in the IPerson Interface).

  //**Let's add the IPerson interface to our subclasses too. We'll also create several people to assign tasks to - Task, HomeTask, WorkTask, etc.
  export class Task implements ITask {
    done: boolean = false;
    constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
    markDone(){
      this.done = true;
    }
  }

  export class HomeTask extends Task {
    constructor(public description: string, public priority: string, public assignedTo?: IPerson){//add Optional(?) IPerson - optional parameter on a class or interface with(?)
      super(description, priority);//we don't need to pass IPerson here b/c it's optional
    }
  }

  export class WorkTask extends Task {
    constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){//Here we must assigned the task to someone, so the IPerson parameter doesn't have (?) b/c it's not optional!
      super(description, priority, assignedTo);//Thus, we do pass the IPerson obj to the parent constructor using super b/c we are sure it'll always be there. Then we assign the WorkTask to each person
    }
  }

  export class HobbyTask extends Task {
    constructor(public description: string){//doesn't need to be assigned to anyone, so we don't include an IPerson parameter in its constructor.
      super(description, "low");//since the priority will always be "low", we can go ahead & pass "low" to the parent constructor in the second argument of super.
    }
  }
}
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
// var tasks: Task[] = [];
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
