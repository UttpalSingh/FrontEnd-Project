import React, { useEffect, useRef } from 'react'
import Details from './components/about/Details'
import gsap from 'gsap'

const About = () => {

  const container = useRef(null)
  useEffect(() =>{
    gsap.from(container.current,{
    duration:2.5,
    ease: "bounce.out",
    y: -450,
    
    })
  })

  return (
    <div ref={container}>
      <Details/>
    </div>
  )
}

export default About
