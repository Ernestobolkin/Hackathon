const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("./mongoDB/mongoose");

const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, './build');
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("Server is up on port " + port);
});