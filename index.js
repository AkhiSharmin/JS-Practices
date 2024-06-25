// console.log('hello world');

// {
//     var x = 10
// }
// {
//     let y = 10
//     console.log(y);
// }

// console.log(x);
// // console.log(y);

// function showDate() {
//     document.getElementById('click').innerHTML = Date();
// }


// let myString = "Hello I want to learn more wanted and more"
// console.log(myString.lastIndexOf("to"));
// console.log(myString.indexOf("want"));

// let match = myString.match('w')
// console.log(match);



// let x = 123;
// const num = x.toString();
// console.log(typeof num);

// console.log(parseInt('10.80 20 30'));



// const cars = ["saad", "volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[4] = "graphs"
// fruits[5] = "pineapple"
// console.log(fruits[fruits.length - 1]);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// for (i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }



// using for loop
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;\



// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;

// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }


// using for each
// function myFunction(value) {
//     console.log(value);

// }

// fruits.forEach(myFunction)

// const person = {
//     name: "akhi",
//     passion: "Love of Coding"
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = Array.isArray(person);
// console.log(myArray);




// const myArr = [1, 2, 3, 4, 5];
// const newArr = [...myArr, 6];
// console.log(newArr);


// const myArr = [1, 2, 3];
// const [a, b, c] = myArr;
// console.log(a);


// const person = {
//     name: 'John',
//     age: 30,
//     city: 'USA'
// };

// function PersonInfo({ name, age, city }) {
//     console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
// }

// PersonInfo(person);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop()
// fruits.push("Heyyyyyy")
// fruits.shift()
// fruits.unshift("grasp")
// fruits[2] = "pineapple"
// fruits[fruits.length] = "I'm Last"
// delete fruits[1]

// fruits.splice(2, 3, "Two", "Three")
// fruits.splice(2, 0, "X", "Y")
// fruits.splice(0, 1)
// console.log(fruits);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myBoys.concat(myGirls);
// console.log(myChildren);

// const myFruits = fruits.sort();
// const myFruits = fruits.reverse()
// console.log(myFruits);


//how is it work
// const myNum = [10, 20, 30, 40];
// myNum.sort(function (a, b) {
//     console.log(a, b);
//     return b - a;
// })

// console.log(myNum);


// const myArr = [100, 30, 200, 30, 20];
// const myRes = Math.max(...myArr);
// const myRes = Math.min(...myArr);
// console.log(myRes);



//ForEach
// const myArr = [100, 30, 200, 30, 20];
// function myFun(value, index, Array) {
//     console.log(value);
//     console.log(index);
//     console.log(Array);
// }
// myArr.forEach(myFun)


//Map
// const myArr = [20, 30, 50, 30, 20];
// function myFun(value, index, Array) {
//     return value * 2
// }
// const result = myArr.map(myFun);
// console.log(result);


//filter
// const myArr = [80, 30, 1, 3, 20];
// function myFun(value, index, Array) {
//     return value > 10
// }
// const result = myArr.filter(myFun);
// console.log(result);


// const students = [
//     {
//       name: 'Student A',
//       courses: [
//         { name: 'Math', status: 'completed' },
//         { name: 'History', status: 'ongoing' },
//         // ... (more course objects)
//       ],
//     },
//     {
//       name: 'Student B',
//       courses: [
//         { name: 'Math', status: 'completed' },
//         { name: 'History', status: 'completed' },
//         { name: 'Science', status: 'completed' },
//         // ... (more course objects)
//       ],
//     },
//     // ... (more student objects)
//   ];


const employees = [
    { name: 'Alice', department: 'Engineering' },
    { name: 'Bob', department: 'Sales' },
    { name: 'Charlie', department: 'Engineering' },
    { name: 'David', department: 'Marketing' },
    { name: 'Eva', department: 'Engineering' },
];


// for (let i = 0; i < employees.length; i++) {
//     // console.log(employees[i]);
//     if (employees[i].department === "Engineering") {
//         console.log(employees[i]);
//     }
// }


// const myArr = [1, 2, 3, 4, 1, 1, 1, 1];
// let count = 0;
// for (let value of myArr) {
//     // // console.log(value);
//     // if (value % 2 == 0) {
//     //     console.log(value);
//     // }
//     // count = count + value
//     count += value
// }
// console.log(count);

// reduce
// const myArr = [80, 30, 1, 3, 20];
// function myFun(total, value, index, Array) {
//     console.log(total);
//     return total + value;
// }
// const result = myArr.reduce(myFun);
// console.log(result);


