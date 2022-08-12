// Practice problems
// 1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and
// apples. Write a program to help Harry calculate how much money the
// shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
// apples is tk 700.

var momGive = 1000;
var purchase = 700;
var remain = momGive-purchase;
console.log(remain)

// 2) Write a program to calculate the average marks of Mathematics,
// Biology, Chemistry, Physics, and Bangla of a student.

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var average = (mathematics + biology + chemistry + physics + bangla) / 5;

console.log(average.toFixed(2));

// 3) John’s teacher gave him two variables. Each variable contains a string.
// John’s teacher asked him to combine these two strings(‘I am going to
// be’ and ‘an awesome web developer’) and print them in one line. Help
// John write the program.

var firstLine = "I am going to be";
var secondLine = "an awesome web developer";
var oneLine = firstLine + " " + secondLine;
console.log(oneLine)

// 4) Sarah’s mother is teaching her mathematics. She gave Sarah the number
// 119 and asked her what the remainder would be if she divided the number
// by 5. Help Sarah write the program.

var number = 119;
var remainingNumber = 119 % 5;
console.log(remainingNumber)

// 5) নি চে র ভে রি য়ে বল ডি ক্লে য়ার এ ক োনটার মধ্যে কি কি সমস্যা আছে । দে খত ো বে র করতে
// পার ো কি না?
// Var price = 33
// var name - Shabana
// var boxName = ‘Cocola;
// var 88_price = 34;
// var enum = -1;
// var _$box’78 = ‘Monika’;
// var home-address = “kochu khet”;




// 6) You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange', ]
var index = fruits.indexOf('Banana')
console.log(index)

fruits[1]= 'Mango'
console.log(fruits)

fruits.pop()
fruits.push('Watermelon')
console.log(fruits)

// 7) You and your friends Tom, Jane, Peter and John got their final exam
// results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
// 95, Peter’s total score is 56 and John’s total score is 40. The grading
// chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using
// if-else.

var myScore = 85

if (myScore>=80){
    console.log("My grade is A");
}
else if (myScore>=60){
    console.log("My grade is B");
}
else if (myScore>=50){
    console.log("My grade is C");
}
else if (myScore>=40){
    console.log("My grade is D");
}
else {
    console.log("Fail");
}
// Tom's Grade
var tomScore = 66;

if (tomScore>=80){
    console.log("Tom Grade is A");
}
else if (tomScore>=60){
    console.log("Tom grade is B");
}
else if (tomScore>=50){
    console.log("Tom grade is C");
}
else if (tomScore>=40){
    console.log("Tom grade is D");
}
else {
    console.log("You are Fail");
}
// Jane's Grade
var janeScore = 95;

if (janeScore>=80){
    console.log("Jane grade is A");
}
else if (janeScore>=60){
    console.log("Jane grade is B");
}
else if (janeScore>=50){
    console.log("Jane grade is C");
}
else if (janeScore>=40){
    console.log("Jane grade is D");
}
else {
    console.log("Fail");
}

// Peter's Grade
var peterScore = 95;

if (peterScore>=80){
console.log("peter grade is A");
}
else if (peterScore>=60){
console.log("peter grade is B");
}
else if (peterScore>=50){
console.log("peter grade is C");
}
else if (peterScore>=40){
    console.log("peter grade is D");
}
else {
    console.log("Fail");
}
// John's Grade
var johnScore = 95;

if (johnScore>=80){
    console.log("John grade is A");
}
else if (johnScore>=60){
    console.log("John grade is B");
}
else if (johnScore>=50){
    console.log("John grade is C");
}
else if (johnScore>=40){
    console.log("John grade is D");
}
else {
    console.log("Fail");
}

// 8) You are given three numbers 13, 79, and 45. Write a program that will
// print the largest number using if-else.

let number1 = 13;
let number2 = 79;
let number3 = 45;
if( (number1 > number2) && (number1 > number3) ){
    console.log("The large number is :", number1)
}
else if( (number2 > number1) && (number2 > number3) ){
    console.log("The large number is :", number2)
}
else{
    console.log("The large number is :", number3)
}

//  another way to solve

function findLargest(num1, num2, num3){
    if (num1>num2 && num1>num3)
        console.log("Large number is :" + num1);
    else if (num2>num1 && num2>num3)
        console.log("Large number is :" + num2);
    else
        console.log("Large number is" + num3)
}
findLargest(13, 79, 45)

// or

function findLargest(num1, num2, num3){
    if (num1>num2 && num1>num3)
        return num1;
    else if (num2>num1 && num2>num3)
        return num2;
    else
        return num3
}
console.log(findLargest(13, 79, 45))

// 9) You are given a triangle with the sides 9, 8, 9. Write a program to check
// whether a triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal

var x = 9;
var y = 8;
var z = 9;

if(x===y && y===z){
    console.log("Equilateral Triangle")
}
else if(x===y || y===z || z==x){
    console.log("Isosceles Triangle")
}
else{
    console.log( "Scalene Triangle")
}

// 10) ক্লাস সে ভে র এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়ে ছ। ত োমার বন্ধুআলি য়া, ডালি য়া,
// সালি য়া, মালি য়া, লি লি য়া আর জ্বালাইয়া - তাদে র grade তুমি জান ো না। তবে তাদে র নম্বর
// জান ো. আলি য়া 95 পে য়ে ছে , ডালি য়া 66 পে য়ে ছে , সালি য়া 80 পে য়ে ছে , মালি য়া পে য়ে ছে 59,
// লি লি য়া পে য়ে ছে 47, জ্বালাইয়া পে য়ে ছে 77। তুমি JS code দি য়ে তাদে র grade বে র করে
// দি তে পারবে ?
// ১) যারা ৫০ এর নি চে পে য়ে ছে , তাদে র grade F.
// ২) যারা ৫০ বা তার উপরে পে য়ে ছে , অথবা ৬০ এর নি চে পে য়ে ছে , তাদে র grade D.
// ৩) যারা ৬০ বা তার উপরে পে য়ে ছে , অথবা ৭০ এর নি চে পে য়ে ছে , তাদে র grade C.
// ৪) যারা ৭০ বা তার উপরে পে য়ে ছে , অথবা ৮০ এর নি চে পে য়ে ছে , তাদে র grade B.
// ৫) যারা ৮০ বা তার উপরে পে য়ে ছে , অথবা ৯০ এর নি চে পে য়ে ছে , তাদে র grade A.
// ৬) যারা ৯০ বা তার উপরে পে য়ে ছে , তাদে র grade A+.

