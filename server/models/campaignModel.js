const mongoose = require("mongoose");
const validator = require("validator");

const compainSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "compain must belong to a User!"],
  },
  name: {
    type: String,
    required:true,
  },
  description: {
    type: String,
    required:true,
  },
  type: {
    type: String,
    enum: ["image", "text"],
    required:true,
  },
  source: {
    type: String,
    required:true,
  },
  goal: {
    type: Number,
    required:true,
  },
  donateAmount: {
    type: Number,
    required:false,
    default: 0
  },
});

 



const compain = mongoose.model("compain", compainSchema);
module.exports = compain;
