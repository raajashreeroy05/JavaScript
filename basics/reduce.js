const nums = [1, 2, 3, 4, 5]

/* const total = nums.reduce( (accumulator, currentValue) => {
    return accumultor+currentValue
}, initialValue)
*/

const initial = 0

// const total = nums.reduce(function(acc, current) {
//     console.log(`Accumulator: ${acc} and Current Value: ${current}`)
//     return acc+current
// }, initial)
// console.log("\nTotal is: " + total)

const total = nums.reduce( (acc, current) => acc+current, initial )
console.log("Total is: " + total)

const courses = [
    {
        courseName: "C",
        price: 999
    },
    {
        courseName: "C++",
        price: 1999
    },
    {
        courseName: "Java",
        price: 2599
    },
    {
        courseName: "JavaScript",
        price: 4001
    },
    {
        courseName: "Ruby",
        price: 4599
    }
]

console.log(courses.reduce( (acc, item) => acc+item.price, 0))
