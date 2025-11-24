// a) Merge arrays using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log("Merged Array:", merged); // [1,2,3,4,5]

// b) Sum using Rest operator
const sum = (...nums) => {
  return nums.reduce((acc, num) => acc + num, 0);
};
console.log("Sum:", sum(10, 20, 5)); // 35

// c) Multi-level destructuring
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001,
  },
};

const {
  name,
  address: { city, pin },
} = user;

console.log("Name:", name);
console.log("City:", city);
console.log("Pin:", pin);
