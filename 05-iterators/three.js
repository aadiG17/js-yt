// loops in array

// for of

//["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}


// map

const map = new Map() // map is not iteratable
map.set('IN', "India")
map.set('USA', "Unitad States of America")
map.set('IN', "India")

// console.log(map)

for (const key of map) {
    // console.log(key)
}

for (const [key, value] of map) {
    // console.log(key, ': ', value) // works for maps naot for Objects
}

const myObject = {
    js: 'Javascript',
    cpp: 'C++'
}

for (const key in myObject) {
    // console.log(`${key}, is shortcut for ${myObject[key]}`)    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key])
}

