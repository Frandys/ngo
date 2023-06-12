const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const donationController = require("../controllers/donationController");
router.post('/addDonation', donationController.addDonation);

router.use(authController.protect);
router
    .route("/")
    // .post(donationController.createDonation);
module.exports = router;
