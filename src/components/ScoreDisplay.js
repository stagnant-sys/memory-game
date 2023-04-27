import React, { useState, useEffect } from "react";

export default function ScoreDisplay (props) {
  return (
    <div className="score-container">
      <div>Score : {props.currScore}</div>
      <div>Meilleur score : {props.bestScore}</div>
    </div>
  )
}