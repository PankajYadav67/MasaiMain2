const express = require("express");
const app = express();
const PORT = 8070;

app.use(express.json());

const vaildationMovieData = (req, res, next) => {
  // allowed params
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  //checking if least one of above params is available in request or not.
  if (!ID || !Name || !Rating || !Description || !Genre || !Cast) {
    return res
      .status(400)
      .json({ error: "all required param not available. Try again!" });
  }

  // checking their type
  if (
    typeof ID !== "number" ||
    typeof Name !== "string" ||
    typeof Rating !== "number" ||
    typeof Description !== "string" ||
    typeof Genre !== "string" ||
    !Array.isArray(Cast)
  ) {
    return res.status(400).send({ error: "Incorrect type of Params." });
  } else {
    return res.status(200).send("request is correct.");
  }

  //send next step
  next();
};

app.get("/", (req, res) => {
  // res.json({"messages" : "this is working."})
  res.send("this Homepage maybe idk what to write here just random things.");
});

app.post("/movies", vaildationMovieData, (req, res) => {
  const { vaildationMovieData } = req.body;

  console.log("vaildated movie data:", vaildationMovieData);

  res.json({ data: vaildationMovieData });
});

//handling internal error
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: "There is Internal error." });
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost/${PORT}.`);
});

// try command with git bash
// $ curl -X POST -H "Content-Type: application/json" -d '{"ID": 1, "Name": "Inception", "Rating": 8.8, "Description": "Mind-bending thriller", "Genre": "Sci-Fi", "Cast": ["Leonardo DiCaprio", "Ellen Page"]}' http://localhost:8070/movies
