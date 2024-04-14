const Ad = require("../models/adModel");
const mongoose = require("mongoose");
// all ads
const getAds = async (req, res) => {
  const ads = await Ad.find({}).sort({ createdAt: -1 });
  res.status(200).json(ads);
};
// single ad
const getAd = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Found" });
  }
  const ad = await Ad.findById(id);
  if (!ad) {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json(ad);
};
// create ad
const createAd = async (req, res) => {
  const {
    title,
    location,
    address,
    description,
    cube,
    price,
    type,
    quantity,
    user_id,
    createdBy,
    user_email,
  } = req.body;
  try {
    const ad = await Ad.create({
      title,
      location,
      address,
      description,
      cube,
      price,
      type,
      quantity,
      user_id,
      createdBy,
      user_email,
    });
    res.status(200).json(ad);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
// delete ad
const deleteAd = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Found" });
  }
  const ad = await Ad.findOneAndDelete({ _id: id });
  if (!ad) {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json(ad);
};
// update ad
const updateAd = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Found" });
  }
  const ad = await Ad.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!ad) {
    return res.status(400).json({ error: "Not found" });
  }
  res.status(200).json(ad);
};
module.exports = {
  getAds,
  getAd,
  createAd,
  deleteAd,
  updateAd,
};
