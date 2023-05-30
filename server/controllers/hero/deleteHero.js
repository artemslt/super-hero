const { SUCCESS, NOT_FOUND } = require("../../constants/statusCode");
const Hero = require("../../model/hero");

const deleteHero = async (req, res, next) => {
  const { id } = req.params;
  console.log("id :>> ", id);
  try {
    const hero = await Hero.findByIdAndRemove(id);

    if (!hero) {
      return res
        .status(NOT_FOUND)
        .json({ message: "Sorry, this hero is not found!" });
    }

    res.status(SUCCESS).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteHero;
