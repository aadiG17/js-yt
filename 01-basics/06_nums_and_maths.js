const number = 123.87

// console.log(number.toFixed(3))

// console.log(number.toPrecision(3)) // 124
// console.log(number.toPrecision(4)) // 123.9

const hundreds = 100000
// console.log(hundreds.toLocaleString()); // default US-std -- 100,000
// console.log(hundreds.toLocaleString('en-IN')); // Indian std 1,00,000

// ***************** Maths *******************

console.log(Math.random()); // gives a random value b/w 0 and 1
console.log((Math.random()*10) + 1); // now value always be > 0
console.log(Math.floor(Math.random()*10) + 1); // print only one value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // prints min value of 10

