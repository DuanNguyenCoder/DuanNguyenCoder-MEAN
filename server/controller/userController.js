const { Error } = require("mongoose");
const { user } = require("../models/models");

const userController = {
  getuser: async (req, res) => {
    const data = await user.find();
    res.json(data);
  },

  getOne: async (req, res) => {
    const data = await user.findById(req.params.id);
    res.json(data);
  },

  addUser: async (req, res) => {
    try {
      const newuser = await user.create(req.body);
      res.json(newuser);
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (req, res) => {
    try {
      const stu = await user.findByIdAndUpdate(req.params.id, req.body);
      if (!stu) {
        throw new Error("update fail!");
      }
      res.status(200).json({ status: "success", message: "update sucess!" });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = req.params._id;
      await user.findByIdAndDelete(id, req.body);
      res.json(req.body);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
