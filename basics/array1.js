//Array object - they are non-primitive unlike other languages and they are resizable.
//Can contain a mix of different datatypes
//they are ordered and indexed starting at 0
//Arrays are mutable - we can change the values at any index and we can also change the length of the array by adding or removing elements.
//they are not associative arrays - they are not key-value pairs like objects, they are just ordered lists of values.


const myArr1 = [1, 2, 3, 4, 5, 6, 7];
const myArr2 = new Array(1, 2, 3, 4, 5); // this is another way to create an array using the Array constructor
console.log(myArr1); // [1, 2, 3, 4, 5, 6, 7]
console.log();
console.log(`Element at index 0: ${myArr1[0]}`);
console.log(`Array length: ${myArr1.length}`); // 7
console.log();

const dc = ["Superman", "Batman", "Wonder Woman"];

//Array methods

myArr1.push(10)    //Adds an element to the end of the array and returns the new length of the array.
console.log("Push");
console.log(myArr1); // [1, 2, 3, 4, 5, 6, 7, 10]
console.log();

console.log(`Popped element: ${myArr2.pop()}`);     //
console.log("Pop");
console.log(myArr2); // [1, 2, 3, 4]
console.log();

myArr1.unshift(99);
console.log("Unshift");
console.log(myArr1); // [99, 1, 2, 3, 4, 5, 6, 7, 10]
console.log();

myArr1.shift();
console.log("Shift");
console.log(myArr1); // [2, 3, 4]
console.log();

console.log(`\nIncludes 100: ${myArr1.includes(100)}\n`);   //returns true or false
console.log(`Index of 4: ${myArr1.indexOf(4)}`); // returns the index of the first occurrence of the element in the array, or -1 if it is not found.
console.log(`Index of "m": ${myArr1.indexOf("m")}`);    // returns -1 because 'm' is not found in the array
console.log(`Last index of 4: ${myArr1.lastIndexOf(4)}`); // returns the index of the last occurrence of the element in the array, or -1 if it is not found.
console.log();


const newArr = myArr2.join();
console.log("Join");
console.log(myArr1)
console.log();
console.log(newArr); // "1,2,3,4"
console.log(typeof newArr);
console.log();


//slice, splice
console.log("A", myArr1)
const a1 = myArr1.slice(1, 3)
console.log(a1) // [1, 2]
console.log("B", myArr1)
const a2 = myArr1.splice(2, 4) 
console.log(a2) // [3, 4, 5, 6]
console.log("C", myArr1)
console.log()


