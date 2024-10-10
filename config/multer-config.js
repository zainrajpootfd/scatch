const multer = require("multer");

// Use memory storage to store the image as a Buffer
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;
