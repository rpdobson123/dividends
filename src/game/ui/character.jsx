import React, { useState, useEffect } from "react";

export const Character = (props) => {
  const { character } = props;
  if (!character) return "";
  const { name, image } = character;
  return (
    <div className={`character-container`}>
      <div className="character-container-image">
        <img src={image} />
      </div>
      <div className="character-container-name">{name}</div>
    </div>
  );
};
