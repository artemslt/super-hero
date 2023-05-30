const express = require("express");

const router = express.Router();

const upload = require("../middlewares/upload");

const addHero = require("../controllers/hero/addHero");
const getAllHeroes = require("../controllers/hero/getAllHeroes");
const getHeroById = require("../controllers/hero/getHeroById");
const updateHeroById = require("../controllers/hero/updateHeroById");
const deleteHero = require("../controllers/hero/deleteHero");

router.get("/", getAllHeroes);
router.post("/hero", upload.array("image"), addHero);
router.get("/hero/:id", getHeroById);
router.patch("/hero/:id", upload.array("image"), updateHeroById);
router.delete("/hero/:id", deleteHero);

module.exports = router;