//every
// const myArr = [80, 3, 1, 3, 200];
// function myFun(value, index, Array) {
//     console.log(value);
//     return value > 18;
// }
// const result = myArr.every(myFun);
// console.log(result);

//some
// const myArr = [80, 3, 1, 3, 200];
// function myFun(value, index, Array) {
//     console.log(value);
//     return value > 18;
// }
// const result = myArr.some(myFun);
// console.log(result);


// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// let position = fruit.indexOf("Orange")
// console.log(position);


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((everyElement, currentValue) => {
//     console.log(everyElement);
//     return everyElement + currentValue;
// },);

// console.log(sum);





// const employee = [
//     { name: 'Alice', department: 'Engineering' },
//     { name: 'Bob', department: 'Sales' },
//     { name: 'Charlie', department: 'Engineering' },
//     { name: 'David', department: 'Marketing' },
//     { name: 'Alice', department: 'Engineering' },
// ];

//find
// const myArray = [20, 30, 19, 20];
// function myFun(value, index, Array) {
//     return value > 20;
// }
// const result = myArray.find(myFun);
// console.log(result);


// const foundEmployee = employee.find(({ name }) => name === "Alice");
// const foundEmployee = employee.filter(({ name }) => name === "Alice");

// console.log(foundEmployee);


// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)


// let myDate = new Date();

// let myDate = new Date();
// const d = new Date("2024-01-08T12:00:00Z");
const d = new Date("2024-Jan-08");
// console.log(d);


// console.log(d.toDateString());
// console.log(d.toDateString());
// console.log(currentDate.toTimeString());


// const months = ["January"];

// const d = new Date();
// let month = months[d.getMonth()];
// console.log(d.toDateString());




// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date();
// console.log(d);
// let month = months[d.getMonth()];
// console.log(d.toDateString());


// const dateHours = new Date();
// let currentHours = dateHours.getHours();
// console.log(currentHours);


//math.round
// const number = 20.5;
// const result = Math.round(number);
// console.log(result);

//Math.floor
// const number2 = 10.9;
// const result = Math.floor(number2);
// console.log(result);

//Math.ceil
// const number3 = 20.01;
// const result = Math.ceil(number3);
// console.log(result);


//Math.truce
// const number3 = 5.5;
// const result = Math.trunc(number3);
// console.log(result);


//Math.truce
// const number3 = 5.5;
// const result = Math.trunc(number3);
// console.log(result);


//Math.sing
// const number3 = 5;
// const result = Math.sign(number3);
// console.log(result);


//Math.pow
// const result = Math.pow(2, 2);
// console.log(result);


//Math.abs
// const result = Math.abs(-4.7);
// console.log(result);


//Math.min Math.min
// const result = Math.min(-4, 7, 3, 6, 9, -20);
// const result2 = Math.max(-4, 7, 3, 6, 9, -20);
// console.log(result, result2);


//Math.log2()
// const result = Math.log2(8);
// // const result2 = Math.log(2)
// console.log(result);


// const number = Math.random() * 10;
// console.log(number);


// let randomFloat = Math.random();
// console.log(randomFloat);



//random number generate
// let randomInteger = Math.floor(Math.random() * 10);
// //console.log(randomInteger);

// const myNumber = Math.floor(Math.random() * 20);
// console.log(myNumber);


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// const newNum = getRndInteger(0, 40)
// console.log(newNum);


// const randomNumber = Math.random() * 7;
// console.log(Math.floor(Math.random() * 100 + 1));
// for (let i = 0; i < 10; i++) {
//     const randomValue = Math.floor(Math.random() * 100 + 1)
//     if (randomValue % 5 == 0) {
//         console.log(`${randomValue} divided 5`);
//     } else {
//         console.log(`${randomValue} Not divided 5`);
//     }
// }


//sort
// const allName = ['Akhi', "Zannat", "Sukriya", "Ayat", "Labiba"];
// console.log(allName.sort());
// const myNumber = [12, 4, 5, 7, 11, 44, 55];
// console.log(myNumber.sort());

//sort
// const myNumber = [12, 4, 5, 7, 11, 44, 55];
// console.log(myNumber.sort(function (a, b) {
//     console.log('hello', a, b);
//     return a - b;
//     // return b - a;
// }));

//sort
// const arr = [22, 33, 12, 34, 56, 1, 0, 9];
// arr.sort(function sortingFun(a, b) {
//     return a - b;
// })
// console.log(arr);


// leap year
// function isLeapYear(year) {
//     if (year % 400 === 0 || ((year % 4 === 0) && (year % 100 !== 0))) {
//         console.log(`${year} is leapYear`);
//     } else {
//         console.log(`${year} is not leap Year`);
//     }
// }

// isLeapYear(2026)


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



//remove duplicate number
// const allNumber = [1, 2, 5, 8, 1, 3, 2, 2, 10, 1];
// let newArr = [];
// for (let i = 0; i < allNumber.length; i++) {
//     if (newArr.indexOf(allNumber[i]) === -1) {
//         newArr.push(allNumber[i])
//     }
// }
// console.log(newArr);



//show duplicate number
// const allNumber = [1, 2, 5, 8, 1, 3, 2, 2, 10, 1];
// const evenNum = allNumber.filter((value) => value % 2 == 0);
// console.log("Even Number", evenNum);

// const duplicate = allNumber.filter(function (value, index, Array) {
//     // console.log(Array.indexOf(value) !== index);
//     return Array.indexOf(value) !== index;
// })
// console.log(duplicate);


// let age = "akhi";
// let age = "8";

// // age = Number(age);
// if (isNaN(age)) {
//     console.log("Input is not a number");
// } else {
//     console.log(age < 18 ? "Baby Boy" : "Too Young");
// }


//for in loop
// const myNum = [1, 3, 4, 5, 6,];
// for (let num in myNum) {
//     console.log(myNum[num]);
// }


// const myNum = {
//     name: "sukriya",
//     age: 16,
//     hobby: "dancing"
// };
// for (let num in myNum) {
//     console.log(myNum[num]);
// }


//spreedToMeter
// const spreedToMeter = (value) => {
//     const result = value.split(" ");
//     console.log(Number(result[0]));
//     const output = (parseFloat(result[0]) * 1000 / 3600)
//     console.log(output);
// }

// spreedToMeter("1000 ms^-2")



// let text = "1000, ms^-2, sharmin";
// const myArray = text.split(" ");
// console.log(myArray);




// const guessTheNumber = () => {
//     while (true) {
//         let targetNumber = Math.floor(Math.random() * 10 + 1);
//         const userGuess = prompt('Chotto Bondhu tmi 1 theka 10 pojonto je kno umber daw');
//         const guess = parseInt(userGuess)
//         if (guess <= 10) {
//             if (guess == targetNumber) {
//                 alert("congrats U Win")
//             } else {
//                 alert("So sad Not match try again")
//             }
//         } else {
//             alert("Bondhu Tmi 10 theka besi choose korte prba na")
//         }

//     }
// }

// guessTheNumber()



// const loveCalculator = () => {
//     const urName = prompt("Prio Tmr Nam daw");
//     const urPartnerName = prompt("Tmr Valobaser Nam daw");
//     const loveValue = Math.floor(Math.random() * 100 + 1);
//     alert(`${urName} ${urPartnerName} Total score; ${loveValue}`)
//     if (loveValue >= 80) {
//         alert("You are the perfect match")
//     }
//     else if (loveValue >= 60) {
//         alert("50% chance ace")
//     }
//     else {
//         alert("No way");
//     }
// }

// loveCalculator()


// for of loop
// const a = "Sharmin";
// const a = [1, 2, 3, 5, 6, 7];
// for (let x of a) {
//     console.log(x);
// }


//for in loop
// let car = {
//     brand: "BMW",
//     model: "Camry",
//     year: 2022
// };

// for (let key in car) {
//     console.log(key + " : " + car[key]);
//     // console.log(car[key]);
// }


// while loop
// let i = 0;
// let text = [];
// while (i < 10) {
//     text += "The number is " + i;
//     i++;
// }
// console.log(text);


// let n = 0;
// while (n < 3) {
//     n++;
// }

// console.log(n);


//while loop
// let i = 0;
// while (i <= 10) {
//     i++;
//     console.log(i);
// }



//do while loop
// let i = 0;
// do {
//     i++;
// } while (i < 10)

// console.log(i);


// let text = ""
// let i = 0;

// do {
//     text += "<br>The number is " + i;
//     i++;
// }
// while (i < 10);
// console.log('do while', i);


// let i = 1;
// do {
//     i++;
//     console.log(i);
// } while (i < 5)


// let loggedIn = false;
// let userName;
// let password;

// while (!loggedIn) {
//     userName = prompt("Enter user name")
//     password = prompt("Enter your password")
//     if (userName === 'myUserName' && password === 'myPassword') {
//         loggedIn = true;
//         console.log("You are logged in");
//     } else {
//         console.log("Invalid please try again");
//     }
// }




//do while
// let loggedIn = false;
// let userName;
// let password;

// do {
//     userName = prompt("Enter user name")
//     password = prompt("Enter your password")
//     if (userName === 'myUserName' && password === 'myPassword') {
//         loggedIn = true;
//         console.log("You are logged in");
//     } else {
//         console.log("Invalid please try again");
//     }
// } while (!loggedIn)




// let text = "";

// for (let i = 0; i < 10; i++) {
//     if (i === 3) { break; }
//     text += "The number is " + i;
// }
// console.log(text);



// let text = "";
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { continue; }
//     text += "The number is " + i + "<br>";
// }

// console.log(text);



//spreedToMeter
// const spreedToMeter = (value) => {
//     const result = value.split(" ");
//     const output = (parseFloat(result[2]) * 1000 / 3600).toFixed(2)
//     console.log(output);
// }

// spreedToMeter("1000 ms^-2 200");





//click
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     let name = 'John doe';
//     console.log(name.toUpperCase())
// })



// setTimeout(() => {
//     console.log("Joel");
//     setTimeout(() => {
//         console.log("Victoria");
//         setTimeout(() => {
//             console.log("John");
//             setTimeout(() => {
//                 console.log("Doe");
//                 setTimeout(() => {
//                     console.log("Sarah");
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);



// function delay(time) {
//     console.log(time);
//     return new Promise((resolve) => {
//         setTimeout(resolve, time);
//     });
// }

// delay(2000)
//     .then(() => {
//         console.log("Joel");
//         return delay(2000);
//     })
//     .then(() => {
//         console.log("Victoria");
//         return delay(2000);
//     })
//     .then(() => {
//         console.log("John");
//         return delay(2000);
//     })
//     .then(() => {
//         console.log("Doe");
//         return delay(2000);
//     })
//     .then(() => {
//         console.log("Sarah");
//     });






//promise
// let y = new Promise((resolve, reject) => {
//     let a = 1 + 5;
//     if (a == 2) {
//         resolve(" Yeah Success")
//     } else {
//         reject(" Awww Failed")
//     }
// })

// y.then((message) => {
//     console.log("This is in the then" + message);
// }).catch((message) => {
//     console.log("This is in the catch" + message);
// })


// let myPromise = new Promise((resolve, reject) => {
//     let x = 7
//     if (x == 5) {
//         resolve("Yaaaaaaaaaaa");
//     } else {
//         reject('so sad');
//     }
// })

// myPromise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// const helloPromise = new Promise((resolve, reject) => {
//     let status = false;
//     setTimeout(() => {
//         if (status) {
//             resolve("Done Broohhh")
//         } else {
//             reject("Kiccu hobe na tore diya Akhii")
//         }
//     }, 2000);
// })

// helloPromise
//     .then((value) => {
//         console.log(value);
//     }).catch((error) => {
//         console.log(error);
//     })



// function first() {
//     console.log("hey sis");
// }

// function second() {
//     console.log("hey bro");
// }
// second()
// first()


// function display(some) {
//     console.log(some);
// }

// function Calculator(num1, num2) {
//     let multiplier = num1 * num2;
//     display(multiplier)
// }

// Calculator(5, 5);
// // display(result)



//callBack function
// function display(some) {
//     console.log(some);
// }

// function Calculator(num1, num2, callback) {
//     let multiplier = num1 * num2;
//     // return multiplier;
//     if (callback) callback(multiplier)
// }

// Calculator(5, 5, display);
// // display(result)



// function addName(time, name) {
//     return new Promise((resolve, reject) => {
//         if (name) {
//             setTimeout(() => {
//                 console.log(name)
//                 resolve();
//             }, time)
//         } else {
//             reject('No such name');
//         }
//     })
// }

// addName(2000, 'Joel')
//     .then(() => addName(2000, 'Victoria'))
//     .then(() => addName(2000, 'John'))
//     .then(() => addName(2000, 'Doe'))
//     .then(() => addName(2000, 'Sarah'))
//     .catch((err) => console.log(err))


//map
// let MyArr = [1, 2, 3, 4, 5];
// let result = MyArr.map((arr) => {
//     return arr * 2;
// })
// console.log(result);

//spread
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [...arr1, ...arr2];
// console.log(newArr);

//rest operator
// function myRest(a, ...b) {
//     console.log(a);
//     console.log(a);
// }
// myRest(1, 2, 3, 4, 5, 6, 7)


// const first = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
// }
// const second = {
//     type: 'car',
//     year: 2021,
//     color: 'yellow'
// }
// const updated = { ...first, ...second, name: "sharmin" }
// console.log(updated);


//find filter
// let users = [
//     { firstName: "Susan", age: 14 },
//     { firstName: "Daniel", age: 16 },
//     { firstName: "Bruno", age: 56 },
//     { firstName: "Jacob", age: 15 },
//     { firstName: "Jacob", age: 64 },
//     { firstName: "Dave", age: 56 },
//     { firstName: "Neils", age: 65 }
// ];

// const myData = users.filter((sameName) => sameName.firstName == "Jacob");
// const myData2 = users.find((sameName) => sameName.firstName == "Jacob");
// console.log(myData2);


//fetch url
// const myUrl = `https://jsonplaceholder.typicode.com/users`;
// fetch(myUrl)
//     .then(res => res.json())
//     .then(data => console.log(data));


// Fetch data from the given URL
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayData(data))


