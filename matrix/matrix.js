export class Matrix {
  constructor(string) {
    // invokes the setter
    self.row = []
    self.matrix = (string.split(" ").join(",").split("\n"))
    
  }

  get rows() {
    for(let i of self.matrix){
      row.push(i.split(","))
    }
    console.log(self.row)
    return self.row
  }

  get columns() {

  }
}
