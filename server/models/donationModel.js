const mongoose = require("mongoose");
const validator = require("validator");

const donationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "compain must belong to a User!"],
    },
    compainId: {
        type: mongoose.Schema.ObjectId,
        ref: "compain"
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