let aliaScore = 95;

if (aliaScore >= 90){
    console.log("Alia's Grade is A+")
}
else if(aliaScore >= 80 && aliaScore < 90){
    console.log("Alia's Grade is A")
}
else if(aliaScore >= 70 && aliaScore < 80){
    console.log("Alia's Grade is B")
}
else if(aliaScore >= 60 && aliaScore < 70){
    console.log("Alia's Grade is C")
}
else if(aliaScore >= 50 && aliaScore < 60){
    console.log("Alia's Grade is D")
}
else{
    console.log("Alia's Grade is F")
}


let daliaScore = 66;

if (daliaScore >= 90){
    console.log("Dalia's Grade is A+")
}
else if(daliaScore >= 80 && daliaScore < 90){
    console.log("Dalia's Grade is A")
}
else if(daliaScore >= 70 && daliaScore < 80){
    console.log("Dalia's Grade is B")
}
else if(daliaScore >= 60 && daliaScore < 70){
    console.log("Dalia's Grade is C")
}
else if(daliaScore >= 50 && daliaScore < 60){
    console.log("Dalia's Grade is D")
}
else{
    console.log("Dalia's Grade is F")
}

let saliaScore = 80;

if (saliaScore >= 90){
    console.log("Salia's Grade is A+")
}
else if(saliaScore >= 80 && saliaScore < 90){
    console.log("Salia's Grade is A")
}
else if(saliaScore >= 70 && saliaScore < 80){
    console.log("Salia's Grade is B")
}
else if(saliaScore >= 60 && saliaScore < 70){
    console.log("Salia's Grade is C")
}
else if(saliaScore >= 50 && saliaScore < 60){
    console.log("Salia's Grade is D")
}
else{
    console.log("Salia's Grade is F")
}

let maliaScore = 59;

if (maliaScore >= 90){
    console.log("Malia's Grade is A+")
}
else if(maliaScore >= 80 && maliaScore < 90){
    console.log("Malia's Grade is A")
}
else if(maliaScore >= 70 && maliaScore < 80){
    console.log("Malia's Grade is B")
}
else if(maliaScore >= 60 && maliaScore < 70){
    console.log("Malia's Grade is C")
}
else if(maliaScore >= 50 && maliaScore < 60){
    console.log("Malia's Grade is D")
}
else{
    console.log("Malia's Grade is F")
}

let liliaScore = 47;

if (liliaScore >= 90){
    console.log("Lilia's Grade is A+")
}
else if(liliaScore >= 80 && liliaScore < 90){
    console.log("Lilia's Grade is A")
}
else if(liliaScore >= 70 && liliaScore < 80){
    console.log("Lilia's Grade is B")
}
else if(liliaScore >= 60 && liliaScore < 70){
    console.log("Lilia's Grade is C")
}
else if(liliaScore >= 50 && liliaScore < 60){
    console.log("Lilia's Grade is D")
}
else{
    console.log("Lilia's Grade is F")
}


let jalaiaScore = 77;

if (jalaiaScore >= 90){
    console.log("Jalaia's Grade is A+")
}
else if(jalaiaScore >= 80 && jalaiaScore < 90){
    console.log("Jalaia's Grade is A")
}
else if(jalaiaScore >= 70 && jalaiaScore < 80){
    console.log("Jalaia's Grade is B")
}
else if(jalaiaScore >= 60 && jalaiaScore < 70){
    console.log("Jalaia's Grade is C")
}
else if(jalaiaScore >= 50 && jalaiaScore < 60){
    console.log("Jalaia's Grade is D")
}
else{
    console.log("Jalaia's Grade is F")
}


// 11) তাড়াহুড়া করে স্কুলে র জন্য বে র হচ্ছ কি ন্তু রাস্তা পার হওয়ার সময় দে খলে , ট্রাফি ক
// সি গন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চে ষ্টা কর, তাহলে ডে ঞ্জার হতে
// পারে । যদি হলদু রং হয় তাহলে ত োমার থে মে যাওয়া উচি ত। আর যদি ট্রাফি ক সি গন্যাল গ্রি ন
// হয় তাহলে ত োমার রাস্তা পার হওয়া উচি ত। তাই একটা ক োড লি খে ফে ল ো। যে খানে আমরা
// signal নামে একটা ভে রি য়ে বল থাকবে । সে টার মান green, yellow বা red হতে পারে ।
// সে ই অনসুারে ডি ফারে ন্ট ডি ফারে ন্ট কাজ হবে । ত ো, সে ই ক োড ফটাফট লি খে ফে ল ো।

var signal = "red";

if (signal === "red"){
    console.log("Don't across the road")
}
else if(signal === "yellow"){
    console.log("Please stop")
}
else (
    console("please go")
)

var signal = "yellow";

if (signal === "red"){
    console.log("Don't across the road")
}
else if(signal === "yellow"){
    console.log("Please stop")
}
else (
    console("please go")
)

var signal = "green";
if (signal === "red"){
    console.log("Don't across the road")
}
else if(signal === "yellow"){
    console.log("Please stop")
}
else (
    console.log("please go")
)

// 12) প্রতি দি ন ত োমার কাজ কি ?
// ১) রাত ৮ টা বাজে মডি উল আনলক কর ো
// ২) ফটাফট ভি ডি ও দে খে দে খে প্রাকটিস কর ো
// ৩) ভি ডি ও দে খতে দে খতে ন োটস নাও
// ৪) মডি উল শে ষ হলে পুরা মডি উল নি জে নি জে প্রাকটিস কর ো
// ৫) ক োন কি ছুবঝু তে না পারলে (চি ন্তা করে দে খ ো এইখানে কি ন্তু একটা শর্ত আছে ), সাপ োর্ট সে শনে
// জয়ে ন কর ো
// এখন ত োমার কাজ হচ্ছে একটা for লপু ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে
// দে খান ো।

