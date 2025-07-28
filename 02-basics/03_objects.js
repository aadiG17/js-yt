// Objects r of two type: singleton and Object literals

// Object Literals:

const mySymbol = Symbol("key1");

const JsUser = {
    name: "Aadi",
    "full name": "Aaditya Gautam",
    [mySymbol]: "mykey1", // define symbol in sqr bracket
    age: 18,
    email: "aadi@google.com",
    location: "Lucknow",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // better way to access element of an object
// console.log(JsUser[mySymbol])
// console.log(typeof JsUser[mySymbol])

// Object.freeze(JsUser) // freezes the object, can't change any value further
// JsUser.email = "aadi@ms.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // "this" is used to access the same object u r in
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

