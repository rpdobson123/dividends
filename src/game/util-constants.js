import IMG_HR from "../assets/hr.png";
import IMG_DEV from "../assets/lead-dev.png";
import IMG_INVESTOR from "../assets/investor.png";
import IMG_MARKETING from "../assets/marketing.png";

export const CHARACTERS = {
  C_DEV: { id: 1, name: "Dave Greyberd", image: IMG_DEV },
  C_MARKETING: { id: 2, name: "Bobby Flocharz", image: IMG_MARKETING },
  C_INVESTOR: { id: 3, name: "Kate Munee", image: IMG_INVESTOR },
  C_HR: { id: 4, name: "Tim Morel", image: IMG_HR },
  // C_CONSUMER_ADVOCATE: { id: 5, name: "Rhea Vuez" },
};

const updateGS = (gs, key, shift) => ({ ...gs, [key]: gs[key] + shift });

export const SCENARIOS = [
  {
    id: 0,
    character: CHARACTERS.C_DEV,
    text: `Marketing is already making promises. Can we get MVP before we get too crazy?`,
    onYes: (gs) => updateGS(gs, "dev", 5),
    onNo: (gs) => updateGS(gs, "cust", -5),
  },
];

export const INITIAL_GAME_STATE = {
  cust: 80,
  invest: 80,
  dev: 80,
  morale: 80,

  cash: 1000,
  scenarioIndex: 0,
  scenarioQueue: [],
};
