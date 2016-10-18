//Interface is a plan, a custom data type made of existing data types like  booleans, string -even functions or other interfaces. It defines which data and functions must be present when the interface is implemented.

//Objects & classes can both implement interfaces. Similar to class delcaration, but it can be used as a plan for anything - not just objects but for classes too.

//Interfaces are a concept used in many, many programming languages, including C#, Ada, Dart, Visual Basic, Python, Objective-C, Object Pascal, Java, PHP and Swift.

//n simple terms, an interface is a group of methods and properties multiple different classes may inherit.

interface Noisy {
  sound: string;
  angryNoise(): void;
  happyNoise(): void;
}
//The Noisy interface contains a sound property, (which we've declared as a string), and two methods. Now we can implement this interface to many classes.

class Elephant implements Noisy {
  constructor(public sound: string){}

  angryNoise(){
    console.log("rumble");
  }

  happyNoise(){
    console.log("trumpet");
  }
}

class Dog implements Noisy {
  constructor(public sound: string){}

  angryNoise(){
    console.log("growl");
  }

  happyNoise(){
    console.log("wroof");
  }
}
//Both animal class make diff noises from the same methods, this shows the interface's methods are personalized to each animal's class.

//interfaces allow us to separate what a class does(make angry noises, for instance) from how it does it (either rumbling or growling, depending on the animal). They also allow us to plan out exactly what methods & properties we'll need. And, in our case, if we're missing an element from an interface, TypeScript will actually let us know.
