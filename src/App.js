import React from "react";
import Weather from "./components/WeatherCard";
import Home from "./Home";
import {Route, Routes} from "react-router-dom"
// import Login from "./components/Login";

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
      {/* <Route path="/" element={<Login/>}/> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/weather" element={<Weather/>}/>
      {/* <Weather/> */}
      </Routes>
      {/* ******************************************************* */}

    </div>
  )
}

export default App;