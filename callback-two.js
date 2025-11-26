function one(callback) {
  setTimeout(() => {
    console.log("Function one executed");
    callback();
  }, 2000);
}
function two() {
  console.log("Function two executed");
}
one(two);
