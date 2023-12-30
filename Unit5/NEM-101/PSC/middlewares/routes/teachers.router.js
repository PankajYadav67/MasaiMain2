const Router = require("express");

const teachers = Router();

teachers.get("/get", (req, res) => {
  res.send("teachers get");
});

teachers.post("/create", (req, res) => {
  res.send("create");
});
teachers.put("/update", (req, res) => {
  res.send("update");
});
teachers.delete("/delete", (req, res) => {
  res.send("delete");
});
