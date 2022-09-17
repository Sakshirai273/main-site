import React from "react";
// import Navbar from "./components/Navbar";
// import Start from "./components/Start";
// import About from "./components/About";
// import ColumnArea from "./components/ColumnArea";
// import Service from "./components/Service";
// import Testimonial from "./components/Testimonial";
// import ContactForm from "./components/ContactForm";
import Weather from "./components/WeatherCard";
import Home from "./Home";
import {Route, Routes} from "react-router-dom"

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
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/weather" element={<Weather/>}/>
      {/* <Weather/> */}
      </Routes>

    </div>
  )
}

export default App;