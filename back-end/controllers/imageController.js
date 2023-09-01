// const Image = require("../models/image");


exports.home = async (req, res) => {
    try {
        res.status(200).json("HOME");
    } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Server error" });
    }
}
// Controller for uploading an image
// exports.uploadImage = async (req, res) => {
//   try {
//     // Assuming you use a library like multer to handle file uploads
//     const { title, description, keywords } = req.body;
//     const file = req.file.filename; // Get the uploaded file name

//     const newImage = new Image({
//       title,
//       description,
//       keywords,
//       file, // Save the file name in the schema
//     });

//     await newImage.save();
//     res.status(201).json(newImage);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };


