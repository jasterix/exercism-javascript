export class Matrix {
  constructor(string) {
    // invokes the setter
    self.matrix = string.split("\n")

  }

  get rows() {
    console.log(self.matrix)
    return self.matrix
  }

  get columns() {

  }
}
