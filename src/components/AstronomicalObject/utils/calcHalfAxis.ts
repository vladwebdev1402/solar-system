export const calcHalfAxis = (p: number, e: number) => {
  const focus = p * e;
  const xRadius = p + focus;
  const yRadius = p * Math.sqrt((1 - e) ^ 2);
  return { xRadius, yRadius };
};
