import React, { useState, useEffect } from "react";

export default function Card (props) {
  const handleClick = () => {
    console.log(props);
  };

  const sendCard = (e) => {
    props.callbackFromParent(e.target.id);
  };

  return (
    <div className="card-container" onClick={sendCard}>
        <img 
          className="card-image"
          src={`./img/${props.src}`}
          id={props.id}
          >
        </img>
    </div>
  )
}