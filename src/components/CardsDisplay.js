import React, { useState, useEffect } from "react";
import Card from "./Card";
import { click } from "@testing-library/user-event/dist/click";

export default function CardsDisplay () {
  const [cards, setCards] = useState(
    {
      tomberry: {
        id: 'tomberry',
        src: "tomberry.jpg",
        },
      mog: {
        id: 'mog',
        src: "mog.jpg",
      },
      chocobo: {
        id: 'chocobo',
        src: "chocobo.jpg"
      }
  });

  const [clickedCards, setClickedCards] = useState([]);

  const getClickedCard = (id) => {
    if (clickedCards.includes(id)) {
      console.log('You lose');
    } else {
      setClickedCards([...clickedCards, id]);
      // score +1
      console.log(`Add ${id} to clickedCards`);
    }
  };

  return (
    <div className="cards-display">
      <Card src={cards.chocobo.src} id={cards.chocobo.id} callbackFromParent={getClickedCard} />
      <Card src={cards.tomberry.src} id={cards.tomberry.id} callbackFromParent={getClickedCard} />
      <Card src={cards.mog.src} id={cards.mog.id} callbackFromParent={getClickedCard} />

      <ul>

      </ul>
    </div>
  );
}