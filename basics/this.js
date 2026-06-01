//this is a keyword in javascript, works in case of objects

function func1() {
    const username = "Mr. Beast"
    console.log(this.username)
}
func1()

const func2 = function() {
    const name = "Briar"
    console.log(this.name)
}
func2()

const arrow_fn = () => {
    let name = "Binita"
    console.log(this.name)
    console.log(this)   //returns empty object
}
arrow_fn()