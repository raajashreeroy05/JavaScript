//Singleton   Object.create()

//Object literals

const mySym = Symbol("key1"); // creating a symbol

const jsUser = {
    name: "Rowan",
    "Full name": "Rowan Atkinson",
    [mySym]: "myKey1", // using a symbol as a key in an object
    age: 25,
    city: "New York",
    isStudent: true,
    email: "rowan12@yahoo.com",
    isLOgged: false,
    lastLogInDay: ["Monday", "Wednesday", "Thursday"],
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["Full name"])
console.log(jsUser.lastLogInDay[1])
console.log(jsUser[mySym]) // accessing the value of the symbol key in the object
console.log(typeof mySym) // symbol
console.log()

jsUser.email = "johanmendel@gmail.com"
console.log(jsUser.email)
//Object.freeze(jsUser) // freezes the object, making it immutable
//jsUser.email = "newemail@yahoo.com" // this will not change the email property because the object is frozen
console.log(jsUser) 
console.log()

//Object.seal(jsUser) // seals the object, preventing new properties from being added and marking all existing properties as non-configurable. However, it allows existing properties to be modified.

jsUser.greeting = function() {
    console.log("Hello JS User!")
}
jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}!`)
}

console.log(jsUser.greeting)   //reference
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

/*
//Object constructor
const jsUser2 = new Object();
jsUser2.name = "Rowan";
jsUser2.age = 25;
jsUser2.city = "New York";
jsUser2.isStudent = true;
jsUser2.email = "rowan12@yahoo.com";
jsUser2.isLOgged = false;
jsUser2.lastLogInDay = ["Monday", "Wednesday", "Thursday"];

*/