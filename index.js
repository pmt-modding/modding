// File : index.js

const express = require('express');
const bodyParser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 27017;

app.use(bodyParser.json());

app.get (PORT, (req, res) => {
res.json({ message: "API Working"});
});

app.use ("/user", user);


app.listen(PORT, (req, res) => {
  console.log('Server Started at PORT ${27017');
});
