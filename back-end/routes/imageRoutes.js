const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multerConfig");
const ImageController = require("../controllers/imageController");
const handleUploadError = require("../middlewares/multerError")
// Use multerConfig middleware for file upload and validation
const upload = multerConfig("uploads", 2 * 1024 * 1024);

// Image Routes
router.post("/upload", upload.single("image"), handleUploadError, ImageController.uploadImage);
router.get("/allimages", ImageController.getAllImages);
router.get("/search", ImageController.searchImages);
router.get("/image/:id", ImageController.getImageById);
router.delete("/image/:id", ImageController.deleteImageById);


module.exports = router;
