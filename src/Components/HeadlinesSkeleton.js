export const HeadlineSkeleton = () => {
  return (
    <>
      <div className="md:flex gap-10 justify-center mt-5 my-10 rounded-md overflow-hidden hidden">
        <div className="flex gap-4">
          <div className="w-[15vw] bg-slate-400 h-[100px]"></div>
          <div className="flex flex-col gap-3">
            <h1 className="w-[20vw] bg-slate-400 h-[20px]"></h1>
            <h1 className="w-[15vw] bg-slate-400 h-[20px]"></h1>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[15vw] bg-slate-400 h-[100px]"></div>
          <div className="flex flex-col gap-3">
            <h1 className="w-[20vw] bg-slate-400 h-[20px]"></h1>
            <h1 className="w-[15vw] bg-slate-400 h-[20px]"></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export const MobileSkeleton = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[90vw] overflow-x-scroll mt-4 md:hidden bg-slate-400 overflow-hidden rounded-md h-[40vh]"></div>
      </div>
    </>
  );
};
