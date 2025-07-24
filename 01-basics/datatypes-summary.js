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


// ************************ Memory Types ********************

//  Stack (Premitive), Heap (Non-premitive)

// In stack if we take a variable multiple times will get copy of that and if we change
// it, it will only change the copy not the original value
// But in Heap if we do so, it will change/update the original value because it takes reference
// of original variable.

