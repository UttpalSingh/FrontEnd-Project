import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpUser = () => {
    const navigate = useNavigate()

  return (
    <div className="relative h-screen w-full overflow-hidden font-[font1]">

      {/* background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="../public/videos/bg1.mp4" type="video/mp4" />
      </video>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="text-white text-6xl md:text-8xl font-bold mb-8">
          Welcome to
          <span className="block text-[#d4a373]">
            HotelOpera
          </span>
        </h1>

        <button onClick={()=>navigate('/home')}  className="px-12 py-5 text-2xl bg-[#d4a373] text-black font-semibold rounded-xl shadow-lg hover:scale-105 hover:bg-[#e6b98c] transition duration-300">
          Let's Go
        </button>

      </div>

    </div>
  );
};

export default SignUpUser;
