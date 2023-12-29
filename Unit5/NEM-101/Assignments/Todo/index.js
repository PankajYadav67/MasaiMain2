const express = require("express");
const fs = require("fs");

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get req.
app.get("/", (req, res) => {
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("error found in reading file of get req.");
    }
    const parsedData = JSON.parse(data);
    const details = parsedData.details;

    res.send(JSON.stringify(details));
  });
});

// post req.
app.post("/", (req, res) => {
  const dataFromClient = req.body;
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("error found in post req.");
    }

    const parsedData = JSON.parse(data);
    parsedData.details = [...parsedData.details, dataFromClient]; // new data added

    fs.writeFile(
      "./db.json",
      JSON.stringify(parsedData),
      { encoding: "utf-8" },
      () => {
        res.send("post request has been successfully made.");
      }
    );
  });
});

// Put Request via id
app.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const dataFromClient = req.body;

  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      console.log("error found in put req.");
    }

    const parsedData = JSON.parse(data);
    const details = parsedData.details;

    const filterData = details.filter((ele) => ele.id != id);
    parsedData.details = filterData;

    // at last adding to database
    parsedData.details = [...parsedData.details, dataFromClient];

    fs.writeFile("./db.json", JSON.stringify(parsedData), "utf-8", () => {
      res.send("put request done.");
    });
  });
});

// delete Request via id
app.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      console.log("error found in put req.");
    }

    const parsedData = JSON.parse(data);
    const details = parsedData.details;

    const filterData = details.filter((ele) => ele.id != id);
    parsedData.details = filterData;

    fs.writeFile("./db.json", JSON.stringify(parsedData), "utf-8", () => {
      res.send("delete request done.");
    });
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is Running on port http://localhost:${PORT}`);
});
