// String Interpolation

const name = "aadi"
let repoCount = 20

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

//----------------

const gameName = new String('aadidv')

// console.log(gameName[2]);
// console.log(gameName.__proto__);

// More methods of string..

console.log(gameName.charAt(5));
console.log(gameName.indexOf('v'));

const anotherString = gameName.substring(0, 5) // slices string from 0 index to n-1
console.log(anotherString)

const newString = gameName.slice(-4, 5) // slices string from any index(negative too) to n-1
console.log(newString)

// trim
const newStringOne = "  aadiv   "
console.log(newStringOne);
console.log(newStringOne.trim()) // trims the widespaces

const url = "https://codeskool.com/aadi%15dv"
console.log(url.replace('%15', '_'))

console.log(url.includes('dv'))
