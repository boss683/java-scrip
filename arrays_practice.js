// In JavaScript, an array is a special type of object used to store and manage an ordered collection of values.These values, also known as elements, can be of any data type, including numbers, strings, booleans, objects, or even other arrays.



// Shopping Cart Items:
let cartItems = ["Milk", "Bread", "Eggs", "Butter"];
console.log(cartItems);
// Daily Temperatures for a Week:
let temperatures = [25, 28, 27, 26, 30, 29, 31];
console.log(temperatures)
//Contacts in a Phone:
let contacts = ["Alice", "Bob", "Charlie", "Diana"];
console.log(contacts)

// Q2. How do you create an array?


// Using square brackets (most common way):
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits)
// This creates an array with three elements: "Apple", "Banana", and "Mango".

// 

// 2. Using the new Array() constructor:
let names = new Array("hussein", "omer", "Majed");
console.log(names)


//  This does the same thing but is less common — most developers
// prefer the first metho


// You can also create an empty array and add items later:
let food = [];
food.push("rize");
food.push("fish");
console.log(food)

// The types of data that can be stored in an array depend 
// on the programming language and its specific implementation of arrays.

// 1 - Statically-typed languages (e.g., Java, C, C#)
// 2- Dynamically-typed languages (e.g., JavaScript, Python, PHP)

// 1- Numbers: Integers and floating-point numbers can coexist in the same array.
// 2- Strings: Sequences of characters can be mixed with other types.
// 3- Booleans: true or false values.
// 4 -Objects: Custom or built-in object types, such as dates or functions.
// 5 - Nested arrays: You can create an array that contains other arrays.
//6 - Other values: Many dynamic languages also allow null and undefined values in an array. 


// Create one array that mixes numbers, strings, and booleans.
let alight = [25, "Hello", true, 3.14, "JavaScript", false];
console.log(alight)


// Q4. What is the difference between an array and a single variable?

// A single variable stores one value, while an array stores multiple values 
// of the same data type in a single, ordered collection. An array allows you
//  to manage and perform operations on large sets of related data more efficiently
// //   than with individual variables

// Explain in your own words and give one code example to support your answer.
let mixedArray = [25, "Hello", true];
console.log(mixedArray);

[25, "Hello", true]
     
// Accessing and Modifying Arrays

// Arrays allow you to store a collection of data under a single variable name 
// and access or modify it by referring to its position, or index. While the basic 
// bracket [] notation is universal for both accessing and modifying, most programming
//  languages provide a host of other methods to manipulate arrays in 
//  more advanced ways, such as adding or removing elements. 
 


//             How do you access specific items from an array?

// The first element is index 0, the second is 1, the third is 2, and so on.

let book = ["pen", "pencel", "bak"];
console.log(book[0]); 
console.log(book[1]); 
console.log(book[2]); 


//     Write a program that prints the first and last elements of your array.

let mama = ["sister", "me", "brather", "sister1",];


console.log("First element:", mama[0]);

console.log("Last element:", mama[mama.length - 1]);


// How do you change a value in an array

let change = ["css", "html", "javascript"];

// Change "html" to "ghthup"
change[1] = "ghthup";

console.log(change);

// Change one of the elements in your array and print the new array.

let colors = ["Red", "Blue", "Green"];

// Change "Blue" to "Yellow"
colors[1] = "Yellow";

// Print the new array
console.log(colors);



// length in JavaScript

// The .length property of an array tells you how many elements are in the array.
// It counts all items, starting from the first to the last
let paste = ["i", "me", "you", "ther"];

// Use .length to find out how many items are in the array
console.log("Number of items in the array:", paste.length);



// 8. How can you add a new element to the end of an array without using .push()? Use array index assignment instead.
let fruits1 = ["Apple", "Banana", "Mango"];

// Add a new element to the end
fruits1[fruits1.length] = "Orange";

// Print the updated array
console.log(fruits);



// Here’s a program that prints all elements of an array using three different types of loops in JavaScript
let fruits5 = ["Apple", "Banana", "Mango", "Orange"];

console.log("Using for loop:");
for (let i = 0; i < fruits5.length; i++) {
  console.log(fruits5[i]);
}

console.log("\nUsing for...of loop:");
for (let fruit of fruits5) {
  console.log(fruit);
}

console.log("\nUsing while loop:");
let i = 0;
while (i < fruits5.length) {
  console.log(fruits5 [i]);
  i++;
}


// Q10. Write a program that prints all numbers in an array multiplied by 2 using a loop.
let numbers = [1, 2, 3, 4, 5];

console.log("Numbers multiplied by 2:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// Q11. Create an array of names and print each name in uppercase using a loop.

let names12 = ["Alice", "Bob", "Charlie", "Diana"];

console.log("Names in uppercase:");
for (let i = 0; i < names12.length; i++) {
  console.log(names12[i].toUpperCase());
}




// Here’s a JavaScript program that counts the number of items in an array without using .length, using a for loop:
let orange= ["Apple", "Banana", "Mango", "Orange"];
let counts = 0;

for (let item of orange) {
  counts++; // Increment count for each item
}

let fruitses = ["Apple", "Banana", "Mango", "Orange"];
let count = 0;

for (let item of fruits) {
  count++; // Increment count for each item
}

console.log("Number of items in the array:", count);



let  num = [15, 42, 7, 28, 93, 3];

let larges = num[0];
let smalles = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > largest) {
    larges = num[i]; // Update largest if current number is bigger
  }
  if (num[i] < smallest) {
    smallest = num[i]; // Update smallest if current number is smaller
  }
}

console.log("Largest number:", larges);
console.log("Smallest number:", smallest);
num = [15, 42, 7, 28, 93, 3];

let largest = num[0];
let smallest = num[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]; // Update largest if current number is bigger
  }
  if (numbers[i] < smallest) {
    smallest = numbers[i]; // Update smallest if current number is smaller
  }
}

console.log("Largest number:", largest);
console.log("Smallest number:", smallest);
