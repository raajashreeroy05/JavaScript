class user {
    constructor(username, password, email) {
        this.username = username
        this.email = email
        this.password = password
    }
    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
        this._password = value
    }
}
const u1 = new user("uravity", "fbj45frvi", "ochako@mha.com")
console.log(u1.password)