// Array methods

// const myArr = [1,3,5,2,4,7]

// myArr.push(9)
// myArr.pop()

// myArr.unshift(8) // insert value at indext 0
// myArr.shift()

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(7));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice, splice..

const myArr = [0,1,2,3,4,5]

const myn1 = myArr.slice(1,3); // prints sub array from index 0 to i-1

console.log("A", myArr)
console.log(myn1)

const myn2 = myArr.splice(1,3) // splice cuts the parts away from the original array
                                // and it does include the last element too.
console.log("B ", myArr)
console.log(myn2)