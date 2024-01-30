const User = {
    _email: "sh@gmail.com",
    _pass: "abc",


    get email() {
        return this._email.toLocaleUpperCase()
    },
    set email(res) {
        this._email = res
    }

}

const res = Object.create(User)
console.log(res.email);