// function displayData(data) {
//     let outputDiv = document.getElementById('output');
//     let ul = document.createElement('ul');
//     data.forEach(user => {
//         let li = document.createElement('li');
//         li.textContent = `Name: ${user.name}, Email: ${user.email}`;
//         ul.appendChild(li);
//     });
//     outputDiv.appendChild(ul);
// }


//optional chaining
// let chaining = "Ayat"
// let result = (chaining == "Ayat" ? "Hey Bebs 😉" : "Huhh I'm Busy 💁");
// console.log(result);




// Conditional rendering method:
// let users = [
//     {
//         name: "Sam",
//         age: 64,
//         hobby: "cooking",
//         hobbies: {
//             hobb1: "cooking",
//             hobby2: "Laying Down"
//         }
//     },
//     { name: "Bruno", age: 56 },
//     { name: "Dave", age: 56, hobby: "Football" },
//     {
//         name: "Jacob",
//         age: 65,
//         hobbies: {
//             hobb1: "driving",
//             hobby2: "sleeping"
//         }
//     }
// ];
// users.forEach((user) => {
//     if (user.hobbies && user.hobbies.hobby2) {
//         console.log(user.hobbies.hobby2);
//     }
// });



// remove duplicate number
// const myArr = [1, 2, 1, 3, 4, 5, 5, 5, 6, 7];
// let newArr = [];
// for (let i = 0; i < myArr.length; i++) {
//     // console.log(myArr[i]);
//     if (newArr.indexOf(myArr[i]) === -1) {
//         newArr.push(myArr[i])
//     }
// }
// console.log(newArr);



