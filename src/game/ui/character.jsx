import React, { useState, useEffect } from "react";

export const Character = (props) => {
  const { character } = props;
  if (!character) return "";
  const { name } = character;
  return (
    <div className={`character-container`}>
      <div className="character-container-image">
        <img src={character.image} />
      </div>
      <div className="character-container-name">{character.name}</div>
    </div>
  );
};
