export const gigasecond = moment => {
  let conversion = Math.pow(10, 12);
  return new Date(moment.getTime() + conversion);
};
