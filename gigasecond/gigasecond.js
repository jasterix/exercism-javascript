const conversion = Math.pow(10, 12);
export const gigasecond = moment => {
  return new Date(moment.getTime() + conversion);
};
