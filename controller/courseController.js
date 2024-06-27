const { course } = require("../models/models");

const courseController = {
  addCourse: async (req, res) => {
    try {
      const data = await course.create(req.body);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  },

  getCourse: async (req, res) => {
    try {
      const data = await course.find();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const data = await course.findByIdAndDelete(req.params.id);
      if (!data) {
        throw new Error("invalid course!");
      }
      res.status(200).json({ status: "success", message: "delete sucess!" });
    } catch (error) {
      res.status(200).json({ status: "fail", message: error.message });
    }
  },
};
module.exports = courseController;
