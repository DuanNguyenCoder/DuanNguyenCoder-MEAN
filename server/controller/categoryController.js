const { category } = require("../models/models");

const categoryController = {
  addCategory: async (req, res) => {
    try {
      const data = await category.create(req.body);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  },

  getCategory: async (req, res) => {
    try {
      const data = await category.find();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const data = await category.findByIdAndDelete(req.params.id);
      if (!data) {
        throw new Error("invalid category!");
      }
      res.status(200).json({ status: "success", message: "delete sucess!" });
    } catch (error) {
      res.status(200).json({ status: "fail", message: error.message });
    }
  },
};
module.exports = categoryController;
