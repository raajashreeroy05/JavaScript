class user {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME IS: ${this.username}`)
    }
}

class teacher extends user {
    constructor(username, password, email) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const t1 = new teacher("Prateek", "chweb45", "gigglypuff@yahoo.com")

console.log(t1.addCourse())

const bread = new user("MuskaBun")
console.log(bread.logMe())

console.log(bread instanceof user)
console.log(bread instanceof teacher)
console.log()
console.log(t1 instanceof user)
console.log(t1 instanceof teacher)

