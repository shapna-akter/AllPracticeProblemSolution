// Solution-1
console.log("Recently I heard that you’ve achieved 95% marks in your exam.");
console.log("This is brilliant!");
console.log("I wish you’ll shine in your life! Good luck with all the barriers(/\\) in your life.");

// Solution-2

// দুইটি ইনটিজার ভ্যালু নিব
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

// যোগফল, বিয়োগফল, গুণফল, ভাগফল হিসেবে সাংবাদিক স্ট্রিং তৈরি করব
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = (num1 / num2).toFixed(2); // দুই দশমিক পর্যন্ত প্রদর্শন করব

// প্রিন্ট করব
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} * ${num2} = ${product}`);
console.log(`${num1} / ${num2} = ${quotient}`);


//Solution-3

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

// solution-4

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


//Solution-5

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



