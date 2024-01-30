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

// problem-11
//   Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

// Create an array of numbers
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Write a function to calculate the sum of all even numbers using reduce
const sumOfEvenNumbers = numbersArray.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0);

// Output the result
console.log("Sum of even numbers:", sumOfEvenNumbers);


// problem - 12
// Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.

function leapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true
  }
  return false
}
const isLeapYear = leapYear(2023)
console.log("2023 is a leapyear", isLeapYear)


// problem - 13
// Task: Count Vowels:
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year

function countVowels(str) {
  const lowerStr = str.toLowerCase();
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Use the reduce method to count the number of vowels
  const vowelCount = lowerStr.split('').reduce((count, char) => {
    if (vowels.has(char)) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);

  return vowelCount;
}

// Example usage:
const inputString = "Happy New Year";
const vowelResult = countVowels(inputString);
console.log(`Number of vowels in "${inputString}": ${result}`);



// problem - 14
// Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const array = [1, 2, 2, 3, 4, 4, 5, 5];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray);



// problem - 15
// Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.
function findMaxValue(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  const maxValue = Math.max(...numbers);
  return maxValue;
}

// Example usage:
const numArray = [5, 12, 8, 3, 10];
const maxNumber = findMaxValue(numbersArray);
console.log("Maximum Value:", maxNumber);



// problem - 16
// Task: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

// Create an array of objects representing students
const students = [
  { name: 'A', grades: [90, 85, 92] },
  { name: 'B', grades: [78, 89, 80] },
  { name: 'C', grades: [95, 88, 92] },
];

// Calculate the average grade of a student
const calculateAverageGrade = student => student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;

const sortByAverageGradeDescending = (student1, student2) => calculateAverageGrade(student2) - calculateAverageGrade(student1);

const sortedStudents = students.slice().sort(sortByAverageGradeDescending);

console.log("Students Sorted by Average Grade (Descending):", sortedStudents);



// problem - 17
// Task: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

const products = [
  { name: 'Product A', quantity: 2, price: 10 },
  { name: 'Product B', quantity: 1, price: 20 },
  { name: 'Product C', quantity: 3, price: 15 },
];

const calculateTotalValue = items => items.reduce((total, item) => total + item.quantity * item.price, 0);

const totalValue = calculateTotalValue(products);

console.log("Total Value:", totalValue);



// problem - 18
// Task: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];

const findCommonElements = (array1, array2) => {
  const commonElements = array1.filter(element => array2.includes(element));
  return commonElements;
};
const commonElementsArray = findCommonElements(arrayA, arrayB);
console.log("Common Elements:", commonElementsArray);


//   Task: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

const customers = [
  { name: 'A', purchases: 3, loyaltyPoints: 100 },
  { name: 'B', purchases: 8, loyaltyPoints: 150 },
  { name: 'C', purchases: 5, loyaltyPoints: 120 },
];

const doubleLoyaltyPoints = customers =>
  customers.map(customer =>
    customer.purchases > 5
      ? { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 }
      : customer
  );

const transformedCustomers = doubleLoyaltyPoints(customers);
console.log('Transformed Customers:', transformedCustomers);


// problem - 19
// Task: Object Sorting with Multiple Criteria
// Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in descending order within each category.
// Array of products
const productsArr = [
  { name: 'Laptop', price: 800, category: 'Electronics' },
  { name: 'Headphones', price: 50, category: 'Electronics' },
  { name: 'Backpack', price: 40, category: 'Fashion' },
  { name: 'Smartphone', price: 600, category: 'Electronics' },
  { name: 'T-shirt', price: 20, category: 'Fashion' },
];

// Function to sort the array by category and price
const sortProducts = (productArray) =>
  productArray.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;

    return b.price - a.price;
  });

const sortedProducts = sortProducts(productsArr);
console.log(sortedProducts);

