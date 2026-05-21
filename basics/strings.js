const name = "Krishav"
const sem = 3

console.log(`Hello, my name is ${name} and I am in semester ${sem}`)

const gameName = new String("Tictactoe")
console.log(gameName);
console.log(typeof gameName)
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(4));
console.log(gameName.indexOf("t"));
const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(3,6)
console.log(anotherString)
console.log("\n")

const greeting = "    Hello world!   "
console.log(greeting)
console.log(greeting.trim())
console.log("\n")
const str2 = "      riruru   "
console.log(str2)
console.log(str2.trimStart())
console.log(str2.trimEnd())
console.log(str2.trim())
console.log("\n")
console.log(name.replace("av", "ti"))
console.log(name.includes("shav"))
console.log(name.includes("shti"))
console.log("\n")

const str = "Hello this is the worls of JavaScript"
console.log(str.split(" "))    //converts to array