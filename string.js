//String function
let text = "hello";
let text2 = "    hello    ";
console.log(text);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.repeat(5)); //repeat the string

//trim functions
console.log(text2.trim());
console.log(text2.trimEnd());
console.log(text.trimStart());

let text3 = "bangalore";
console.log(text3.search("ore")); //positive value search elements is present.
console.log(text3.search("opp")); //negative value search element is absent.
console.log(text3.search("ang"));
console.log(text3.search("nga"));
console.log(text3.search("ooo"));

console.log(text3.split("")); //within single code
console.log(text3.split(" "));

let text4 = "I am in bangalore";
console.log(text4.split(""));
console.log(text4.split(" "));
console.log(text4.split("  "));
console.log(text4.split("").reverse());
console.log(text4.split("").reverse().join("")); // interview question
console.log(text4.split("").join(""));
