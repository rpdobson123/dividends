import React from "react";
import Draggable from "react-draggable";
import { FaTimes } from "react-icons/fa";
import { CHARACTERS } from "../constants/scenarios";
export const Roster = (props) => {
  //   const { employees } = props;
  const employeeIds = [1, 2, 3, 4, 5];
  const characters = Object.keys(CHARACTERS).map((key) => CHARACTERS[key]);
  return (
    <Draggable bounds="parent">
      <div className="employee-roster-container">
        <div className="employee-roster-header">
          <span>Your Company Roster</span>
          <FaTimes
            className="employee-roster-close-button"
            onClick={props.onClose}
          />
        </div>
        {characters
          .filter((character) => employeeIds.includes(character.id))
          .map((character) => (
            <div
              key={character.id}
              className={`employee-roster-entry employee-${character.id}`}
            >
              <img
                width="50px"
                alt="Character portrait"
                src={character.image}
              />
              <span className="employee-roster-character-name">
                Name: <b>{character.name}</b>
              </span>
              <span className="employee-roster-character-title">
                Title: {character.title}
              </span>
            </div>
          ))}
      </div>
    </Draggable>
  );
};
