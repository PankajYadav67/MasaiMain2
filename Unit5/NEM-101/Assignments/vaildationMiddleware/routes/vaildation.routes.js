const { Router } = require("express");

const vaildationRoute = Router();

vaildationRoute.get("/", (req, res) => {
  res.send("this Homepage maybe idk what to write here just random things.");
});

vaildationRoute.post("/search",(req,res)=>{
    
})