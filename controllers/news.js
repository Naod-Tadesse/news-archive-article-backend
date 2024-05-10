const { News } = require("../models/news-model");
const NewsApi = require("../utilities/daily_news");
const newsApi = new NewsApi("/top-headlines");

exports.getNews = async (req, res) => {
  const { date } = req.query;
  console.log(req.query);
  const news = await News.find({ dateOfSave: date });
  if (!news) return res.status(404).send("No news found for the given date");
  res.json(news);
};

exports.getDailyNews = async (req, res) => {
  try {
    const response = await newsApi.getAll(req.query);
    const data = response.data.articles;
    res.send(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).send("Error fetching news");
  }
};
