// Two types
// 1. Premitive

// most important in js: objects data type

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id)
// console.log(anotherId)

// console.log(id === anotherId) // false


// 2. Reference (Non-premitive)

// object datatype
let myObj = {
    name: "div",
    age: 19
}

// console.log(typeof myObj)

const myFunction = function(){
    console.log("Hello World!")
}