const multer = require("multer");

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image")) {
    return cb(new Error("Only image files are allowed"), false);
  } else {
    cb(null, true);
  }
};
const upload = multer({ storage, fileFilter });

module.exports = { upload };
