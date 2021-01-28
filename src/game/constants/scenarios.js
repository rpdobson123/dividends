import IMG_HR from "../../assets/hr.png";
import IMG_DEV from "../../assets/lead-dev.png";
import IMG_INVESTOR from "../../assets/investor.png";
import IMG_MARKETING from "../../assets/marketing.png";
import IMG_DESIGNER from "../../assets/design.png";
import { EFFECTS } from "./effects";

export const CHARACTERS = {
  C_DEV: { id: 1, name: "Dave Greyber - Systems Engineer", image: IMG_DEV },
  C_MARKETING: {
    id: 2,
    name: "Bobby Sails - Marketing",
    image: IMG_MARKETING,
  },
  C_INVESTOR: { id: 3, name: "Kate Munee - Investor", image: IMG_INVESTOR },
  C_HR: { id: 4, name: "Tim Morel - HR", image: IMG_HR },
  C_DESIGNER: {
    id: 5,
    name: "Bree Instorm - Game Designer",
    image: IMG_DESIGNER,
  },
};

export const SCENARIOS = [
  {
    id: 1,
    character: CHARACTERS.C_DEV,
    text: `Our engine needs some TLC. The code is getting sloppier every day we sit idle`,
    onYes: [EFFECTS.DEV_UP_S, EFFECTS.CUS_UP_S, EFFECTS.INV_DOWN_S],
    onNo: [EFFECTS.DEV_DOWN_S],
  },
  {
    id: 2,
    character: CHARACTERS.C_HR,
    text: `I've seen a few employees walking around visibly upset. We should pay for a happy hour to try to lighten the mood.`,
    onYes: [EFFECTS.MOR_UP_S, EFFECTS.INV_DOWN_S],
    onNo: [EFFECTS.MOR_DOWN_S],
  },
  {
    id: 3,
    character: CHARACTERS.C_INVESTOR,
    text: `All I hear is 'blockchain'. Do we have blockchain? We need blockchain.`,
    onYes: [EFFECTS.INV_UP_M, EFFECTS.DEV_DOWN_M],
    onNo: [EFFECTS.INV_DOWN_S],
  },
  {
    id: 4,
    character: CHARACTERS.C_HR,
    text: `Are the devs keeping timecards? Kate wants to know where the money goes. Can you get them to log hours?`,
    onYes: [EFFECTS.INV_UP_M, EFFECTS.DEV_DOWN_S],
    onNo: [EFFECTS.MOR_UP_S, EFFECTS.INV_DOWN_S],
  },
  {
    id: 5,
    character: CHARACTERS.C_DESIGNER,
    text: `Want to hear our 'battlegrounds' pitch? We can reuse assets and drum up hype for the full game...`,
    onYes: [EFFECTS.CUS_UP_M, EFFECTS.INV_UP_S, EFFECTS.DEV_DOWN_M],
    onNo: [EFFECTS.DEV_UP_M, EFFECTS.MOR_DOWN_S],
  },
  {
    id: 6,
    character: CHARACTERS.C_DEV,
    text: `Next Monday is Leif Erikson day - are you *ACTUALLY* making everyone work?`,
    onYes: [EFFECTS.DEV_UP_M, EFFECTS.MOR_DOWN_M],
    onNo: [EFFECTS.MOR_UP_S, EFFECTS.DEV_DOWN_M],
  },
  {
    id: 7,
    character: CHARACTERS.C_DESIGNER,
    text: `Hey - want to do a holiday event? We were thinking about having all the enemies wear Santa hats and drop presents.`,
    onYes: [EFFECTS.CUS_UP_M, EFFECTS.DEV_DOWN_S],
    onNo: [EFFECTS.DEV_UP_S, EFFECTS.MOR_DOWN_S],
  },
  {
    id: 8,
    character: CHARACTERS.C_DESIGNER,
    text: `What if we got Alan Wash to voice a character instead of the agency guys? People would go nuts for that, but he's expensive.`,
    onYes: [EFFECTS.CUS_UP_M, EFFECTS.INV_DOWN_S],
    onNo: [],
  },
  {
    id: 9,
    character: CHARACTERS.C_DEV,
    text: `Bobby said "open beta in Q2". He's ignorant AND optimistic. Do I live here now? Am I allowed to go home at some point?`,
    onYes: [EFFECTS.CUS_UP_M, EFFECTS.MOR_DOWN_S],
    onNo: [EFFECTS.MOR_UP_M, EFFECTS.CUS_DOWN_M],
  },
  {
    id: 10,
    character: CHARACTERS.C_DEV,
    text: `We've got bugs. I know we want features, but we have bugs. Bugs before Features?`,
    onYes: [EFFECTS.DEV_UP_S],
    onNo: [EFFECTS.CUS_UP_S],
  },
  {
    id: 11,
    character: CHARACTERS.C_INVESTOR,
    text: `Are we still on track for open beta? I heard things are rough. Do we need to delay?`,
    onYes: [
      EFFECTS.DEV_UP_L,
      EFFECTS.MOR_UP_M,
      EFFECTS.CUS_DOWN_L,
      EFFECTS.INV_DOWN_M,
    ],
    onNo: [EFFECTS.DEV_DOWN_S, EFFECTS.INV_UP_S],
  },
  {
    id: 12,
    character: CHARACTERS.C_HR,
    text: `The developers keep calling our investors 'Jabroni'. It's probably bad if they know we're talking like that. Should I get them to stop saying "Jabroni"?`,
    onYes: [EFFECTS.INV_UP_S, EFFECTS.MOR_DOWN_S],
    onNo: [EFFECTS.MOR_UP_S, EFFECTS.INV_DOWN_S],
  },
  {
    id: 13,
    character: CHARACTERS.C_DESIGNER,
    text: `We had this idea for 'horse cape physics' - GameDonkey will probably put us in a video if we have horse cape physics, which is free PR. Can we make 'horse cape physics' happen?`,
    onYes: [EFFECTS.CUS_UP_M, EFFECTS.DEV_DOWN_S],
    onNo: [],
  },
  {
    id: 14,
    character: CHARACTERS.C_MARKETING,
    text: `We want to have a demo ready for the Nickel Arcade Expo. Can we crunch and get it done?`,
    onYes: [EFFECTS.CUS_UP_M, EFFECTS.MOR_DOWN_M],
    onNo: [EFFECTS.DEV_UP_S, EFFECTS.CUS_DOWN_S],
  },
  {
    id: 15,
    character: CHARACTERS.C_MARKETING,
    text: `There's a charity speedrun this week - I know we have stuff to do, but it'd be fun to go and we can at least wear branded shirts.`,
    onYes: [EFFECTS.CUS_UP_S, EFFECTS.MOR_UP_S],
    onNo: [EFFECTS.DEV_UP_M],
  },
  // {
  //   id: ,
  //   character: CHARACTERS.C_,
  //   text: ``,
  //   onYes: [EFFECTS.INV_UP_S],
  //   onNo: [EFFECTS.MOR_UP_S],
  // },
];
