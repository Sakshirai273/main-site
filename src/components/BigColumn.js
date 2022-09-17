import React from "react";
import Pic from "./img/4-5.jpg"

const BigColumn = () => {
    return(
        <div class="row">
					<div class="col-lg-12">
						<div class="tm-box">
							<img src={Pic} alt="Img" class="img-fluid"/>
							<div class="tm-box-description">
								<h2>One Big Column</h2>
								<p class="tm-box-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor
									eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at
									consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus
									pretium. Vivamus dictum nisi ac fermentum interdum. Vestibulum vel mauris at erat
									mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl
									lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in
									blandit metus. Praesent volutpat cursus rhoncus. Aenean arcu diam, suscipit ac neque
									in, sollicitudin convallis orci.</p>
								<p class="tm-box-p">Fusce eu porta massa, sed tincidunt turpis. Cum sociis natoque
									penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a urna
									tellus. Integer pharetra vitae nisi et lacinia. Morbi sagittis justo a velit
									placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor.
									Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus
									magna, ornare ac scelerisque quis, maximus eget nisi.</p>
								<a href="https://st4.depositphotos.com/15964096/20036/i/450/depositphotos_200367782-free-stock-photo-young-beautiful-woman-posing-beach.jpg" class="content-link">Read More</a>
							</div>
						</div>
					</div>
				</div>
    )
}

export default BigColumn;