// const myArr = [1, -2, 7];
// const res = myArr.map(num => Math.abs(num));
// console.log(res);


// const Name = "   Sharmin "
// console.log(Name.charAt(2));
// console.log(Name.indexOf("m"));

// console.log(Name.substring(8, 13));
//when i use -value It will reverse
// console.log(Name.substring(-8, 3));


// const slicee = Name.slice(1, 3);
// console.log(slicee);

//trim() remove extra space
// console.log(Name.trim());



// const url = "https://sharmin.com/sharmin-vaaaa"
// console.log(url.replace("vaaaa", "akhi"));

// console.log(Name.includes("shar"));


// const number = 245.37
// console.log(number.toPrecision(3));


// console.log(Math.abs(-4.56));
// console.log(Math.round(4.5));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.2));
// console.log(Math.max(4, 5, 7, 8));
// console.log(Math.min(4, 5, 7, 8));

// const max = 10;
// const min = 5;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// const myArr = ["a", "b", "c", "d", "e"];
// const myArr2 = ["c", "d", "e"];
// myArr.push(myArr2);
// console.log('hey', myArr);

// const conCat = myArr.concat(myArr2)
// console.log('hey', conCat);
// const spared = [...myArr, ...myArr2]
// console.log('hey', spared);



// const myArr = [1, 2, 3, 4, [5, 6], [1, 2, 3, 4], [100, 200]];
// const res = myArr.flat()
// console.log(res);

