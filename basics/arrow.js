/* Arrow function

() => {
}

*/

const add1 = (n1, n2) => {
    return n1+n2    //explicit return
}
console.log(add1(4, 6))


const add2 = (n1, n2) => (n1+n2)    //implicit return
console.log(add2(4, 5))

const obj_fn = () => ({name: "Ryan", age: 23})    //object function as implicit return
console.log(obj_fn());
