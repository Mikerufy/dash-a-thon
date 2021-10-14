const router = require("express").Router();
const view = require("../controllers/ML.controller");

router.post("/rating",view.rating);

module.exports = router;