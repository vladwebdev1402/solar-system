import { calcHalfAxis } from './calcHalfAxis';

export const calcEllipsePoints = (p: number, e: number): number[] => {
  const SHIFT = Math.PI / 32;
  const { xRadius, yRadius } = calcHalfAxis(p, e);
  let angle = 0;
  const points: number[] = [];

  while (angle <= Math.PI * 2) {
    const x = Math.cos(angle) * xRadius;
    const z = Math.sin(angle) * yRadius;
    points.push(x, 0, z);
    angle += SHIFT;
  }

  return points;
};
