class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`UsrName ${this.username}`);
    }

    createId() {
        return '123'
    }

}

const akhi = new User("Akhi")
// console.log(akhi.createId()); 

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const phone = new Teacher("Iphone", "iphn@gmail.com")
// console.log(phone); 
// phone.logMe() 
console.log(phone.createId());