const user = {
    username: "div",
    loginCount: 6,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
    
}

// console.log(user.username);
// // console.log(user.getUserDetails);
// console.log(this)



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this  //not need to call explicitly
}

const userOne = new User("aadi", 20, true)
// const userTwo = User("div", 19, false) so if we declare users like this it will overwrite it 
const userTwo = new User("div", 19, false) // use new, when using new it generates a new empty instance
                                            // new object --- new is a constructor
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
