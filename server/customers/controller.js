const Customer = require("./model");
const cloudinary = require("../config/cloudinary");

module.exports = {
  create: async (req, res) => {
    try {
      const { username, fullname, email } = req.body;
      if (!req.file) {
        return res.status(400).json({ error: "No image file provided" });
      }

      const result = await cloudinary.uploader.upload(req.file.path);
      const customer = new Customer({
        username,
        fullname,
        email,
        profilePicture: result.secure_url
      });
      await customer.save();
      res.status(201).json({
        success: true,
        message: "Customer added successfully.",
        data: customer
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while adding the customer.",
        error: error.message
      });
    }
  },

  index: async (req, res) => {
    try {
      const customers = await Customer.find({ isdeleted: 0 }).select(
        "-isdeleted"
      );
      if (customers.length < 1) {
        return res
          .status(404)
          .json({ success: false, message: "No Record Found" });
      }
      res.status(200).json({
        success: true,
        message: " Customers list fetched ",
        data: customers
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching admins.",
        error: error.message
      });
    }
  },

  show: async (req, res) => {
    try {
      const { customerId } = req.params;
      const customer = await Customer.findOne({
        _id: customerId,
        isdeleted: 0
      }).select("-isdeleted");
      if (!customer) {
        return res
          .status(404)
          .json({ success: false, message: "Customer not found." });
      }
      res.status(200).json({
        success: true,
        message: "Customer is found and fetched",
        data: customer
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An Error occured while fetching customer",
        error: error.message
      });
    }
  },

  update: async (req, res) => {},

  destroy: async (req, res) => {
    try {
      const { customerId } = req.params;
      const customer = await Customer.findByIdAndUpdate(customerId, {
        isdeleted: 1
      });
      if (!customer) {
        return res
          .status(404)
          .json({ success: false, message: "Customer not found." });
      }
      res.status(200).json({
        success: true,
        message: "Customer is deleted successfully"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An Error occured",
        error: error.message
      });
    }
  }
};
