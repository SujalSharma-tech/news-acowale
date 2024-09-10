const NewsSkeleton = () => {
  return (
    <>
      <SingleComponent />
      <SingleComponent />
    </>
  );
};

const SingleComponent = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-slate-400 h-[100px] md:h-[30vh]"></div>
      <div className="flex gap-1 self-center mt-2 items-center pl-1">
        <div className="font-bold text-slate-400 text-[12px] relative">
          <div className="line-verticle"></div>
        </div>
        <div className="font-bold text-slate-400 text-[12px]"></div>
        <div className="font-bold text-slate-400 text-[12px]"></div>
      </div>

      <div className="text-[16px] md:text-[18px] font-bold hero-title bg-slate-400 w-[80%] h-[20px] "></div>
    </div>
  );
};

export default NewsSkeleton;
