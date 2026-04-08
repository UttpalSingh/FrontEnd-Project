import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

const NavContext = ({children}) => {
    const [navColor, setNavColor] = useState('white')
    const [navOpen,setnavOpen] = useState(false)

    const locate = useLocation().pathname
    useEffect(function(){
      if(locate == '/agence' || locate == '/projects'){
        setNavColor('black')
      }else{
        setNavColor('white')
      }
    })
    
  return (
    <div>
      <NavbarContext.Provider value={[navOpen,setnavOpen]}>
        <NavbarColorContext.Provider value={[navColor,setNavColor]}>
           {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
