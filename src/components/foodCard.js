// import Button from 'react-bootstrap/Button';
import React from "react";
import Card from 'react-bootstrap/Card';
import "./food.css"

function BasicExample() {
    return (
        <Card style={{ width: '18rem' }} className="card">
            <div className="foodCard">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"  className = "cardIamge"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        <div className="reaction">dfghjk</div>
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
}

export default BasicExample;