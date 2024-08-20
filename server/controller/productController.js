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
      imgUrl = `http://localhost:3000/uploads/${req.file.originalname}`;

      const newproduct = await product.create({
        ...req.body,
        image: [imgUrl],
      });

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
      imgUrl = `http://localhost:3000/uploads/${req.file.originalname}`;
      const productUpdate = { ...res.body, image: [imgUrl] };
      const stu = await product.findByIdAndUpdate(req.params.id, productUpdate);
      if (!stu) {
        throw new Error("update fail!");
      }
      res.status(200).json({ status: "success", message: "update sucess!" });
    } catch (error) {
      res.status(400).json({ sztatus: "fail", message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      await product.findByIdAndDelete(id, req.body);
      res.json({ status: "success", message: "delete success!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productController;
