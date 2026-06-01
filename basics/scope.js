// let a=10
// var b= 20
// const c=30
// if(true) {
//     let a=45
//     var b=55
//     const c=65
//     console.log("Inner c:", c);
    
// }
// console.log(c)


//nested Scope

function one() {
    const username = "Simon"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    two()
    //console.log(website)
}
one()


if(true) {
    const name = "Gray"
    if(name === "Gray") {
        const website = " YouTube"
        console.log(name + website)
    }
    //console.log(website);
}
//console.log(username);
console.log();





//+++++++++++++++

console.log(addOne(3))
function addOne(num) {
    return num+1
}


//addTwo(6)   cannto access the function here
const addTwo = function(num) {
    return num+2
}
