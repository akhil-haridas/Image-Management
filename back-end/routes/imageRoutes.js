const express = require("express");
const router = express.Router();

// Import controllers for each route
// const UserController = require("../controllers/userController");
const ImageController = require("../controllers/imageController");
// const AuthMiddleware = require("../middleware/authMiddleware");

// User Routes
router.get("/home",ImageController.home)
// router.post("/register", UserController.register); 
// router.post("/login", UserController.login); 
// router.post("/logout", UserController.logout);
// router.get("/profile", AuthMiddleware.authenticate, UserController.profile); 

// Image Routes
// router.post("/upload", AuthMiddleware.authenticate, ImageController.upload); 
// router.get("/search", ImageController.search); 
// router.get("/image/:id", ImageController.getImageById); 
// router.put("/image/:id",AuthMiddleware.authenticate,ImageController.updateImage);
// router.delete("/image/:id", AuthMiddleware.authenticate, ImageController.deleteImage);

module.exports = router;
