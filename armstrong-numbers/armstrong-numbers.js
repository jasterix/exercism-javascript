//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (number) => {
  let num = Array.from([number].toString(), x => parseInt(x))
  let digits = num.length
  let i;
  let result = 0
  for (i of num) {
      result += i**digits
  }
  return number === result
};
