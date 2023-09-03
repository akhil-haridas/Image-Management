const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  keywords: [{ type: String }],
  file: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
