export class HighScores {
  constructor(input) {
    this.input = input;
  }

  get scores() {
    return this.input;
  }

  get latest() {
    let scores = this.input;
    return scores[scores.length - 1];
  }

  get personalBest() {
    let scores = this.input;
    return Math.max(...scores);
  }

  get personalTopThree() {
    let scores = this.input;
    let reverse = [...scores].sort((a, b) => b - a);
    return reverse.splice(0, 3);
  }
}
