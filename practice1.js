console.log(3 + true); //output 4
console.log(3 - false);
console.log("3+" + true);
console.log((2 == 2) == 2);
console.log((((2 == 2) == 2) == 2) == 0);
console.log(2 == 2);
console.log((2 == 2) == 2);

console.log(x);
let x;

//var can be access before initialization.
//let cannot be access before initialization.

//temporal dead zone:
// The Temporal Dead Zone refers to the period between the entering of a scope and the actual declaration of a variable using let or const.
//  During this period, the variable is in an "uninitialized" state and accessing it will result in a ReferenceError.
