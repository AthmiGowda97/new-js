let array = [1, 0, 0, 0, 1];
let tree = 1;
for (let i = 0; i < array.length; i++) {
  if (array[i] == 0) {
    console.log(array[i]);
  }
}

//
let array1 = [1, 0, 0, 0, 1];
let tree1 = 1;
let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] == 0) {
    let previousValue = array[i - 1];
    let nextValue = array[i + 1];
    if (previousValue == 0 && nextValue == 0) {
      count++;
    }
  }
}
console.log(tree1 == count);

let array2 = [0, 0, 1, 0, 0, 0, 0, 0, 1];
let tree2 = 3;
let count2 = 0;
for (let i = 0; i < array2.length; i++) {
  if (array2[i] == 0) {
    let previousValue = array2[i - 1];
    let nextValue = array2[i + 1];
    if (previousValue == 0 && nextValue == 0) {
      array2[i] = 1;
      count2++;
    }
  }
}
console.log(tree2 == count2);

//
let array3 = [1, 0, 0, 0, 0, 0, 1]; //change the array values
let tree3 = 2;
let count3 = 0;
for (let i = 0; i < array3.length; i++) {
  if (array3[i] == 0) {
    let previousValue = i == 0 ? 0 : array3[i - 1];
    let nextValue = i == array3.lenght - 1 ? 0 : array3[i + 1];
    if (previousValue == 0 && nextValue == 0) {
      array3[i] = 1;
      count3++;
    }
  }
}
console.log(tree3 == count3);
