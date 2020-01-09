export class HighScores {
  constructor(input) {
    this.input = input;
  }

  get scores() {
    return this.input;
  }

  get latest() {
    const scores = this.input;
    return scores[scores.length - 1];
  }

  get personalBest() {
    const scores = this.input;
    return Math.max(...scores);
  }

  get personalTopThree() {
    const scores = this.input;
    const reverse = [...scores].sort((a, b) => b - a);
    return reverse.splice(0, 3);
  }
}
