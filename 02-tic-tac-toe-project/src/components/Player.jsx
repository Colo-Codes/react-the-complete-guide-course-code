import { useState } from "react";

export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevIsEditing = !prevIsEditing));
  };

  const changeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  const nameElement = isEditing ? (
    <input
      type="text"
      id="player-name"
      value={playerName}
      autoFocus
      onChange={changeHandler}
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li>
      <span className="player">
        {nameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
