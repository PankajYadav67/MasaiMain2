const express = require("express");
const app = express();
const dnsRouters = require("./routes/dns.routes");

app.use(express.json());

app.use("/dns", dnsRouters);

app.get("/", (req, res) => {
  res.send("this is homepage.");
});

app.get("/search", (req, res) => {
  res.send("this is search tab.");
});

app.listen(8080, () => {
  console.log("server at http://localhost:8080");
});

// app.use((req, res, next) => {
//   const start_time = new Date();
//   next();
//   const end_time = new Date();
//   console.log(end_time - start_time);
// });

// app.use((req, res, next) => {
//   console.log("b");
//   next();
//   console.log("m");
// });

// const adminMiddleware = (req, res, next) => {
//   if (req.query.q == "admin") {
//     res.send("access granted");
//   }
//   res.send("access denied.");
// };
