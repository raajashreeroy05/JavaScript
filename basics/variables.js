const acId = 145263
let email = "krishav32@gmail.com"
var acPassword = "krish01av@"
city = "Udaipur"   //variables can be declared without type (let, const, var) but it is not preferred.
let acState;

// acId = 358454  //no modification is allowed for const type

email = "krishav12@gmail.com"
acPassword = "KRISH01AV@"
city = "Jaipur"

console.log(acId);
console.table([acId, email, acPassword, city, acState])

/* Use of var type is not preferred due to the issue of 
block scope and functional scope */