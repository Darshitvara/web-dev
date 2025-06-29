// const os = require("node:os")

// console.log(os.hostname())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.platform())
// console.log(os.machine())
// console.log(os.version())
// console.log(os.userInfo())

//                                              Sync File System
// =================================================================================================================

// const fs = require("node:fs")
// const {readFileSync, writeFileSync} = require("node:fs")

// console.log("Start")
// const file1 = readFileSync("./01_Hello_world.js","utf-8")
// const file2 = readFileSync("./02_add_num.js","utf-8")

// fs.readFileSync()
// fs.writeFileSync()

// writeFileSync("./temp.js",`${file1} ${file2}`,{flag:'a'})
// console.log("Task has completed.")

// console.log("Next line of code.")

//                                              Async File System
// =================================================================================================================

// const { readFile, writeFile } = require("node:fs")
// console.log("Start")
//  const file1 = readFile("./01_Hello_world.js", "utf-8", (err, result) => {
//        if (err) console.log(err)
//         else {
//         const second = result


//     const filewrite = writeFile("./temp.js",`${second}`,(err,result) =>{
//             if(err) console.log(err)
//             else console.log("Task has completed.")
//      })

//      }
//  })

//  console.log("Next line of code.")

//                                              HTTP module
// =================================================================================================================

const http = require("node:http")

const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url == "/")  res.write("welcome to our homepage")
    else if(req.url == "/about") res.end(` <h1> You are on the about page.</h1>`)
    else res.end(`<h1> Oops.!</h1> <h2> We are unable to find the requested page.</h2>
    <a href="/">Back home.</a>`)
    res.end()   
})

// console.log(http)

server.listen(5000,() => ( console.log("Server started at port number : 5000")))