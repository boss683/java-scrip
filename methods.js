// Q14. What do these array methods do? Write code examples for each of the following: 
// ● .push() ● .pop() ● .shift() ● .unshift()

// 1. .push() /Adds one or more items to the end of an array.
let fruits =["apple", "banana"];
fruits.push("orange"); 
console.log(fruits); 

// 2. .pop()Removes the last item from an array.
let colors = ["red", "green", "blue"];
colors.pop();
console.log(colors);


// 3. .shift()Removes the first item from an array.
let animals = ["dog", "cat", "rabbit"];
animals.shift();
console.log(animals);

// 4. .unshift()Adds one or more items to the beginning of an array.
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers);


 
// Q15. Find the position of an itemUse .indexOf() or .includes().
let fruits1 = ["apple", "banana", "cherry"];

// .indexOf() → gives the position (index)
console.log(fruits1.indexOf("banana")); // Output: 1

// .includes() → checks if the item exists (true or false)
console.log(fruits1.includes("cherry")); // Output: true
console.log(fruits1.includes("mango"));  // Output: false




// 16. Remove or copy parts of an arrayUse .slice() and .splice().
let colors1 = ["red", "green", "blue", "yellow"];

// .slice(start, end) → copies part of the array (does NOT change the original)
let copy = colors1.slice(1, 3);
console.log(copy);   // ["green", "blue"]
console.log(colors1); // ["red", "green", "blue", "yellow"]

// .splice(start, count) → removes or replaces items (changes the original)
colors1.splice(1, 2);
console.log(colors1); // ["red", "yellow"]


//  Difference:
// .slice() → copies (no change to original)
// .splice() → removes or modifies (changes the original)

// Q17. Combine two arraysUse .concat() or the spread operator (...).
let a = [1, 2, 3];
let b = [4, 5, 6];

// Using concat()
let combined1 = a.concat(b);
console.log(combined1); // [1, 2, 3, 4, 5, 6]

// Using spread (...)
let combined2 = [...a, ...b];
console.log(combined2); // [1, 2, 3, 4, 5, 6]


// Q18. Check if a variable is an array

// Use Array.isArray().

let names = ["Ali", "Sara"];
let text = "Hello";

console.log(Array.isArray(names)); // true
console.log(Array.isArray(text));  // false

// Q19. Reverse the order of items

// Use .reverse().

let nums = [1, 2, 3, 4];
nums.reverse();
console.log(nums); // [4, 3, 2, 1]

// Q20. Sort strings alphabetically

// Use .sort().

let fruits5 = ["banana", "apple", "cherry"];
fruits5.sort();
console.log(fruits5); // ["apple", "banana", "cherry"]





// Q21. Sort numbers correctly

// Use .sort() with a compare function.

let numbers2 = [10, 2, 5, 1];

// Wrong (default sorts as strings)
console.log(numbers2.sort()); // [1, 10, 2, 5]

// Correct way:
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [1, 2, 5, 10]

// Q22. Convert array to a single string

// Use .toString() and .join().

let colors9 = ["red", "green", "blue"];

console.log(colors9.toString()); // "red,green,blue"
console.log(colors9.join(" - ")); // "red - green - blue"


//  Difference:

// .toString() → always uses commas

// .join() → you can choose the separator



// Q23. Remove a specific item by name/value

// Use .indexOf() + .splice().

let animals0= ["dog", "cat", "rabbit"];
let index = animals0.indexOf("cat");

if (index !== -1) {
  animals0.splice(index, 1);
}

console.log(animals0); // ["dog", "rabbit"]

//  Q24. Add multiple elements at once to an array
//  You can use .push() with multiple arguments or .concat().

let fruits7 = ["apple", "banana"];

// Using .push() with multiple items
fruits7.push("cherry", "orange");
console.log(fruits7);
// Output: ["apple", "banana", "cherry", "orange"]

// Using .concat() (creates a new array)
let moreFruits = fruits.concat(["grape", "mango"]);
console.log(moreFruits);
// Output: ["apple", "banana", "cherry", "orange", "grape", "mango"]


// .push() changes the original array,
// while .concat() returns a new array.



// Q25. Fill an array with the same value

// Use .fill() to create or update items.

// Create a new array of 5 items filled with "x"
let filledArray = new Array(5).fill("x");
console.log(filledArray);
// Output: ["x", "x", "x", "x", "x"]

// Update existing array items
let numberst = [1, 2, 3, 4, 5];
numberst.fill(0, 1, 4); // Fill from index 1 to 3 with 0
console.log(numberst);
// Output: [1, 0, 0, 0, 5]


// Q26. Find the first and last positions of a repeated element

// Use .indexOf() and .lastIndexOf().

let colorsy = ["red", "blue", "green", "blue", "yellow", "blue"];

let first = colorsy.indexOf("blue");
let last = colorsy.lastIndexOf("blue");

console.log("First blue at index:", first); // 1
console.log("Last blue at index:", last);   // 5

