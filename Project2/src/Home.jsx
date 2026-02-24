import React from "react";
import Video from "./components/home/Video";
import Navbar from "./components/home/Navbar";
import Herotext from "./components/home/Herotext";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed top-0 left-0 z-0">
        <Video />
      </div>
      <div className=" text-white h-screen w-screen relative pb-5 overflow-hidden ">
        <Navbar />
        <div className="absolute mt-14 p-5">
            <Herotext/>
        </div>
      </div>
    </div>
  );
};

export default Home;
