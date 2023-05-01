import React, { useState, useEffect } from "react";
import Card from "./Card";
import { click } from "@testing-library/user-event/dist/click";

export default function CardsDisplay ({getScore}) {
  const [cards, setCards] = useState(
    [
      {
        id: "tomberry",
        src: "tomberry.jpg",
        },
      {
        id: "mog",
        src: "mog.jpg",
      },
      {
        id: "chocobo",
        src: "chocobo.jpg"
      },
      {
        id: "pampa",
        src: "pampa.jpg"
      },
      {
        id: "ultros",
        src: "ultros.jpg"
      },
      {
        id: "shiva",
        src: "shiva.jpg"
      },
      {
        id: "ifrit",
        src: "ifrit.jpg"
      },
      {
        id: "marlboro",
        src: "marlboro.jpg"
      },
      {
        id: "whitemage",
        src: "whitemage.jpg"
      },
      {
        id: "blackmage",
        src: "blackmage.jpg"
      }
    ]);

  const [score, setScore] = useState(0);

  const [clickedCards, setClickedCards] = useState([]);

  const getClickedCard = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
      console.log('You lose');
    } else {
      setClickedCards([...clickedCards, id]);
      randomizeCards(cards);
      setScore(score + 1);
      console.log(`Add ${id} to clickedCards`);
    }
  };

  const randomizeCards = (array) => {
    let tempArray = [...array];
    let currentIndex = tempArray.length,  randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // Swap it with the current element.
      [tempArray[currentIndex], tempArray[randomIndex]] = [tempArray[randomIndex], tempArray[currentIndex]];
      }
      setCards(tempArray);
  };

  const copyArray = cards.slice();
  const cardsList = copyArray.map((el) => 
    <Card 
      key={el.id}
      src={el.src} 
      id={el.id} 
      callbackFromParent={getClickedCard}
    />
    );


  return (
  
    <div className="cards-display" onClick={ getScore(score) }>
      {cardsList}
    </div>
  );
}