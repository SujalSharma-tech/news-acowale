import axios from "axios";
import { REACT_APP_API_KEY } from "./constants";
const fetchNews = async ({
  query = "a",
  lang = "en",
  country = "in",
  max = 10,
}) => {
  try {
    const API_KEY = REACT_APP_API_KEY;

    const { data } = await axios.get("https://gnews.io/api/v4/search", {
      params: {
        q: query,
        lang,
        country,
        max,
        apikey: API_KEY,
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return null;
  }
};

export default fetchNews;
