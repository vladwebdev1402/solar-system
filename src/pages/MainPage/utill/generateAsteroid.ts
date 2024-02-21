import { IAstronomicalObject } from '@/shared/types';

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min ) + min;
};

export const generateAsteroid = (): IAstronomicalObject => {
  return {
    name: '',
    orbite: {
      p: getRandomNumber(240, 260),
      e: getRandomNumber(0.3, 0.6),
      angleX: 0,
      shiftY: getRandomNumber(-30, 30),
      shiftZ: getRandomNumber(-15, 15),
    },
    circleShift: getRandomNumber(0, 360),
    radiusOnbject: getRandomNumber(0.4, 0.7),
    rotateAroundCenterSpeed: getRandomNumber(0.05, -0.05) ,
    rotateSpeed: 0,
  } as IAstronomicalObject;
};
