const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  keywords: { type: [String] },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Image", imageSchema);
