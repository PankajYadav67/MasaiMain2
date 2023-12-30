const { Router } = require("express");
const dns = require("dns");

const dnsRouters = Router();

dnsRouters.get("/", (req, res) => {
  res.send("you are in DNS section.");
});

dnsRouters.post("/getmeip", (req, res) => {
  const hostname = req.body.website_name;
  dns.lookup(hostname, (err, address, family) => {
    if (err) {
      res.send("error found in dns lookup.");
    }
    res.send(address);
  });
});

module.exports = dnsRouters;
