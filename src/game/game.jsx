import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GetInitialGameState } from "./constants/util-constants";
import { Gauges } from "./ui/gauges";
import { ActionBar } from "./ui/action-bar";
import { Scenario } from "./ui/scenario";
import { rand } from "../util";
import { SCENARIOS } from "./constants/scenarios";

// const INITIAL_SCENARIOS = [SCENARIOS[SCENARIOS.length - 1]];
const INITIAL_SCENARIOS = [SCENARIOS[15]];
export const Game = (props) => {
  const [gameState, setGameState] = useState(GetInitialGameState());
  const [gameOver, setGameOver] = useState(false);
  const [scenarioQueue, setScenarioQueue] = useState(INITIAL_SCENARIOS);
  const [completed_y, setCompleted_y] = useState([]); // array of scenario ids:  [5. 2]
  const [completed_n, setCompleted_n] = useState([]); // array of scenario ids:  [4. 7]
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
      {currentScenario.onYes.map((effect, index) => (
        <React.Fragment key={index}>{effect.render()}</React.Fragment>
      ))}
    </div>
  );
  const noPreview = (
    <div className="preview-effects-no">
      {currentScenario.onNo.map((effect, index) => (
        <React.Fragment key={index}>{effect.render()}</React.Fragment>
      ))}
    </div>
  );

  const addToScenarioHistory = (scenarioId, result) => {
    if (!!result) setCompleted_y([...completed_y, scenarioId]);
    else setCompleted_n([...completed_n, scenarioId]);
  };

  const advanceScenario = (result) => {
    const currScenario = scenarioQueue[0];
    const updatedScenarioQueue = scenarioQueue.slice(1).filter((x) => !!x);
    if (!updatedScenarioQueue[0])
      updatedScenarioQueue[0] = spawnScenario(currScenario.id, result);
    setScenarioQueue(updatedScenarioQueue);
  };

  const spawnScenario = (currScenarioId, result) => {
    const _completed_y = !!result
      ? [...completed_y, currScenarioId]
      : completed_y;
    const _completed_n = !result
      ? [...completed_n, currScenarioId]
      : completed_n;
    console.log({ _completed_y, _completed_n });
    const conditionState = {
      gs: gameState,
      completed_y: _completed_y,
      completed_n: _completed_n,
    };
    let highestPriority = 0;
    const eligibleScenarios = SCENARIOS.filter((scenario) => {
      let isValid = true;
      const isRepeat = [..._completed_y, ..._completed_n].includes(scenario.id);
      if (isRepeat && !scenario.repeatable) isValid = false;
      else if (isValid && !!scenario.conditions) {
        const conditionResults = scenario.conditions.map((c) =>
          c(conditionState)
        );
        isValid = !conditionResults.includes(false);
        if (scenario.id === 18) console.log({ isValid });
      }
      const priority = scenario.priority || 2;
      if (isValid && priority > highestPriority) highestPriority = priority;
      return isValid;
    });
    const priorityScenarios = eligibleScenarios.filter(
      (scenario) => (scenario.priority || 2) === highestPriority
    );

    const scenarioIndex = rand(0, priorityScenarios.length);
    return priorityScenarios[scenarioIndex];
  };

  const onYes = () => {
    let updateData = {};
    currentScenario.onYes.forEach((e) => {
      updateData = { ...updateData, ...e.effect(gameState) };
    });
    updateGameState(updateData);
    addToScenarioHistory(currentScenario.id, true);
    advanceScenario(true);
  };

  const onNo = () => {
    let updateData = {};
    currentScenario.onNo.forEach((e) => {
      updateData = { ...updateData, ...e.effect(gameState) };
    });
    updateGameState(updateData);
    addToScenarioHistory(currentScenario.id, false);
    advanceScenario(false);
  };

  // console.log(completedScenarios);
  return (
    <>
      <ActionBar />
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
        <a href="https://github.com/rpdobson123" className="footer">
          Game by Richard Dobson
        </a>
      </div>
    </>
  );
};
