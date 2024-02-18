const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT;

const connection = require("./db/connection");
connection();

const cors = require('cors')
app.use(cors())

const userRoute = require("./routes/user");
app.use(userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
