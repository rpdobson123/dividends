import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { INITIAL_GAME_STATE, SCENARIOS } from "./util-constants";
import { Gauges } from "./ui/gauges";
import { Scenario } from "./scenario";
export const Game = (props) => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [preview, setPreview] = useState(null); // null, 'yes', or 'no'

  const updateGameState = (update) => {
    const keys = Object.keys(update);
    const updatedGameState = { ...gameState };
    keys.forEach((key) => {
      updatedGameState[key] = update[key];
    });
    setGameState(updatedGameState);
  };

  useEffect(() => {
    const initialScenarios = [SCENARIOS[0]];
    updateGameState({ scenarioQueue: initialScenarios, scenarioIndex: 0 });
  }, []);

  useEffect(() => {
    const nextScenario = gameState.scenarioQueue[gameState.scenarioIndex];
    if (!nextScenario) return;
    const newStateOnYes =
      nextScenario.onYes && nextScenario.onYes({ ...gameState });
    const newStateOnNo =
      nextScenario.onNo && nextScenario.onNo({ ...gameState });
    updateGameState({ stateOnYes: newStateOnYes, stateOnNo: newStateOnNo });
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
