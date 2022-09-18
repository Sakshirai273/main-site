import React from "react";
import Pic from "./img/4-5.jpg"
import './photo.css'
const BigColumn = () => {
    return(
        <div class="row">
					<div class="col-lg-12">
						<div class="tm-box">
							<img src={Pic} alt="Img" class="img-fluid"/>
							<div class="tm-box-description">
								<h2>Our Vision</h2>
								<p class="tm-box-p">
									<ul className="name">
										<li className="yash">VR :- We will use vr to make our users friendly to any place without physically being there.</li><br></br>
										<li className="yash">Bookmark :- To save experiences of credible users and adding things to wishlist.</li><br></br>
										{/* <li className="yash">Rating System</li><br></br> */}
										<li className="yash">Accommodation</li><br></br>
										{/* <li className="yash">Ar Vr</li><br></br> */}

									</ul>
								</p>
								
							</div>
						</div>
					</div>
				</div>
    )
}

export default BigColumn;