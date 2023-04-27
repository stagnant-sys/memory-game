import React, { useState, useEffect } from "react";
import Card from "./Card";
import { click } from "@testing-library/user-event/dist/click";

export default function CardsDisplay () {
  const [cards, setCards] = useState(
    [
      {
        id: 'tomberry',
        src: "tomberry.jpg",
        },
      {
        id: 'mog',
        src: "mog.jpg",
      },
      {
        id: 'chocobo',
        src: "chocobo.jpg"
      }
    ]);

  const [clickedCards, setClickedCards] = useState([]);

  const getClickedCard = (id) => {
    if (clickedCards.includes(id)) {
      console.log('You lose');
    } else {
      setClickedCards([...clickedCards, id]);
      randomizeCards(cards);
      // score +1
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

  return (
    <div className="cards-display">
      <Card src={cards[0].src} id={cards[0].id} callbackFromParent={getClickedCard} />
      <Card src={cards[1].src} id={cards[1].id} callbackFromParent={getClickedCard} />
      <Card src={cards[2].src} id={cards[2].id} callbackFromParent={getClickedCard} />

      <ul>

      </ul>
    </div>
  );
}