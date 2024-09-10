import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Context } from "./index";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import fetchNews from "./utils/fetchNews";
import fetchHeadlines from "./utils/fetchHeadlines";
const App = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    newsArticles,
    setNewsArticle,
    setNewsHeadlines,
    newsHeadlines,
    isLoading,
    setIsLoading,
    query,
    setQuery,
    lang,
    setLang,
    maxResults,
    isLoadingHeadlines,
    setIsLoadingHeadlines,
    setMaxResults,
    country,
    setCountry,
    headlineCategory,
    setHeadlineCategory,
  } = useContext(Context);

  const getNews = async () => {
    setIsLoading(true);
    const data = await fetchNews({
      query,
      lang,
      country,
      max: maxResults,
    });
    if (data) {
      setNewsArticle(data.articles);
      setIsLoading(false);
      console.log(data.articles);
    }
  };
  const getHeadlines = async () => {
    setIsLoadingHeadlines(true);
    const data = await fetchHeadlines({
      headlineCategory,
      lang,
      country,
      max: maxResults,
    });
    console.log(data);
    if (data) {
      setNewsHeadlines(data.articles);
      setIsLoadingHeadlines(false);
      console.log(data.articles);
    }
  };

  useEffect(() => {
    getHeadlines();
    getNews();
  }, [country, setCountry, query, setQuery]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
