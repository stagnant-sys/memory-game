import React, { useState, useEffect } from 'react';
import CardsDisplay from './components/CardsDisplay';
import ScoreDisplay from './components/ScoreDisplay';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';


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
      <Header />
      <div className='gameboard'>
        <ScoreDisplay currScore={currScore} bestScore={bestScore} />
        <CardsDisplay getScore={getScore} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
