const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promised consumed");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})

promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "aadi", password: "1234"})
        }else {
            reject('ERROR: Somthing went wrong')
        }
    })
}, 1000)

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "js", password:"1224"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


async function consumePromise5(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromise5()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))