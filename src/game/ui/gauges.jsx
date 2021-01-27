import React from "react";
import { Gauge } from "./gauge";
import { FaUsers, FaCode, FaBeer, FaMoneyBill } from "react-icons/fa";

export const Gauges = (props) => {
  const { preview, gameState } = props;
  const { cus, inv, dev, mor, stateOnYes, stateOnNo } = gameState;
  // console.log(stateOnYes, stateOnNo);
  return (
    <div className={`game-ui-gauges ${preview ? preview : ""}`}>
      <Gauge label="consumer" current={cus} icon={<FaUsers />} />
      <Gauge label="investor" current={inv} icon={<FaMoneyBill />} />
      <Gauge label="development" current={dev} icon={<FaCode />} />
      <Gauge label="morale" current={mor} icon={<FaBeer />} />
    </div>
  );
};
