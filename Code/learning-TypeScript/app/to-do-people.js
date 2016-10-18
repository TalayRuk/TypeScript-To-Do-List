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
