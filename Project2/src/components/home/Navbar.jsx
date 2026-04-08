import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Hexagon } from "lucide-react";
import { UserRound } from "lucide-react";
import { BadgeAlert } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
const navRef = useRef(null)

  const tl = gsap.timeline()
  useGSAP(()=>{
    tl.from(navRef.current,{
      y:-40,
      opacity:0,
      duration:1,
      delay:0.5
    })
  })

  return (
    <div ref={navRef}>
      <div className="logo text-5xl flex flex-row justify-between p-5">
        <Link to="/">
          <div className="uppercase flex items-center">
            <Hexagon size={60} />
            codefolio
          </div>
        </Link>
        <div className="flex gap-7">
          <Link to="/about" className="flex items-center gap-2">
            <BadgeAlert size={60} />
            <span>About</span>
          </Link>

          <Link to="/contact" className="flex items-center gap-2">
            <UserRound size={60} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
