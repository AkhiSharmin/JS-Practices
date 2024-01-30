class User {
    constructor(username) {
        this.username = username
    }


    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, pass) {
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }

}

const akhi = new Teacher("AKHI", "ak@gmail.com", "1234")
akhi.addCourse()


const coffee = new User("Cold Coffee")
coffee.logMe()

// console.log(akhi === Teacher);
console.log(akhi instanceof User);