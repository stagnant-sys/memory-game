import React, { useState, useEffect } from 'react';
import CardsDisplay from './components/CardsDisplay';
import './App.css';
import ScoreDisplay from './components/ScoreDisplay';

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const getScore = (score) => {
    setCurrScore(score);
    if (currScore >= bestScore) {
      setBestScore(currScore);
    }
  };

  return (
    <div>
      <CardsDisplay getScore={getScore} />
      <ScoreDisplay currScore={currScore} bestScore={bestScore} />
    </div>
  );
}

export default App;
