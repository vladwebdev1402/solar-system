import { IAstronomicalObject } from '@/shared/types';

export const mockAstronomicalObject: IAstronomicalObject[] = [
  {
    id: 0,
    name: 'Солнце',
    radiusOnbject: 5,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0,
    orbite: {
      angleX: 0,
      e: 0,
      p: 0,
    },
    circleShift: 0,
  },
  {
    id: 1,
    name: 'Меркурий',
    radiusOnbject: 1,
    rotateSpeed: 0.015,
    rotateAroundCenterSpeed: 0.05,
    orbite: {
      angleX: 7.005,
      p: 38.7,
      e: 0.2056,
    },
    circleShift: 23,
  },
  {
    id: 2,
    name: 'Венера',
    radiusOnbject: 1.9,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.09,
    orbite: {
      angleX: 3.375,
      p: 72.3,
      e: 0.0068,
    },
    circleShift: 30,
  },
  {
    id: 3,
    name: 'Земля',
    radiusOnbject: 2,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.1,
    orbite: {
      angleX: 0.002,
      p: 100,
      e: 0.0167,
    },
    circleShift: 0,
  },
  {
    id: 4,
    name: 'Марс',
    radiusOnbject: 1.7,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.05,
    orbite: {
      angleX: 1.850,
      p: 152,
      e: 0.093,
    },
    circleShift: 230,
  },
  {
    id: 10,
    name: 'Плутон',
    radiusOnbject: 0.3,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.05,
    orbite: {
      angleX: 17.165,
      p: 394,
      e: 0.248,
    },
    circleShift: 230,
  },
];
