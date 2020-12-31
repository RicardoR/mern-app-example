const mongoose = require("mongoose");

URI = "mongodb://localhost/testMern";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("Database success conection"))
  .catch((error) => console.log("Error in database conection", error));


  module.exports = mongoose;