const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const compaignController = require("../controllers/compaignController");

router.use(authController.protect);
router
  .route("/")
  .get(compaignController.getCompaigns)
  .post(    
    compaignController.uploadCompaignFile,
    compaignController.resizeCompaignFile,
    compaignController.createCompaign
    );

  router
  .route("/:id")
  .get(compaignController.getCompaigns)
  // .patch(compaignController.updateCompaigns)
  // .delete(bookingController.deleteCompaigns);

module.exports = router;
