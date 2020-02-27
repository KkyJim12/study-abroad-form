const mongoose = require("mongoose");
const { Schema } = mongoose;

const carouselSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String },
  sort: { type: Number },
  image: { type: String }
});

mongoose.model("carousel", carouselSchema);
