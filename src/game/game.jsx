import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { INITIAL_GAME_STATE, SCENARIOS } from "./util-constants";
import { Gauges } from "./ui/gauges";
import { Scenario } from "./scenario";
export const Game = (props) => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [preview, setPreview] = useState(null); // null, 'yes', or 'no'

  function updateGameState(key, value) {
    const updatedGameState = { ...gameState, [key]: value };
    setGameState(updatedGameState);
  }

  useEffect(() => {
    console.log("mounting game...");
    updateGameState("scenarioQueue", [SCENARIOS[0]]);
    updateGameState("scenarioIndex", 0);
  }, []);

  useEffect(() => {
    console.log({ gameState });
    const nextScenario = gameState.scenarioQueue[gameState.scenarioIndex];
    console.log(nextScenario, gameState);
    if (!nextScenario) return;
    const stateOnYes = nextScenario.onYes(gameState);
    const stateOnNo = nextScenario.onNo(gameState);
    updateGameState("stateOnYes", stateOnYes);
    updateGameState("stateOnNo", stateOnNo);
  }, [gameState.scenarioIndex]);

  const { scenarioIndex, scenarioQueue } = gameState;
  const currentScenario = scenarioQueue[scenarioIndex];

  return (
    <div className="game-container">
      <Scenario
        gameState={gameState}
        updateGameState={gameState}
        scenario={currentScenario}
      />
      <div className="button-container">
        <div
          onMouseEnter={() => setPreview("yes")}
          onMouseLeave={() => setPreview(null)}
          className="action-button yes-button"
        >
          <FaThumbsUp />
        </div>
        <div
          onMouseEnter={() => setPreview("no")}
          onMouseLeave={() => setPreview(null)}
          className="action-button no-button"
        >
          <FaThumbsDown />
        </div>
      </div>
      <Gauges
        preview={preview}
        gameState={gameState}
        updateGameState={updateGameState}
      />
    </div>
  );
};
