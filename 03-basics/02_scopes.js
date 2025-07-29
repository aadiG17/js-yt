// Block Scope and Global Scope

let a = 200;
if(true){
    let a = 2;
    // console.log("Inner: ", a);
}

// console.log(a);

// clouser of func 
function one(){
    const username = "div"
    // console.log("func1")

    function two(){
        const website = "youtube.com"
        console.log(username);
    }

    // console.log(website);

    // console.log("chk")
    two()
}

one()


//************* Interesting *************

// method: 1)
console.log(addOne(4))

function addOne(num){
    return num + 1
}

// method: 02)

// console.log(addTwo(4))

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(4))


