function addNums(n1, n2) {
    return n1+n2
}

const result = addNums(5, 6)
console.log(result)


function login(username = "Sam") {
    if(!username) {
        console.log("Please enter a valid username!")
        return
    }
    return `${username} just logged in`
}

console.log(login("Ryan"))