///<reference path="to-do-interfaces.ts" />

//**not a comment but a marker pointing towards the other file we just made with our interface & class definitions in it. This file wouldn't know IPerson w/o the line 1****
//module NameOfModule {}
module ToDoList {
  var diane: ToDoList.IPerson = {//Add ToDoList.
    name: "Diane D",
    email: "diane@epicodus.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  }

  var loki: ToDoList.IPerson = {
    name: "God of mischief",
    email: "loki@geocities.com"
  }
  //add export
  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki,
  };
}
