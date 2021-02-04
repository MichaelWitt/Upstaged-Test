import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=1000&nat=us";
const NewsURL =
  "https://newsapi.org/v2/everything?q=broadway&pageSize=50&apiKey=c20dd1de26954654be5226fb76eaa7f9";

// export default {
//   getUsers: function () {
//     return axios.get(BASEURL);
//   },
// };

export default {
  getUsers: function () {
    return axios.get(NewsURL);
  },
};
