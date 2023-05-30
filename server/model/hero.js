const mongoose = require("mongoose");

const heroSchema = mongoose.Schema(
  {
    nickname: {
      type: String,
    },
    real_name: {
      type: String,
    },
    origin_description: {
      type: String,
    },
    superpowers: {
      type: String,
    },
    catch_phrase: {
      type: String,
    },
    images: {
      type: Array,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
