const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      res.status(400).json({ error: "File size too large" });
    } else {
      res.status(400).json({ error: err.code });
    }
  } else {
    next(err);
  }
};

module.exports = handleUploadError