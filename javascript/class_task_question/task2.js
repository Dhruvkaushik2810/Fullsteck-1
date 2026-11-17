const user = {
  id: 1,
  name: "Ava",
  role: "Admin",
  age: 30
};

const { name, ...other } = user;

console.log("Name:", name);
console.log("Other:", other);

// Array Destructuring
const numbers = [1, 2, 3, 4];

const [first, ...rest] = numbers;

console.log("First:", first);
console.log("Rest:", rest);