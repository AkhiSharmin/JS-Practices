// const user = {
//     userName: "Sharmin",
//     logInCount: 8,
//     singedIn: true,


//     getUserDetails: function () {
//         // console.log("Got User details from Database");
//         // console.log(`UserName: ${this.userName}`);
//         console.log(this);
//     }

// }

// console.log(user.userName);
// console.log(user.getUserDetails());


// contractor function 
function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.userName}`);
    }

    return this
}

const userOne = new User("Sharmin", 12, true)
const userTwo = new User("StartCode", 6, false)
// console.log(userOne);
// console.log(userTwo);
console.log(userTwo.constructor);