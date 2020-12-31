const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");
require('./database');
const corsOptions = {
  origin: "http://localhost:3000"
};

app.set("Port", 4000);

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(bodyparser.json());

// Routes
app.use('/api/', require('./routes/test.route'));

// Start server
app.listen(app.get("Port"), () =>
  console.log("Listening on port ", app.get("Port"))
);

