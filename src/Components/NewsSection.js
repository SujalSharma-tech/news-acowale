import allnews from "../assets/allnews.png";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useState } from "react";
import DesktopHeadlines from "./DesktopHeadlines";
import { Autoplay } from "swiper";
import Modal from "react-modal";
import { useContext, useState } from "react";
import { Context } from "../index";
import NewsSkeleton from "./NewsSkeleton";
import { MobileSkeleton } from "./HeadlinesSkeleton";
import FooterComponent from "./FooterComponent";
const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    newsArticles,
    newsHeadlines,
    setQuery,
    isLoading,
    isLoadingHeadlines,
  } = useContext(Context);
  const newsPerPage = 6;
  const lastIndex = currentPage * newsPerPage;
  const firstIndex = lastIndex - newsPerPage;
  let news = [];
  if (newsArticles) {
    news = newsArticles.slice(firstIndex, lastIndex);
  }
  const totalPages = Math.ceil(newsArticles?.length / newsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const firstHalf = news.slice(0, 3);
  const secondHalf = news.slice(3, 6);
  let headlines = [];
  if (newsHeadlines.length > 0) {
    headlines = newsHeadlines;
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changePage(n) {
    setCurrentPage(n);
  }
  const [activeCategory, setActiveCategory] = useState("Latest Stories");

  const categories = ["Latest Stories", "Sports"];
  const allCategories = [
    "Latest Stories",
    "Health",
    "Sports",
    "Technology",
    "Entertainment",
    "Business",
    "World",
  ];

  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function changeCategory(category) {
    closeModal();
    setActiveCategory(category);
    setQuery(category.toLowerCase());
  }

  const dateConvert = (date) => {
    if (!date) {
      return "";
    }
    const d = new Date(date);
    const formattedDate = `${
      d.getMonth() + 1
    }/${d.getDate()}/${d.getFullYear()}`;
    console.log(formattedDate);
    return formattedDate;
  };

  return (
    <>
      <div className="bg-[#C31815] p-2 mt-5 md:mt-16 md:mb-10">
        <div className="flex items-center justify-center gap-4 flex-col md:flex-row">
          <div className="flex gap-4 items-center">
            <button className="bg-white rounded-sm text-[#C31815]  px-2 py-1 md:px-3 md:py-2 md:font-semibold">
              Breaking News
            </button>
            <h3 className="text-slate-100 md:hidden">Tap to see full story</h3>
          </div>
          <div className="text-white text-center md:text-[20px] font-bold">
            Kanye West says he's running for president in 2020.
          </div>
        </div>
      </div>
      <div className="px-5 mt-4 text-[28px] font-extrabold md:hidden">
        <span className="text-red-600">Breaking </span>Now
      </div>

      {isLoadingHeadlines ? (
        <MobileSkeleton />
      ) : (
        <div className="w-100% overflow-x-scroll mt-4 md:hidden">
          <Swiper
            spaceBetween={15}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {headlines.map((headline, i) => {
              return (
                <SwiperSlide>
                  <a href={headline.url} target="_blank">
                    <div
                      style={{
                        backgroundImage: `url(${headline.image})`,
                      }}
                    >
                      <p>{headline.title}</p>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}

      <div className="font-extrabold text-[28px] px-5 text-center mb-3 mt-2  md:hidden">
        Global Feed
      </div>
      {isLoadingHeadlines ? (
        ""
      ) : (
        <div className=" p-4 md:hidden flex items-center flex-col justify-center mt-3">
          <div className="w-auto">
            <img
              className="w-full h-full"
              src={newsHeadlines && newsHeadlines[4]?.image}
            />
          </div>
          <div className="font-semibold text-[20px] mt-2 hero-title ">
            {newsHeadlines && newsHeadlines[4]?.title}
          </div>
        </div>
      )}

      <DesktopHeadlines />
      <div className="line-horizontal"></div>
      <div className="font-extrabold text-[28px] px-5 text-center mb-5 hidden md:block">
        Global Feed
      </div>

      <div className="bg-white px-3 flex justify-between py-3  md:hidden">
        <div className="flex gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`font-semibold text-title relative ${
                activeCategory === category ? "text-red-600" : ""
              }`}
              onClick={() => changeCategory(category)}
            >
              {category}
              {activeCategory === category && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 w-1/2 mx-auto"></div>
              )}
            </button>
          ))}
          <button className={`font-semibold text-title relative text-red-600`}>
            {categories.includes(activeCategory) ? "" : activeCategory}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 w-1/2 mx-auto"></div>
          </button>
        </div>

        <div className="">
          <button onClick={openModal}>
            <img src={allnews} alt=" " />
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Select Category"
          >
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className="text-center mb-4 font-semibold"
            >
              Select Category
            </h2>
            <div className="h-auto max-h-[60vh] flex flex-col z-20 ">
              {allCategories.map((category, i) => {
                return (
                  <button
                    key={i}
                    className="min-w-[200px] w-auto border-b-2 p-2 "
                    onClick={() => changeCategory(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Modal>
        </div>
      </div>

      <div className="main-grid px-5 justify-center">
        <div className=" border-r-2 max-w-[400px] hidden md:block">
          <a href={newsHeadlines[4]?.url} target="_blank">
            <div className=" p-4 flex items-center flex-col justify-center">
              <div className="w-[240px]">
                <img
                  className="w-full h-full"
                  src={newsHeadlines && newsHeadlines[4]?.image}
                />
              </div>
              <div className="flex gap-1 self-start mt-2 items-center ">
                <div className="line-verticle"></div>

                <div className="font-bold text-slate-400 text-[14px]">
                  {newsHeadlines && newsHeadlines[4]?.source.name}
                </div>
                <div className="font-bold text-slate-400 text-[14px]">.</div>
                <div className="font-bold text-slate-400 text-[14px]">
                  {newsHeadlines && dateConvert(newsHeadlines[4]?.publishedAt)}
                </div>
              </div>

              <div className="font-semibold text-[20px] hero-title ">
                {newsHeadlines && newsHeadlines[4]?.title}
              </div>
              <div className="text-title">
                {newsHeadlines && newsHeadlines[4]?.description}
              </div>
            </div>
          </a>
        </div>
        <div>
          {isLoading ? (
            <div className="flex mt-5 md:mt-0 w-[90vw] md:w-[50vw]">
              <div className="flex flex-col pl-3 gap-5 w-full">
                <NewsSkeleton />
              </div>
              <div className="flex flex-col pl-3 gap-5 w-full">
                <NewsSkeleton />
              </div>
            </div>
          ) : (
            <div className="flex mt-5 md:mt-0">
              <div className="flex flex-col pl-3 gap-5 w-full">
                {firstHalf.map((currNews, index) => {
                  return (
                    <a href={currNews.url} target="_blank">
                      <div className="w-auto" key={index}>
                        <div className="w-full">
                          <img src={currNews.image} />
                        </div>
                        <div className="flex gap-1 self-center mt-2 items-center pl-1">
                          <div className="font-bold text-slate-400 text-[12px] relative">
                            <div className="line-verticle"></div>
                            {currNews.source.name}
                          </div>
                          <div className="font-bold text-slate-400 text-[12px]">
                            .
                          </div>
                          <div className="font-bold text-slate-400 text-[12px]">
                            {dateConvert(currNews.publishedAt)}
                          </div>
                        </div>

                        <div className="text-[16px] md:text-[18px] font-bold hero-title ">
                          {currNews.title}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col px-3 gap-5 w-full">
                {secondHalf.map((currNews, index) => {
                  return (
                    <a href={currNews.url} target="_blank">
                      <div className="w-auto">
                        <div className="w-full">
                          <img src={currNews.image} />
                        </div>
                        <div className="flex gap-1 self-center mt-2 items-center pl-1">
                          <div className="font-bold text-slate-400 text-[12px] relative">
                            <div className="line-verticle"></div>
                            {currNews.source.name}
                          </div>
                          <div className="font-bold text-slate-400 text-[12px]">
                            .
                          </div>
                          <div className="font-bold text-slate-400 text-[12px]">
                            {dateConvert(currNews.publishedAt)}
                          </div>
                        </div>

                        <div className="text-[16px] md:text-[18px] font-bold hero-title ">
                          {currNews.title}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          <div className="pagination-div mt-10 flex justify-center">
            <ul className="pagination flex items-center">
              <li className="page-item">
                <button
                  className="page-link border-2 px-5 py-3 rounded-md text-black"
                  onClick={prePage}
                >
                  {"<"}
                </button>
              </li>
              {numbers.map((n, i) => {
                return (
                  <li
                    className={`page-item ${
                      currentPage == n ? "bg-slate-600 text-white" : ""
                    }`}
                    key={i}
                  >
                    <button
                      className="page-item px-3 py-3"
                      onClick={() => changePage(n)}
                    >
                      {n}
                    </button>
                  </li>
                );
              })}
              <li className="page-item">
                <button
                  className="page-link border-2 px-5 py-3 rounded-md text-black"
                  onClick={nextPage}
                >
                  {">"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default NewsSection;
