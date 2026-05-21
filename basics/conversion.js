let score = 56
console.log(typeof score)
console.log(typeof(score))
console.log("\n")

let marks = "8a6"
console.log(typeof marks);
console.log("\n")

let valInNumber = Number(marks)
console.log(typeof valInNumber)
console.log(typeof marks)
console.log(valInNumber);

console.log("\n")

let value = null
let convVal = Number(value)
console.log(typeof value)
console.log(typeof convVal)
console.log(convVal);

console.log("\n")

let status = 10
let boolStatus = Boolean(status)
console.log(status);
console.log(typeof status);
console.log(boolStatus);
console.log(typeof boolStatus);
console.log("\n");

let num = 10
let stringNum = String(num)
console.log(num)
console.log(typeof num);
console.log(stringNum);
console.log(typeof stringNum);

/*
Conversion to Number type
"56" => 56
"bchbnj" => NaN (Not a Number)
"87fh" => NaN
undefined => NaN
null => 0
true => 1
false => 0

Conversion to Boolean type
any number => true
0 => false
any string => true
"" => false
*/