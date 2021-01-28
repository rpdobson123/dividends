import React from "react";
import { Character } from "./character";

export const Scenario = (props) => {
  const { scenario } = props;
  if (!scenario) return "";
  const { character, text } = scenario;
  return (
    <div className="game-ui-scenario-container">
      {character && <Character character={character} />}
      {text && (
        <>
          <div className="scenario-prompt-text-marker" />
          <div className="scenario-prompt-text">{text}</div>
        </>
      )}
    </div>
  );
};
