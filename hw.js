for (let i = 1; i <= 5; i++) {
  let text = "";
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  console.log(text);
}

//star pattern
let rows = [1, 2, 3, 2, 1];
for (let r of rows) {
  let line = "";
  for (let i = 0; i < r; i++) {
    line += "*";
  }
  console.log(line);
}

//factorial of a number
function factorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

console.log(factorial(5));
