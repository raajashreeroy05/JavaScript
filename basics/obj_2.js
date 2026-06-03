//const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "a1";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;
const regularUser = {
    email: "john@gmail.com",
    fullName: {
        userFullname: {
            firstname: "John",
            lastname: "Ford"
        }
    }
}
console.log(regularUser);
console.log()
console.log(regularUser.fullName.userFullname);
console.log()

const ob1 = {1:'a', 2:'b'};
const ob2 = {3:'c', 4:'d'}
const ob3 = {5:'a', 6:'c'}

const ob4 = {ob1, ob3}
console.log(ob4)
console.log()

// const newObj = Object.assign(target, source)
// const ob5 = Object.assign(ob1, ob2, ob3)  //ob1 becomes the targeted object and its value is changed
// console.log(ob5)
// console.log(ob1)

const ob5 = Object.assign({}, ob1, ob2, ob3)
console.log(ob5)
console.log(ob1)
console.log()

const ob6 = {...ob1, ...ob2}
console.log(ob6);
console.log(ob1)
console.log()

const users = [
    {name: "rr", email: "rr@gmail.com"},
    {name: "sr", email: "sr@gmail.com"},
    {name: "ds", email: "ds@gmail.com"}
]

console.log(users[1].email)
console.log()

console.log(tinderUser)
console.log(Object.keys(tinderUser))   //returns an array
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('status'))