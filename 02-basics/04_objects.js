// const tinderUser = new Object() // singelton object
const tinderUser = {} // non singleton object

regularUser = {
    userId: "123adn",
    name: {
        fullname: {
            firstName: "Divi",
            lastName: "Gautam"
        }
    }
}

// console.log(regularUser); 
console.log(regularUser.name.fullname.firstName)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

// const obj4 = { obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4)

// if importing data from database:

// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));

// console.log(regularUser.hasOwnProperty('user'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course // obsect destructuring..
console.log(instructor)


// API

//json

// {
//     "name": "aadi",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// or maybe in form of array of objects

[
    {},
    {},
    {}
]