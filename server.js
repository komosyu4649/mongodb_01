const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

// db connect
// async () => {
// await
mongoose
  .connect(
    "mongodb+srv://komosyu4649:komori841@cluster0.uh77tlt.mongodb.net/?retryWrites=true&w=majority"
    // "mongodb+srv://shincode:a@cluster0.0zogj.mongodb.net/mongodb?retryWrites=true&w=majority",
  )
  .then(() => console.log("success db connect"))
  .catch((error) => console.log(error));
// };

app.listen(3000, () => {
  console.log(333);
});
