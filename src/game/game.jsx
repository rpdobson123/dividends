import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GetInitialGameState } from "./constants/util-constants";
import { Gauges } from "./ui/gauges";
import { Scenario } from "./ui/scenario";
import { rand } from "../util";
import { SCENARIOS } from "./constants/scenarios";

const INITIAL_SCENARIOS = [SCENARIOS[SCENARIOS.length - 1]];
export const Game = (props) => {
  const [gameState, setGameState] = useState(GetInitialGameState());
  const [gameOver, setGameOver] = useState(false);
  const [scenarioQueue, setScenarioQueue] = useState(INITIAL_SCENARIOS);
  const [preview, setPreview] = useState(null); // null, 'yes', or 'no'

  const updateGameState = (update) => {
    const keys = Object.keys(update);
    const updatedGameState = { ...gameState };
    keys.forEach((key) => {
      updatedGameState[key] = update[key];
      if (updatedGameState[key] === 0) setGameOver(true);
    });
    setGameState(updatedGameState);
  };

  const currentScenario = scenarioQueue[0];
  if (!currentScenario) return "Oops. Something went wrong.";
  if (gameOver) return "Game Over.";

  const yesPreview = (
    <div className="preview-effects-yes">
      {currentScenario.onYes.map((effect) => effect.render())}
    </div>
  );
  const noPreview = (
    <div className="preview-effects-no">
      {currentScenario.onNo.map((effect) => effect.render())}
    </div>
  );

  const advanceScenario = () => {
    const updatedScenarioQueue = scenarioQueue.slice(1).filter((x) => !!x);
    if (!updatedScenarioQueue[0]) updatedScenarioQueue[0] = spawnScenario();
    setScenarioQueue(updatedScenarioQueue);
  };

  const spawnScenario = () => {
    const scenarioIndex = rand(1, SCENARIOS.length);
    return SCENARIOS[scenarioIndex];
  };

  const onYes = () => {
    let updateData = {};
    currentScenario.onYes.forEach((e) => {
      updateData = { ...updateData, ...e.effect(gameState) };
    });
    updateGameState(updateData);
    advanceScenario();
  };

  const onNo = () => {
    let updateData = {};
    currentScenario.onNo.forEach((e) => {
      updateData = { ...updateData, ...e.effect(gameState) };
    });
    updateGameState(updateData);
    advanceScenario();
  };

  return (
    <div className="game-container">
      <Scenario
        gameState={gameState}
        updateGameState={gameState}
        scenario={currentScenario}
      />
      <div className="button-container">
        <div className="yes-button-container">
          <div
            onMouseEnter={() => setPreview("yes")}
            onMouseLeave={() => setPreview(null)}
            onClick={onYes}
            className="action-button yes-button"
          >
            <FaThumbsUp />
          </div>
          {yesPreview}
        </div>

        <div className="no-button-container">
          <div
            onMouseEnter={() => setPreview("no")}
            onMouseLeave={() => setPreview(null)}
            onClick={onNo}
            className="action-button no-button"
          >
            <FaThumbsDown />
          </div>
          {noPreview}
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
