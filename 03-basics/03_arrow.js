const user = {
    username: "naina",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this) // prints context
    }
}

// user.welcomeMessage()
// user.username = "div"
// user.welcomeMessage()

// console.log(this); /// this is out of the user context, so print {}.. here user is an obj

function chai(){
    let username = "hitesh"
    console.log(this.username) // this does not work in same way as for objects
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2) // implecit return

// const addTwo = (num1, num2) => ({username: "divi"}) // for objects, needs to wrap inside the curly 

// console.log(addTwo(2,4))


