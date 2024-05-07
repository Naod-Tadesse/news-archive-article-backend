// third party modules
const express = require("express");
const cors = require("cors");
const news = require("./routes/news");
const app = express();
// const news_routes = require("./routes/news");
const corsOptions = {
  //origin: 'https://sudo-delivery-frontend.vercel.app',
  exposedHeaders: "*",
};

app.use(cors(corsOptions));

app.get("/chek", (req, res) => {
  res.send("Hello World");
});
app.use("/api", news);

module.exports = app;
