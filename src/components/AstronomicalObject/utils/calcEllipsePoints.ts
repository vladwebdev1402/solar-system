import { IOrbite } from '@/shared/types';
import { calcHalfAxis } from './calcHalfAxis';

export const calcEllipsePoints = (orbite: IOrbite): number[] => {
  const {e, p, shiftX = 0, shiftZ = 0} = orbite;
  const SHIFT = Math.PI / 32;
  const { xRadius, yRadius } = calcHalfAxis(p, e);
  let angle = 0;
  const points: number[] = [];

  while (angle <= Math.PI * 2) {
    const x = Math.cos(angle) * xRadius + shiftX;
    const z = Math.sin(angle) * yRadius + shiftZ;
    points.push(x, 0, z);
    angle += SHIFT;
  }

  return points;
};
