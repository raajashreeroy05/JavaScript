// continuous and holey

//packed smi (small integer)
//double ( float, string, function)
//packed elements

//SMI_ELEMENTS > DOUBLE_ELEMENTS > PACKED_ELEMENTS

let a1 = [1,2,5,8]   // packed smi
a1.push(6.1)   //becomes packed double
a1.push('gh')  // becomes packed elements


let a2 = [5, , 9, 4]   //holey smi
a1[9] = 45
console.log(a1)
console.log(a1[6])
console.log(a1[19])

//if continuous ---> bound check, hasOwnProperty(array_name, 9)

//if holey ---> 
//bound check
//hasOwnProperty(array_name, 9)
//hasOwnProperty(array_name.prototype, 9)
//hasOwnProperty(Object.prototype, 9)



//approacch 1
let a3 = new Array(3)  //an array having three holes  -- holey array
a3[0] = '1'
a3[1] = '2'
a3[2] = '3'

//approach 2
const a4 = []  //better approach  -- packed array
a4.push('4')  //packed elements
a4.push('a')  //packed elements