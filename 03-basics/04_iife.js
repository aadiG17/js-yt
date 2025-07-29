// Immediately Invoked Function Expressions (IIFE)

/// function should rum just after the creation...

// To remove the polutions of global scope, we use IIFE 

(function chai(){
    console.log(`DB CONNECTED`);
})(); // ; is used to stop the above function, else further fun will not execute..

( (name) => {
    console.log(`DB 2 CONNECTED ${name}`)
})('bank');

