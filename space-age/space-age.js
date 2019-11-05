export const age = (planet, startingNumberOfSeconds) => {
  const secondsInEarthYear = 31557600
  const conversion = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.88081,
  jupiter: 11.8626,
  saturn: 29.44749,
  uranus: 84.0168,
  neptune: 164.79132
  }

  return Math.round(
    startingNumberOfSeconds/secondsInEarthYear
    /conversion[planet]
    * 100) / 100
};
