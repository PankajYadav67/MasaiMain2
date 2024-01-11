const express = require("express");
const connection = require("./db");

const authRouter = require("./routes/auth.routes");


const app = express();

app.use(express.json());
app.use("/auth",authRouter);



app.listen(8080, async () => {
  try {
    await connection;
    console.log("connect to db successfully.")
  } catch (error) {
    console.log("error in running the server")
  }
  console.log("server running at port number 8080");
});
