import React, { useState, useEffect } from 'react';
import CardsDisplay from './components/CardsDisplay';
import './App.css';
import ScoreDisplay from './components/ScoreDisplay';

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  return (
    <div>
      <CardsDisplay />
      <ScoreDisplay currScore={currScore} bestScore={bestScore} />
    </div>
  );
}

export default App;
