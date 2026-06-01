//IIFE --> Immediately Invoked Function Expressions

(function fn1() {                           //named iife
    console.log("DataBase Connected!")
}) ();   //a semicolon is required here

((name) => {                                //unnamed iife
        console.log(`Hello ${name}, welcome to JS world!`)
}) ("Krisha") 