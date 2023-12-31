const express = require("express");
const Database = require("./config/Database");
const customerRouter = require("./customers/router");
const cors = require("cors");

const app = express();
const db = new Database();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("*", cors());
app.use("/api", customerRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
