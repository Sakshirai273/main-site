import React from "react";
import Rating from "./Rating";
// import Navbar from "./Navbar";
// import weatherNavbar from "./weatherNavbar"
import weatherNavbar from "./weatherNavbar";
import Weather from "./WeatherCard";

import BasicExample from "./foodCard";
import "./Delhiblog.css";

const Blog = () => {
    return(
        <div>
        <weatherNavbar/>
        <div className="Delhiblog">
        {/* <weatherNavbar/> */}
        <BasicExample/>
        <BasicExample/>
        <BasicExample/>
        <BasicExample/>
        <BasicExample/>
        </div>
        <div className="randw">
        <Weather/>
        <Rating/>
        </div>
        
        </div>
    )
} 

export default Blog;