const express = require("express");
// use auth
// controllers
const {
  getAds,
  getAd,
  createAd,
  deleteAd,
  updateAd,
} = require("../controllers/adController");
const router = express.Router();

router.get("/", getAds); // get all ads
router.get("/:id", getAd); // get single ad

router.post("/", createAd); // create ad

router.delete("/:id", deleteAd); // delete ad

router.patch("/:id", updateAd); // update ad

module.exports = router;
