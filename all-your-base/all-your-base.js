
export const convert = (number, inbase, outbase) => {
// convert binary to base 10
let numLength = number.length-1
let arr = []
let inbases = [2, 3, 7, 10, 16, 73, 97]
let outbases = [2, 3, 7, 10, 16, 73, 97]

if (!inbases.includes(inbase)) {
  throw new Error('Wrong input base')
}

if (!outbases.includes(outbase)) {
  throw new Error('Wrong output base')
}

if (number[0]===0 || number.length === 0 || (inbase===2 && number.some(x => 1 < x || x < 0))) {
  console.log(inbase===2 && number.some(x => 1 < x || x < 0), number)
  throw new Error("Input has wrong format")
}


  for (let d = 0; d <= numLength; d++){
    for (let e = numLength; e >= numLength; e--){
      arr.push(number[d]*(2**(e-d)))
    }
  }
  let answer = arr.reduce((total, x)=> total+x).toString().split("")
  return answer.map(x=> +x)

}
