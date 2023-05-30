const { SUCCESS, NOT_FOUND } = require("../../constants/statusCode");
const Hero = require("../../model/hero");

const getAllHeroes = async (req, res, next) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;
    const heroes = await Hero.find({}, "", {
      skip,
      limit: Number(limit),
    });

    const totalHeroes = await Hero.find({}).count();

    if (heroes.length === 0) {
      return res
        .status(NOT_FOUND)
        .json({ message: "Sorry, heroes not found!" });
    }

    res.status(SUCCESS).json({
      success: true,

      data: {
        heroes,
        totalPages: Math.ceil(totalHeroes / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllHeroes;
