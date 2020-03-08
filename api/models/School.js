const mongoose = require("mongoose");
const { Schema } = mongoose;

const schoolSchema = new Schema({
  name: { type: String, required: true },
  sort: { type: Number },
});

mongoose.model("school", schoolSchema);
