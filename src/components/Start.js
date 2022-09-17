import React from "react";
import { Parallax} from "react-parallax"
import Img from "./img/bg-1.jpg"

const Start = () => {
    return (
        <Parallax bgImage={Img} strength={100}>
            <div id="section1">
                <header id="header-area" class="intro-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <div class="header-content">
                                    <h1>RAHIII</h1>
                                    <h4>only guide has the asnwer!!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </Parallax>
            )

    }

            export default Start