// Q27. Combine all array elements into one string

// Use .join().

let fruit = ["apple", "banana", "cherry"];
let sentence = fruit.join(", ");
console.log(sentence);
// Output: "apple, banana, cherry"
// You can change the separator (, , -, etc.).

// Q28. Add 10 to each number

// Use a loop or .map().

let numb = [5, 10, 15, 20, 25];

// Using .map()
let newNumbers = numb.map(num => num + 10);
console.log(newNumbers);
// Output: [15, 20, 25, 30, 35]


// Q29. Explain .map(), .filter(), .reduce()
// Method	What it does	Example
// .map()	Transforms each element and returns a new array.	[1, 2, 3].map(x => x * 2) → [2, 4, 6]
// .filter()	Keeps only elements that pass a condition.   	[1, 2, 3, 4].filter(x => x > 2) → [3, 4]
// .reduce()	Combines all values into one                  result (sum, total, etc.).	[1, 2, 3].reduce((a, b) => a + b, 0) → 6

// Q30. Filter ages above 18
let ages = [12, 17, 19, 25, 15, 30];
let adults = ages.filter(age => age > 18);
console.log(adults);
// Output: [19, 25, 30]

// Q31. Use .reduce() to get total price

let prices = [10, 20, 30, 40];
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);
// Output: 100

// Q32. Find the first value that meets a condition

// Use .find().

let nu = [5, 12, 8, 130, 44];
let firstOver10 = nufind(num => num > 10);
console.log(firstOver10);
// Output: 12


//  Difference from .filter():

// .find() returns the first match.

// .filter() returns all m


// Q33. Find the index of the first matching value

// Use .findIndex().

let numbersx = [3, 7, 12, 18, 25];
let indexe = numbersx.findIndex(num => num > 10);
console.log(indexe);
// Output: 2


// It returns the index, not the value.

// Q34. Test if all items pass a condition

// Use .every().

let scores = [90, 85, 78, 92];
let allPassed = scores.every(score => score >= 70);
console.log(allPassed);
// Output: true

// Q35. Test if at least one item passes a condition

// Use .some().

let temperatures = [15, 22, 8, 10];
let hasWarmDay = temperatures.some(temp => temp > 20);
console.log(hasWarmDay);
// Output: true

// Q36. Flatten a nested array

// Use .flat().

let nested = [1, [2, [3, 4]], 5];
let flatArray = nested.flat(2); // 2 levels deep
console.log(flatArray);
// Output: [1, 2, 3, 4, 5]

// Q37. Transform all elements to uppercase or lowercase

// Use .map() with string methods.

let nameses = ["ali", "Sara", "JOHN"];
let upper = nameses.map(name => name.toUpperCase());
console.log(upper);
// Output: ["ALI", "SARA", "JOHN"]

let lower = nameses.map(name => name.toLowerCase());
console.log(lower);
// Output: ["ali", "sara", "john"]


// Q38. Remove duplicate values

// Use new Set() or .filter().

let number = [1, 2, 2, 3, 4, 4, 5];

// Using Set
let unique = [...new Set(number)];
console.log(unique);
// Output: [1, 2, 3, 4, 5]

// Q39. Copy an array

// Use .slice() or spread (...).

let colorses = ["red", "green", "blue"];

// Using slice()
let copy1 = colorses.slice();

// Using spread
let copy2 = [...colorses];

console.log(copy1, copy2);
// Output: ["red", "green", "blue"] ["red", "green", "blue"]


//  Both make a shallow copy (don’t affect the original).


// Q40. Use .reduce() to find total and average
let numbersed = [10, 20, 30, 40];

let tota = numbersed.reduce((sum, num) => sum + num, 0);
let average = total / numbersed.length;

console.log("Total:", total);
console.log("Average:", average);
// Output: Total: 100, Average: 25


// Q41. Use .map() and .filter() together

// Filter out odd numbers, then double the even ones.

let numser = [1, 2, 3, 4, 5, 6];
let processed = numbser
  .filter(num => num % 2 === 0)
  .map(num => num * 2);

console.log(processed);
// Output: [4, 8, 12]

// Q42. Check if a word exists (ignore case)

// Use .some() with lowercase comparison.

let words = ["Apple", "Banana", "Cherry"];
let search = "banana";

let exists = words.some(word => word.toLowerCase() === search.toLowerCase());
console.log(exists);
// Output: true

// Q43. Use .reduce() to turn an array of words into a sentence
let worde = ["Learning", "JavaScript", "is", "fun"];
let sentenc = worde.reduce((acc, word) => acc + " " + word);
console.log(sentenc);
// Output: "Learning JavaScript is fun"

// Summary of Level 5 (Transforming Arrays):
// You learned how to:

// Transform data (map, filter, reduce)

// Find and test elements (find, some, every)

// Flatten, copy, and clean arrays (flat, slice, Set)

// Combine or join arrays into strings