class User {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass
    }


    get email() {
        return this._email.toLowerCase()
    }

    set email(value) {
        this._email = value
    }

    get pass() {
        return `${this._pass}Sharmin`
    }

    set pass(value) {
        this._pass = value
    }

}



const sharmin = new User("sh@gmail.com", "1234")
console.log(sharmin.pass, sharmin.email);