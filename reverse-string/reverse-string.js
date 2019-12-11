// Initial solution
export const reverseString = (string, answer = "") => {
  for (let i = string.length; i >= 0; i--){
    answer+=string.charAt(i)
  }
  return answer
};
