const axios = require("axios");
const { News } = require("../models/news-model");

exports.run = async () => {
  const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2",
    params: {
      apiKey: "9ff3f18c39fb45f2b734fe42edf6eba8",
    },
  });
  let data;
  axiosInstance
    .get("/top-headlines", {
      params: {
        sources: "bbc-news",
      },
    })
    .then((response) => {
      const currentDate = new Date();
      const dateName = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}-${currentDate.getHours()}-${currentDate.getMinutes()}`;

      const dateOfsave = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`;
      data = response.data.articles.map((article) => {
        return {
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          content: article.content,
          publishedAt: article.publishedAt,
          createdDate: dateName,
          dateOfSave: dateOfsave,
        };
      });

      data.map(async (item) => {
        try {
          const newD = new News(item);
          await newD.save();
        } catch (err) {
          console.log(err);
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
