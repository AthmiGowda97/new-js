function outer() {
  let name = "Ramesh";
  console.log(name);
  function inner() {
    let name2 = "Suresh";
    console.log(name2);
    console.log("------");
  }
  return inner;
}
let values = outer();
values();
values(); // when u give return statement and u call the function, outer function will expired once u called after inner function we be printed.
values();
