// ------------------ 1. Template Literals + Expressions ------------------

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b) multi-line string
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);



// ------------------ 2. Arrow Functions & this ------------------

// a) convert to arrow function
const square = (n) => n * n;
console.log(square(6)); // example call

// b) explanation: arrow function "this" problem
// Arrow functions do not have their own 'this'.
// 'this' refers to the surrounding global scope instead of the object.
const obj = {
  value: 50,
  test: () => console.log(this.value), // undefined
};
obj.test(); // logs undefined

// c) fix using normal function
const obj2 = {
  value: 50,
  test: function () {
    console.log(this.value);
  },
};
obj2.test(); // prints 50



// ------------------ 3. Rest, Spread & Copying Objects ------------------

// a) shallow copy
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product
