const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, Cryptography, Network
        setTimeout(function () {
        console.log("Async task completed")
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed!")
    console.log("\n");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved!");
    console.log("\n");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve({'name': "aquaman", 'email': "example@gmail.com"})
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
    console.log("\n");
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let error = true
        //let error = false
        if(!error) {
            resolve({
                'series_1' : "Game of Thrones", 'series_2' : "Dark"
            })
        }
        else {
            reject("ERROR: Something went wrong!")
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.series_2
})
.then((series_name) => {
    console.log(series_name)
})
.catch(function (error) {
    console.log(error)
})
.finally(function () {
    console.log("Finally promise is either Resolved or Rejected!")
    console.log("\n");
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
    if(!error) {
        resolve({'name':"Riruru", 'cartoon':"Doraemon"})
        console.log("\n");
    }
    else {
        reject("ERROR: Something went wrong!")
        console.log("\n");
    }
    }, 1000)
})
/*async function consumeFive () {
    const response = await promiseFive
    console.log(response)
}

consumeFive()*/  //async await cannot handle errors directly

async function consumeFive() {
    try {
        const response = await promiseFive
        console.log(response)
        console.log("\n");
    }
    catch(error) {
        console.log(error)
        console.log("\n");
    }
}
consumeFive()




// fetch

const url = "https://randomuser.me/api/"

/*async function getAllUsers () {
    const response = await fetch(url)
    // const data = response.json()
    // console.log(data)
    console.log(response)
}
getAllUsers() */

/*async function getAllUsers() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data)
}
getAllUsers() */

/*async function getAllUsers() {
    try {
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json()
        console.log(data)
    }
    catch (error){
        console.log(error)
    }
}
getAllUsers()*/

fetch("https://randomuser.me/api/")
.then(function (response) {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))
