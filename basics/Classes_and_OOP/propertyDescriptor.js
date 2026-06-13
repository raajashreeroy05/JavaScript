console.log(Object.getOwnPropertyDescriptor(Math, "PI"))
console.log()

const tea = {
    type: "masala",
    price: 125,
    isAvailable: true,
    orderProgress: function () {
        console.log("Not ready")
    }
}
console.log(tea);
console.log()
console.log(Object.getOwnPropertyDescriptor(tea, "type"))
console.log()

Object.defineProperty(tea, "type", {
    //writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(tea, "type"))
console.log()

for(const [key, value] of Object.entries(tea)) {
    if(typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }
}