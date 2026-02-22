import React from "react";
import { useRef } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
    gsap.registerPlugin(ScrollTrigger)
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)

    const imageArray = [
        '../../../public/image01.png',
        '../../../public/image02.png',
        '../../../public/image03.png',
        '../../../public/image04.png',
        '../../../public/image05.png',
        '../../../public/image06.png',
        '../../../public/image07.png',
        '../../../public/image08.png'
    ]

    useGSAP(function(){
        gsap.to(imageDivRef.current,{
            scrollTrigger:{
                trigger:imageDivRef.current,
                start:'top 15%',
                end:'top -120%',
                pin:true,
                pinSpacing:true,
                pinReparent:true,
                pinType:'transform',
                scrub:1,
                anticipatePin:1,
                invalidateOnRefresh:true,
                onUpdate:function(element){
                    let imageIndex;
                    if(element.progress<1){
                     imageIndex = Math.floor(element.progress * imageArray.length)
                    }
                    else{
                        imageIndex = imageArray.length-1
                    }
                    imageRef.current.src = imageArray[imageIndex]        
                }
            }
        })
    })

  return (
    <div className="parent">
      <div id="page1" className="lg:py-23">
        <div ref={imageDivRef} className="absolute overflow-hidden lg:h-90 h-[32vw] lg:rounded-3xl
        rounded-xl lg:w-65 w-[25vw] lg:top-96 top-0 lg:left-[30vw] left-20 ">
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className=" relative font-[font1]">
          <div className="lg:mt-[57vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="lg:pl-[50%] lg:mt-13 mt-2 p-3">
            <p className="lg:text-6xl text-xl leading-tight">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;We’re inquisitive and open-minded, and we make sure
              creativity crowds out ego from every corner. A brand is a living
              thing, with values, a personality and a story. If we ignore that,
              we can achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>

      <div id="page2" className="h-screen">

      </div>
    </div>
  );
};

export default Agence;
