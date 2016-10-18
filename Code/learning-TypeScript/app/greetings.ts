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
class Greeter {
  constructor (public message: string) {}
  greet() {
    return "Hello, " + this.message;
  }
}
var greeters: Greeter[] = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello..."));
console.log(greeters);
for(var greeter of greeters) {
  alert(greeter.greet());
}
