require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const { MONGO_URI, PORT } = process.env;

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const heroRouter = require("./routes/hero");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/heroes", heroRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
