const Image = require("../models/imageSchema"); // Import your Image model

// Controller for uploading an image
exports.uploadImage = async (req, res) => {
  try {
    // Validate and process the uploaded image and other attributes
    const { title, description, keywords } = req.body;
    const file = req.file.filename; // Uploaded image file name

    // Create a new image record in the database
    const newImage = new Image({
      title,
      description,
      keywords: keywords.split(","), // Split keywords into an array
      file,
    });

    // Save the new image record
    await newImage.save();

    res.status(201).json(newImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Controller for searching images
exports.searchImages = async (req, res) => {
  try {
    const { title, keywords, sortBy, sortOrder, page, limit } = req.query;

    // Build a query object based on search criteria
    const query = {};
    if (title) {
      query.title = { $regex: title, $options: "i" }; // Case-insensitive title search
    }
    if (keywords) {
      query.keywords = { $in: keywords.split(",") }; // Search by keywords
    }

    // Sort options
    const sortOptions = {};
    if (sortBy && sortOrder) {
      sortOptions[sortBy] = sortOrder === "asc" ? 1 : -1;
    }

    // Pagination options
    const options = {
      sort: sortOptions,
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 10,
    };

    // Perform the search and pagination using a pagination library like 'mongoose-paginate-v2'
    const result = await Image.paginate(query, options);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Controller for getting an image by ID
exports.getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Controller for updating an image by ID
exports.updateImageById = async (req, res) => {
  try {
    const { title, description, keywords } = req.body;

    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    // Update image attributes
    image.title = title;
    image.description = description;
    image.keywords = keywords.split(",");

    // Save the updated image
    await image.save();

    res.json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Controller for deleting an image by ID
exports.deleteImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    // Delete the image
    await image.remove();

    res.json({ message: "Image deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
