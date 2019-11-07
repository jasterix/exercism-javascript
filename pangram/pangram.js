export const isPangram = (sentence) => {
  let lower = sentence.toLowerCase()
  const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  if (lower){
  return [...lower].every(char => alph.includes(char))
}
return false
};
