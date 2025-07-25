// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

/* Outputs 

2025-07-25T06:48:31.805Z
Fri Jul 25 2025 06:48:31 GMT+0000 (Coordinated Universal Time)
Fri Jul 25 2025
2025-07-25T06:48:31.805Z
2025-07-25T06:48:31.805Z
7/25/2025
7/25/2025, 6:48:31 AM
*/

// console.log(myDate.getTimezoneOffset());

// let myCreatedDate = new Date(2005, 9, 15)
// let myCreatedDate = new Date(2005, 9, 15, 14, 10, 40)
let myCreatedDate = new Date("10-15-2005")
// let myCreatedDate = new Date("15-10-2005") // invalid date format

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // print time in milliseconds from the starting date in JS
// console.log(myCreatedDate.getTime());

console.log(myCreatedDate.toLocaleString('default',{
    weekday: "long",
}))