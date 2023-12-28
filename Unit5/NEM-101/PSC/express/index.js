const express = require("express");

const app = express();



//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//for text
app.use(express.text());



app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/products", (req, res) => {
  res.send("products");
});

app.post("/send", (req, res) => {
  console.log(req.body);
  res.send("Response Received Successfully. Good Job! ");
});




app.listen(8080, () => {
  console.log("listen at http://localhost:/8080");
});
