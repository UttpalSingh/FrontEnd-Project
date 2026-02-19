import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1:'../../../public/image_1.png',

    image2:'../../../public/image2.png',
  },
    {image1:'../../../public/image3.png',

    image2:'../../../public/image4.png',
    },

    {image1:'../../../public/image5.png',

    image2:'../../../public/image18.png',
    },

    {image1:'../../../public/image7.png',

    image2:'../../../public/image8.png',
    },

    {image1:'../../../public/image9.png',

    image2:'../../../public/image10.png',
    },

    {image1:'../../../public/image11.png',

    image2:'../../../public/image12.png',
    },

    {image1:'../../../public/image13.png',

    image2:'../../../public/image14.png',
    },

    {image1:'../../../public/image15.png',

    image2:'../../../public/image16.png',
    },

    {image1:'../../../public/image17.png',

     image2:'../../../public/image18.png' 
    }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.par',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })


  return (
    <div className='p-3'>
      <div className=' pt-[41vh] '>
        <h2 className='font-[font1] text-[12vw] uppercase'>Work</h2>
      </div>

      <div className='-mt-20 par'>
       {projects.map(function(element,idx){
        return <div key={idx} className="hero w-full mb-4 h-[650px] flex gap-4">
         <ProjectCard image1={element.image1} image2={element.image2}/>
         </div>
       })}

      </div>
    </div>
  )
}

export default Projects
