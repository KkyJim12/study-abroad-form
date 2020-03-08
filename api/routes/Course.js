const mongoose = require("mongoose");
const Course = mongoose.model("course");

module.exports = app => {
  // Get all course
  app.get("/api/course", async (req, res) => {
    const course = await Course.find();
    res.send({ status: "success", data: course });
  });

  // Store course
  app.post("/api/course", async (req, res) => {
    const course = await new Course();
    course.name = req.body.name;
    course.sort = req.body.sort;
    course.save();
    res.send({ status: "success", messages: "create success !!" });
  });

  // Get Specific course by ID
  app.get("/api/course/:id", async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.send({ status: "success", data: course });
  });

  // Update course
  app.put("/api/course/:id", async (req, res) => {
    const course = await Course.findById(req.params.id);
    course.name = req.body.name;
    course.sort = req.body.sort;
    course.save();
    res.send({ status: "success", messages: "update success !!" });
  });

  // Delete course
  app.delete("/api/course/:id", async (req, res) => {
    const course = await Course.findById(req.params.id);
    course.delete();
    res.send({ status: "success", messages: "delete success !!" });
  });
};
