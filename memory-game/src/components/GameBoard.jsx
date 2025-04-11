import React, { useState, useEffect } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import "../styles/GameBoard.css";

function GameBoard() {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    const data = await res.json();
    const cardData = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          name: pokemon.name,
          image: details.sprites.front_default,
        };
      })
    );
    setCards(shuffle(cardData));
  };

  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleCardClick = (name) => {
    if (clicked.includes(name)) {
      setScore(0);
      setClicked([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setBestScore(Math.max(bestScore, newScore));
      setClicked([...clicked, name]);
    }
    setCards(shuffle(cards));
  };

  return (
    <div>
      <ScoreBoard score={score} bestScore={bestScore} />
      <div className="gameboard">
        {cards.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            image={card.image}
            onClick={() => handleCardClick(card.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
