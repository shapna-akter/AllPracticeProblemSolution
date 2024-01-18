// Problem-1

// 1. ত োমাকে নীচের লাইন গুল ো যে ফরম্যাট এ আছে একইভাবে প্রিন্ট করতে হবে -
// “Recently I heard that you’ve achieved 95% marks in your exam.
// This is brilliant!
// I wish you’ll shine in your life! Good luck with all the barriers(/\) in your
// life.”

const str = "Recently I heard that you’ve achieved 95% marks in your exam. \nThis is brilliant! \nI wish you’ll shine in your life!	Good luck with all the barriers(/\\) in your life."

console.log(str);

// Problem-2
// ত োমাকে দইুটি ইন্টিজার ভ্যেলুইনপুট নিতে হবে এবং তাদের য োগফল, বিয় োগফল,
// গুণফল এবং ভাগফল নীচে দে খান ো ফরম্যাট এ দেখাতে হবে ।

// দুইটি ইনটিজার ভ্যালু নিব
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

// যোগফল, বিয়োগফল, গুণফল, ভাগফল হিসেবে স্ট্রিং তৈরি করব
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = (num1 / num2).toFixed(2);

// প্রিন্ট করব
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} * ${num2} = ${product}`);
console.log(`${num1} / ${num2} = ${quotient}`);


//Problem-3
// ত োমাকে একটি অঋণাত্মক (০ বা এর থে কে বড়) সংখ্যা নি তে হবে এবং বলতে হবে
// সংখ্যাটি জ োড়(even) নাকি বি জ োড়(odd)।

// অঋণাত্মক সংখ্যা নেওয়া
var number = parseInt(prompt("অঋণাত্মক সংখ্যা দিন:"));

// সংখ্যাটি জোড় নাকি বিজোড় তা পরীক্ষা করতে একটি কন্ডিশনাল স্টেটমেন্ট
if (number >= 0) {
    if (number % 2 === 0) {
        console.log(`${number} সংখ্যাটি জোড়।`);
    } else {
        console.log(`${number} সংখ্যাটি বিজোড়।`);
    }
} else {
    console.log("অঋণাত্মক সংখ্যা দেওয়া হয়নি।");
}

// Problem-4
// ত োমাকে একটি ইন্টি জার ভ্যে লুইনপুট নি তে হবে এবং বলতে হবে এটি
// ধনাত্মক(positive) নাকি ঋণাত্মক(negative) নাকি শণূ্য(zero)।

// একটি ইনটিজার ভ্যালু নেওয়া
var number = parseInt(prompt("একটি ইনটিজার ভ্যালু দিন:"));

// সংখ্যাটি ধনাত্মক, ঋণাত্মক, অথবা শূণ্য তা পরীক্ষা করতে একটি কন্ডিশনাল স্টেটমেন্ট
if (number > 0) {
    console.log(`${number} সংখ্যাটি ধনাত্মক।`);
} else if (number < 0) {
    console.log(`${number} সংখ্যাটি ঋণাত্মক।`);
} else {
    console.log(`${number} সংখ্যাটি শূণ্য।`);
}


//Problem-5
// ধর ো ত োমার এক বন্ধুত োমাকে বলে ছে সে একটি Gucci Bag কি নবে যদি তার কাছে
// ১০ হাজার টাকা বা এর বে শি থাকে । নাহলে যদি তার কাছে ৫ হাজার বা এর বে শি টাকা
// থাকে তাহলে সে Levis Bag কি নবে । আর নাহলে সে নি উ মার্কে ট থে কে কি ছু
// (Something) কি নে নি বে । সে ত োমাকে আরও বলল ো যে , যদি সে Gucci Bag কি নতে
// পারে এবং তার কাছে যদি ২০ হাজার টাকা এর বে শি থাকে তাহলে সে আরও একটি
// Gucci Belt কি নবে ।

// তোমার বন্ধুর কাছে থাকা টাকার পরিমাণ
var moneyAvailable = parseInt(prompt("আপনার বন্ধুর কাছে কত টাকা আছে?"));

// জিনিসগুলি নির্ধারণ করা
var purchaseItems = "";
if (moneyAvailable >= 20000) {
    purchaseItems = "Gucci Bag";
    var extraMoney = moneyAvailable - 20000;
    if (extraMoney >= 20000) {
        purchaseItems += ", Gucci Belt";
    }
} else if (moneyAvailable >= 5000) {
    purchaseItems = "Levis Bag";
} else {
    purchaseItems = "Something (নিউ মার্কেট থেকে)";
}

// ফলাফল প্রিন্ট করা
console.log(`তোমার বন্ধু ${moneyAvailable} টাকা দিয়ে ${purchaseItems} কিনবে।`);

//problem-6
// Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

// Define an array of objects representing people
const people = [
    { name: 'Alice', age: 30, gender: 'female' },
    { name: 'Bob', age: 25, gender: 'male' },
    { name: 'Charlie', age: 35, gender: 'male' },
    { name: 'Diana', age: 28, gender: 'female' },
  ];
  
  // Function to filter out females and map remaining people to an array of names
  function filterAndMapNames(personArray) {
    // Filter out females
    const malesOnly = personArray.filter(person => person.gender === 'male');
  
    // Map the remaining people to an array of names
    const namesArray = malesOnly.map(person => person.name);
  
    return namesArray;
  }
  
  // Call the function with the 'people' array
  const result = filterAndMapNames(people);
  
  // Print the final result
  console.log(result);

  
// Problem-7
// Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

// Define an array of objects representing books
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  ];
  
  // Function to extract book titles from an array of book objects
  function extractBookTitles(bookArray) {
    // Map the array to extract only the book titles
    const titlesArray = bookArray.map(book => book.title);
  
    return titlesArray;
  }
  
  // Call the function with the 'books' array
  const bookResult = extractBookTitles(books);
  
  // Print the result
  console.log(bookResult);
  
//Problem-8
// Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

// Function to square a number
function square(x) {
    return x * x;
  }
  
  // Function to double a number
  function double(x) {
    return 2 * x;
  }
  
  // Function to add 5 to a number
  function add5(x) {
    return x + 5;
  }
  
  // Function composition to square a number, double the result, and add 5
  function squareDoubleAndAdd5(x) {
    // Compose the functions
    const result = add5(double(square(x)));
  
    return result;
  }
  
  // Example usage
  const inputNumber = 3;
  const finalResult = squareDoubleAndAdd5(inputNumber);
  
  // Print the result
  console.log(`Result for ${inputNumber}: ${finalResult}`);

  
//Problem-9
// Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.


// Define an array of objects representing cars
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2019 },
    { make: 'Honda', model: 'Civic', year: 2018 },
    { make: 'Ford', model: 'Mustang', year: 2020 },
    { make: 'Chevrolet', model: 'Malibu', year: 2017 },
  ];
  
  // Function to sort an array of cars by the year of manufacture in ascending order
  function sortByYearAscending(carArray) {
    // Use the Array.sort() method with a custom comparator function
    const sortedCars = carArray.sort((car1, car2) => car1.year - car2.year);
  
    return sortedCars;
  }
  
  // Call the function with the 'cars' array
  const sortedCarsArray = sortByYearAscending(cars);
  
  // Print the sorted array
  console.log(sortedCarsArray);

  
// Problem-10
// Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

// Define an array of objects representing people
const Population = [
    { name: 'Alice', age: 30, gender: 'female' },
    { name: 'Bob', age: 25, gender: 'male' },
    { name: 'Charlie', age: 35, gender: 'male' },
    { name: 'Diana', age: 28, gender: 'female' },
  ];
  
  // Function to search and modify the age of a specific person by name
  function modifyAgeByName(personArray, targetName, newAge) {
    // Find the person by name and modify their age if found
    personArray.forEach(person => {
      if (person.name === targetName) {
        person.age = newAge;
      }
    });
  
    return personArray;
  }
  
  // Example usage: Modify the age of 'Bob' to 26
  const updatedPeopleArray = modifyAgeByName(Population, 'Bob', 26);
  
  // Print the updated array
  console.log(updatedPeopleArray);
  
