/* Datatypes in JS
Primitive
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

Reference (Non-primitive)
Array, Object, Functions
*/

/*JS is a dynamically-typed language.
This means the variable types are checked and determined at runtime 
rather than beforehand. We do not need explicitly declare data 
types when creating variables, and a single variable can hold 
different data types throughout the execution of the program. 

We can freely change the value stored in a variable to a 
completely different data type.
let data = "Hello";  // Treated as a string
data = 42;           // Reassigned to a number without errors

Type checks occur while the script is actively running. If a type 
mismatch occurs, the error will only show up when that specific 
line of code is executed.
*/


const score = 68
const score_2 = 78.6
const temp = null   //null means empty

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1 === id2)

const bigNum = 5949651319848955157877423123n
console.log(typeof bigNum)
console.log("\n")

const heroes = ["Captain America", "Spiderman", "Shaktiman", "Batman"]   //Array

let myObj = {
    Name: "Ryan Dutt",
    Age: 22,
}   //Object
 
const myFunction = function() {
    console.log("Hello World!\n")
}

console.log(typeof heroes)
console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof id1)
console.log(typeof id2)
console.log("\n")



//Stack memory -- for Primitive type, Heap memory --> for non-primitive

let channel = "Zoom"
let newChannel = channel
newChannel = "9XM"

console.log(`Old channel name is: ${channel}`)
console.log(`New channel name is: ${newChannel}`)
console.log("\n")

let user1 = {
    email: "userone@gmail.com",
    upi: "userone@oksbi",
}

let user2 = user1

user2.upi = "userone@ybl"
console.log(`User 1 upi: ${user1.upi}`)
console.log(`User 2 upi: ${user2.upi}`)
console.log("\n")

