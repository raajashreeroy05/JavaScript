function calculateCartPrice(...num1) {      //rest operator ...
    return num1
}

console.log(calculateCartPrice(100, 250, 999, 600))


function calculatePrice(val1, val2, ...num1) {      //rest operator ...
    return num1
}

console.log(calculatePrice(100, 250, 999, 600))

const user = {
    name: "ryan",
    age: 23, 
    location: "Bangalore"
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`)
}
handleObject(user)


const newArray = [200, 499, 501, 70, 98, 1000]
function returnSecondVal(getArray) {
    return getArray[1]
}
console.log(returnSecondVal(newArray))
//or... console.log(returnSecondVal([200, 499, 501, 70, 98, 1000]))