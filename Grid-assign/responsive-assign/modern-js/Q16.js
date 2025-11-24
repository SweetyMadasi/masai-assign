// a)
const isEven = (n) => n % 2 === 0;
console.log(isEven(6));
console.log(isEven(7));

// b)
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

// c)
const greet = (name) => console.log(`Hello, ${name ? name : "Guest"}`);
greet("Sweety");
greet();
