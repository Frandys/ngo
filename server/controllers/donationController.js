const Donation=require("../models/donationModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const Campaign = require("../models/campaignModel");
const AppError = require("../utils/appError");

 
 

exports.addDonation = catchAsync(async (req, res, next) => { 
     let compain =  await Campaign.findOne({ compainId:req.body.compainId  }).select("donateAmount");  
     console.log(compain.goal); 
     await Donation.create(req.body);
     await Campaign.findByIdAndUpdate(req.body.compainId, {donateAmount:compain.donateAmount+req.body.donateAmount}); 
    res.status(200).json({
      status: "success",
      message: "Domain added successfully",
    });
  });