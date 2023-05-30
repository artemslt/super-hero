const { CREATED } = require("../../constants/statusCode");
const addImages = require("../../helpers/cloudinary");
const Hero = require("../../model/hero");

const addHero = async (req, res, next) => {
  const { id } = req.params;
  const { files } = req;
  console.log("files :>> ", req.body);
  let data = [];
  try {
    const images = await addImages(files);

    console.log("req.body.image :>> ", req.body.image);
    console.log("images:>> ", images);

    if (!Array.isArray(req.body.image)) {
      console.log(
        "!Array.isArray(req.body.image) :>> ",
        !Array.isArray(req.body.image)
      );
      images.push(req.body.image);
      data = [...images];
    } else {
      data = [...images, ...req.body.image];
    }

    const newHero = await Hero.findByIdAndUpdate(id, {
      nickname: req.body.nickname,
      real_name: req.body.real_name,
      origin_description: req.body.origin_description,
      superpowers: req.body.superpowers,
      catch_phrase: req.body.catch_phrase,
      images: data,
    });

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
