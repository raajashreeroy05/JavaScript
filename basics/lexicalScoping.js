//Lexical Scoping

function init() {
    let name = "ShinChan"

    function displayName() {
        console.log(name)
    }

    displayName()
}

init()
console.log()
//console.log(name)   //cannot access variable name outside

//Closure

function makeFunc() {
    let name = "Godzila"
    function displayName() {
        console.log(name)
    }
    return displayName
}
const myName = makeFunc()
myName()