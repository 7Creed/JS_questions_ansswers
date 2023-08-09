"use strict";

// 1. Write a JavaScript function that accepts a string as a parameter
// and converts the first letter of each word to upper case

// Solution
function convertFirstLetterToUpperCase(string) {
  // check for an empty string
  if (!string) return;

  // convert the string to an array
  const arr = string.split("");
  console.log(arr);

  // loop through the string
  const newArr = arr
    .map((each, idx) => (idx === 0 ? each.toUpperCase() : each))
    .join("");
  console.log(newArr);
}
convertFirstLetterToUpperCase("house");

// 2. Write a JavaScript function that accepts a string as a parameter
// and finds the longest word within the string

// Solution
function findLongestWord(word) {
  // check for an empty string
  if (word === "") return;

  // convert the string to an array
  const arr = word.split(" ");
  console.log(arr);

  const newArr = arr.reduce(
    (acc, cur) => (cur.length > acc.length ? cur : acc),
    ""
  );
  return newArr;
}
console.log(findLongestWord("this sentence is long"));

function long(par) {
  const arr = par.split(" ");
  console.log(arr);

  const newArr = arr.reduce((acc, cur) => {
    if (cur.length > acc.length) {
      acc = cur;
      return acc;
    }
    return acc;
  }, "");
  return newArr;
}
console.log(long("The quick brown fox jumped over the lazy dogs"));

// 3. Write a JavaScript function that accepts a number as a parameter
// and checks whether it is prime or not

// Solution
function isPrime(num) {
  if (typeof num != "number") return;
  if (num < 2) return "Not a prime number";

  for (let i = 2; i <= num / 2; i++) {
    console.log(i);
    
    if (!(num % i)) {
      console.log(i, "Not a prime number");
      return "Not a prime number";
    }
  }
  return "A prime number";
}
// isPrime(5)
console.log(isPrime(14));

// 4. Write a JavaScript function that accepts a argument
// and returns the type.

// Solution
function getType(value) {
  return typeof value
}
console.log(getType([]));
console.log(getType(42));         // Output: "number"
console.log(getType("Hello"));    // Output: "string"
console.log(getType(true));       // Output: "boolean"
console.log(getType([]));         // Output: "object"
console.log(getType({}));         // Output: "object"
console.log(getType(null));       // Output: "object"
console.log(getType(undefined));  // Output: "undefined"

// 5. Write a JavaScript function that takes an array of numbers
// and find the second lowest and second greatest numbers respectively.

// Solution
function findSecondLowestAndGreatest(numbers) {
  if (numbers.length < 2) {
    return "Array should contain at least two numbers";
  }

  // Remove duplicates and sort the array
  const uniqueSortedNumbers = Array.from(new Set(numbers)).sort((a, b) => a - b);

  const newArr = numbers.sort((a,b) => a - b)
  return {secondLowest: newArr[1], secondGreatest: newArr[newArr.length - 2]}
}
console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5, 6, 7]));

const numbers = [10, 5, 8, 2, 15, 12, 8, 6];
const result = findSecondLowestAndGreatest(numbers);
console.log(result);


