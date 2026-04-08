import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Home from "./components/Home";
import Users from "./pages/signin/Users";
import Home1 from "./components/Home1";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home1/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Users" element={<Users/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
