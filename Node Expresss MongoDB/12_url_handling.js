const http = require("http")
const url = require("url")
const fs = require("fs")


const connection = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url,true);
    let log = `${Date.now()} : ${req.method} ${req.url} Request received. \n`

    switch (myUrl.pathname){
                case '/':
                    res.end("Homepage")
                    break;
                case '/about':
                    const userName = myUrl.query.myName
                    res.end(`Hello ${userName}`)
                default : 
                    res.end("PAGE NOT FOUND")
            }

        const fileWrite = fs.appendFileSync("./log.txt",log,(err,result)=>{
            if(err){
                console.log("Something went wrong.");
            }else{
                console.log("Request has been logged.");
            }

            
        })
})

connection.listen(5000,()=>{console.log("Server Started.");})