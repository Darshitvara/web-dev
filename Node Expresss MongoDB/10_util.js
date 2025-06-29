
const {readFile,writeFile} = require("fs")
const util = require("util")
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
    const file1 = await readFilePromise("01_Hello_world.js","utf-8")
    const file2 = await readFilePromise("07_buffer.js","utf-8")

    // console.log(file1)
    // console.log(file2)

    await writeFilePromise("./temp.js",`file 1 : ${file1} file 2 : ${file2}`)

    const file3 = await readFilePromise("./temp.js","utf-8")
    console.log(file3)
}
start()