//checking is it array or not ---Its return true or false
// const realArr = Array.isArray(myArr);
// console.log(realArr);


//Array.from string convert to array but is it not converting object only convert string
// console.log(Array.from("Sharmin"));
// console.log(Array.from({ name: "sharmin" }));


// creating array
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// let score4 = { name: "sharmin" }
// console.log(Array.of(score1, score2, score3, score4));



// const myObj = {
//     name: "sharmin",
//     class: 2,
//     hobby: "Dancing",
//     email: "sharmin@gmail.com",
//     location: "Barisal"
// }
// console.log(myObj.email);
// //can't change Object
// Object.freeze(myObj)
// myObj.email = "akhi@gmail.com"
// console.log(myObj);


// myObj.get = function () {
//     console.log("Hello Js");
// }
// myObj.get1 = function () {
//     console.log(`Hello Js User ${this.name}`);
// }

// console.log(myObj.get());
// console.log(myObj.get1());


// const obj1 = { 1: "a", 2: "b" }
// const obj2 = { 3: "c", 4: "d" }

// const resObj = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)


// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


// const MyObject = [
//     {
//         id: 12,
//         name: "Ahnaf"
//     },
//     {
//         id: 13,
//         name: "Anni"
//     },
//     {
//         id: 14,
//         name: "Abid"
//     },
//     {
//         id: 17,
//         name: "Rahnaf"
//     }
// ];

