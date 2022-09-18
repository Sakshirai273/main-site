import React from "react";
import { Parallax } from "react-parallax";
import bg from "./img/bg-5.jpg";

const Service = () => {
      
  return (
    <div id="section2">
      <Parallax bgImage={bg} strength={800} blur={2}>
        <section id="services-area" class="services-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center inner our-service">
                <div class="service">
                  <h1>About Us </h1>
                  <p>
                  It's our privilege to help you out with a step towards simplicity.
                    It will contain all the data of different places reviewed by users <br />
                    It will contain all the data of different places reviewed by users
                  ,a real experience. The most valuable feature of our website is providing tourist guiders at different locations ensuring security and rates. So why not to opt RAAHI as your friend in your trip.<div style={{height:"50px"}}></div><div></div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </div>
  );
};

export default Service;
