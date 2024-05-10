const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: "9ff3f18c39fb45f2b734fe42edf6eba8",
  },
});

class NewsApi {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = (params) => {
    const config = {
      params: params, // Pass query parameters here
    };
    return axiosInstance.get(this.endpoint, config);
  };
}

module.exports = NewsApi;
