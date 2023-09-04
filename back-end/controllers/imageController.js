const Image = require("../models/imageSchema"); 
const sizeOf = require("image-size");
const Vibrant = require("node-vibrant");

// Controller for uploading an image
exports.uploadImage = async (req, res) => {
  try {
    // Validate and process the uploaded image and other attributes
    const { title, description, keywords } = req.body;

    const file = req.file;

    // Check for missing fields
    if (!title || !description || !keywords || !file) {
      return res
        .status(400)
        .json({
          error: "Title, description, keywords, and image are required fields.",
        });
    }

    // Check for empty title, description, or keywords
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      keywords.trim() === ""
    ) {
      return res
        .status(400)
        .json({ error: "Title, description, and keywords cannot be empty." });
    }

    // Check if an image with the same title already exists
    const existingImage = await Image.findOne({ title });
    if (existingImage) {
      return res
        .status(400)
        .json({ error: "An image with the same title already exists." });
    }

    const { path } = req.file;

    // Extract image dimensions
    const dimensions = sizeOf(path);

    // Extract color palette data
    const palette = await Vibrant.from(path).getPalette();

    // Access image dimension and color palette data
    const width = dimensions.width;
    const height = dimensions.height;
    const colorPalette = Object.keys(palette).map((swatch) =>
      palette[swatch].getHex()
    );

    // Create a new image record in the database
    const newImage = new Image({
      title,
      description,
      keywords: keywords.split(",").map((keyword) => keyword.trim()),
      file: file.filename,
      width,
      height,
      colorPalette,
    });

    // Save the new image record
    await newImage.save();

    res.status(201).json(newImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};


exports.getAllImages = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortField, sortOrder, search } = req.query;

    // Build a filter object based on the search query
    const filter = search ? { title: { $regex: new RegExp(search, "i") } } : {};

    // Define the sort criteria
    const sort = sortField && sortOrder ? { [sortField]: sortOrder } : {};

    // Use mongoose-paginate to fetch paginated, sorted, and filtered image metadata
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: sort,
    };

    const result = await Image.paginate(filter, options);

    // Return the paginated result as a JSON response
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching images:", error);
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
