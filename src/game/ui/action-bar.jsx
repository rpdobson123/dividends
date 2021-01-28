import React, { useState } from "react";
import { FaAddressBook } from "react-icons/fa";
import { Roster } from "./roster";
export const ActionBar = (props) => {
  const [showRoster, setShowRoster] = useState(false);

  return (
    <div className="action-bar">
      <div onClick={() => setShowRoster(!showRoster)} className="roster-button">
        <FaAddressBook />
      </div>
      {showRoster && <Roster onClose={() => setShowRoster(false)} />}
    </div>
  );
};
