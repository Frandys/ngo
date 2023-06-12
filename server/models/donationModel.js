const mongoose = require("mongoose");
const validator = require("validator");

const donationSchema = new mongoose.Schema({
    
    compainId: {
        type: mongoose.Schema.ObjectId,
        ref: "compain"
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    accAmount: {
        type: Number,
        required: true,
    },
    donateAmount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
const donation = mongoose.model("donation", donationSchema);
module.exports = donation;
