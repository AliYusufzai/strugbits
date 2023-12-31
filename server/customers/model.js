const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    fullname: {
      type: String,
      require: true
    },
    email: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String
    },
    isdeleted: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
