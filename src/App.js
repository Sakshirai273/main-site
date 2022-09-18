import React from "react";
import Weather from "./components/WeatherCard";
// import Login from "./components/Login";
import Home from "./Home";
import {Route, Routes} from "react-router-dom"
import LoginPage from "./LoginPage/LoginPage";
import Blog from "./components/Delhi";

const App = () => {
  return(
    <div>
      {/* <Navbar/>
      <Start/>
      <About/>
      <ColumnArea/>
      <div id="section3">
      <Service/>
      <Testimonial/>
      </div>
      <ContactForm/>  */}
      {/* ************************************************* */}
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      {/* <Weather/> */}
      </Routes>
      {/* ******************************************************* */}

    </div>
  )
}

export default App;