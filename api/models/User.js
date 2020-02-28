const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  nickname: { type: String, required: true },
  birthday: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  line: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: Number, required: true },
  school: { type: Array, required: true },
  course: { type: Array, required: true },
  start_date: { type: Array, required: true },
  duration: { type: Number, required: true },
  domitory: { type: Number, required: true },
  consult: { type: String, required: true },
  comments: { type: String, required: true }
});

mongoose.model("user", userSchema);
