const { SUCCESS, NOT_FOUND } = require("../../constants/statusCode");
const Hero = require("../../model/hero");

const getHeroById = async (req, res, next) => {
  const { id } = req.params;
  console.log("id :>> ", id);
  try {
    const hero = await Hero.findById(id);

    if (!hero) {
      return res
        .status(NOT_FOUND)
        .json({ message: "Sorry, this hero is not found!" });
    }

    res.status(SUCCESS).json({
      success: true,
      data: hero,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getHeroById;
