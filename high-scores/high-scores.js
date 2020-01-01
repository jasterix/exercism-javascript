//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.input = input
  }

  get scores() {
    return this.input
  }

  get latest() {
    let scores = this.input
    return scores[scores.length-1]
    console.log(this.input.length-1)

  }

  get personalBest() {

  }

  get personalTopThree() {

  }
}
