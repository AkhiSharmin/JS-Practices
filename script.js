// let a = 100;

// function outerFunction() {
//     let y = 20;
//     function innerFunction() {
//         let x = 10;
//         console.log(x, y, a);
//     }
//     innerFunction()
// }
// outerFunction()


//closure
// function outerFunction() {
//     let y = 100;
//     return function innerFunction() {
//         let x = 10;
//         console.log(x, y);
//     }
// }
// let myFun = outerFunction()()


// practices closure
// function OutFun() {
//     let x = 10;
//     function inFun() {
//         let y = 10;
//         console.log(x, y);
//     }
//     inFun()
// }
// OutFun()



// function OutFun() {
//     let x = 10;
//     return function inFun() {
//         let y = 10;
//         console.log(x, y);
//     }
// }

// let fun = OutFun()()



//closure
// function myFunction() {
//     return function outerFunction() {
//         let y = 100;
//         return function innerFunction() {
//             let x = 10;
//             console.log(x, y);
//         }
//     }
// }

// let myFun = myFunction()();
// myFun()
// console.log(myFun);



// function add(x, y) {
//     return x + y
// }
// let myResult = add(5 + 5);
// console.log(myResult);

//Function Declaration
// function sum(x, y) {
//     return x + y
// }
// let res = sum(5, 5);
// console.log(res);


// Function Expression
// let myFun = function (a, b) {
//     return a - b;
// }
// let result = myFun(15, 5);
// console.log(result);


//Arrow Function
// let myArrow = (a, b) => {
//     return a * b;
// }
// let result = myArrow(5, 5);
// console.log(result);




//remove duplicate number
// let myNumber = [10, 20, 30, 10, 20, 40];
// // console.log(myNumber.indexOf(34));
// let myArray = [];
// for (let i = 0; i < myNumber.length; i++) {
//     // console.log();
//     if (myArray.indexOf(myNumber[i]) === -1) {
//         myArray.push(myNumber[i])
//     }
// }

// console.log(myArray);

//check index number
// let myNumber = [10, 20, 30, 10, 20, 40];
// console.log(myNumber.indexOf(30));


// remove duplicate number
//using for loop
// let myNumber = [1, 1, 1, 2, 3, 4, 5, 5, 5];
// let newArr = []
// for (let i = 0; i < myNumber.length; i++) {
//     // console.log(myNumber[i]);
//     if (newArr.indexOf(myNumber[i]) === -1) {
//         newArr.push(myNumber[i])
//     }
// }
// console.log(newArr);

//using forEach Loop
// let myNumber = [1, 1, 1, 2, 3, 4, 5, 5, 5];
// let arr = []
// myNumber.forEach(e => {
//     // console.log(e);
//     if (arr.indexOf(myNumber[e]) === -1) {
//         arr.push(myNumber[e])
//     }
// })
// console.log(arr);

//do it using while Loop
// let myNumber = [1, 1, 1, 2, 3, 4, 5, 5, 5];
// let arr = [];
// let i = 0;
// while (i < myNumber.length) {
//     if (arr.indexOf(myNumber[i]) === -1) {
//         arr.push(myNumber[i]);
//     }
//     i++;
// }
// console.log(arr);





// //remove duplicate name
// let myNumber = ["Akhi", "Sharmin", "Anni", "Samia", "Adiba", "Neela"];

// let myArray = [];
// for (let i = 0; i < myNumber.length; i++) {
//     if (myArray.indexOf(myNumber[i]) === -1) {
//         myArray.push(myNumber[i])
//     }
// }

// console.log(myArray);



// let myNum = [10, 20, 10, 30, 40, 50];
// let newArray = []
// for (let i = 0; i < myNum.length; i++) {
//     if (newArray.indexOf(myNum[i]) === - 1) {
//         newArray.push(myNum[i])
//     }
// }
// console.log(newArray);


// const arr = "Ahnaf";
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }



//vowel [a, e, i, o , u]
// const arr = "Akhi";
// let count = 0;
// let count2 = 0;
// for (let i = 0; i < arr.length; i++) {
//     const currentChar = arr[i].toLowerCase();
//     // console.log(currentChar);
//     // if (['a', 'e', 'i', 'o', 'u'].includes(currentChar)) {
//     //     console.log(`${currentChar} is a vowel.`);
//     // } else {
//     //     console.log(`${currentChar} is not a vowel.`);
//     // }
//     if (currentChar == "a" || currentChar == "e" || currentChar == "i" || currentChar == "o" || currentChar == "u") {
//         count++;
//         // console.log(`${currentChar} is Vowel`);
//     } else {
//         // console.log(`${currentChar} is Not Vowel`);
//         count2++;
//     }
// }
// console.log({ count, count2 });



// const myString = "Sharmin";
// let allCount = 0;
// let allCount2 = 0;
// for (let i = 0; i < myString.length; i++) {
//     const currentString = myString[i].toLowerCase();
//     if (currentString == "a" || currentString == "e" || currentString == "i" || currentString == "o" || currentString == "u") {
//         // console.log(`${currentString} is vowel`);
//         allCount++;

