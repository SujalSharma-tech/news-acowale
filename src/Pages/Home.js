import Body from "../Components/Body";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { Context } from "../index";
const Home = () => {
  const { newsArticles, isLoading } = useContext(Context);

  return (
    <>
      <div className=" bg-[#f1f2f3] h-full">
        <Navbar />

        <Body />
      </div>
    </>
  );
};

export default Home;
