import React from "react";
import "../styles/Card.css";

function Card({ name, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
