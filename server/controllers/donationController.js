const donation=require("../models/donationModel");
const factory = require("./handlerFactory");


exports.createDonation = factory.createOne(donation);
