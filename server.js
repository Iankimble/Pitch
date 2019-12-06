// Dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const fs = require("fs");
const cors = require("cors");

const dotenv = require("dotenv");

const app = express();

// Routes

// API DOc

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "unauthorized" });
  }
});
app.use("/");

// Mongo
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected"))
  .catch(error => {
    console.log(`DB connection error :${error.message}`);
  });

// Port
const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Pitch server is running on port: ${port}`);
});
