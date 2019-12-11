export const toRoman = (number) => {
  // let romans = ["I", "V", "X", "L", "C", "D", "M"]
  // Create conversion array dec to roman
  const conversion = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1}
  // convert number to array
  let num = number.toString().split()
  //  count the number of digits
  // let len = num.length
  //  convert each number to roman right to left
  for (let d of num){
    for (let i =0; i< d;i++){
      return conversion["I"]
  }
  }
 

  //  track the result
  console.log(num.length)
};
