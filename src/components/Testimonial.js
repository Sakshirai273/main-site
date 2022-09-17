import React from "react";
import TestimonialCards from "./TestimonialCards";
import BigColumn from "./BigColumn";


const Testimonial = () => {
    return(
        <section id="testimornial-area">
			<div class="container">
				<div class="row text-center">
                    <TestimonialCards 
                    image="https://static.vecteezy.com/packs/media/photos/term-bg-1-c9813571.jpg"
                    heading="testimonial"
                    data = "Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt puruspretium quis Fusce posuere egestas enim eu viverra."/>

                    <TestimonialCards 
                    image="https://static.vecteezy.com/packs/media/photos/term-bg-1-c9813571.jpg"
                    heading="testimonial"
                    data = "Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt puruspretium quis Fusce posuere egestas enim eu viverra."/>

                    <TestimonialCards 
                    image="https://static.vecteezy.com/packs/media/photos/term-bg-1-c9813571.jpg"
                    heading="testimonial"
                    data = "Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt puruspretium quis Fusce posuere egestas enim eu viverra."/>

                    <TestimonialCards 
                    image="https://static.vecteezy.com/packs/media/photos/term-bg-1-c9813571.jpg"
                    heading="testimonial"
                    data = "Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt puruspretium quis Fusce posuere egestas enim eu viverra."/>

                    <BigColumn/>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;