// console.log(Object.values(MyObject));
// console.log(Object.keys(MyObject));
// console.log(MyObject.hasOwnProperty("name"));

// function addedNum(num1, num2) {
//     return (num1 + num2);
// }

// const result = addedNum(3, 4);
// console.log(result);



// function loginUser(userName = "Akhi") {
//     if (userName === undefined) {
//         console.log("Please Enter your User Name");
//     }
//     return `${userName} Just Logged In`
// }

// console.log(loginUser('Sharmin'));

// const logged = loginUser()
// console.log(logged);



// function calculate(...num1) {
//     return num1
// }
// console.log(calculate(2, 3, 4));

// const user = {
//     username: "Afan",
//     price: "199$"
// }

// function handelObject(anyOject) {
//     console.log(`UserName is ${anyOject.username} and price is ${anyOject.price}`);
// }

// // handelObject(user)
// handelObject({
//     username: "Rahnaf",
//     price: "200$"
// })


// const myArray = [100, 200, 300];

// function myValue(getArray) {
//     return getArray[1]
// }

// console.log(myArray);



// console.log(new1(5));
// function new1(num) {
//     return num + 5
// }



// console.log(myFun(2));
// const myFun = function (number) {
//     return number + 5
// }


// const user = {
//     username: "Afan",
//     price: "199$",

//     welcomeMess: function () {
//         console.log(`${this.userName}, welcome to website`);
//     }
// }
// user.welcomeMess()
// user.username = "Ayat"
// user.welcomeMess()



// function Fun() {
//     let useName = "Atif"
//     console.log(this.useName);
// }
// Fun()



// const myFun = () => {
//     let useName = "Atif"
//     console.log(this.useName);
// }

// myFun()



// const addFun = (num1, num2) => num1 + num2;
// console.log(addFun(3, 4));


// const addFun = (num1, num2) => ({ userName: "Ritu" });
// console.log(addFun(3, 4));


// (function Fun() {
//     console.log(`Connected`);
// })();

// ((name) => {
//     console.log(`Lets Connect ${name}`);
// })("Lubaba")



// const isUser = true;
// const temperature = 41;

// if (temperature === 41) {
//     console.log("Less than 50");
// } else {

//     console.log("Temperature is grate 50");
// }
// console.log("Execute");



// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }


// const balance = 1000;

// if (balance > 500) {
//     console.log("Test")
// } else {
//     console.log("test2");
// }


// const user1 = true;
// const user2 = false;

// if (user1 && user2) {
//     console.log("yaaaaa True");
// } else {
//     console.log("Noooooo");
// }



// const myNumber = true;
// const myNumber2 = false;

// if (myNumber && myNumber2) {
//     console.log("Allow Me");
// } else {
//     console.log("Don't Allow");
// }


// const month = 3;

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Default Match");
//         break;
// }



// const userEmail = "";
// if (userEmail) {
//     console.log("Aww Got Email");
// } else {
//     console.log("No way");
// }


// const empty = {};

// if (Object.keys(empty).length === 0) {
//     console.log("Object is Empty");
// }

