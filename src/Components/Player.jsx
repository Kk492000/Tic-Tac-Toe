import React, { useEffect, useRef, useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };
  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  let EditablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    EditablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        ref={inputRef}
        aria-label={`Edit player name for ${playerName}`}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {EditablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button
        onClick={handleEditClick}
        onKeyUp={(e) => {
          console.log("Key pressed:", e);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
