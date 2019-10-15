import { colorCode, COLORS } from "./../resistor-color/resistor-color.js";

export const value = arr => {
  let ans = arr.map(color => colorCode(color));

  return parseInt(`${ans[0]}${ans[1]}`);
};
