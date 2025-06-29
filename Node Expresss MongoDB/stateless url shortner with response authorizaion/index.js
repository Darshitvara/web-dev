const path = require("node:path")
const express = require("express");
const cookieParser = require("cookie-parser")
const {connectMongoDb } = require("./connections/connection")
const handleUrlRoutes = require("./routes/urlRoutes");
const handleUserRoutes = require("./routes/userRouter");
const staticRoutes = require("./routes/staticRouter")
const {restrictUnloggedUser,checkAuth} = require("./middleware/auth")


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
app.use(cookieParser())

app.use("/url",checkAuth,handleUrlRoutes)
app.use("/user",handleUserRoutes)
app.use("/",restrictUnloggedUser,staticRoutes)

app.listen(PORT,()=> console.log("Server is listening on Port Number : " + PORT))


