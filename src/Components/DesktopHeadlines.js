// import headlines from "./headlines.json";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Context } from "../index";
import { useContext } from "react";
import { HeadlineSkeleton } from "./HeadlinesSkeleton";
const DesktopHeadlines = () => {
  const { newsHeadlines, isLoadingHeadlines } = useContext(Context);
  let headlines = [];
  console.log(newsHeadlines);
  if (newsHeadlines.length > 0) {
    headlines = newsHeadlines;
    console.log(headlines);
  }
  console.log(isLoadingHeadlines);

  return (
    <>
      <div className="px-5 text-[28px] font-extrabold hidden md:block">
        <span className="text-red-600">Breaking </span>Now
      </div>
      {isLoadingHeadlines ? (
        <HeadlineSkeleton />
      ) : (
        <div className="desktop-headlines w-full overflow-x-scroll  hidden md:block mt-5 my-10 scroll-">
          <Swiper
            spaceBetween={15}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {headlines.map((headline, i) => {
              return (
                <SwiperSlide>
                  <a href={headline.url} target="_blank">
                    <div className="flex">
                      <div className="w-auto h-auto headline-img">
                        <img className="w-full" src={headline.image} />
                      </div>
                      <div className="flex flex-col w-[55%] text-box">
                        <h3 className="text-[16px] font-bold900 leading-[18px]">
                          {headline.title}
                        </h3>
                        <p className="text-[12px]">{headline.description}</p>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default DesktopHeadlines;
