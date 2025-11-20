let name = "Athmika";
function outer() {
  console.log(name);
}
outer();

//global scope
let name2 = "Athmika";
function outer() {
  console.log(name);
}
console.log(name);
outer();

//local scope
function outer() {
  console.log(name2);
  let name3 = "Anvi";

  console.log(name);
}
console.log(name);
console.log(name3);
outer();

//nested function
let name4 = "Athmika";
function outer() {
  console.log(name4);
  let name2 = "Athmika";
  console.log(name2);
  function inner() {
    let name5 = "Antony";
    console.log(name5);
  }
  inner();
}
outer();

//block scope
let name1 = "amar";
function outer() {
  let name2 = "akbar";
  function inner() {
    let name3 = "anthony";
    console.log(name1);
    console.log(name2);
    console.log(name3);
  }
  inner();
}
outer();
