import { Bookmark, Share } from "lucide-react";
import heroimg from "../assets/heroimg.png";
import headlines from "./headlines.json";
import "./herostyle.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useContext } from "react";
import { Context } from "../index";
import HeroSkeleton from "./HeroSkeleton";
const HeroHeadline = ({ data }) => {
  const handleClick = () => {
    window.location.href = data.url;
  };

  const copyClipboard = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(data.url).then(() => {
      alert("Copied to Clipboard!");
    });
  };
  return (
    <>
      <div
        className="flex flex-col md:flex-row mt-10 items-center gap-[5px] md:gap-[15px] bg-[#f1f2f3] md:justify-center px-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center w-full mt-2 md:hidden">
          <h3 className="text-red-700 font-semibold">Trending</h3>
          <div className="flex justify-center gap-2">
            <div onClick={copyClipboard}>
              <Share size={20} />
            </div>
            <div>
              <Bookmark size={20} />
            </div>
          </div>
        </div>
        <div className="text-[24px] font-semibold hero-title  mb-2 md:hidden">
          {data.title}
        </div>
        <div className="md:w-[400px] lg:w-[500px]">
          <img src={data.image} className="w-full h-full" alt="heroimg" />
        </div>

        <div className="md:w-[400px] lg:w-[500px]">
          <div className="hidden justify-between items-center md:flex">
            <h3 className="text-red-700 font-semibold lg:text-[20px]">
              Trending
            </h3>
            <div className="flex justify-center gap-2">
              <div>
                <Share size={16} onClick={copyClipboard} />
              </div>
              <div>
                <Bookmark size={16} />
              </div>
            </div>
          </div>
          <div className="md:text-[24px] hidden font-semibold hero-title md:leading-7 lg:leading-10 md:mb-2 md:block lg:text-[32px]">
            {data.title}
          </div>
          <div className="hero-text md:text-[12px] mt-2 lg:text-[16px]">
            {data.description}
          </div>
          <div className="relative">
            <div className="line-verticle"></div>
            <h3 className="mt-4">By {data.source.name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  const { newsHeadlines, isLoading, setIsLoading, isLoadingHeadlines } =
    useContext(Context);
  let headlines = [];
  console.log(newsHeadlines);
  if (newsHeadlines.length > 0) {
    headlines = newsHeadlines;
    console.log(headlines);
  }
  const sortedHeadlines = headlines.slice(0, 5);
  //   setIsLoading(true);
  console.log(isLoading);
  return isLoadingHeadlines ? (
    <HeroSkeleton />
  ) : (
    <>
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-hero"
      >
        {sortedHeadlines.map((headline, i) => {
          return (
            <SwiperSlide>
              <HeroHeadline data={headline} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroSection;
