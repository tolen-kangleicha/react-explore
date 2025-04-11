import React from "react";
import "../styles/ScoreBoard.css";

function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <h1>Memory Game</h1>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

export default Scoreboard;
