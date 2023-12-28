const express = require("express");
const fs = require("fs");

const app = express();

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
  const dataFromClient = req.body;

  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("there error in reading file");
    }
    const parsedData = JSON.parse(data);
    parsedData.messages = [...parsedData.messages, dataFromClient]; // adding data

    fs.writeFile(
      "./data.json",
      JSON.stringify(parsedData),
      { encoding: "utf-8" },
      () => {
        res.send("message stored successFully.");
      }
    );
  });
});

app.get("/messages", (req, res) => {
  //reading file
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      res.send("something went wrong at reading file.");
    }

    // parsing and stringify the data
    const parsedData = JSON.parse(data);
    const messages = parsedData.messages;

    // finally sending data to client
    res.send(JSON.stringify(messages));
  });
});

app.delete("/messages/:id", (req, res) => {
  // const { id } = req.params;
  const id = Number(req.params.id);

  //read the file and get the data
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("something went wrong in deleting part.");
    }
    const parsedData = JSON.parse(data);
    
    const messages = parsedData.messages;

    //filter
    const remainingMessage = messages.filter((msg) => msg.id !== id);

    //write - store in json
    parsedData.messages = remainingMessage;

    fs.writeFile(
      "./data.json",
      JSON.stringify(parsedData),
      { encoding: "utf-8" },
      () => {
        res.send(`message ${id} has been successfully deleted.`);
      }
    );
  });
});


app.listen(8080, () => {
  console.log("listen at http://localhost:/8080");
});
