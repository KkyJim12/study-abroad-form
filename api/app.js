const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./models/Carousel");
require("./models/User");
require("./models/School");
require("./models/Course");

mongoose.connect("mongodb://localhost:27017/mangoproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected!!");
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

require("./routes/Carousel")(app);
require("./routes/ImageUpload")(app);
require("./routes/User")(app);
require("./routes/Student")(app);
require("./routes/School")(app);
require("./routes/Course")(app);

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
