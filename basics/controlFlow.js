if(2 == "2") {
    console.log("Executed!");
}

if(2 === "2") {
    console.log("Executed!");
}

const balance = 1000
if(balance>=1000) console.log("Your account is safe.")



/* 
Falsy values 
0, -0, false, BigInt 0n, "", null, undefined, NaN

Truthy values
"0", 'false', [], " ", {}, function(){}
*/

//const userEmail = "mrbean123@gmail.com"
const userEmail = []
if(userEmail.length === 0) {
    console.log("Empty array!")
}

const obj = {}
if(Object.keys(obj).length === 0) {
    console.log("Empty object.")
}
console.log()


//Nullish coalescing operator (??) : null, undefined

let val1
val1 = 5 ?? 8
console.log(val1)

let val2
val2 = null ?? 8
console.log(val2)

let val3
val3 = undefined ?? 10
console.log(val3)

// let val4 = null ?? 4 ?? 5  -> 4 will be assigned to val4


//Ternary operator
const price = 100
price>100 ? console.log("Ice cream price is more than 100") : console.log("Ice cream price is not more than 100")