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
//         console.log(x, y, z);
//     }
// }
// let myFun = outerFunction()()


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


// //remove duplicate name
// let myNumber = ["Akhi", "Sharmin", "Rokib", "Anni", "Samia", "Adiba", "Neela"];

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


// const arr = "Rokib";
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









const number = [60, 80, 60, 40, 30, 30, 40]

let sum = 0;

for (let i = 0; i < number.length; i++) {
    // console.log(number[i]);
    sum = sum + number[i]
}

const result = sum / number.length;
console.log(result.toFixed(2));