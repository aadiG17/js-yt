// let myName = "aaditya   "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aadi = function(){
    console.log(`aadi is present in all objects`);
}

Array.prototype.aadiHi = function(){
    console.log(`aadi is here`);
    
}

// heroPower.aadi()
myHeros.aadi(); // from object everyone can acccess like array, function and string
myHeros.aadiHi();
// heroPower.aadiHi(); up in hirarchy cant access lower elements


//   inheritance

const user = {
    username: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideos: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport // prototypalinheritance
}

teacher.__proto__= user // outdated method

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUser = "chai aur code    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUser.trueLength()