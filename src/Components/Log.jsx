import React from "react";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((logs, index) => {
        return (
          <>
            <li key={index}>
              {logs.player}:<span>row:{logs.square.row}</span>
              <span>col:{logs.square.row}</span>
            </li>
          </>
        );
      })}
    </ol>
  );
};

export default Log;
