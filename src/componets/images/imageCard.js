import React from "react";
import "./imageCard.css";


function ImageCard(props) {
    return (
                <div className="card">
                    <span onClick={() => props.cardShuffle(props.id)} className="shuffle">
                        <div className="container">
                            <img className="click-item" alt={props.name} src={props.image} width="150" height="150" />
                        </div>
                    </span>
                </div>
    )
};
export default ImageCard;
