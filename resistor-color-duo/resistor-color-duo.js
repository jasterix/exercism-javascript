import { colorCode, COLORS } from "./../resistor-color/resistor-color.js";

export const value = arr => {
  let number = arr.map(color => {
    return colorCode(color);
  });
  console.log(number);
  //   parseInt(
  //     arr
  //       .map(color => COLORS.indexOf(color))
  //       .slice(0, 2)
  //       .join("")
  //   );
};
