// callback:important concept in interview
//defination:to handle asynchronous with synchronous
//callback is a process of passing a function as a parameter to decide the order of execution of my program.
//callback.js

function one() {
  setTimeout(() => {
    console.log("Function one executed");
  }, 2000);
}
function two() {
  console.log("Function two executed");
}
one();
two();