let myDay = [
    "unlock video",
    "watch video and practice",
    "keep notes",
    "own practice after finishing module",
    "join support session"
];
// for loop
for(let j = 1; j <= 10; j++){
    console.log(j);
    for (let i = 0; i < myDay.length; i++){
        let myDayGoing = myDay[i];
        console.log(myDayGoing)
        if(myDayGoing === 'in case u do not understand the concept'){
            console.log("go for support")
        }
    }
}

// 13) আবার একই জি নি স while লপু চালি য়ে ১০ বার দে খান ো।

var j = 1;
    while(j <= 10){
    console.log(j)

    var i = 0;
    while(i < myDay.length){
    var myDayGoing = myDay[i];
    i++
    console.log(myDayGoing)
    }
    j++
}

// 14) উপরের প্রব্লেমটাই while লপু রি ভার্স ওয়ে তে (decremental হিসেবে )করে দেখাও

var j = 10;
    while(j >= 1 ){
        console.log(j);

        var i = myDay.length-1;{
            while(i > 0){
                var myDayGoing = myDay[i];
                i--
                console.log(myDayGoing)
            }
        }
        j--
    }

// 15) উপরে র প্রব্লে মটাই for লপু রি ভার্স ওয়ে তে (decremental হি সে বে )করে দে খাও
for( var j = 1; j<=10; j++){
    console.log(j);
    for (var i = myDay.length-1; i>=0; i--){
        var myDayGoing = myDay[i];
        console.log(myDayGoing);
        if(myDayGoing === "5. Don't understand concept"){
            console.log("Go to Support session")
        }
    }
}

// length 5 ta r index/position 4 porjonto, 
// i = 4 bananor jonno length(5) theke 1 minus korchi. avabe deyar fole apni jodi array te element add/ remove koren tahole code a change kora lagbe na.


// 16) ত োমার কাছে : ৮০০০০ টাকার বে শি হলে তুমি mac কি নবে , ৬০ টাকার বে শি হলে gaming ল্যাপটপ
// কি নবে , ৪০ হাজার টাকার বে শি হলে lenovo yoga কম্পি উটার কি নবে , ২০ হাজার টাকার বে শি হলে পুরান
// ল্যাপটপ কি নবে । না হয় তুমি ম োবাইল দি য়ে কাজ চালাবে ।

var money = 30000;

if (money > 80000){
    console.log("I will buy Mac")
}
else if (money > 60000){
    console.log("I will buy Gaming Laptop")
}
else if (money > 40000){
    console.log("I will buy Lenovo Yoga")
}
else if (money > 80000){
    console.log("I will buy Mac")
}
else if(money>20000){
    console.log("I will buy second hand laptop")
}
else{
    console.log("I will do my work by mobile")
}


// 17) আসকে আমার মন ভাল ো নে ই এই কথা ৩৯ বার আউটপুট হি সে বে দে খাও।

var mood = "আজকে আমার মন ভালো নেই";

// for loop
for(var i = 0; i < 39; i++){
    console.log(mood)
}
// while loop
var i = 0;
while(i < 39){
    console.log(mood);
    i++
}

// 18) while লপু কি ভাবে কাজ করে

// 19) একটা ক োড লি খে ৫৮ থে কে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দে খাও

for (i = 58; i <= 98; i++){
    console.log(i)
}
// while loop
var i = 58;
while(i <= 98){
    console.log(i);
    i++
}

// 20) একটা ক োড লি খে ৪১২ থে কে ৪৫৬ পর্যন্ত যত জ োর সংখ্যা আছে সে গুলাকে
// দে খাও

for (i = 412; i <= 456; i+=2){
    console.log(i)
}
// while loop
var i = 412;
while(i <= 456){
    console.log(i);
    i+=2
}


// 21) একটা ক োড লি খে ৫৮১ থে কে ৬২৩ পর্যন্ত যত বি জ োড় সংখ্যা আছে সে গুলাকে দে খাও

// for loop
for (var i =581; i <= 623; i+=2){
    console.log(i)
}
// while loop
var i = 581;
while(i <= 623){
    console.log(i);
    i+=2
}

// 22) তুমি এতদি ন যা যা জি নি স শি খছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা
// for লপু দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও।

var learned = ["HTML", "CSS", "Bootstrap", "Tailwind", "Javascript"]

// for loop
for(var i = 0; i < learned.length; i++){
    var element = learned[i];
    console.log(element)
}


// 23) তুমি এতদি ন পর্যন্ত যে যে মডে লে র ম োবাইল ফ োন ইউজ করে ছ ো সে গুলার নাম দি য়ে একটা
// array বানাও। তারপর একটা while লপু দি য়ে সে ই array এর উপাদান গুলা একটা একটা করে
// আউটপুট হি সে বে দে খাও

var bookPrice = [50, 250, 200, 150, 180, 450, 299, 130, 80]
for(var i = 0; i < bookPrice.length; i++){
    var element = bookPrice[i];
    if(element > 200){
        continue;
    }
    console.log(element)
}

// 24) একটা ফর লপু চালাও। ৩০ থে কে ৮৬ পর্যন্ত। আর এই লপু ৪৪ এ গে লে ব্রে ক করবে । সে ই
// জি নি স ক োড করে দে খাও

for(var i =30; i <= 86; i++){
    if(i > 44){
        break;
    }
    console.log(i)
}

// 25) ত োমার যত বই আছে সে গুলার দাম নি য়ে একটা array লি খে ফে ল ো। যে বই গুল োর দাম ২০০
// টাকার উপরে সে গুলাকে স্কিপ করবে । অর্থাৎ সে গুলাকে আউটপুট হিসেবে দেখাবে না। বাকি দে র কে
// আউটপুট হি সে বে দে খাবে । দে খ ো করতে পার ো কি না।

var bookPrice = [50, 250, 200, 150, 180, 450, 299, 130, 80]
for(var i = 0; i < bookPrice.length; i++){
    var element = bookPrice[i];
    if(element > 200){
        continue;
    }
    console.log(element)
}


// 26) Write a function called foo() which prints “foo” and a function called bar()
// which prints “bar”. Call function bar() in the foo() function after printing. What
// will be the output? Now call the foo() to see the output.

function foo(){
    console.log("foo");
    bar()
}
function bar(){
    console.log("bar")
}
foo()

// 27) Write a function called make_avg() which will take an three integers and
// return the average of those values.

function make_avg (num1, num2, num3){
    console.log(num1, num2, num3)
    var average = (num1 + num2 + num3) / 3;
    return average
}
var average = make_avg(100, 200, 300);
console.log(average)

