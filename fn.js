//Function declaration
//Function Epression

const { sum } = require("./problemtwo");

//Function declaration
//function hello() OR
//var hello = function ()  //function expression
//arrow function -> ()=>{}

function hello(value) {
  //console.log("My name is " + value);
  return "My name is " + value;
}
hello("Athmika"); //it is used for console.log statements
// function receive arguments to the function

let message = hello("Athmika");
console.log(message);
sum(num1 + num2);

//example for arrow funbction
const abc = () => {
  console.log("function");
  {
  }
};
abc();

const sum2 = (a, b) => {
  return a + b;
};
let value = sum2(5, 10);
console.log(value);
