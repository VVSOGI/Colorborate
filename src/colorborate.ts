import colors from "./colors";
import { MatchedColor } from "./types";

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export function colorborate(): MatchedColor {
  const match = getRandomNumber(Object.keys(colors).length);
  return colors[match];
}