// problem - 20
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(findUniqueElements(array1, array2)); // Output: [1, 2, 6, 7]
// Demonstrate the workflow of the function being used here to find out unique from 2 array
const findUniqueElements = (array1, array2) => {
  const uniqueElements = [];

  // Add elements from array1 that are not in array2
  array1.forEach((element) => {
    if (!array2.includes(element)) {
      uniqueElements.push(element);
    }
  });

  // Add elements from array2 that are not in array1
  array2.forEach((element) => {
    if (!array1.includes(element)) {
      uniqueElements.push(element);
    }
  });

  return uniqueElements;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const uniqueResult = findUniqueElements(array1, array2);

console.log(uniqueResult);


//Problem-21
// PW2.01.01 Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
function twoSum(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      // Check if the complement exists in the numMap
      if (numMap.hasOwnProperty(complement)) {
          // Return the indices if found
          return [numMap[complement], i];
      }
      // If not found, add the current element and its index to the numMap
      numMap[nums[i]] = i;
  }
  // If no solution is found (which should not happen according to the problem statement)
  return null;
}

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
const result1 = twoSum(nums1, target1);
console.log(result1);  // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
const result2 = twoSum(nums2, target2);
console.log(result2);  // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
const result3 = twoSum(nums3, target3);
console.log(result3);  // Output: [0, 1]


//Problem-22
// PW2.01.02 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

function threeSum(nums) {
  const result = [];

  // Sort the array to make it easier to handle duplicates
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicates for the first element in the triplet
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
          const sum = nums[i] + nums[left] + nums[right];

          if (sum === 0) {
              // Found a triplet with the desired sum
              result.push([nums[i], nums[left], nums[right]]);

              // Skip duplicates for the second element in the triplet
              while (left < right && nums[left] === nums[left + 1]) {
                  left++;
              }

              // Skip duplicates for the third element in the triplet
              while (left < right && nums[right] === nums[right - 1]) {
                  right--;
              }

              // Move both pointers towards the center
              left++;
              right--;
          } else if (sum < 0) {
              // If sum is less than 0, move the left pointer to the right
              left++;
          } else {
              // If sum is greater than 0, move the right pointer to the left
              right--;
          }
      }
  }

  return result;
}

// Example usage:
const numsOne = [-1, 0, 1, 2, -1, -4];
const resultOne = threeSum(numsOne);
console.log(resultOne); 

const numsTwo = [0, 1, 1];
const resultTwo = threeSum(numsTwo);
console.log(resultTwo);

const numsThree = [0, 0, 0];
const resultThree = threeSum(numsThree);
console.log(resultThree);


//Problem- 23
// PW2.01.03 Remove Duplicates From Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Constraints:
// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

function removeDuplicates(nums) {
  if (nums.length === 0) {
      return 0; // Empty array has 0 unique elements
  }

  let k = 1; // Position to insert unique elements
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
          // If the current element is different from the previous one
          // Move the unique element to position k
          nums[k] = nums[i];
          k++;
      }
  }

  return k; // k represents the number of unique elements
}

// Example usage:
const nums1 = [1, 1, 2];
const k1 = removeDuplicates(nums1);
console.log(k1);  // Output: 2, nums1 = [1, 2, _]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);
console.log(k2);  // Output: 5, nums2 = [0, 1, 2, 3, 4, _, _, _, _, _]


//Problem-24
// PW2.01.04 Next Permutation

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

function nextPermutation(nums) {
  let i = nums.length - 2;

  // Find the first pair of adjacent elements where nums[i] < nums[i+1]
  while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
  }

  if (i >= 0) {
      let j = nums.length - 1;

      // Find the first element nums[j] such that nums[j] > nums[i]
      while (nums[j] <= nums[i]) {
          j--;
      }

      // Swap nums[i] with nums[j]
      [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Reverse the subarray starting from nums[i+1]
  let start = i + 1;
  let end = nums.length - 1;

  while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
  }
}

// Example usage:
const nums1 = [1, 2, 3];
nextPermutation(nums1);
console.log(nums1);  // Output: [1, 3, 2]

const nums2 = [3, 2, 1];
nextPermutation(nums2);
console.log(nums2);  // Output: [1, 2, 3]

const nums3 = [1, 1, 5];
nextPermutation(nums3);
console.log(nums3);  // Output: [1, 5, 1]


//Problem-25
// PW2.01.05 Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return mid; // Target found
      } else if (nums[mid] < target) {
          left = mid + 1; // Continue search in the right half
      } else {
          right = mid - 1; // Continue search in the left half
      }
  }

  // If the loop exits, the target is not found, and left represents the index where it should be inserted
  return left;
}

// Example usage:
const nums1 = [1, 3, 5, 6];
const target1 = 5;
console.log(searchInsert(nums1, target1));  // Output: 2

const nums2 = [1, 3, 5, 6];
const target2 = 2;
console.log(searchInsert(nums2, target2));  // Output: 1

const nums3 = [1, 3, 5, 6];
const target3 = 7;
console.log(searchInsert(nums3, target3));  // Output: 4





