```javascript

function determineNumberSystem(base) {
  if (base === 2) {
    console.log("You are using binary system");
  } else if (base === 8) {
    console.log("You are using octal system");
  } else if (base === 10) {
    console.log("You are using decimal system");
  } else if (base === 16) {
    console.log("You are using hexadecimal system");
  } else {
    console.log("Unknown number system");
  }

  switch (base) {
    case 2:
      console.log("You are using binary system");
      break;
    case 8:
      console.log("You are using octal system");
      break;
    case 10:
      console.log("You are using the decimal system");
      break;
    case 16:
      console.log("You are using the hexadecimal system");
      break;
    default:
      console.log("Unknown number system");
  }
}

determineNumberSystem(1500000);

// Concatenating strings
const person = "Doyin";
const greeting = `Hello`;
console.log(greeting + " " + person);
console.log(`${greeting} ${person}`);

// Loops

// i+=1 ==> i++
// i+=2 === i = i + 2

// For loop
for (let i = 0; i < 5; i += 2) {
  console.log(`Iteration ${i}`);
}

// For...of loop (for arrays)
const students = ["Doyin", "Tolu", "Bola", "Sade"];
for (const student of students) {
  console.log(student);
}

const student = {
  name: "Doyin",
  age: 25,
  course: "Computer Science",
  1: "This is a number key",
};


console.log(student["1"], student.name);

// For...in loop (for objects)
for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

function runStringAndArrayMethods() {
  const str = "Hello World Doyin 2";

  // String methods
  console.log(str.length);
  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
  console.log(str.indexOf("World"));
  console.log(str.slice(0, 5));
  console.log(str.replace("World", "Doyin"));
  console.log(`Replaced string: ${str}`);
  console.log(str.trim());
  console.log(str.split("o"));
  console.log(str.charAt(0));
  console.log(str.includes(2));
  console.log(str.startsWith("Hello"));
  console.log(str.endsWith("World"));

  // All array methods please.
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.length);
  console.log(arr.join(" "));
  console.log(arr.slice(0, 2));
  // Add new element with arr.splice
  arr.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]
  arr.splice(2, 0, 6, 7, 8); // [1, 2, 6, 7, 8, 3, 4, 5]
  // Five more examples of arr.splice
  console.log(arr.splice(0, 1));
  console.log(arr);
  arr.splice(4, 1);
  arr.splice(1, 2);
  arr.splice(3, 2);
  console.log(arr.splice(1, 2));
  // More array methods: push, pop, shift, unshift, indexOf, lastIndexOf, forEach, map, filter, reduce, some, every, find, findIndex, includes, sort, reverse
}
runStringAndArrayMethods();

const users = [
  { name: "Israel", active: true },
  { name: "Doyin", active: true },
  { name: "Victoria", active: false },
];

const user = {
  name: "Israel",
  age: 25,
  school: "FUTA",
  department: "Computer Science",
};
const userPlusCountry = {
  ...user,
  country: "Nigeria",
};

console.log(userPlusCountry);

const { school, department, ...personalInfo } = user;
console.log(personalInfo);
const { active, name: firstName, age } = user;
console.log(firstName, age);

const userProperties = ["name", "age", "school", "department"];
const userPlusCountryArray = [...userProperties, "Nigeria"];
console.log({ ...userPlusCountryArray });

const numbers = [1, 2, 3, 4];

// for (const use of users) {

// }

// [array].method((item, index, array) =>
// // Do whatever
// );

users.filter((user) => user.active);
numbers.forEach((number) => {
  console.log("hello")
  return console.log(number)
});
console.log(
  numbers.reduce((prevValue, currentValue) => currentValue + prevValue),
);

const specialUser = {
  name: "Israel",
  age: 25,
  school: "FUTA",
  department: "Computer Science",
  getUserName: () => specialUser.name,
};

console.log(specialUser.getUserName());
array.map()

function getUser() {
  return user;
}

const getUserDetails = () => {
  const { age, ...otherProperties } = user;
  return otherProperties;
};

//1. Function declaration
function nameOfFunction() {

}

//2. Function expression
const functionExpression = function() {

}

//3. Anonymous Function
function() {

}

// IIFE => Immediately Invoked Function Expression
// IIFE: use case for an anonymous function
(function() {

})()

// 4. Arrow functions
const arrowFunction = () => {

}

// IIFE utilizing an arrow function
(() => {

})()

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // Find the middle index (Math.floor handles decimals)
    const mid = Math.floor((low + high) / 2);

    // Target found, return its index
    if (arr[mid] === target) {
      return mid;
    }

    // If target is greater, ignore the left half
    if (arr[mid] < target) {
      low = mid + 1;
    }
    // If target is smaller, ignore the right half
    else {
      high = mid - 1;
    }
  }

  // Target not found in the array
  return -1;
}

```
