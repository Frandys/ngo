const Donation=require("../models/donationModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
 
 
exports.createDonation = catchAsync(async (req, res, next) => { 
    req.body.userId = req.user._id; 
    await Donation.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Domain added successfully",
    });
  });