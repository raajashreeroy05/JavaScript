const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const modified_nums = myNums.filter( (num) => num>5 )   //if scope is used, we have to use return
console.log(modified_nums)

/* 
const modified_nums = myNums.filter( (num) => 
    return num>4
})
console.log(modified_nums)
*/

const newNums = []

myNums.forEach((num) => {
    if(num>4) {
        newNums.push(num)
    }
})
console.log(newNums)
console.log()


const programming = [
    {
        lang_name: "C",
        extn: ".c"
    },
    {
        lang_name: "C++",
        extn: ".cpp"
    },
    {
        lang_name: "Java",
        extn: ".java"
    },
    {
        lang_name: "Python",
        extn: ".py"
    },
    {
        lang_name: "JavaScript",
        extn: ".js"
    }
]

const coding_lang = programming.filter( (key) => key.lang_name === "Python" )
console.log(coding_lang)

// const coding_lang = programming.filter( (key) => {key.lang_name === "Python"} )  -> will return empty array if scope is used without using return key
// console.log(coding_lang)