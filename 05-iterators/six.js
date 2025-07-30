// const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item // does not retun any thing
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter

// const newnums = myNums.filter( (num) => num > 4)

const newnums = myNums.filter( (num) => {
    return num > 4 // need to write return if treating as obj by using {}
})


console.log(newnums)