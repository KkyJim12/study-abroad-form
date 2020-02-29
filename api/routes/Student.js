const mongoose = require("mongoose");
const User = mongoose.model("user");

module.exports = app => {
  // Get all User

  app.get("/api/student", async (req, res) => {
    const user = await User.find();
    res.send({ status: "success", data: user });
  });

  app.get("/api/student/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send({ status: "success", data: user });
  });
};
