const path = require("node:path")
const express = require("express");
const {connectMongoDb } = require("./connections/connection")
const handleRoutes = require("./routes/urlRoutes");
const staticRoutes = require("./routes/staticRouter")

connectMongoDb("mongodb://127.0.0.1:27017/Url-shortner")
    .then(() => console.log("Mongodb connected.."))
    .catch((err) => console.log("Mongodb Error ", err));

const app = express();
const PORT = 8001;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url",handleRoutes)
app.use("/",staticRoutes)




app.listen(PORT,()=> console.log("Server is listening on Port Number : " + PORT))

