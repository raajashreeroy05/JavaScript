function multiply(num) {
    return num*10
}
multiply.power = 5
console.log(multiply(4))
console.log(multiply.power)
console.log(multiply.prototype)
console.log()


function createItems(itemName, price) {
    this.itemName = itemName,
    this.price = price
}

createItems.prototype.increment = function() {
    this.price +=101;
}

createItems.prototype.printPrice = function() {
    console.log(this.price)
}

const coffee = new createItems("Coffee", 149)
const tea = new createItems("Tea", 49)
coffee.printPrice()
tea.increment()