// let var1;
// var1 = 5 ?? 10;
// var1 = null ?? 10
// var1 = undefined ?? 10
// var1 = null ?? 10 ?? 5
// console.log(var1);

// ternary
// const ice = 100;
// ice <= 80 ? console.log("Buy Ice cream") : console.log("No chance Goribsss");



//Nested if else
// const sirName = "Rahnaf";
// const sirCharacter = "Always Angry"

// if (sirName == "Rahnaf" && sirCharacter == "Always Angry") {
//     console.log("Yeah I'm Rahnaf What you want?");

// } else if (sirName == "Rahnaf" && sirCharacter == "Cool Man") {
//     console.log("Not found him");
// }

// else if (sirName == "Rahnaf" && sirCharacter == "Aww Innocent") {
//     console.log("Innocent Sirrrr");

// }
// else if (sirName == "Rahnaf" && sirCharacter == "Tui Amr theka besi bojho") {
//     console.log("Chup kor Voy pawna amk ?");
// } else {
//     console.log("Assalamu Alikum Sirrr");
// }


// const sirChar = () => {
//     const urSirName = prompt("Doya Kore Apnr Sir er Nam ta Dan");
//     const urSirChar = prompt("Apnr Sir er Character");
//     const sirValue = Math.floor(Math.random() * 100 + 1);
//     alert(`${urSirName} ${urSirChar} Total score; ${sirValue}`)
//     if (sirValue >= 80) {
//         alert("Good Teacher")
//     }
//     else if (sirValue >= 60) {
//         alert("Try to Be better")
//     }
//     else {
//         alert("No way");
//     }
// }

// sirChar()

//Nested Ternary
// const age = 25;
// const eligibility = age >= 18 ? "You are eligible to vote" : age >= 16 ? "You can vote with parental consent" : "You are not eligible to vote yet";
// console.log(eligibility);


// const chocolate = 200;
// const price = chocolate >= 150 ? "You buy Chocolate" : chocolate >= 100 ? "Try To Buy" : "No chance try more & more";
// console.log(price);


// const friend = "Ayat";
// const matchFriend = friend.length >= 6 ? "She is my Friend" : friend.length >= 4 ? "Awww Bestyyyy" : friend.length >= 2 ? "Who are you" : "I can't found";
// console.log(matchFriend);



// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(" 5 is best number");
//     }
//     console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let x = 1; x <= 10; x++) {
//         // console.log(`Inner Loop value ${x} and OuterLoop ${i}`);
//         console.log(i + "*" + x + " = " + i * x);
//     }
// }



// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }
// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         continue;
//     }
//     console.log(`Value of i is ${i}`);
// }


// const ArraY = ["Sharmin Akhi", "John Doe", "Alice"];
// const newArr = ArraY.map(name => "Heyyy: " + name);
// console.log(newArr);




// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => ({
//     original: num,
//     squared: num * num
// }));

// console.log(squaredNumbers);


// let number = [1, 2, 3, 4, 5];

// number.map(num => console.log(num));

// let result = number.map(num => num * 2);
// console.log(result);






// const MyObject = [
//     {
//         id: 12,
//         name: "Ahnaf"
//     },
//     {
//         id: 13,
//         name: "Rahnaf"
//     },
//     {
//         id: 14,
//         name: "Abid"
//     },
//     {
//         id: 17,
//         name: "Rahnaf"
//     }
// ];

// const Obj = MyObject.filter(Name => Name.name == "Rahnaf");
// console.log(Obj);


// const find = MyObject.find(single => single.name === "Rahnaf")
// console.log(find);


// const number = [1, 2, 3, 4, 5];
// const result = number.map(num => num * 2)
// console.log(result);



// const sorting = [2, 1, 3, 4, 5, 6]
// sorting.sort(function (a, b) {
//     // console.log(a, b);
//     return a - b;
// })

// console.log(sorting);


// const Arr = ["A", "B", "D", "F"]
// const res = Arr.reverse()
// console.log(res);


// while loop

// let i = 1;
// while (i <= 10) {
//     console.log(`Value of index is ${i}`);
//     // i = i + 2;
//     i++
// }

// const myArr = ["flash", "batman", "superman"];
// let arr = 0;

// while (arr < myArr.length) {
//     console.log(`Value is ${myArr[arr]}`);
//     arr = arr + 1
// }



// let score = 111
// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

