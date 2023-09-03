const express = require("express");
const router = express.Router();
const multerConfig = require("../config/multerConfig"); // Import your multerConfig

const ImageController = require("../controllers/imageController");

// Use multer middleware with size limit (e.g., 2MB)
const upload = multerConfig("../uploads", 2 * 1024 * 1024);

// Image Routes
router.post("/upload", upload.single("image"), ImageController.uploadImage);
router.get("/search", ImageController.searchImages);
router.get("/image/:id", ImageController.getImageById);
router.put("/image/:id", ImageController.updateImageById);
router.delete("/image/:id", ImageController.deleteImageById);

module.exports = router;
