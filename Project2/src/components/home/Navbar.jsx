import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='text-5xl flex justify-between p-5'>
        <div className=' uppercase'>
            codefolio
        </div>
        <div className='flex gap-7'>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
