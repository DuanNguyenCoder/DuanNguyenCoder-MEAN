const { Error } = require("mongoose");
const { product } = require("../models/models");

const productController = {
  getProduct: async (req, res) => {
    const data = await product.find();
    res.json(data);
  },

  getOne: async (req, res) => {
    const data = await product.findById(req.params.id);
    res.json(data);
  },

  addProduct: async (req, res) => {
    try {
      const newproduct = await product.create(req.body);
      res.json(newproduct);
    } catch (error) {
      console.log(error);
    }
  },
  getProductByCategory: async (req, res) => {
    try {
      const stu = await product
        .find({ category: req.params.id })
        .select("_id name")
        .populate({ path: "category", select: "name" });
      res.json(stu);
    } catch (error) {}
  },
  updateProduct: async (req, res) => {
    try {
      const stu = await product.findByIdAndUpdate(req.params.id, req.body);
      if (!stu) {
        throw new Error("update fail!");
      }
      res.status(200).json({ status: "success", message: "update sucess!" });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const id = req.params._id;
      await product.findByIdAndDelete(id, req.body);
      res.json(req.body);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productController;
