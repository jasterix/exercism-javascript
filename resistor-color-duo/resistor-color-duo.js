import { colorCode, COLORS } from "./../resistor-color/resistor-color.js";

export const value = arr =>
  parseInt(
    arr
      .map(color => COLORS.indexOf(color))
      .slice(0, 2)
      .join("")
  );
