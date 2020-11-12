const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 1337;
const query = require("./queries");
const mailer = require("./mailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../public"));

app.post("/lantern", (req, res) => {
  query.lightLantern(req.body.name, req.body.from, (err, data) => {
    if (err) {
      res.status(500).send;
    } else {
      mailer.send()
        .then((data) => {
          res.status(201).send();
        })
        .catch((err) => {
          res.status(500).send();
        });
    }
  });
});

app.listen(PORT, () => {
  console.log(`nothing better to do,  might as well listen on port ${PORT}`);
});
