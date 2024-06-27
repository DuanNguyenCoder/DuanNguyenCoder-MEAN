const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
  },
});

var courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const student = mongoose.model("student", studentSchema);
const course = mongoose.model("course", courseSchema);

module.exports = { student, course };