// 28) Challenging: Write a function called make_avg() which will take an array of
// integers and the size of that array and return the average of those values.

function make_avg (number1){
    let sum = 0;
    for (var i =0; i < number1.length; i++){
        let element = number1[i];
        sum = sum+ element;
    }
    let result = sum/ number1.length;
    return result
}
const array = [1, 2, 3];
const averageValues = make_avg(array);
console.log(averageValues)
// console.log (make_avg(array))

// 29) Write a function called odd_even() which takes an integer value and tells
// whether this value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

function odd_even(number){
    if(number % 2 === 0){
        console.log("This is a Even Number");
    }
    else{
        console.log("This is a Odd Number")
    }
}
odd_even(18)

// another way to solve
function odd_even(number){
    if(number % 2 === 0){
        return "This is a Even Number";
    }
    else{
        return "This is a Odd Number"
    }
}
let oddNumber = odd_even(3)
console.log(oddNumber)

// 30) You are in a hurry to go to your school on time. But when you are crossing
// the road, the traffic signal is red coloured. In this situation, if you try to cross the
// road, you may be in danger.If you notice a yellow coloured traffic signal, you
// should stop. If you notice a green coloured traffic signal, you should cross the
// road. So write a JS code, where there is a variable called signal. Its value can
// be green, yellow or red & we will get different activities as output depending on
// the variable. So, hurry up.
var signal = "red";

if (signal === "red"){
    console.log("Don't across the road")
}
else if(signal === "yellow"){
    console.log("Please stop")
}
else (
    console("please go")
)

var signal = "yellow";

if (signal === "red"){
    console.log("Don't across the road")
}
else if(signal === "yellow"){
    console.log("Please stop")
}
else (
    console("please go")
)

var signal = "green";
if (signal === "red"){
    console.log("Don't across the road")
}
else if(signal === "yellow"){
    console.log("Please stop")
}
else (
    console.log("please go")
)

// 31) একটা ফাংশন লি খবা যে টা ১৩ এর নামতা (multiplication table) আউটপুট হি সে বে
// দে খাবে ।

function multiplication(number){
    for(var i = 1; i<=10; i++){
        multi = number * i;
        console.log(number, '*', i, "=", multi)
    }
}
multiplication(13)

// 32) একটা ফাংশন লি খবা যে টা যে ক োন নামকে uppercase বা রে গুলার কে ইস হি সে বে নি বে আর
// আউটপুট হি সে বে সে ই নাম lowercase করে রি টার্ন করবে ।

function name (input){
    let lowerCaseName = input.toLowerCase();
    return lowerCaseName;
}
let output = name("SHAPNA");
console.log(output);


// 33) fullName নামে একটা ফাংশন তৈ রী কর যে টা ত োমার নামে র প্রথম অংশ এবং ত োমার
// নামে র শে ষে র অংশ প্যারামি টার হি সে বে নি বে । আর ত োমার নামে র দইু অংশ জ োড়া দি য়ে আউটপুট
// হি সে বে ত োমার পূর্ন নাম রি টার্ন করে দি বে । যে মন ধর ো, hablu এবং kanto ইনপুট প্যারামি টার
// হি সে বে দি লে আউটপুট হি সে বে hablu kanto রি টার্ন করবে ।

function fullName(shapna, chowdhury){
    let name = shapna + " " + chowdhury;
    return name
}
let myName = fullName("Shapna", "Chowdhury")
console.log(myName)

// 34) একটা ফাংশন লি খবা যে টাকে তুমি ক োন সংখ্যাকে ইনপুট হি সে বে দি লে সে সে ই সংখ্যার
// square করে সে ই square কে রি টার্ন করবে ।
// অর্থাৎ তুমি ইনপুট হি সে বে 5 দি লে সে টাতে স্কয়ারে হি সে বে 25 আউটপুট হি সে বে পাবে ।

function square(number){
    let result = number * number;
    return result;
}
let squareNumber = square(5);
console.log(squareNumber)

// 35) Write a function that will take hour as the input parameter and will convert it
// into minutes and will return the result in minutes.

function hoursToMinutes(input){
    let minutes = input * 60;
    return minutes;
}
const minutesOutput = hoursToMinutes(28)
console.log(minutesOutput)

// 36) Write a function findLeapYear() that will take the array [2023, 2024, 2025,
// 2028, 2030] as the input parameter and will check if each year is a leap year. If
// a year is a leap year insert that year in a new array, return the new array and
// print the result.

function findLeapYear(input){
    const newLeapYear = [];

    for (let i = 0; i <= input.length; i++){
        let element = input[i];

        if ((element % 4 === 0) && (element % 100 !== 0) || (element % 400 === 0)){
            
        newLeapYear.push(element)
        }
    }
    return newLeapYear
}
const array = [2023, 2024, 2025, 2028, 2030];
const output = findLeapYear(array);
console.log(output);

// 37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
// as the input parameter and will return the sum of the odd numbers.

function getOddSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        let element = numbers[i];
        sum = sum + element; 
    }
    return sum
}

function getOddNumbersOfAnArray(numbers){
    let oddNumbers = [];
    for (let i =0; i <numbers.length; i++){
        let element = numbers[i];
        if(element % 2 !== 0){
            oddNumbers.push(element)
        }
    }
    return oddNumbers;
}

const myNumbers = [5, 7, 8, 10, 45, 30];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = getOddSumOfAnArray(oddNumbers);
console.log(oddNumbersSum);


// 38) leapYear() নামে ফাংশন লি খ ো এবং নে ক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সে টা
// চে ক কর ো। Leap year হলে ফাংশন true রি টার্ন করবে আর leap year না হলে false রি টার্ন
// করবে ।

function leapYear(year){
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        return true
    }
        return false
}
const isLeapYear = leapYear(2023)
console.log("2023 is a leapyear", isLeapYear)

// 39) ত োমার বয়স কি odd নাকি even সংখ্যা সে টা চে ক কর একটা ফাংশন দি য়ে । সে ই
// ফাংশনকে ক োন সংখ্যা প্যারামি টার হি সে বে দি লে , সে ই সংখ্যা Even হলে ফাংশন true রি টার্ন
// করবে আর Odd হলে false রি টার্ন করবে ।

