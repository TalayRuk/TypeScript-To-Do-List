var findSum = function(first: number, second: number) {
  var sum = first + second;
  alert("The sum of your 2 numbers is: " + sum);
}

var number = parseInt(prompt('please enter a number.'));
var otherNumber = parseInt(prompt('enter another name.'));
findSum(number, otherNumber);

//These are called "Type annotations" = declare types for our variables & the parameters of the function; help prevent error in the code & by requiring the correct number of arguments "error TS2346: Supplied parameters do not match any signature of call target").
