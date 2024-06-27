const { Error } = require("mongoose");
const { student } = require("../models/models");

const studentController = {
  getStudent: async (req, res) => {
    const data = await student.find();
    res.json(data);
  },

  getOne: async (req, res) => {
    const data = await student.findById(req.params.id);
    res.json(data);
  },

  addStudent: async (req, res) => {
    try {
      const newStudent = await student.create(req.body);
      res.json(newStudent);
    } catch (error) {
      console.log(error);
    }
  },
  getStudentByClass: async (req, res) => {
    try {
      const stu = await student
        .find({ course: req.params.id })
        .select("_id name")
        .populate({ path: "course", select: "name" });
      res.json(stu);
    } catch (error) {}
  },
  updateStudent: async (req, res) => {
    try {
      const stu = await student.findByIdAndUpdate(req.params.id, req.body);
      if (!stu) {
        throw new Error("update fail!");
      }
      res.status(200).json({ status: "success", message: "update sucess!" });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  },

  deleteStudent: async (req, res) => {
    try {
      const id = req.params._id;
      await student.findByIdAndDelete(id, req.body);
      res.json(req.body);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = studentController;
