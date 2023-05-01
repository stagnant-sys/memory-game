import React, { useState, useEffect } from "react";

export default function ScoreDisplay (props) {
  return (
    <div className="score-container">
      <div className="score_current">Score: {props.currScore}</div>
      <div className="score_best">Best score: {props.bestScore}</div>
    </div>
  )
}