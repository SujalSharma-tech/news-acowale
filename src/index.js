import reactDom from "react-dom/client";
import App from "./app";
import { createContext, useState } from "react";

export const Context = createContext({
  isAuthenticated: true,
});
const Wrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [newsArticles, setNewsArticle] = useState([]);
  const [newsHeadlines, setNewsHeadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingHeadlines, setIsLoadingHeadlines] = useState(false);
  const [query, setQuery] = useState("india");
  const [headlineCategory, setHeadlineCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [lang, setLang] = useState("en");
  const [maxResults, setMaxResults] = useState(10);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isLoadingHeadlines,
        setIsLoadingHeadlines,
        newsHeadlines,
        setNewsArticle,
        setNewsHeadlines,
        newsArticles,
        isLoading,
        setIsLoading,
        query,
        setQuery,
        lang,
        setLang,
        maxResults,
        setMaxResults,
        country,
        setCountry,
        headlineCategory,
        setHeadlineCategory,
      }}
    >
      <App />
    </Context.Provider>
  );
};

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<Wrapper />);
