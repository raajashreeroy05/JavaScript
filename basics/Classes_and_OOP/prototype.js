let heroName = ["Hulk", "Thor", "Spiderman"]
let superPower = {
    Hulk: "A",
    Thor: "B", 
    Spiderman: "C",

    getPower: function() {
        console.log(this.Spiderman)
    }
}

Object.prototype.language = function() {
    console.log("JavaScript")
}

superPower.language()
heroName.language()

Array.prototype.laptop = () => {
    console.log("I work on windows")
    console.log()
}
heroName.laptop()
//superPower.laptop()   won't work

//Inheritance
const user = {
    name: "Ash ketchum",
    email: "ash@yahoo.com"
}
const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: true
}
const TAsupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupport
}

//Or
teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher)



// let myName = "Pikachu    "
// console.log(myName.trueLength())
let myName = "    Google  "
String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
    console.log()
}
myName.trueLength()
"icedCoffee   ".trueLength()