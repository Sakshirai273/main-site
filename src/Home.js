import React from "react";
// import Navbar from "./components/Navbar";
import Start from "./components/Start";
import About from "./components/About";
import ColumnArea from "./components/ColumnArea";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import Rating from "./RatingCard";

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Start />
            <About />
            <ColumnArea />
            <div id="section3">
                <Service />
                <Testimonial />
            </div>
            <ContactForm />
            <Rating/>
        </div>
    );
}

export default Home;