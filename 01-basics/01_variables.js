const accountId = 12345
let accountEmail = "aadit@gmail.com"
var accountPassword = "11223"
accountCity = "Jaipur"

console.log(accountId, accountEmail,accountPassword, accountCity)

/*
Prefer not to use "var" 
because of issue in block scope anf functional scope
*/

//const accountId = 12345
accountEmail = "aadivy@gmail.com"
accountPassword = "1124523"
accountCity = "Tokya"

console.table([accountId, accountEmail,accountPassword, accountCity])
