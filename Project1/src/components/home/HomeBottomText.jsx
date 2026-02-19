import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 text-white'>

      <p className='absolute lg:w-[17vw] w-72 lg:right-7 right-0 lg:bottom-60 bottom-20 font-[font1] lg:text-[15px] text-sm lg:leading-relaxed leading-tight'>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in
        </p>
    
    <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-35 flex items-center px-7 pt-1 lg:px-10 border-white rounded-full uppercase'>
        
        <Link className='text-[6vw] lg:mt-5' to='/projects'>Work</Link>

    </div>

    <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-35 flex items-center px-7 pt-1 lg:px-10 border-white rounded-full uppercase'>

        <Link className='text-[6vw] lg:mt-5' to='/agence'>Agencey</Link>

    </div>
    </div>
  )
}

export default HomeBottomText
