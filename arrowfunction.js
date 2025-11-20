//example for arrow function
//arrow function Syntax-> ()=>{}
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

//this keyword is help to no need for using return statement
const sum = (a, b) => a + b;
let value2 = sum(5, 10);
console.log(value2);

setTimeout(() => {
  console.log("i have a data");
}, 1000); //this number is given delay output.

setInterval(() => {
  console.log("i have a data");
}, 1000); //this is used execute between the intervals.
