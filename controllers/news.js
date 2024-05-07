const { News } = require("../models/news-model");

exports.getNews = async (req, res) => {
  const { date } = req.query;
  console.log(req.query);
  const news = await News.find({ dateOfSave: date });
  if (!news) return res.status(404).send("No news found for the given date");
  res.json(news);
};
