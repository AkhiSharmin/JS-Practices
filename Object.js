function multipleBy5(num) {
    return num * 5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}


createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);
}


const hey = new createUser("Hey Girl", 25)
const tea = createUser("Tea", 250)

hey.printMe()








// function createUser(userName, score) {
//     this.userName = userName;
//     this.score = score;
// }

// createUser.prototype.increment = function () {
//     this.score++;
// };

// createUser.prototype.printMe = function () {
//     console.log(`Score is ${this.score}`);
// };

// const hey = new createUser("Hey Girl", 25);
// const tea = new createUser("Tea", 250);

// hey.printMe();