function myAge(age){
    if(age % 2 === 0){
        return true;
    }
    return false;
}
const isMyAge = myAge(28);
console.log("My age is Even",isMyAge)

// 40) এমন একটা ফ্যাংশনা লি খ ো যে টাকে তুমি ঘন্টাকে ইনপুট প্যারামি টার হি সে বে দি বে । আর সে
// সে ই ঘন্টাকে মি নি টে কনভার্ট করে মি নি ট রি টার্ন করবে ।

function hoursToMinutes(input){
    let minutes = input * 60;
    return minutes;
}
const minutesOutput = hoursToMinutes(28)
console.log(minutesOutput)

// 41) একটা লপু লিখতে হবে যেটা ১ থে কে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে
for (let i = 1; i < 100; i++){
    console.log(i)
}
// 42) ৫০ থে কে ৮০ এর মধ্যে যত ো বি জ োড় সংখ্যা আছে সে গুলাকে দে খাবে ।

for(let i = 51; i <= 80; i+=2){
    console.log(i)
}

// 43) তি নটা সংখ্যা এর য োগ করতে পারবে এমন একটা ফাংশন লি খ ো

function additionNumber(num1, num2, num3){
    const result = num1 + num2 + num3;
    return result;
}
const output = additionNumber(5, 10, 15);
console.log(output);

// 44) ত োমাকে ফাংশনে র ইনপুট হি সে বে সে লসি য়াস দি বে । তুমি ক্যালকুলে শন করে তাপমাত্রা
// ফারে নহাইট এ কনভার্ট করে সে টার আউটপুট রি টার্ন করবে

function celsToFarenheit(input){
    let result = (input*(9/5))+32;
    return result
}
const farenheitOutput = celsToFarenheit(10);
console.log(farenheitOutput)


// 45) একইভাবে উল্টা হি সাব করবে । যাতে ত োমাকে ফারে নহাইট হি সে বে তাপমাত্রা দি লে সে টাকে
// সে লসি য়াস এ কনভার্ট করে আউটপুট দি বে ।

function farenheitToCels (input){
    let result = (input - 32) * 5/9;
    return result;
}
const celsOutput = farenheitToCels(32);
console.log(celsOutput)

// 46) কে উ ১০০ এর মধ্যে কত মার্ক্স্ পে য়ে ছে সে টা ত োমাকে বলে দি বে । তুমি একটা ফাংশন দি য়ে বলে
// দি বে সে এ+ পাবে নাকি অন্য ক োন গ্রে ড পাবে ।

function grade (input){
    if(input >= 80){
        return "Your grade is A"
    }
    else if(input >= 60){
        return "Your grade is B"
    }
    else if(input >= 50){
        return "Your grade is C"
    }
    else if(input >= 40){
        return "Your grade is D"
    }
    return "You have Failed"
}
const gradeOutput = grade(50);
console.log(gradeOutput)

// 47) সুদে র হি সাব করবে । জাস্ট হি সাব কে মনে করতে হয়। সে ই চি ন্তায় করবে । সুদ ভাল ো না খারাপ
// সে টা এখন চি ন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলর্মু া থাকলে সে টা কি ভাবে ক োড এ লি খতে হয়
// সে ই এঙ্গে ল থে কে করার চে ষ্টা কর ো।

// simple interest
function simpleInterest (principal, time, rate){
    let result = (principal * time * rate) / 100;
    return result;
}
const simpleInterstOutput = simpleInterest(5000, 12, 10);
console.log(simpleInterstOutput)

// compound interest
function compoundInterest(p, t, r, n){
    const amount = p * (Math.pow(1 + (r/n)), (n * t));
    const interest = amount - p;
    return interest
}
const compoundInterestOutput = compoundInterest(2000, 5, .08, 12);
console.log(compoundInterestOutput)

// 48) Suppose, you have an array with 8 elements. Find the smallest element of
// that array.
// Now for the previous array, try to find the second largest element.

function maxInarray(numbers){
    let largest = 0;
    let secondLargest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
        else if((element < largest) && (element > secondLargest)){
            secondLargest = element;
        }
    }
    console.log("The largest number is:" , largest)
    return secondLargest;
}
const arr = [300, 500, 250, 99, 100, 400, 55, 28]
const largestNumber = maxInarray(arr);
console.log("The second Largest number is :", largestNumber)


// another way to solve

const numArr = [23, 24, 62, 20, 14, 4, 56, 5];
let smallestNumber = numArr[0];
let largestNum = numArr[0];

for(let i = 0; i < numArr.length; i++){
    if(smallestNumber > numArr[i]){
        smallestNumber = numArr[i]
    }
}
console.log(smallestNumber);

for(let i = 0; i < numArr.length; i++){
    if(largestNum < numArr[i]){
        largestNum = numArr[i]
    }
}
console.log(largestNum)

// now find second largest number

let secondLargestNumber = numArr[0];
numArr.splice(numArr.indexOf(largestNum), 1);
for(let i = 0; i < numArr.length; i++){
    if(secondLargestNumber < numArr[i]){
        secondLargestNumber = numArr[i];
    }
}
console.log(secondLargestNumber)


// 49) Write a function and take an array as a parameter. Find the average of all
// the elements of that array and return this average.

function averageNumbersInArray(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum/numbers.length
}
const arrNumbers = [50, 100, 150, 200, 250, 300];
const averageNumbersOutput = averageNumbersInArray(arrNumbers);
console.log("The average number is :", averageNumbersOutput);

// 50) Write a function which takes the height and width of a rectangle as
// parameters. Find out the area of that rectangle and print the result.

function rectangleArea(base, height){
    let area = base * height;
    return area;
}
const rectangleAreaResult = rectangleArea(10, 20);
console.log("Reactabgle Area is :", rectangleAreaResult)

// 51) একটা ক োড লি খ ো। যে টা দি য়ে ক োন একটা array এর মধ্যে সবচে য়ে ছ োট
// সংখ্যা বে র করে দি তে পারবে ।

