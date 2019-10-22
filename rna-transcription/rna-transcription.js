const transcription = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

export const toRna = string => {
  let result = "";
  [...string].map(letter => {
    result += transcription[letter];
  });
  return result;
};
