export const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
