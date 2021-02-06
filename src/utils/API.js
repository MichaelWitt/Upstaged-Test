import axios from "axios";

// const newsApiKeyHidden = process.env.NEWS_API_KEY;

const newsApiKey = "c20dd1de26954654be5226fb76eaa7f9";
const NewsURL =
  "https://newsapi.org/v2/everything?q=broadway&pageSize=100&sortBy=relevancy&apiKey=" +
  `${newsApiKey}`;

export default {
  getNews: function () {
    return axios.get(NewsURL);
  },
};
