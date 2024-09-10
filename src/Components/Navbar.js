import applogo from "../assets/applogo.png";
import { Link } from "react-router-dom";
import {
  Bookmark,
  BookmarkCheck,
  Home,
  HomeIcon,
  Search,
  User,
} from "lucide-react";
import "./nav-text.css";
import { useState, useContext } from "react";
import { Context } from "../index";
const Navbar = () => {
  const { setCountry, setQuery } = useContext(Context);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const onSearch = () => {
    console.log(searchQuery.toLowerCase());
    setQuery(searchQuery.toLowerCase());
    setSearchQuery("");
    setShowSearch(false);
  };
  const countries = [
    { country: "Australia", code: "au" },
    { country: "Brazil", code: "br" },
    { country: "Canada", code: "ca" },
    { country: "China", code: "cn" },
    { country: "Egypt", code: "eg" },
    { country: "France", code: "fr" },
    { country: "Germany", code: "de" },
    { country: "Greece", code: "gr" },
    { country: "Hong Kong", code: "hk" },
    { country: "India", code: "in" },
    { country: "Ireland", code: "ie" },
    { country: "Israel", code: "il" },
    { country: "Italy", code: "it" },
    { country: "Japan", code: "jp" },
    { country: "Netherlands", code: "nl" },
    { country: "Norway", code: "no" },
    { country: "Pakistan", code: "pk" },
    { country: "Peru", code: "pe" },
    { country: "Philippines", code: "ph" },
    { country: "Portugal", code: "pt" },
    { country: "Romania", code: "ro" },
    { country: "Russian Federation", code: "ru" },
    { country: "Singapore", code: "sg" },
    { country: "Spain", code: "es" },
    { country: "Sweden", code: "se" },
    { country: "Switzerland", code: "ch" },
    { country: "Taiwan", code: "tw" },
    { country: "Ukraine", code: "ua" },
    { country: "United Kingdom", code: "gb" },
    { country: "United States", code: "us" },
  ];
  const [selectedCountry, setSelectedCountry] = useState({
    country: "India",
    code: "in",
  });

  const [activeCategory, setActiveCategory] = useState("Latest Stories");

  const categories = [
    "Entertainment",
    "Sports",
    "Technology",
    "Business",
    "Travel",
  ];

  const changeCategory = (category) => {
    setActiveCategory(category);
    setQuery(category.toLowerCase());
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    console.log(country);
    setCountry(country.code);
    setQuery(country.country);

    setIsOpen(false);
  };
  return (
    <>
      <div className="flex justify-between items-center bg-white px-5">
        <div className="logo">
          <img src={applogo} className="md:w-44 w-32" alt="Logo" />
        </div>
        <div>
          <div className=" justify-center gap-5 hidden md:flex">
            <Link to="/home">
              <Home />
            </Link>
            {categories.map((category) => {
              return (
                <button
                  onClick={() => changeCategory(category)}
                  className={`font-semibold relative ${
                    category === activeCategory ? "text-red-600" : ""
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-3">
            <div className="relative inline-block whitespace-nowrap ">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-[10px] border border-[#ccc] cursor-pointer bg-[#f9f9f9] w-[80px] md:w-[100px] lg:w-[200px] text-center text-ellipsis overflow-hidden"
              >
                {selectedCountry.country} ({selectedCountry.code})
              </div>
              {isOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                    zIndex: 5,
                    width: "200px",
                    height: "50vh",
                    overflowY: "scroll",
                  }}
                >
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      onClick={() => handleCountrySelect(country)}
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        backgroundColor:
                          selectedCountry.code === country.code
                            ? "#e6e6e6"
                            : "#fff",
                      }}
                    >
                      {country.country} ({country.code})
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="">
              <Bookmark size={24} />
            </Link>
            <button className="relative" onClick={toggleSearch}>
              <Search />
            </button>
            {showSearch && (
              <div className="search-cont">
                <input
                  placeHolder="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                />
                <button className="search-btn" onClick={onSearch}>
                  Search
                </button>
              </div>
            )}

            <Link to="">
              <User />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
