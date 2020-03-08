const mongoose = require("mongoose");
const School = mongoose.model("school");

module.exports = app => {
  // Get all School
  app.get("/api/school", async (req, res) => {
    const school = await School.find();
    res.send({ status: "success", data: school });
  });

  // Store School
  app.post("/api/school", async (req, res) => {
    const school = await new School();
    school.name = req.body.name;
    school.sort = req.body.sort;
    school.save();
    res.send({ status: "success", messages: "create success !!" });
  });

  // Get Specific School by ID
  app.get("/api/school/:id", async (req, res) => {
    const school = await School.findById(req.params.id);
    res.send({ status: "success", data: school });
  });

  // Update School
  app.put("/api/school/:id", async (req, res) => {
    const school = await School.findById(req.params.id);
    school.name = req.body.name;
    school.sort = req.body.sort;
    school.save();
    res.send({ status: "success", messages: "update success !!" });
  });

  // Delete School
  app.delete("/api/school/:id", async (req, res) => {
    const school = await School.findById(req.params.id);
    school.delete();
    res.send({ status: "success", messages: "delete success !!" });
  });
};
