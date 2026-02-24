import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Herotext = () => {
  const myRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".heroText", {
        scale: 0.7,
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expoScale(0.5,7,none)",
      });
      gsap.from(".txt", {
        duration: 2.5,
        ease: "slow(0.7,0.7,false)",
        y: -500,
      });
    },
    { scope: myRef },
  );

  return (
    <div
      ref={myRef}
      className="relative text-9xl flex mt-9 p-5 bottom-5 leading-[7vw]"
    >
      <div className="heroText">
        Hi,I'm Uttpal!<div className="text-[#22223b] txt">Web Developer</div>&
        <div className="text-[#22223b] txt">Graphic Designer</div>
      </div>
    </div>
  );
};

export default Herotext;
