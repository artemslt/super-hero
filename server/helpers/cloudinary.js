require("dotenv").config();

const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const { CLD_CLOUD_NAME, CLD_API_KEY, CLD_API_SECRET } = process.env;

// Configuration
cloudinary.config({
  cloud_name: CLD_CLOUD_NAME,
  api_key: CLD_API_KEY,
  api_secret: CLD_API_SECRET,
});

const addImages = async (files) => {
  const images = [];

  for (const file of files) {
    const { path } = file;
    await cloudinary.uploader.upload(path, (err, res) => {
      if (err) return res.status(500).send("upload image error");
      images.push(res.secure_url);
      fs.unlink(path);
    });
  }
  return images;
};

module.exports = addImages;
