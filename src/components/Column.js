import React from "react";

const Column = ({ image, heading, data }) => {
    return (
        <div class="col-sm-6">
            <div class="blog-content">
                <img src={image} alt="pic" />
                <h2>{heading}</h2>
                <p>{data}</p>
                <br/>
            </div>
        </div>
    );
}

export default Column;