const mongoose = require("mongoose");
const Carousel = mongoose.model("carousel");

module.exports = app => {
  // Get all Carousel
  app.get("/api/carousel", async (req, res) => {
    const carousel = await Carousel.find();
    res.send({ status: "success", data: carousel });
  });

  // Store Carousel
  app.post("/api/carousel", async (req, res) => {
    const carousel = await new Carousel();
    carousel.name = req.body.name;
    carousel.link = req.body.link;
    carousel.sort = req.body.sort;
    carousel.image = req.body.image;
    carousel.save();
    res.send({ status: "success", messages: "create success !!" });
  });

  // Get Specific Carousel by ID
  app.get("/api/carousel/:id", async (req, res) => {
    const carousel = await Carousel.findById(req.params.id);
    res.send({ status: "success", data: carousel });
  });

  // Update Carousel
  app.put("/api/carousel/:id", async (req, res) => {
    const carousel = await Carousel.findById(req.params.id);
    carousel.name = req.body.name;
    carousel.link = req.body.link;
    carousel.sort = req.body.sort;
    carousel.image = req.body.image;
    carousel.save();
    res.send({ status: "success", messages: "update success !!" });
  });

  // Delete Carousel
  app.delete("/api/carousel/:id", async (req, res) => {
    const carousel = await Carousel.findById(req.params.id);
    carousel.delete();
    res.send({ status: "success", messages: "delete success !!" });
  });
};
