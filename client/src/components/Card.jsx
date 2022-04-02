import React from "react";
import "./Card.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Card = ({ image, name }) => {
    return (
        <div className="card">
            <MoreVertIcon className="options" />
            <div className="card_thumbnail">
                <img src={image} alt="thumbnail" />
            </div>
            <div className="card_title">
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Card;
