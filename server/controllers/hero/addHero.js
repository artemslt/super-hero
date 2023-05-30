const { CREATED } = require("../../constants/statusCode");
const addImages = require("../../helpers/cloudinary");
const Hero = require("../../model/hero");

const addHero = async (req, res, next) => {
  const { files } = req;
  console.log("files :>> ", files);
  console.log("files :>> ", req.body);

  try {
    const images = await addImages(files);

    const newHero = await Hero.create({ ...req.body, images });

    res.status(CREATED).json({
      success: true,
      message: "Hero is created!",
      data: newHero,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addHero;