function minInarray(numbers){
    let lowest = numbers[ 0 ];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const arr = [300, 500, 250, 99, 100, 400, 55, 28, 399]
const lowestNumber = minInarray(arr);
console.log("The lowest number is :", lowestNumber)

// 52) একটা ক োড লি খ ো যে টা দি য়ে তি নটা সংখ্যার মধ্যে সবচে য়ে ছ োট সংখ্যা বে র
// করে দি বে ।

console.log("Lowest number :", Math.min(50, 100, 150))

// 53) একটা ফাংশন লি খ ো। সে ই ফাংশনে র মধ্যে ইনপুট হি সে বে একটা array নি বে ।
// সে ই array এর মধ্যে অনে কগুলা সংখ্যা থাকবে । ত োমার কাজ হবে ইনপুট নে য়া
// array এর মধ্যে যতগুলা সংখ্যা আছে । সে ই সংখ্যা গুলার গড় বে র করবে ।
// তারপর সে ই গড় ফাংশনে র রি টার্ন হি সে বে দি য়ে দি বে । একটুচি ন্তা কর ো। বঝু ার
// চে ষ্টা কর ো। ট্রাই কর ো। দে খ ো পার ো কি না।

function averageNumbersInArray(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum/numbers.length
}
const arrNumbers = [50, 100, 150, 200, 250, 300];
const averageNumbersOutput = averageNumbersInArray(arrNumbers);
console.log("The average number is :", averageNumbersOutput);

// 54) একটা ফাংশন লি খ ো। যে টা ইনপুট প্যারামি টার হি সে বে একটা আয়তক্ষে ত্রে র
// দৈ র্ঘ্য আর উচ্চতাকে নি বে । তারপর সে ই আয়তক্ষে ত্র এর area (আয়তন) কে
// রে জাল্ট হি সে বে রি টার্ন করবে ।

function rectangleArea(base, height){
    let area = base * height;
    return area;
}
const rectangleAreaResult = rectangleArea(10, 20);
console.log("Reactabgle Area is :", rectangleAreaResult)

// 55) (ট্রি কি ) ক োন একটা array এর মধ্যে অনে কগুলা সংখ্যা আছে । সে ই সংখ্যাগুল ো
// থে কে second largest সংখ্যা বে র করার একটা প্র োগ্রাম লি খ ো। দরকার হলে
// গুগলে সার্চ দাও। তারপর সার্চ রে জাল্ট দে খে বঝেুঝে বঝেুঝে করার চে ষ্টা কর ো।

function maxInarray(numbers){
    let largest = numbers[ 0 ];
    let secondLargest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
        else if((element < largest) && (element > secondLargest)){
            secondLargest = element;
        }
    }
    console.log("The largest number is:" , largest)
    return secondLargest;
}
const numArray = [300, 500, 250, 99, 100, 400, 55, 28]
const secondLargestNumber = maxInarray(numArray);
console.log("The second Largest number is :", secondLargestNumber)

// 56) একটা ফাংশন লি খ ো। সে টার মধ্যে তি নটা প্যারামি টার নি বে । এই তি নটা
// প্যারামি টার হবে ক োন একটা ত্রি ভুজে র তি নটা বাহু এর দৈ র্য্য। এখন ত োমার কাজ
// হচ্ছে ফাংশনে র ভি তরে কি ছুহি সাব নি কাশ করে ত্রি ভুজে র area (আয়তন) বে র
// করা। ক োন একটা ত্রি ভুজে র তি নটা বাহুর দৈ র্য্য দে য়া থাকলে সে টা থে কে কি ভাবে
// আয়তন বে র করতে হয় সে ই ফর্মুলর্মু া গুগল থে কে খুজেঁজে বে র কর ো।

function barmudaTriangle(side1, side2, side3){
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * ((s-side1) * (s - side2) * (s-side3)));

    return area.toFixed(2);
}
const areaOfTriangle = barmudaTriangle(5, 6, 7);
console.log(areaOfTriangle)

// 57) ক োন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কি না। সে টা চে ক করার একটা
// ফাংশন লি খ ো।

function isPrimeNumber(number){
    for(i = 2; i < number; i++){
    if(number % 2 === 0){
        return "This is not a Prime number"
    }
    else
        return "This is a Prime number"
    }
}
const primeNumber = isPrimeNumber(52);
console.log(primeNumber);

// another solution
function isPrimeNumber(number){
    if(number < 2){
        return `${number} is not a prime number`
    }
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return `${number} is not a prime number`
        }
    }
    return `${number} is a prime number`
}
console.log(isPrimeNumber(29))

// 58) দইুটা ভে রি য়ে বল এর মধ্যে য োগ, বি য় োগ, গুণ, ভাগ কি ভাবে করতে হয় সে টা কি জান ো।
// অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জান ো। তাহলে নাম্বার টাইপে র দইুটা ভে রি য়ে বল
// লি খ ো তারপর তাদে র য োগ করে সে টার মান আরে কটা ভে রি য়ে বল এ রাখ ো। একইভাবে ওই দইুটা
// ভে রি য়ে বল এর মধ্যে বি য় োগ, গুন, ভাগ এবং ভাগশে ষ বে র কর ো।

let num1 = 50;
let num2 = 20;
let addition = 50 + 20;
let subtraction = 50 - 20;
let multiplication = 50 * 20;
let division = 50 / 20;
let remainder = 50 % 20;

// 59) তুমি কি দইুটা ভে রি য়ে বল এরমধ্যে তুলনা করতে পার ো। কম্পারি জন করতে পার ো। যে দইুটা
// ভে রি য়ে বল এর মধ্যে প্রথমটা সে কে ন্ডটা এর চাইতে ছ োট, বড়, অসমান, সমান , ছ োট বা সমান,
// বড় বা সমান। এইগুলা চে ক করতে পার ো। অর্থাৎ <, >, ==, !=, <=, >= চি হ্নগুলা ব্যবহার করতে
// পার ো। তাহলে দইুটা সংখ্যা টাইপে র ভে রি য়ে বল ডি ক্লে য়ার করে তাদে রকে এই ছয়ভাবে তুলনা করে
// ক োড লি খে ফে ল ো।

let num3 = 50;
let num4 = 30;
if(num3 > num4){
    console.log(num3, "is large")
}
if(num3 < num4){
    console.log(num3, "is small")
}
if(num3 == num4){
    console.log("False")
}
if(num3 != num4){
    console.log("True")
}
if(num3 >= num4){
    console.log("large or equal")
}
if(num3 <= num4){
    console.log("small or equal")
}


