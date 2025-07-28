// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)

// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

// const result = addTwoNumbers(2,4);
// console.log("result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Diva"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2, 200, 100, 300))
 