import React, { useState } from "react";

export default function Players({ initialName, symbol , isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClik() {
    setIsEditing((editing) => !isEditing);
  }

    function handleChange (e) {
        setPlayerName(e.target.value)
    }

  let editable = <span className="player-name"> {playerName}</span>;

  if (isEditing) {
    editable  = <input type="text" required value={playerName} onChange={handleChange}  />;
  }

  return (
    <li className={isActive ? 'active' : undefined } >
      <span className="player">
        {editable }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClik}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}
