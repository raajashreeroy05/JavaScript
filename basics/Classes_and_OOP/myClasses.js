// class User {
//     constructor(username, password, email) {
//         this.username = username
//         this.email  = email
//         this.password = password
//     }

//     encryptPassword () {
//         return `Password encrypted: ${this.password}abc`
//     }
//     uppercase () {
//         return `Username in block letters: ${this.username.toUpperCase()}`
//     }
// }

// const employee1 = new User("ashutosh", "fuig16", "ash123@gmail.com")
// console.log(employee1)
// console.log(employee1.encryptPassword())
// console.log(employee1.uppercase())



function user(username, password, email) {
    this.username = username
    this.email = email
    this.password = password
}
user.prototype.encryptPassword = function() {
    return `Password encrypted: ${this.password}abc`
}

user.prototype.uppercase = function() {
    return `Username in block letters: ${this.username.toUpperCase()}`
}
const employee1 = new user("ashutosh", "fuig16", "ash123@gmail.com")
console.log(employee1)
console.log(employee1.encryptPassword())
console.log(employee1.uppercase())