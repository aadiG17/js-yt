const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => num + 10)

// chaining

const newNums = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 2)
                .filter( (num) => num >= 30)

console.log(newNums)