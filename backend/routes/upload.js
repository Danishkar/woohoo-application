const express = require("express");
const {uploadImageNPredict} = require("../controllers/uploadController")
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

router.post('/upload', upload.single("testImage"), uploadImageNPredict)

module.exports = router