import React, { useState, useEffect } from "react";
import { Gauge } from "./gauge";
import { FaUsers, FaCode, FaBeer, FaMoneyBill } from "react-icons/fa";

export const Gauges = (props) => {
  const { preview, gameState } = props;
  const { cust, invest, dev, morale, stateOnYes, stateOnNo } = gameState;
  console.log(stateOnYes);
  return (
    <div className={`game-ui-gauges ${preview ? preview : ""}`}>
      <Gauge label="consumer" current={cust} icon={<FaUsers />} />
      <Gauge label="investor" current={invest} icon={<FaMoneyBill />} />
      <Gauge label="development" current={dev} icon={<FaCode />} />
      <Gauge label="morale" current={morale} icon={<FaBeer />} />
    </div>
  );
};
