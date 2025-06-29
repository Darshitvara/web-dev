
//                                                 Pattern - 1
// =================================================================================================================
// const sum = (a,b) => { return a+b; }

// // console.log(sum(1,3))

// module.exports = sum

//                                                 Pattern - 2
// =================================================================================================================

// module.exports = (a,b) => {return a+b}

//                                                 Pattern - 3
// =================================================================================================================

// const add = (a,b) => {return a+b}
// const sub = (a,b) => {return a-b}

// module.exports = { add : add , sub : sub}
// module.exports = { add  ,  sub}                     // With support of es2015 if name and values are same in object then we can write it like this

//                                                 Pattern - 4
// =================================================================================================================


module.exports.add = (a, b) => { return a + b }
module.exports.sub = (a, b) => { return a - b }

