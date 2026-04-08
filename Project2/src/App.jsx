import { Route, Router, Routes } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
