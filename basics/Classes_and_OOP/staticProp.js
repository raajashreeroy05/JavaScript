class user {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME IS: ${this.username}`)
    }
    static createId() {        //using static keyword here will ot allow the access of this funciton
        return `${this.username}121`
    }
}
const Ditto = new user("ditto")
console.log(Ditto)
console.log(Ditto.logMe())
//console.log(Ditto.createId())   

class guide extends user {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
const MrBeast = new guide("mrbeast", "mountain@qeh.in")
console.log(MrBeast)
//console.log(MrBeast.createId())