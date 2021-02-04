import axios from "axios";

const NewsURL =
  "https://newsapi.org/v2/everything?q=broadway&pageSize=100&apiKey=c20dd1de26954654be5226fb76eaa7f9";

export default {
  getUsers: function () {
    return axios.get(NewsURL);
  },
};
