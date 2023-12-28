const express = require("express");
const fs = require("fs");


const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("This is Homepage.")
})


const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`)
})