import React from "react";
import {Link} from "react-scroll"

const Navbar = () => {
    return(
        <nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>
			<div class="single-page-nav sticky-wrapper" id="tmNavbar">
				<ul class="nav navbar-nav">
					<li><Link to="section1" spy={true} smooth={true} offset={-100} duration={800}>Homepage</Link></li>
					<li><Link to="section2" spy={true} smooth={true} offset={-100} duration={800}>About Us</Link></li>
					<li><Link to="section3" spy={true} smooth={true} offset={-100} duration={900}>Services</Link></li>
					<li><Link to="section4" spy={true} smooth={true} offset={-100} duration={900}>Contact</Link></li>
					<li><a href="http://localhost:3000/">External</a></li>
				</ul>
			</div>
		</div>
	</nav>
    )
}


export default Navbar;