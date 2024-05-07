const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  urlToImage: {
    type: String,
  },
  content: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  createdDate: {
    type: String,
  },
  dateOfSave: {
    type: String,
  },
});

const News = mongoose.model("News", newsSchema);
exports.News = News;
