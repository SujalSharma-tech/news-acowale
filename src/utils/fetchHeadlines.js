// https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=af87cc930cc40f77e7b6f22becce7d65
import { REACT_APP_API_KEY } from "./constants";
import axios from "axios";
const fetchHeadlines = async ({
  category = "general",
  lang = "en",
  country = "in",
  max = 10,
}) => {
  try {
    const API_KEY = REACT_APP_API_KEY;

    const { data } = await axios.get("https://gnews.io/api/v4/top-headlines", {
      params: {
        category: category,
        lang,
        country,
        max,
        apikey: API_KEY,
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching headlines:", error);
    return null;
  }
};

export default fetchHeadlines;
