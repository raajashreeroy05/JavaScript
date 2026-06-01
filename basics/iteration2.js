// for of loop
let arr = [1, 10, 58, 6, 0, 68]
for(const num of arr) {
    console.log(num)
}
console.log()

let string = "Hello World"
for(const letter of string) {
    if(letter == " ") {
        continue
    }
    console.log(letter)
}
console.log()


//Maps -- map is an object, takes unique values in ordered way

const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map)
console.log()

for(const key of map) {
    console.log(key)
}
console.log()

for(const [key] of map) {
    console.log(key)
}
console.log("\n\n")

for(const [key, value] of map) {
    console.log(key, ':-', value)
}
console.log("\n\n")


//for of cannot be used to iterate over objects

//for in loops

myObj = {
    cpp: "C++", 
    js: "JavaScript",
    rb: "Ruby", 
    swift: "Swift for Apple"
}
for(const key in myObj) {
    console.log(key)
}
console.log()
for(const key in myObj) {
    console.log(myObj[key])
}
console.log()

let array = ["arav", "binita", "ritam", "mrinmoy", "deep"]
for(const key in array) {
    console.log(`Key ${key} has value ${array[key]}`)
}
console.log("\n\n")


//forEach
language = ["Java", "C++", "JS", "C", "Python"]
language.forEach(function (item) {       //callback function -- name does not required
    console.log(item)
})
console.log()

language.forEach( (val) => {
    console.log((val))
})
console.log()

language.forEach( (item, idx, array) => {
    console.log(item, idx, array)
} )
console.log("\n\n")

//passing functions in forEach
function printMe(item) {
    console.log(item)
}
language.forEach(printMe)   //only the function reference is to be passed
console.log("\n\n")

const programming = [
    {
        lang_name: "C",
        extn: ".c"
    },
    {
        lang_name: "C++",
        extn: ".cpp"
    },
    {
        lang_name: "Java",
        extn: ".java"
    },
    {
        lang_name: "Python",
        extn: ".py"
    },
    {
        lang_name: "JavaScript",
        extn: ".js"
    }
]
programming.forEach( (item) => {
    console.log(item.extn)
})