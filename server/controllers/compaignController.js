const multer = require("multer");
const AppError = require("../utils/appError");
const Campaign = require("../models/campaignModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  cb(null, true);

  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadCompaignFile = upload.single("source");

exports.resizeCompaignFile = catchAsync(async (req, res, next) => {
  console.log(req.user);
  console.log(req.file);
  if (!req.file) return next();
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/compaign/${req.file.filename}`);

  next();
});

exports.createCompaign = catchAsync(async (req, res, next) => {
  if (req.body.type === "image") {
    req.body.source = req.file.filename;
  }
  req.body.user = req.user._id;
  await Campaign.create(req.body);
  res.status(200).json({
    status: "success",
    message: "Campaign added successfully",
  });
});

exports.updateCompaigns = catchAsync(async (req, res, next) => {

  if (req.body.type === "image") {
    req.body.source = req.file.filename;
  }
  console.log(req.body);
  let data = await Campaign.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    status: "success",
    data: req.body,
    message: "Campaign updated successfully",
  });
});

exports.getCompaigns = factory.getOne(Campaign);
exports.getUserCompaigns = factory.getAllByUser(Campaign);
exports.getAllCompaigns = factory.getAll(Campaign);
