import { useState } from "react";

export default function Player({ name, symbol, isActivePlayer, setPlayers }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);

    if (isEditing) {
      setPlayers((prevPlayers) => {
        return { ...prevPlayers, [symbol]: playerName };
      });
    }
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
    <li className={isActivePlayer ? "active" : null}>
      <span className="player">
        {nameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
