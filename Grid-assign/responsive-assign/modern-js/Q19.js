console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

const square = (n) => n * n;
console.log(square(6));
const obj = {
  value: 50,
  test: () => console.log(this.value),
};
obj.test();
const obj2 = {
  value: 50,
  test: function () {
    console.log(this.value);
  },
};
obj2.test();

const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(4, 9, 2, 11, 1));

// a) array destructuring
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b) object destructuring
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c) optional chaining
const info = {};
console.log(info?.user?.name);

for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}

console.log("const is used to prevent reassignment of variables.");
