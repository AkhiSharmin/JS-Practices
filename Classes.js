// ES6


// class User {
//     constructor(username, email, pass) {
//         this.username = username;
//         this.email = email;
//         this.pass = pass
//     }

//     encryptPass() {
//         return `${this.pass}abc`
//     }
//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const akhi = new User("sharmin", "sh@gmail.com", "1234")
// console.log(akhi.encryptPass());
// console.log(akhi.changeUserName());



function User(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass
}


User.prototype.encryptPass = function () {
    return `${this.pass}abc`
}

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("sharmin", "sh@gmail.com", "1234")
console.log(tea.encryptPass());
console.log(tea.changeUserName());