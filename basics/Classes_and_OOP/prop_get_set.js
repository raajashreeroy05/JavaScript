function user(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function() {
                 return this._email.toUpperCase()
        },
        set: function(value) {
                 this._email = value
        }
    })
}
const u1 = new user("bakugoABC@gmail.com", "vchkwbl4gycwq")
console.log(u1.email)