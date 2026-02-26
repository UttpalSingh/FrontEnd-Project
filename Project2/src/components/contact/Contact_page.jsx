import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Hexagon } from "lucide-react";
import { UserRound } from "lucide-react";
import { House } from "lucide-react";
import { BadgeAlert } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact_page = () => {
  const ContactRef = useRef(null);

  useGSAP(() => {
    gsap.from(ContactRef.current, {
    y: -400,
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    ease: "expoScale(0.5,7,none)"
    });
  });

  return (
    <div className="min-h-screen w-full  text-[#f2e8cf] ">
      <div>
        <div className="text-5xl flex flex-row justify-between p-5">
          <Link to="/">
            <div className="uppercase flex items-center text-[#800f2f]">
              <Hexagon size={60} color="#800f2f" />
              codefolio
            </div>
          </Link>
          <div className="flex gap-7">
            <Link to="/" className="flex items-center gap-2">
              <House size={60} color="#800f2f" />
              <span>Home</span>
            </Link>

            <Link to="/about" className="flex items-center gap-2">
              <BadgeAlert size={60} color="#800f2f" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>

      <img
        src="/images/bg_1.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div
        ref={ContactRef}
        className="relative z-10 flex flex-row  py-30 gap-20"
      >
        <div className="h-[27vh] w-[50vh] flex  text-5xl m-3 text-black p-3">
          <Link to="https://www.linkedin.com/in/uttpal-singh-750629230/">
            <img src="/images/linkedin.svg" alt="" className="w-full h-full" />
            <p className="ml-10">Linkedin</p>
          </Link>
        </div>
        <div className="h-[27vh] w-[50vh] flex  text-5xl m-3 text-black p-3">
          <Link to="https://uttpalsingh8@gmail.com">
            <img src="/images/email.svg" alt="" className="w-full h-full" />
            <p className="ml-15">Mail</p>
          </Link>
        </div>
        <div className="h-[27vh] w-[50vh] flex  text-5xl m-3 text-black p-3">
          <Link to="https://github.com/UttpalSingh">
            <img src="/images/github.svg" alt="" className="w-full h-full" />
            <p className="ml-10">GitHub</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact_page;
