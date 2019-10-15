import { colorCode, COLORS } from "./../resistor-color/resistor-color.js";

export const value = arr => {
  colorCode(arr[0]);
  console.log(colorCode(arr[0]));

  //   parseInt(
  //     arr
  //       .map(color => COLORS.indexOf(color))
  //       .slice(0, 2)
  //       .join("")
  //   );
};