//     } else {
//         // console.log(`${currentString} is not vowel`);
//         allCount2++;
//     }
// }

// console.log(allCount, allCount2);






















// const employee = [
//     { name: 'Alice', department: 'Engineering' },
//     { name: 'Bob', department: 'Sales' },
//     { name: 'Charlie', department: 'Engineering' },
//     { name: 'David', department: 'Marketing' },
//     { name: 'Alice', department: 'Engineering' },
// ];

//find destructuring name
// const singleName = employee.find(({ name }) => name === "Alice");
//without destructuring
// const singleName = employee.find(employee => employee.name === "Alice");
// console.log(singleName);


//filter destructuring name
// const singleName = employee.filter(({ name }) => name === "Alice");
// console.log(singleName);
//without destructuring
// const singleName = employee.filter(employee => employee.name === "Alice");
// console.log(singleName);



// const number = [60, 60, 60, 40, 50, 60, 60, 80, 50, 55, 55, 56, 44, 77, 44];

// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//     // console.log(number[i]);
//     sum = sum + number[i]
//     // console.log(sum);
// }

// const result = sum / number.length;
// console.log(result.toFixed(2));




// const number = [60, 80, 60, 40, 30, 30, 40]

// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//     // console.log(number[i]);
//     sum = sum + number[i]
// }

// const result = sum / number.length;
// console.log(result.toFixed(2));




// const myString = "Ahnaf";
// let string = ''

// for (let i = myString.length - 1; i >= 0; i--) {
//     string += myString[i]
// }
// console.log(string);


// const number = [1, 23, 54, 6, 23, 44, 56, 7, 55, 44, 31]
// for (let i = number.length - 1; i >= 0; i--) {
//     console.log(number[i]);
// }


// let original = "Hello World";
// let reversed = "";
// for (let i = original.length - 1; i >= 0; i--) {
//     reversed += original[i];
// }
// console.log(reversed);


// let original = "Hello World";
// let reversed = [...original, "Akhi"].reverse().join('');
// console.log(reversed);

// let myArr = "sharmin akhi"
// let string = ""

// for (let i = myArr.length - 1; i >= 0; i--) {
//     string += myArr[i]
// }
// console.log(string);




// for (let i = 55; i <= 85; i++) {
//     if (i % 5 === 0) {
//         console.log(i + `is divided by 5`);
//     } else {
//         console.log(i + `is not divided by 5`);
//     }
// }


// for (let i = 55; i <= 85; i++) {
//     if (i % 2 !== 0) {
//         // console.log(i);
//         if (i % 5 == 0) {
//             continue;
//         } else {
//             console.log(i + `amr matha`);
//         }
//     }
// }



// for (let i = 55; i <= 85; i++) {
//     if (i % 2 == 1 && i % 5 !== 0) {
//         console.log(i);
//     }
// }


// for (let i = 55; i <= 85; i++) {
//     if (i % 2 !== 0) {
//         if (i % 5 == 0) {
//             continue;
//         } else {
//             console.log(i + `not divided by 5`);
//         }
//     }
// }


// const num = [60, 25, 31, 43, 54, 67, 77, 33];
// for (let i = num.length - 1; i >= 0; i--) {
//     console.log(num[i]);
// }


// const userName = "Sharmin Akhi"
// let string = ""

// for (let i = userName.length - 1; i >= 0; i--) {
//     string += userName[i]
// }
// console.log(string);


// const userName = "Sharmin Akhi"
// for (let i = 0; i <= userName.length; i++) {
//     if (userName[i] == "a" || userName[i] == "i" || userName[i] == "o" || userName[i] == "u" || userName[i] == "s") {
//         console.log(userName[i] + ` is vowel`);
//     }
// }


// vowel
// const names = 'Sukriya Anam';
// for (let i = 0; i < names.length; i++) {
//     const newChar = names[i].toLowerCase();
//     if (newChar === "a" || newChar === "e" || newChar === "i" || newChar === "o" || newChar === "u") {
//         console.log(`${newChar} is vowel`);
//     } else {
//         console.log(`${newChar} is consonant`);
//     }
// }







// 📢Use of different types of functions in JavaScript :

// ✅ Function Declaration
// function add(a, b) {
//  return a + b;
// }
// console.log(add(2, 3)); ➡5

// ✅Function Expression
// let subtract = function(a, b) {
//  return a - b;
// };

// console.log(subtract(5, 2)); ➡3

// ✅Arrow Function
// let multiply = (a, b) => a * b;

// console.log(multiply(2, 3)); ➡6

// ✅Anonymous Function (as a callback)
// setTimeout(function() {
//  console.log("Time's up!");
// }, 1000);

// ✅IIFE
// (function() {
//  console.log("This runs immediately!");
// })();

// ✅Constructor Function
// function Car(make, model) {
//  this.make = make;
//  this.model = model;
// }

// let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.make); ➡"Toyota"

// ✅ Generator Function
// function* countUp() {
//  let count = 0;
//  while (true) {
//  yield count++;
//  }
// }

// let counter = countUp();
// console.log(counter.next().value); ➡ 0
// console.log(counter.next().value); ➡1
// console.log(counter.next().value); ➡ 2