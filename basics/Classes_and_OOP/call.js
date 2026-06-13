function setUsername (username) {
    this.username = username
    console.log("Called")
}

function createUser(username, email, password) {
    //setUsername.call(username)
    setUsername.call(this, username)
    this.email = email,
    this. password = password
}

const user1 = new createUser("user@one", "one@gmail.com", "hdhc265")
console.log(user1)