const score = 453
console.log(score)
const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log("\n")

const num1 = 23.89666
console.log(num1.toFixed(2))
console.log(num1.toPrecision(3))
console.log("\n")
const num2 = 123.8966
console.log(num2.toPrecision(3))
console.log("\n")

const num3 = 1000000
console.log(num3.toLocaleString())
console.log(num3.toLocaleString('en-IN'))

console.log("\n\n")

console.log(Math)
console.log(typeof Math)
console.log(Math.abs(-45))
console.log(Math.round(4.3))
console.log(Math.round(4.7))
console.log(Math.round(5.5))
console.log(Math.ceil(20.3))
console.log(Math.floor(20.8))
console.log(Math.min(4,8,10,9,1,8))
console.log(Math.max(4,8,10,9,1,8))

console.log("\n")

console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10) +1)
console.log(Math.floor((Math.random()*10) +1))
console.log("\n")

const max = 20
const min = 10
console.log(Math.floor((Math.random()*(max-min+1))+min))