// for of
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
//     // const num1 = num + 2;
//     // console.log(num1);
// }

// const name = "Heyy bebs"
// for (const single of name) {
//     console.log(`Each char is ${single}`);
// }


// const arr = [1, 2, 3, 4, 5];
// const number = arr.map(num => num * 2);
// console.log(number);


// const myObject = {
//     js: "JavaSCript",
//     cap: "C++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shorted is for ${myObject[key]}`);
// }



// for in
// const arr = [1, 2, 3, 4, 5];
// for (const key in arr) {
//     console.log(key, arr[key]);
// }


// const myObject = [
//     {
//         id: 1,
//         js: "JavaSCript",
//         cap: "C++",
//         rb: "ruby",
//         swift: "swift by apple"
//     },
//     {
//         id: 2,
//         js: "JavaSCript",
//         cap: "C++",
//         rb: "ruby",
//         swift: "swift by apple"
//     }
// ]

// myObject.map(singleObj => console.log(singleObj))



// const coding = ["js", "ruby", "java", "python", "C++"]

// coding.forEach(function (value) {
//     console.log(value);
// })


// coding.forEach((value) => {
//     console.log(value);
// })


// coding.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// })


// const myObject = [
//     {
//         id: 1,
//         js: "JavaSCript",
//         cap: "C++",
//         rb: "ruby",
//         swift: "swift by apple"
//     },
//     {
//         id: 2,
//         js: "Js",
//         cap: "C++",
//         rb: "ruby",
//         swift: "swift by apple"
//     }
// ]

// myObject.forEach((item) => {
//     console.log(item.js);
// })


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const res = nums.filter(num => num > 4)
// console.log(res);



// const books = [
//     { title: "Books One", subject: "History", publish: 1991 },
//     { title: "Books Three", subject: "Science", publish: 1992 },
//     { title: "Books Three", subject: "Data Science", publish: 1993 },
//     { title: "Books Four", subject: "Science", publish: 1995 }
// ]

// const myBook = books.filter(book => book.subject === "Science" && book.publish <= 1995);
// console.log(myBook);



// const num = 1;

// const randomNumber = Math.floor(Math.random() * 10 + 1);
// let guessNumber;
// let count = 0;
// console.log(randomNumber, guessNumber);
// do {
//     guessNumber = prompt(`1 theka 10 er moddhe akta number dan sir`)
//     if (isNaN(guessNumber)) {
//         alert(`Please enter a number`)
//         continue;
//     } else {
//         count++
//     }

//     if (Number(guessNumber) === randomNumber) {
//         alert(`Winner ${count}`)
//     } else {
//         alert(`failure`)
//     }

// } while (Number(guessNumber) !== randomNumber);







// const myNum = [1, 2, 3, 4, 5, 6, 7];

// // const newNum = myNum.map((num) => num + 10)

// const newNums = myNum
//     .map(num => num * 10)
//     .map(num => num + 1)
//     .filter(num => num >= 40)
// console.log(newNums);






let playAgain;

do {
    const urName = prompt("Please Enter Your Name");
    const urPartner = prompt("Please Enter Your Secret Person's Name");
    const loveScore = Math.floor(Math.random() * 100 + 1);

    if (loveScore >= 80) {
        alert("Aww, you are the perfect match!");
    } else if (loveScore >= 60) {
        alert("You have a 50% chance.");
    } else if (loveScore >= 40) {
        alert("Try something good.");
    } else {
        alert("No way, bro!");
    }
    playAgain = prompt("You want play Again")

} while (playAgain.toLowerCase() === "y");












// const myArr = [1, 2, 3, 4, 5];
// const myRes = myArr.reduce((acc, item) => {
//     return acc + item
// }, 1)
// console.log(myRes);


// const shoppingCart = [
//     {
//         itemName: "Web Development",
//         price: 5000
//     },
//     {
//         itemName: "Digital Marketing",
//         price: 4000
//     },
//     {
//         itemName: "Graphics Design",
//         price: 2000
//     },
// ]

// const myTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(myTotal);




// const array1 = [1, 2, 3, 4, 5, 6, 7];

// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // Expected output: Array [1, 2, 0, 0]

// // Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // Expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]



// const array1 = [5, 12, 50, 130, 44];

// const found = array1.findLast((element) => element > 45);

// console.log(found);
// // Expected output: 130


// const arr = [11, 22, 4, 3, 45, 65, 67, 87, 90];

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }