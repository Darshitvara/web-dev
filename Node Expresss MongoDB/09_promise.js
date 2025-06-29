const {readFile} = require("node:fs")
// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,"utf-8",(err,result)=>{
//             if(err) reject(err)
//             else resolve(result)
//         })
//     })
// }
// const file1 = getText("./01_Hello_world.js")

// file1.then((res)=>{
//     console.log(res)
// })

// file1.catch((err)=>{
//     console.log(err)
// })

const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,"utf-8",(err,result)=>{
            if(err) reject(err)
            else resolve(result)
        })
    })
}

// const file1 = getText("01_Hello_world.js")
// file1.then((result)=>{
//     console.log(result)
// })
// file1.catch((err)=>{
//     console.log(err)
// })

const start = async () => {
    try{
        const file1 = await getText("01_Hello_world.js")
        const file2 = await getText("02_add_num.js")

        console.log(file1)
        console.log(file2)
    }catch(e){
        console.log(e)
    }
}
start()