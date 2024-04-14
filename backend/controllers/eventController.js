const Event = require("../models/eventModel");
const mongoose = require("mongoose");
// all ads
const getEvents = async (req, res) => {
  const events = await Event.find({}).sort({ createdAt: -1 });
  res.status(200).json(events);
};
// single ad
const getEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Found" });
  }
  const event = await Event.findById(id);
  if (!event) {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json(event);
};
// create ad
const createEvent = async (req, res) => {
  const { title, location, description, user_id, user_email, createdBy, tags } =
    req.body;
  try {
    const event = await Event.create({
      title,
      location,
      description,
      user_id,
      user_email,
      createdBy,
      tags,
    });
    res.status(200).json(event);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
// delete ad
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Found" });
  }
  const event = await Event.findOneAndDelete({ _id: id });
  if (!event) {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json(event);
};
// update ad
const updateEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Found" });
  }
  const event = await Event.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!event) {
    return res.status(400).json({ error: "Not found" });
  }
  res.status(200).json(event);
};
module.exports = {
  getEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
};
