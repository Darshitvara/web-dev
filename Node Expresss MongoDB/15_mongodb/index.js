
const express = require("express");
const {connectMongoDb } = require("./connections/connection")
const handleRoutes = require("./routes/userRoutes");

connectMongoDb("mongodb://127.0.0.1:27017/First-mongodb")
    .then(() => console.log("Mongodb connected.."))
    .catch((err) => console.log("Mongodb Error ", err));

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user",handleRoutes)




app.listen(PORT,()=> console.log("Server is listening on Port Number : " + PORT))

