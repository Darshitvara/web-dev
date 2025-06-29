const path = require("node:path")
// const path = require("path")

console.log(__filename)
console.log(__dirname)

//                                                      basename
// =================================================================================================================
console.log("Base Name :")
console.log(path.basename(__filename))
console.log(path.basename(__dirname))

//                                                      extname
// =================================================================================================================

console.log("Extension Name : ")
console.log(path.extname(__filename))
console.log(path.extname(__dirname))

//                                                      parse,format
// =================================================================================================================

console.log("Parse Name : ")
console.log(path.parse(__filename))
console.log(path.format(path.parse(__filename)))

console.log(path.isAbsolute(path.format(path.parse(__filename))))
console.log(path.isAbsolute("./03_life.js"))


//                                                      join
// =================================================================================================================

console.log(path.join("folder1","folder2","folder3"))
console.log(path.join("/folder1","folder2","folder3"))
console.log(path.join(__dirname ,"data.json"))