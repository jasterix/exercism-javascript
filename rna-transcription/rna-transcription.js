// Moreover here, you can with only 1 map to get the solution (no need of the for loop and the Object.entries). Just note, that to cast a string to an array, you can use the spread operator : [...string] and to cast from an array to a string, you can use .join('').
const transcription = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}
let res = ""

export const toRna = string => {
  for (let char of string) {
    Object.entries(transcription).map(([key, value]) => {
      if (key === char) {
        res += value
      }
    })
  }
  return res
}

// export const toRna = string => {
//   for (let char of string) {
//     Object.entries(transcription).map(([key, value]) => {
//       if (key === char) {
//         res += value;
//       }
//     });
//   }
//   return res;
// };
