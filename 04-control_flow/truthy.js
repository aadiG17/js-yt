const userEmail = "div@ad.ai"

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt, "", 0n, null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

console.log(userEmail)

// Nullish Coalescing Opertor (??) null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20 // the first value will be assigned  

// console.log(val1)

// Ternary Operations

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
