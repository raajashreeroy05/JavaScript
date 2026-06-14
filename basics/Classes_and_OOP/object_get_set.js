const user = {
    _email: "dEKu12@mHA.com",
    password: "cvih56cbwhv",
    
    get email() {
        return this._email.toLowerCase()
    },
    set email(value) {
        this._email = value
    }
}
const Midoriya = Object.create(user)
//console.log(Midoriya)     //returns empty object
console.log(Midoriya._email)     // dEKu12@mHA.com
console.log(Midoriya.email)     // deku12@mha.com