//object is a non primitive datatype.
//store the collective data.
//object->it is  a collection of key-value pair.
//access the value of an object
//*console=log()

let board = {
  name: "white board",
  isAvailable: true,
  write: function () {
    console.log("I am able to write");
    console.log(board.name);
    console.log(board.write);
  },
};
console.log(board);

let employee = {
  id: "113",
  name: "Athmika",
  DOJ: "18-01-2025",
  Salary: 60000,
  DEpt: "Technology",
};
console.log(employee);

//creation of object
//let obj1 = {};
//let obj = new obj();

let mobile = {
  brand: "samsung",
  color: ["black", "green", "white"],
  storage: ["256gb", "522gb"],
  price: 60000,
};
console.log(mobile);
mobile.description = "I have a mobile";
console.log(mobile);

//key or properties
//operators: 1.arithmatic 2.comparison 3.assignment 4.logical

if (5 > 2 && 2 > 5) {
  console.log("Value");
} else {
  console.log("second value");
}

if (5 > 2 || 2 > 5) {
  console.log("Value");
} else {
  console.log("second value");
}

let person = {
  name: "Athmika",
  age: 21,
  email: "aathmika524@gmail.com",
  address: {
    city: "bnglr", //nested
    state: "karnataka",
  },
};
console.log(person.address.city);
console.log(person.name);
console.log(person.address);

//Another one
let person1 = {
  name: "Athmi",
  email: "aathmika@gmail.com",
  city: "bangalore",
};

for (let key in person1) {
  console.log(key);
}

for (let key in person1) {
  console.log(`property ${key} 
    value ${person1[key]}`);
}

//array example
let response = [
  {
    name: "iphone 11",
    company: "apple",
  },
  {
    name: "iphone 14",
    company: "apple",
  },
  {
    name: "galaxy f17",
    company: "samsung",
  },
  {
    name: "nord ",
    comapny: "oneplus",
  },
];
console.log(response);

let finalarray = [];
for (let i = 0; i < response.length; i++) {
  if (response[i].company == "apple") {
    finalarray.push(response[i]);
  }
}
console.log(finalarray);

let obj = {
  name: "iphone",
  company: "apple",
  price: 60000,
};
console.log(Object.keys(obj));
console.log(Object.values(obj));

let obj2 = {
  name: "Galaxy",
  company: "Samsung",
  model: 17,
};
console.log(Object.assign(obj, obj2));

//function declaration
abc(); //moving declaration or function to a top.
function abc() {
  console.log("function");
}
abc();

//abcd(); // we cannot achieve hoisting in function expression
let abcd = function () {
  console.log("functions");
};
abcd();

{
  let name = "david";
  console.log(name);
}
console.log(name);

console.log(10 + "10");
console.log(10 - "10");
