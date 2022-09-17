import React from "react";
import { Parallax } from "react-parallax"
import bg from "./img/bg-2.jpg"

const Service = () => {
    return (
        <Parallax bgImage={bg} strength={700}>
            <section id="services-area" class="services-section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center inner our-service">
                            <div class="service">
                                <h1>Our Services</h1>
                                <p>Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id
                                    <br />
                                    felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia. <br />
                                    Etiam a mi quis arcu varius condimentum.</p>
                                <p>Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id
                                    <br />
                                    felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia. <br />
                                    Etiam a mi quis arcu varius condimentum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Parallax>
    )
}

export default Service;