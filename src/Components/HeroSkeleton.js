const HeroSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-10 items-center md:items-start  gap-[5px] md:gap-[15px] bg-[#f1f2f3] md:justify-center px-4">
        <div className="flex justify-between items-center w-full mt-2 md:hidden">
          <h3 className="text-red-700 font-semibold"></h3>
          <div className="flex justify-center gap-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="text-[24px] font-semibold hero-title  mb-2 md:hidden "></div>
        <div className="w-[85%] h-[200px] rounded-md bg-slate-400 overflow-hidden md:hidden"></div>

        <div
          className="md:w-[400px] md:h-[350px] lg:h-[350px] lg:w-[500px] rounded-md bg-slate-400 overflow-hidden
        "
        >
          <div className="w-full h-full bg-slate-400 rounded-md overflow-hidden "></div>
        </div>
        <div className="w-[85%] md:w-[400px] lg:w-[500px] pt-3 flex flex-col md:block justify-center items-start">
          <div className="hidden justify-between items-center md:flex ">
            <h3 className="text-red-700 font-semibold lg:text-[20px]"></h3>
            <div className="flex justify-center gap-2">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="md:text-[24px] hidden font-semibold hero-title md:leading-7 lg:leading-10 md:mb-2 md:block lg:text-[32px] bg-slate-400 h-[80px] w-full rounded-md overflow-hidden"></div>
          <div className="md:text-[24px] hidden font-semibold hero-title md:leading-7 lg:leading-10 md:mb-2 md:block lg:text-[32px] bg-slate-400 h-[80px] w-full rounded-md overflow-hidden"></div>
          <div className="hero-text md:text-[12px] mt-2 lg:text-[20px] bg-slate-400 h-4 w-[80%] rounded-md overflow-hidden"></div>
          <div className="">
            <h3 className="mt-4 bg-slate-400 h-2 w-5 rounded-md overflow-hidden"></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
