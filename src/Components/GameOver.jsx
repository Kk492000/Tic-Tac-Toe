import React from "react";

const GameOver = ({ winner, over, hasDraw }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {hasDraw && <p>Match Drawn!</p>}
      <p>
        <button onClick={over}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