// 60) ত োমার যদি দইুটা শর্ত পূরণ করতে বলে । এবং দইুটা শর্তে র মধ্যে দইুটাই পূরণ করতে হবে ।
// তাহলে তুমি কি সে টা চে ক করতে পারবে ? একইভাবে যদি বলে তুমি দইুটা শর্তে র যে ক োন একটা
// পূরণ করতে পারবে । অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পার ো কি না। যদি পার ো তাহলে
// নি জে নি জে এই রকমে র ক োড লি খে ফে ল ো।

let number4 = 300;
let number5 = 400;
let number6 = 500;
if (((number4 > number5) && (number3 > number5)) || (number6 > number4) && (number6 > number5)) {
    console.log("The largest number is 6")
}

// 61) তুমি কি একটা শর্ত পালন করলে একটা কি ছুকরবে । শর্ত পূরণ না করলে অন্য কি ছুএকটা
// করবে এমন ক োড লি খতে পারবে । অর্থাৎ তুমি কি if-else এর ক োড লি খতে পারবে । পারলে একটা
// ক োড লি খে ফে ল ো

let number1 = 10;
let number2 = 20;
let number3 = 30;

if ((number1 > number2) && (number1 < number3)) {
    console.log(number1, "is large")
}
else if ((number2 > number1) && (number2 < number3)) {
    console.log(number2, "is large")
}
else{
    console.log(number3, "is large")
}


// 62) ত োমাকে যদি বলে একটা while লপু দি য়ে ৭ থে কে ১৯ পর্যন্ত যতগুলা বি জ োড় সংখ্যা আছে
// সে গুলা দে খাতে । তুমি কি সে টা দে খাতে পারবে ? পারলে সে ই ক োড লি খে ফে ল ো।

let i = 7;

while (i <= 19){
    if(i % 2 !== 0){
        console.log(i)
    }
    i++
}

// another way
let j = 7;
while(j <= 19){
    console.log(j)
    j+=2
}

// 63) ত োমাকে যদি বলা হয় তুমি একটা array ডি ক্লে য়ার করবে । এবং সে টার মধ্যে কয়টা উপাদান
// আছে সে টা বে র করবে হবে । সে ই array এর এর মধ্যে চতুর্থ পজি শন এর উপাদান চে ইঞ্জ করতে
// হবে । array এর মধ্যে দইুটা উপাদান য োগ করতে হবে । এবং একটা উপাদান কে বে র করে দি তে
// হবে । তুমি কি সে টা করতে পারবে ।

let numberArr = [10, 20, 30, 40, 50, 60, 70, 80];
numberArr[4] = 100;
numberArr.pop();
numberArr.push(500, 600);
console.log(numberArr);
console.log(numberArr.length);

// 64) তুমি কি একটা ফর লপু দি য়ে ক োন একটা array এর সবগুলা উপাদানকে দে খাতে পারবে । সে টা
// রে গুলার for লপু হ োক বা for of হ োক। হলে সে ই স্টাইলে একটা ক োড লি খে ফে ল ো।

let friendsName = ["arshi", "Ria", "Farzana"]
for(let i = 0; i < friendsName.length; i++){
    let element = friendsName[i];
    console.log(element)
}

// 65) ত োমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সে গুলাকে
// console log করে দে খাতে সে টা কি তুমি পারবে ? তাহলে তুমি সে ই ক োড করে ফে ল ো

let numbers = [50, 30, 20, 80, 100, 99, 88];
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 80){
        console.log(numbers[i])
    }
}

// 66) তি নটা সংখ্যার গুনফল বে র করে ফাইনাল রে জাল্ট আউটপুট হি সে বে রি টার্ন করতে হবে । তুমি
// কি সে ই ক োড লি খতে পারবে । যদি পার ো তাহলে সে ই ক োড লি খে ফে ল ো।

function multiplicationNumber(num1, num2, num3){
    const result = num1 * num2 * num3;
    return result;
}
const output = multiplicationNumber(5, 10, 15);
console.log(output);

// 67) একটা অবজে ক্ট ডি ক্লে য়ার করবে । সে টাতে তি নটা প্রপার্টি থাকবে । এবং ক োন একটা প্র োপার্টি
// এর মান চে ইঞ্জ করবা।

let student ={
    name : "Shapna",
    batch : 06,
    institute : "Programming Hero",
}
student.name = "Nishat";
console.log(student)

// 68) সি ম্পল একটা ফাংশন লি খতে হবে । যে টার নাম হবে feetToInch এবং এই ফাংশন
// ইনপুট হি সে বে নি বে feet আর রি টার্ন করবে inch । অর্থাৎ এই ফাংশনকে ক োন
// একটা ফি ট বলে দি লে সে রি টার্ন হি সে বে বলে দি বে কত ইঞ্চি হয়।

function feetToInch(feet){
    let inch = feet * 12;
    return inch
}
const inchOutput = feetToInch(6);
console.log(inchOutput)

// 69) একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দি য়ে একটা ফাংশন
// লি খবে । এই ফাংশনে ইনপুট হি সাবে কে উ সে ন্টি মি টার দি বে আর সে ই সে ন্টি মি টার
// কে মি টার এ কনভার্ট করে রে জাল্ট রি টার্ন করবে ।

function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter
}
const meterOutput = centimeterToMeter(1000);
console.log(meterOutput)


// 70) আরে কটা ফাংশন লি খবে যে টার নাম লি খবে । যে ই ফাংশনে র নাম হবে paperRequirements
// এই ফাংশনে র প্যারামি টার হি সে বে তি নটা প্যারামি টার হবে । প্রথম প্যারামি টার হবে তুমি প্রথম বই
// কত কপি ছাপাতে চাও। সে কে ন্ড প্যারামি টার হবে তুমি সে কে ন্ড বই কত কপি ছাপাতে চাও। আর
// থার্ড প্যারামি টার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ ক োন বই এর কত কপি ছাপান ো
// হবে সে টাই প্যারামি টার হি সে বে নি বে ।
// এইবার ভাল ো করে খে য়াল কর ো।
// প্রথম বই ছাপান োর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সে কে ন্ড বই ছাপান োর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপান োর জন্য পৃষ্ঠা লাগবে ৩০০ টা
// এখন ত োমার কাজ হচ্ছে paperRequirements নামক ফাংশন লি খে ফে লা যাতে । সে ই ফাংশনকে
// কল করে ক োন বই এর কত কপি লাগবে বলে দি বে প্যারামি টার হি সে বে । আর ফাংশন হি সাব করে
// বলে দি বে ত োমার সর্বম োট কতপৃষ্ঠা কাগজ লাগবে ।
// উত্তর হি সে বে সংখ্যা রি টার্ন করবে ।

