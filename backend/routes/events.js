const express = require("express");
// use auth
// controllers
const {
  getEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
} = require("../controllers/eventController");

const router = express.Router();

router.get("/", getEvents); // get all ads
router.get("/:id", getEvent); // get single ad

router.post("/", createEvent); // create ad

router.delete("/:id", deleteEvent); // delete ad

router.patch("/:id", updateEvent); // update ad

module.exports = router;
