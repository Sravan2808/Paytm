const express = require("express");
const connectDB = require("./db");
const app = express();
const mainRouter = require("./routes/index")
var cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/api/v1",mainRouter);

connectDB()
  .then(() => {
    console.log("Database connection established ...");
    app.listen(3000, () => {
      console.log("Server is successfully listening on port 3000...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
  