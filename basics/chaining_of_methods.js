const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const val = myNums.map( (num) => num>5 )   //if scope is used, we have to use return
console.log(val)
console.log()

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const modified_nums = nums.map( (num) => num+10 )   //if scope is used, we have to use return
console.log(modified_nums)
console.log()

//chaining

const chained_nums = nums 
                     .map( (num) => num*10)
                     .map( (num) => num+1)
                     .filter((num) => num>30)
console.log(chained_nums)