const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (accumulator, currval){
//     console.log(`accumulated value: ${accumulator} and current value: ${currval}`);
//     return accumulator + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "java course",
        price: 3999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc+item.price, 0)

console.log(priceToPay)