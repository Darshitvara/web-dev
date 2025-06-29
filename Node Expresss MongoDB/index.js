
//                                                   Module Cashing
// =================================================================================================================

// const instance1 = require("./04_module_cashing")

// console.log(instance1.getName())
// instance1.setName("Lion")
// console.log(instance1.getName())

// const instance2 = require("./04_module_cashing")
// In node js .. It cashes the modules and whenever next instance is created it uses that previously used reference.
// So there's only single instance will be created and afterwards just references would be created.

// console.log(instance2.getName())
// instance2.setName("Tiger")
// console.log(instance1.getName())
// console.log(instance2.getName())

// To eliminate the shared cashing and create a seperate instances..
// we can export the class instead of a single instance of class.

const MyClass = require("./04_module_cashing")

const instance1 = new MyClass("Dragon");

console.log(instance1.getName())

const instance2 = new MyClass("Memath")

console.log(instance2.getName())

instance2.setName("Elephant")

console.log(instance2.getName())


//                                               Export Pattern Types 
// =================================================================================================================

const add = require("./02_add_num").add
const sub = require("./02_add_num").sub

console.log(add(2, 5))
console.log(sub(2, 5))

