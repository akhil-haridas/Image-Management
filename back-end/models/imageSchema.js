const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const imageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  keywords: [{ type: String }],
  file: { type: String, required: true },
  width: { type: Number },
  height: { type: Number }, 
  colorPalette: [{ type: String }], 
  createdAt: { type: Date, default: Date.now },
});

imageSchema.plugin(mongoosePaginate);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
