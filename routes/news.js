const express = require("express");
const router = express.Router();
const { getNews, getDailyNews } = require("../controllers/news");
router.route("/getnews").get(getNews);
router.route("/getdailynews").get(getDailyNews);
module.exports = router;
