const Router = require("express");

const students = Router();

students.get("/get", (req, res) => {
  res.send("students get");
});

students.post("/create", (req, res) => {
  res.send("create");
});
students.put("/update", (req, res) => {
  res.send("update");
});
students.delete("/delete", (req, res) => {
  res.send("delete");
});