function paperRequirements(book1, book2, book3){
    const pageForBook1 = 100;
    const pageForBook2 = 200;
    const pageForBook3 = 300;

    const totalPageForBook1 = book1 * pageForBook1;
    const totalPageForBook2 = book2 * pageForBook2;
    const totalPageForBook3 = book3 * pageForBook3;

    const totalPaperRequirements = totalPageForBook1 + totalPageForBook2 + totalPageForBook3;

    return totalPaperRequirements;
}
const totalCopyOfBooks = paperRequirements(10, 20, 30);
console.log(totalCopyOfBooks)


// 71) একটা ফাংশন লি খবে । এই ফাংশনে র নাম হবে bestFriend তারপর সে ই ফাংশনে
// ইনপুট প্যারামি টার হি সে বে একটা array নি বে । সে ই array এর মধ্যে ত োমার সব
// ফ্রে ন্ডে র নাম থাকবে । এখন ত োমার কাজ হচ্ছে যে ফ্রে ন্ড এর নাম সবচে য়ে বড় সে ই ফ্রে ন্ড এর
// নাম রি টার্ন করে দে য়া। এই ক্ষে ত্রে তুমি নামটা অর্থাৎ ফ্রে ন্ডে র নাম (স্ট্রি ং) রি টার্ন করতে হবে ।

function bestFriend(names){
    let myBestFriend = names [0];
    for(let i = 0; i < names.length; i++){
        let element = names[i];
        if(element.length > myBestFriend.length){
            myBestFriend = element
        }
    }
    return myBestFriend;
}
const arr = ["Arshi", "Ria", "Farzana", "Taposhi", "Pinki", "Khushbu"]
const bestFriendName = bestFriend(arr);
console.log(bestFriendName)

// 72) এইটা একটুট্রি কি হতে পারে । একটা array এর মধ্যে অনে কগুলা সংখ্যা থাকবে ।
// ত োমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চে ক করা। এবং সংখ্যা
// গুলা যদি পজি টিভ সংখ্যা হয়। অর্থাৎ শনূ্য বা শন্যেূন্যে র চাইতে বড় হয় তাহলে
// সে গুলাকে ক োন একটা array এর মধ্যে রাখবে । আর যদি নে গে টিভ সংখ্যা হয়।
// তাহলে লপুটা স্টপ করে দি বে । এবং লপু বন্ধ করার আগ পর্যন্ত যতগুলা পজি টিভ
// সংখ্যা পাওয়া গে ছে । সে গুলা রি টার্ন করে দি বে ।

function onlyPositive(numbers){
    let positiveValue = [];
    for (let i = 0; i <= numbers.length; i++){
        let element = numbers[i];
        if(element >= 0){
            positiveValue.push(element)
        }
        else{
            break;
        }
    }
    return positiveValue;
}
const arrNumbers = [45, 87, 96, 11, 63, -56, 11, 28, -87, 71];
const positiveNumbers = onlyPositive(arrNumbers);
console.log(positiveNumbers)

// Assignment 4 problem solution

// Problem: 1  radianToDegree
function radianToDegree(input){
    if(typeof input !== 'number'){
        return "Please enter a valid number"
    };
    let getDegree = parseFloat((input * (180/ Math.PI)).toFixed(2));
    return getDegree;
}
const radianToDegreeOutput = radianToDegree(10);
console.log(radianToDegreeOutput);
console.log(typeof(radianToDegreeOutput))

// Problem:2  isJavaScriptFile
function isJavaScriptFile(file){
    if(typeof file !== 'string'){
        return "Please enter a filename"
    }
    else if(file.toLowerCase().endsWith('.js')){
        return true;
    }
    else{
        return false
    }
}
const jsFile = isJavaScriptFile("image.jpg.js");
console.log(jsFile)
console.log(typeof(jsFile))

// Problem 3: oilPrice
function oilPrice(deseil, petrol, octane){

    if((typeof deseil !== 'number' || deseil < 0) || (typeof petrol !== 'number' || petrol < 0) || (typeof octane !== 'number' || octane < 0)) {
        return "Please check your all input numbers"
    }

    const perLitrDeseilPrice = 114;
    const perLitrPetrolPrice = 130;
    const perLitrOctanePrice = 135;

    let totalDeseilPrice = deseil * perLitrDeseilPrice;
    let totalPetrolPrice = petrol * perLitrPetrolPrice;
    let totalOctanePrice = octane * perLitrOctanePrice;

    let totalOilPrice = totalDeseilPrice + totalPetrolPrice + totalOctanePrice;

    return totalOilPrice;
}
const litrOfOil = oilPrice(30, 20, 10);
console.log(litrOfOil)


// Problem 4: publicBusFare
function publicBusFare(people){

    if(typeof people !== 'number' || people < 0 || Number.isInteger(people) !== true){
        return "Please provide a valid input"
    }

    const busCapacity = 50;
    const microCapacity = 11;

    const restPeopleOfBus = people % busCapacity;
    const restPeopleOfMicro = restPeopleOfBus % microCapacity;
    const totalPublicBusFare = restPeopleOfMicro * 250;

    return totalPublicBusFare;
}
const totalPassenger = publicBusFare(365);
console.log(totalPassenger)

// Problem 5: isBestFriend
function isBestFriend(person1, person2){
    if(typeof person1 !== 'object' && typeof person2 !== 'object'){
        return "Please provide an object"
    }

    if((typeof person1.name !== 'string' || typeof person1.friend !== 'string') || (typeof person2.name !== 'string' || typeof person2.friend!== 'string')){
        return "Please enter your name"
    }

    else if((person1.name.toLowerCase() === person2.friend.toLowerCase()) && (person1.friend.toLowerCase() === person2.name.toLowerCase())){
        return true
    }

    else{
        return false
    }
}
const person1 = {name: "abul", friend: "babul"};
const person2 = {name : "babul", friend: "abul"};
const bestFriend = isBestFriend(person1, person2);
console.log(bestFriend)