"use strict";   //Treat code as of newer JS version

// alert(10)   //not available in node.js, available in browser

let name = "Krishav"
let isLogged = false
let age = 21
let state

/* Types
number
bigint
boolean
string
null => standalone value
undefined => no value is assigned after variable declaration
symbol => unique
*/

console.log(typeof "false")
console.log(typeof age)
console.log(typeof null);   //output -> object
console.log(typeof undefined)   //output -> undefined
console.log("\n")

let num1, num2, num3;
num1=num2=num3=2+3
console.log(num1)
console.log(num2)
console.log(num3)