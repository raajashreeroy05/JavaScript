//Object literal & this

const user = {
    username: "Ryan",
    isLoggedIn: true,
    logInCount: 10,

    getInfo: function () {
        console.log(this.username)
        console.log(this)    //will return user object
    }
}

console.log(user.username)
console.log(this)    // output will be an empty object... but in case of browser we will get the window object (global object)
console.log()

//constructor function & new keyWord

function player(userName, isLoggedIn, logInCount) {
    this.userName = userName
    this.isLoggedIn = isLoggedIn
    this.logInCount = logInCount
    this.greeting = function () {
        console.log(`Welcome ${this.userName}`)
    }
    //this.greeting()
    
       //return this
}

// const playerOne = player("Ronaldo", true, 15369)
// const playerTwo = player("Messi", false, 8974534)    //playerOne info will be overwritten
// console.log(playerOne) 
// console.log(playerTwo)

const playerOne = new player("Ronaldo", true, 15369)
const playerTwo = new player("Messi", false, 8974534)    //playerOne info will be overwritten
console.log(playerOne.constructor) 
//console.log(playerTwo)
console.log()

/*new keyWord creates an empty object called instance
1.  new object is being created
2. a constructor function is called due to new keyword, it packs up all the arguments 
3. injects the arguments in 'this'
*/