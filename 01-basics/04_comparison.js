// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// outputs:
    // false
    // false
    // true

// Note: In JS comparison and equality are two different things
//  when comparing null with 0, js first convert null to 0 and treat it as a number 
//   that is why 3 option is true

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

//******** strict check *******

// ===

console.log("2" === 2);


// Node: Better avoid these kinfd of comparisons