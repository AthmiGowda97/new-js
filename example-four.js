function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("I have counter " + count);
    console.log("-----");
  }
  return inner;
}
let value = outer();
value();
value();

//closure is a function that will retain outer variable even outer function is closed.
