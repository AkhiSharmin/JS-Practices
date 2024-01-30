function setUserName(userName) {
    this.userName = userName
    console.log("called");
}

function createUser(username, email, password) {
    setUserName.call(this, username)

    // this.username = username
    this.email = email
    this.password = password
}


const akhi = new createUser("akhi", "ak@gmail.com", "1234")
console.log(akhi);