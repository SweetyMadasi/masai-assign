// a) Template Literals
const username = "Sweety";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

// b) Shorthand Object + Method
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  },
};
student.greet();

// c) Arrow Function Shorthand
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Sam", "Wilson"));
