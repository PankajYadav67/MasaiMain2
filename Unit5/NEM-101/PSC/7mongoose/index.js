const express = require("express");
const { connection, StudentModel } = require("./db");

const app = express();
app.use(express.json());

app.get("/students", async (req, res) => {
//   const params = req.query;
  const { pageNo, perPage } = req.query;
//   console.log(params);

  const result = await StudentModel.find(req.query, { __v: 0 })
    .skip((pageNo - 1) * perPage)
    .limit(perPage);
  res.status(200).send(result);
});

app.post("/students", async (req, res) => {
  const result = await new StudentModel(req.body);
  await result.save();

  res.status(200).send(result);
});

app.listen(7000, async () => {
  try {
    await connection;
  } catch {
    console.log("error detected at time of connecting to db.");
  }
  console.log("server running at port number 7000.");
});
