export class Matrix {
  constructor(string) {
    // invokes the setter
    self.row = string.split("\n")
    for (let i of row) {
      console.log(i.split(" "))
    }

  }

  get rows() {
    // console.log(self.matrix)
    return self.row
  }

  get columns() {

  }
}
