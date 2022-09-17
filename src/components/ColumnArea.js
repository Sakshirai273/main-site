import React from "react"
import Column from "./Column";

const ColumnArea = () => {
    return (
        <section id="blog-area">
            <div class="container">
                <div class="row text-center inner">
                    <Column 
                    image="https://ik.imagekit.io/ikmedia/backlit.jpg" heading="column heading"
                    data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullamdignissim varius suscipit. Sed in leo sit amet velit finibus pretium."/>
                    <Column 
                    image="https://ik.imagekit.io/ikmedia/backlit.jpg" heading="column heading"
                    data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullamdignissim varius suscipit. Sed in leo sit amet velit finibus pretium."/>
                </div>
            </div>
        </section>
    )
}

export default ColumnArea;