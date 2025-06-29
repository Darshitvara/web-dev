const EventEmitter = require("node:events")

// const emitter = new EventEmitter();

// emitter.on("myFunction", (bird,pet) =>{
//     console.log(` ${bird} can fly. and ${pet} can prey.`)
// })
// emitter.on("myFunction", (bird) =>{
//     console.log(` ${bird} can fly.`)
// })

// console.log("Do works before event occurs in the system");

// emitter.emit("myFunction","Dragon","Tiger")

const customEvent = new EventEmitter()

customEvent.on('myFunc',(name)=>{
    console.log(`Hello ${name}`)
})

customEvent.on('myFunc',(name)=>{
    console.log(`Hello ${name} , How's it going ?`)
})

// console.log("hello")
customEvent.emit('myFunc',"Wolfie")
