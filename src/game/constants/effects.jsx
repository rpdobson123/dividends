import React from "react";
import { FaUsers, FaCode, FaBeer, FaMoneyBill } from "react-icons/fa";
const Code = () => <FaCode color="blue" />;
const Beer = () => <FaBeer color="yellow" />;
const Bill = () => <FaMoneyBill color="maroon" />;
const User = () => <FaUsers color="green" />;

const updateGS = (gs, key, shift) => {
  let updatedValue = gs[key] + shift;
  if (updatedValue > 100) updatedValue = 100;
  if (updatedValue < 0) updatedValue = 0;
  return { [key]: updatedValue };
};

/* prettier-ignore */
export const EFFECTS = {
  DEV_UP_S: { effect:(gs) => updateGS(gs, "dev", 5), render: () => <span><Code/>+</span>},
  DEV_UP_M: { effect:(gs) => updateGS(gs, "dev", 10), render: () => <span><Code/>++</span>},
  DEV_UP_L: { effect:(gs) => updateGS(gs, "dev", 15), render: () => <span><Code/>+++</span>},

  INV_UP_S: { effect:(gs) => updateGS(gs, "inv", 5), render: () => <span><Bill/>+</span>},
  INV_UP_M: { effect:(gs) => updateGS(gs, "inv", 10), render: () => <span><Bill/>++</span>},
  INV_UP_L: { effect:(gs) => updateGS(gs, "inv", 15), render: () => <span><Bill/>+++</span>},

  CUS_UP_S: { effect:(gs) => updateGS(gs, "cus", 5), render: () => <span><User/>+</span>},
  CUS_UP_M: { effect:(gs) => updateGS(gs, "cus", 10), render: () => <span><User/>++</span>},
  CUS_UP_L: { effect:(gs) => updateGS(gs, "cus", 15), render: () => <span><User/>+++</span>},

  MOR_UP_S: { effect:(gs) => updateGS(gs, "mor", 5), render: () => <span><Beer/>+</span>},
  MOR_UP_M: { effect:(gs) => updateGS(gs, "mor", 10), render: () => <span><Beer/>++</span>},
  MOR_UP_L: { effect:(gs) => updateGS(gs, "mor", 15), render: () => <span><Beer/>+++</span>},

  DEV_DOWN_S: { effect:(gs) => updateGS(gs, "dev", -5), render: () => <span><Code/>-</span>},
  DEV_DOWN_M: { effect:(gs) => updateGS(gs, "dev", -10), render: () => <span><Code/>--</span>},
  DEV_DOWN_L: { effect:(gs) => updateGS(gs, "dev", -15), render: () => <span><Code/>---</span>},

  INV_DOWN_S: { effect:(gs) => updateGS(gs, "inv", -5), render: () => <span><Bill/>-</span>},
  INV_DOWN_M: { effect:(gs) => updateGS(gs, "inv", -10), render: () => <span><Bill/>--</span>},
  INV_DOWN_L: { effect:(gs) => updateGS(gs, "inv", -15), render: () => <span><Bill/>---</span>},

  CUS_DOWN_S: { effect:(gs) => updateGS(gs, "cus", -5), render: () => <span><User/>-</span>},
  CUS_DOWN_M: { effect:(gs) => updateGS(gs, "cus", -10), render: () => <span><User/>--</span>},
  CUS_DOWN_L: { effect:(gs) => updateGS(gs, "cus", -15), render: () => <span><User/>---</span>},

  MOR_DOWN_S: { effect:(gs) => updateGS(gs, "mor", -5), render: () => <span><Beer/>-</span>},
  MOR_DOWN_M: { effect:(gs) => updateGS(gs, "mor", -10), render: () => <span><Beer/>--</span>},
  MOR_DOWN_L: { effect:(gs) => updateGS(gs, "mor", -15), render: () => <span><Beer/>---</span>},
};

export const CONDITIONS = {
  MOR_GT: (val) => ({ gs }) => val <= gs.mor,
  MOR_LT: (val) => ({ gs }) => val >= gs.mor,

  DEV_GT: (val) => ({ gs }) => val <= gs.dev,
  DEV_LT: (val) => ({ gs }) => val >= gs.dev,

  INV_GT: (val) => ({ gs }) => val <= gs.inv,
  INV_LT: (val) => ({ gs }) => val >= gs.inv,

  CUS_GT: (val) => ({ gs }) => val <= gs.cus,
  CUS_LT: (val) => ({ gs }) => val >= gs.cus,

  COMPLETED: (id) => ({ completed_y, completed_n }) =>
    [...completed_y, ...completed_n].includes(id),

  COMPLETED_Y: (id) => ({ completed_y }) => completed_y.includes(id),

  COMPLETED_N: (id) => ({ completed_n }) => completed_n.includes(id),
};
