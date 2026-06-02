const marvel = ["Spider-Man", "Iron-Man", "Thor", "Hulk", "Captain America"];
const dc = ["Superman", "Batman", "Flash", "Wonder Woman"];

/*
marvel.push(dc)
console.log(marvel);
console.log(marvel[5][1]); // "Batman"
*/

/*
const allHeros = marvel.concat(dc);
console.log(allHeros);
console.log();
*/

//Spread Operator
const allHeros = [...marvel, ...dc];
console.log(allHeros)
console.log()

const newArr = [1, 2, 3, [4, 5, [1, 6, 9], 7], 10]
const flatArr = newArr.flat(Infinity);
console.log(flatArr); // [1, 2, 3, 4, 5, 1, 6, 9, 7, 10]    
console.log()

console.log(Array.isArray("Ryan"))
console.log(Array.from("Ryan")) // ['R', 'y', 'a', 'n']
console.log(Array.from({ name: "Ryan" })) // [undefined]  will return an empty array
console.log()

let phy = 98
let maths = 99
let chem = 100

console.log(Array.of(chem, maths, phy))