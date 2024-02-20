import { IAstronomicalObject } from '@/shared/types';

const getRandomNumber = (min: number, max: number) =>
  Math.random() * (max - min + 1) + min;

export const generateAsteroid = (): IAstronomicalObject => {
  return {
    name: '',
    orbite: {
      p: getRandomNumber(220, 260),
      e: 0.5,
      angleX: 0,
      shiftY: getRandomNumber(-25, 25),
      shiftZ: getRandomNumber(-15, 15),
    },
    circleShift: getRandomNumber(0, 360),
    radiusOnbject: getRandomNumber(0.1, 0.4),
    rotateAroundCenterSpeed: getRandomNumber(1, 2) > 1.5 ? 0.05 : -0.05,
    rotateSpeed: 0,
  } as IAstronomicalObject;
};
