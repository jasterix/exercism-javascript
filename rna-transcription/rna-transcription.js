// Humm... Well, that's not totally it : in fact, try to avoid mutating external data inside the map body this is not a good practice!

// Here you have the right beginning, but rather than using a temporary variable (result), just get the result from the .map operation and as I have indicated, it is an array, so you have to join it to return it!

const transcription = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

export const toRna = string => {
  return [...string]
    .map(letter => {
      return transcription[letter];
    })
    .join("");
};
