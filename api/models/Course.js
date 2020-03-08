const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  name: { type: String, required: true },
  sort: { type: Number },
});

mongoose.model("course", courseSchema);
