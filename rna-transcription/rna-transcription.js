const transcription = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};
export const toRna = (string, res = "") => {
  for (let char of string) {
    Object.entries(transcription).map(([key, value]) => {
      if (key === char) {
        res += value;
      }
    });
  }
  return res;
};
