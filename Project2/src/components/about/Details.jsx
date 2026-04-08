import React, { useEffect, useRef } from "react";
import { Citrus } from "lucide-react";
import { Github } from "lucide-react";
import { LaptopMinimal } from "lucide-react";
import { Link } from "react-router-dom";
import { Hexagon } from "lucide-react";
import { UserRound } from "lucide-react";
import { House } from "lucide-react";


const Details = () => {

 

  return (
    <div className="parent min-h-screen w-full  text-[#f2e8cf]">
      <div>
        <div className="text-5xl flex flex-row justify-between p-5">
          <Link to="/">
            <div className="uppercase flex items-center">
              <Hexagon size={60} />
              codefolio
            </div>
          </Link>
          <div className="flex gap-7">
            <Link to="/" className="flex items-center gap-2">
              <House size={60} color="#800f2f" />
              <span>Home</span>
            </Link>

            <Link to="/contact" className="flex items-center gap-2">
              <UserRound size={60} color="#800f2f" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
      <img
        src="/images/bg_2.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="relative z-10 flex flex-col py-30 gap-20">
        <div className="px-7 mt-15">
          <div className="w-[110vh] h-[50vh] bg-white/20 backdrop-blur-md rounded-xl flex left-6 px-5 py-10">
            <div className="h-[40vh] w-[100vh] rounded-xl  mt-5 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="../../../public/images/myImg.jpg"
                alt=""
              />
            </div>
            <div className="m-5 text-2xl leading-[5vh]">
              Hi, I'm Uttpal, a B.Tech student and passionate Web Developer. I
              enjoy creating interactive and responsive web applications while
              continuously improving my programming skills. My core skills
              include C++, JavaScript, React.js, C, and Python. Currently
              working on real-world projects to strengthen my development
              journey.
            </div>
          </div>
        </div>

        <div className="text-8xl ml-5 mb-10 mt-5 flex items-center gap-1 ">
          <Citrus size={75} color="#450920" />
          <span>Projects</span>
        </div>

        <div>
          <div className="px-60 text-6xl m-5 text-[#ffe5d9] items-start">
            <div className="flex items-center p-3">
              <Github size={60} color="#450920" />
              <span>GitHub Finder</span>
            </div>
            <div className="w-[100vh] h-[50vh] bg-[#450920] rounded-xl flex left-6 px-5 py-10">
              <div className="h-[40vh] w-[100vh] rounded-xl  mt-5 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="../../../public/images/github.jpg"
                  alt=""
                />
              </div>
              <div className="m-5 text-2xl leading-[5vh] text-white">
                GitHub Finder is a web application that allows users to search
                for any GitHub profile and instantly view detailed information
                including repositories, account creation date, followers, and
                attached social links. The project fetches real-time data from
                the GitHub API and presents it in a clean, user-friendly
                interface. It focuses on responsive design, smooth UI
                interactions, and structured data rendering.
              </div>
            </div>
          </div>

          <div className="px-60 text-6xl  text-[#ffe5d9] items-start">
            <div className="flex items-center p-3">
              <LaptopMinimal size={60} color="#450920" />
              <span>K72 Website</span>
            </div>
            <div className="w-full max-w-6xl h-[50vh] bg-[#720026] rounded-xl flex left-6 px-5 py-10">
              <div className="relative h-full  w-full rounded-xl  mt-5 overflow-hidden">
                <video
                  className=" h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="../../../public/video/k72.mp4"
                  alt=""
                />
              </div>
              <div className="m-5 text-2xl leading-[5vh] text-white">
                K72.ca is the official website for K72, a Montreal-based
                creative agency founded in 2015 that specializes in brand
                building, marketing, and strategic communications. The agency is
                known for an avant-garde approach to branding and a highly
                interactive, award-winning website portfolio featuring unique
                scroll effects, animations, and bold, minimalist design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
