const http = require("http");
const express = require("express");

function handleGETHomeReq(req,res){
    return res.end("Hello From Homepage.")
}
function handleGETAbout(req,res){
    return res.end("About Page")
}


const app = express();
app.get("/",handleGETHomeReq)
app.get("/about",handleGETAbout) 

app.listen(5000, () => console.log("Server Started on port 5000."));

// const connection = http.createServer(app)
// connection.listen(5000,()=>console.log("Server Started on port number 5000."));


// const http = require("http");
// const express = require("express");

// function handleGETHomeReq(req, res) {
//     return res.end("Hello From Homepage.");
// }

// function handleGETAbout(req, res) {
//     return res.end("About Page");
// }

// const app = express();

// app.get("/", handleGETHomeReq);
// app.get("/about", handleGETAbout);

// const connection = http.createServer(app);

// connection.listen(5000, () => console.log("Server Started on port 5000."));

